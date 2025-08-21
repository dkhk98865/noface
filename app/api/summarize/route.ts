import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { articleText, articleUrl } = await request.json();

    let finalArticleText = articleText;

    // If URL is provided, extract article content first
    if (articleUrl && articleUrl.trim()) {
      try {
        const extractedArticle = await extractArticleFromUrl(articleUrl);
        finalArticleText = extractedArticle.content;
        
        // Return both extracted content and script
        const script = await generateScript(finalArticleText);
        
        return NextResponse.json({ 
          script,
          extractedArticle: {
            title: extractedArticle.title,
            content: finalArticleText,
            url: articleUrl
          }
        });
      } catch (extractError) {
        console.error('Article extraction error:', extractError);
        return NextResponse.json(
          { error: 'URL에서 기사를 추출할 수 없습니다. 텍스트를 직접 붙여넣어주세요.' },
          { status: 400 }
        );
      }
    } else if (!articleText || articleText.trim().length === 0) {
      return NextResponse.json(
        { error: '기사 텍스트 또는 URL이 필요합니다.' },
        { status: 400 }
      );
    }

    // Generate script from the article text
    const script = await generateScript(finalArticleText);

    return NextResponse.json({ script });
  } catch (error) {
    console.error('Summarization error:', error);
    
    // More specific error messages
    if (error instanceof Error) {
      if (error.message.includes('스크립트 생성')) {
        return NextResponse.json(
          { error: '스크립트 생성 중 오류가 발생했습니다. 다시 시도해주세요.' },
          { status: 500 }
        );
      }
    }
    
    return NextResponse.json(
      { error: '스크립트 생성 중 오류가 발생했습니다. 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}

async function extractArticleFromUrl(url: string): Promise<{ title: string; content: string }> {
  try {
    // Fetch the HTML content
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.status}`);
    }

    const html = await response.text();

    // Simple HTML parsing for article extraction
    // In production, you'd use a library like @extractus/article-extractor
    const title = extractTitle(html);
    const content = extractContent(html);

    if (!content || content.length < 100) {
      throw new Error('Article content too short or could not be extracted');
    }

    return { title, content };
  } catch (error) {
    console.error('URL extraction error:', error);
    throw new Error(`Failed to extract article: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

function extractTitle(html: string): string {
  // Extract title from various HTML patterns
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i) ||
                    html.match(/<h1[^>]*>([^<]+)<\/h1>/i) ||
                    html.match(/<meta[^>]*property="og:title"[^>]*content="([^"]+)"/i);
  
  return titleMatch ? titleMatch[1].trim() : '제목 없음';
}

function extractContent(html: string): string {
  // Remove script and style tags
  let content = html.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
                    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                    .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '')
                    .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '')
                    .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '')
                    .replace(/<aside[^>]*>[\s\S]*?<\/aside>/gi, '');

  // Extract text from article-like containers
  const articleMatch = content.match(/<article[^>]*>([\s\S]*?)<\/article>/i) ||
                      content.match(/<div[^>]*class="[^"]*content[^"]*"[^>]*>([\s\S]*?)<\/div>/i) ||
                      content.match(/<div[^>]*class="[^"]*post[^"]*"[^>]*>([\s\S]*?)<\/div>/i) ||
                      content.match(/<div[^>]*class="[^"]*article[^"]*"[^>]*>([\s\S]*?)<\/div>/i);

  if (articleMatch) {
    content = articleMatch[1];
  }

  // Convert HTML to plain text
  content = content.replace(/<[^>]*>/g, ' ')  // Remove HTML tags
                   .replace(/\s+/g, ' ')        // Normalize whitespace
                   .replace(/&nbsp;/g, ' ')     // Replace HTML entities
                   .replace(/&amp;/g, '&')
                   .replace(/&lt;/g, '<')
                   .replace(/&gt;/g, '>')
                   .replace(/&quot;/g, '"')
                   .trim();

  return content;
}

async function generateScript(articleText: string): Promise<string> {
  try {
    // Check if we have OpenAI API key for real AI processing
    const openaiApiKey = process.env.OPENAI_API_KEY;
    
    if (openaiApiKey) {
      // Real AI processing with OpenAI
      const { OpenAI } = await import('openai');
      
      const openai = new OpenAI({
        apiKey: openaiApiKey,
      });

      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: `당신은 유튜브 쇼츠, 틱톡, 인스타그램 릴스용 60초 영상 스크립트를 작성하는 전문가입니다.

주어진 기사를 바탕으로 다음 요구사항을 만족하는 스크립트를 작성해주세요:

1. **훅 (0-3초)**: 시청자의 관심을 즉시 끄는 강력한 도입부
2. **메인 콘텐츠 (3-53초)**: 기사의 핵심 내용을 3-4개 포인트로 정리
3. **행동 유도 (53-60초)**: 댓글, 좋아요, 팔로우를 유도하는 마무리

스타일:
- 한국어로 자연스럽게 작성
- 구어체 사용 (존댓말, 반말 혼용 가능)
- 감탄사와 이모지 활용
- 시청자와 대화하는 듯한 친근한 톤

출력 형식:
🎬 60초 영상 스크립트

🪝 훅 (0-3초):
[강력한 도입부]

📝 메인 콘텐츠 (3-53초):
[기사 내용을 바탕으로 한 핵심 포인트들]

📢 행동 유도 (53-60초):
[참여 유도 메시지]

✨ 참여도 높이는 팁:
[구체적인 제작 팁들]`
          },
          {
            role: "user",
            content: `다음 기사를 바탕으로 60초 영상 스크립트를 작성해주세요:\n\n${articleText}`
          }
        ],
        max_tokens: 800,
        temperature: 0.8
      });

      return response.choices[0].message.content || "AI 스크립트 생성에 실패했습니다.";
    } else {
      // Fallback to enhanced mock for demo purposes
      return generateEnhancedMockScript(articleText);
    }
  } catch (error) {
    console.error('Script generation error:', error);
    
    // If AI fails, fallback to mock
    console.log('Falling back to mock script generation');
    return generateEnhancedMockScript(articleText);
  }
}

function generateEnhancedMockScript(articleText: string): string {
  // Enhanced mock that varies based on content
  const words = articleText.trim().split(/\s+/).slice(0, 10).join(' ');
  const contentLength = articleText.length;
  
  // Different templates based on content characteristics
  let template = '';
  
  if (contentLength > 1000) {
    template = `🎬 60초 영상 스크립트 (상세 분석)

🪝 훅 (0-3초):
"${words}... 이 기사를 읽고 정말 충격받았어요!"

📝 메인 콘텐츠 (3-53초):
"${words}..."에 관한 기사를 자세히 분석해보니:

• 핵심 포인트 1: [주요 내용 요약]
• 핵심 포인트 2: [중요한 데이터나 통계]
• 핵심 포인트 3: [실용적인 인사이트]

가장 놀라운 점은? [흥미로운 발견]

이건 정말 [주제]에 대한 우리의 관점을 완전히 바꿀 수 있을 것 같아요.

📢 행동 유도 (53-60초):
"여러분도 이런 경험이 있나요? 댓글로 공유해주시고 더 많은 인사이트를 원하시면 팔로우 잊지 마세요!"`;
  } else {
    template = `🎬 60초 영상 스크립트 (간단 요약)

🪝 훅 (0-3초):
"${words}... 이거 꼭 알아야 할 내용이에요!"

📝 메인 콘텐츠 (3-53초):
"${words}..."에 관한 핵심 내용을 정리해드릴게요:

• 포인트 1: [주요 메시지]
• 포인트 2: [중요한 이유]
• 포인트 3: [실용적 조언]

이건 정말 [주제]에 도움이 될 것 같아요.

📢 행동 유도 (53-60초):
"도움이 되셨나요? 댓글로 의견 남겨주시고 더 많은 팁을 원하시면 팔로우 잊지 마세요!"`;
  }

  return template + `

✨ 참여도 높이는 팁:
- 핵심 포인트에서 손짓 사용하기
- 관련 비주얼/그래픽 보여주기
- 카메라와 아이컨택 유지하기
- 에너지 있고 열정적으로 말하기

예상 낭독 시간: 58초
최적 플랫폼: 유튜브 쇼츠, 틱톡, 인스타그램 릴스`;
}
