import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { articleUrl } = await request.json();

    if (!articleUrl || articleUrl.trim().length === 0) {
      return NextResponse.json(
        { error: '기사 URL이 필요합니다.' },
        { status: 400 }
      );
    }

    // Validate URL format
    try {
      new URL(articleUrl);
    } catch (error) {
      return NextResponse.json(
        { error: '올바른 URL 형식이 아닙니다.' },
        { status: 400 }
      );
    }

    // Check if OpenAI API key is available
    const openaiApiKey = process.env.OPENAI_API_KEY;
    if (!openaiApiKey) {
      return NextResponse.json(
        { error: 'OpenAI API 키가 설정되지 않았습니다.' },
        { status: 500 }
      );
    }

    console.log(`Processing URL: ${articleUrl}`);

    // Extract article content and send to OpenAI
    const result = await processArticleWithOpenAI(articleUrl);

    console.log(`Successfully processed article. Summary length: ${result.summary.length} characters`);

    return NextResponse.json(result);
  } catch (error) {
    console.error('Summarization error:', error);
    return NextResponse.json(
      { error: '기사 처리 중 오류가 발생했습니다. 다시 시도해주세요.' },
      { status: 500 }
    );
  }
}

async function processArticleWithOpenAI(url: string) {
  try {
    // Step 1: Fetch the webpage content
    const webpageContent = await fetchWebpageContent(url);
    
    // Step 2: Send to OpenAI for summarization
    const summary = await generateSummaryWithOpenAI(url, webpageContent);
    
    return {
      success: true,
      url: url,
      summary: summary,
      timestamp: new Date().toISOString()
    };
  } catch (error) {
    console.error('Article processing error:', error);
    throw new Error(`기사 처리 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`);
  }
}

async function fetchWebpageContent(url: string): Promise<string> {
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
        'Accept-Encoding': 'gzip, deflate, br',
        'DNT': '1',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
      },
      timeout: 10000
    });

    if (!response.ok) {
      throw new Error(`웹페이지를 가져올 수 없습니다: ${response.status} ${response.statusText}`);
    }

    const html = await response.text();
    
    // Extract clean text content
    const cleanContent = extractCleanContent(html);
    
    console.log(`Extracted content length: ${cleanContent.length} characters`);
    console.log(`Content preview: ${cleanContent.substring(0, 200)}...`);
    
    if (cleanContent.length < 50) {
      throw new Error(`웹페이지에서 충분한 텍스트를 추출할 수 없습니다. (추출된 길이: ${cleanContent.length}자)`);
    }

    return cleanContent;
  } catch (error) {
    console.error('Webpage fetching error:', error);
    throw new Error(`웹페이지 가져오기 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`);
  }
}

function extractCleanContent(html: string): string {
  // Remove script and style tags
  let content = html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '')
    .replace(/<header[^>]*>[\s\S]*?<\/header>/gi, '')
    .replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '')
    .replace(/<aside[^>]*>[\s\S]*?<\/aside>/gi, '')
    .replace(/<form[^>]*>[\s\S]*?<\/form>/gi, '')
    .replace(/<button[^>]*>[\s\S]*?<\/button>/gi, '')
    .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, '')
    .replace(/<object[^>]*>[\s\S]*?<\/object>/gi, '')
    .replace(/<embed[^>]*>/gi, '')
    .replace(/<noscript[^>]*>[\s\S]*?<\/noscript>/gi, '');

  // Try multiple strategies to extract main content
  let mainContent = '';

  // Strategy 1: Look for article tags
  const articleMatch = content.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  if (articleMatch) {
    mainContent = articleMatch[1];
  }

  // Strategy 2: Look for content divs with common class names
  if (!mainContent) {
    const contentMatch = content.match(/<div[^>]*class="[^"]*(?:content|post|article|entry|main|body)[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
    if (contentMatch) {
      mainContent = contentMatch[1];
    }
  }

  // Strategy 3: Look for content divs with common IDs
  if (!mainContent) {
    const idMatch = content.match(/<div[^>]*id="[^"]*(?:content|post|article|entry|main|body)[^"]*"[^>]*>([\s\S]*?)<\/div>/i);
    if (idMatch) {
      mainContent = idMatch[1];
    }
  }

  // Strategy 4: Look for main tag
  if (!mainContent) {
    const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    if (mainMatch) {
      mainContent = mainMatch[1];
    }
  }

  // Strategy 5: Look for body content (fallback)
  if (!mainContent) {
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (bodyMatch) {
      mainContent = bodyMatch[1];
    }
  }

  // If we still don't have content, use the entire cleaned HTML
  if (!mainContent) {
    mainContent = content;
  }

  // Convert HTML to clean text
  let cleanText = mainContent
    .replace(/<[^>]*>/g, ' ')  // Remove HTML tags
    .replace(/\s+/g, ' ')       // Normalize whitespace
    .replace(/&nbsp;/g, ' ')    // Replace HTML entities
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&copy;/g, '©')
    .replace(/&reg;/g, '®')
    .replace(/&trade;/g, '™')
    .replace(/&mdash;/g, '—')
    .replace(/&ndash;/g, '–')
    .replace(/&hellip;/g, '...')
    .trim();

  // Remove common unwanted text patterns
  cleanText = cleanText
    .replace(/cookie|쿠키|개인정보|privacy|이용약관|terms|로그인|login|회원가입|signup|구독|subscribe|뉴스레터|newsletter/gi, '')
    .replace(/\s+/g, ' ')  // Re-normalize whitespace
    .trim();

  // If we still don't have enough content, try to extract from the entire HTML
  if (cleanText.length < 100) {
    console.log('Main content extraction failed, trying full HTML...');
    cleanText = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
      .replace(/<[^>]*>/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .trim();
  }

  // Limit content length to avoid token limits
  if (cleanText.length > 8000) {
    cleanText = cleanText.substring(0, 8000) + '...';
  }

  return cleanText;
}

async function generateSummaryWithOpenAI(url: string, content: string): Promise<string> {
  try {
    const { OpenAI } = await import('openai');
    
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `당신은 전문적인 영상 스크립트 작가입니다. 웹페이지의 내용을 바탕으로 60초 영상용 스크립트를 작성해주세요.

요구사항:
1. **강력한 훅**: 시청자의 관심을 즉시 끄는 도입부 (0-5초)
2. **핵심 내용 전달**: 기사의 주요 내용을 3-4개 포인트로 정리 (5-50초)
3. **감정적 연결**: 시청자와 공감대를 형성하는 내용
4. **행동 유도**: 댓글, 좋아요, 팔로우를 유도하는 마무리 (50-60초)
5. **한국어 최적화**: 자연스럽고 구어체적인 한국어 표현

출력 형식:
🎬 **60초 영상 스크립트**

🪝 **훅 (0-5초)**
[강력한 도입부 - 시청자의 관심을 즉시 끄는 문장]

📝 **메인 콘텐츠 (5-50초)**
[기사 내용을 바탕으로 한 핵심 포인트들 - 구체적이고 흥미롭게]

📢 **행동 유도 (50-60초)**
[참여를 유도하는 마무리 - 댓글, 좋아요, 팔로우 유도]

✨ **제작 팁**
[구체적인 영상 제작 팁들 - 카메라 앵글, 음성 톤, 제스처 등]

스타일:
- 구어체 사용 (존댓말, 반말 혼용 가능)
- 감탄사와 이모지 활용
- 시청자와 대화하는 듯한 친근한 톤
- 각 섹션별 타이밍 명시
- 총 60초 내외로 조정 가능`
        },
        {
          role: "user",
          content: `다음 웹페이지의 내용을 바탕으로 60초 영상용 스크립트를 작성해주세요:

URL: ${url}

웹페이지 내용:
${content}

위 내용을 바탕으로 매력적이고 참여도를 높이는 영상 스크립트를 작성해주세요.`
        }
      ],
      max_tokens: 1200,
      temperature: 0.7
    });

    const script = response.choices[0].message.content;
    if (!script) {
      throw new Error('OpenAI에서 영상 스크립트를 생성할 수 없습니다.');
    }

    return script;
  } catch (error) {
    console.error('OpenAI API error:', error);
    throw new Error(`AI 영상 스크립트 생성 실패: ${error instanceof Error ? error.message : '알 수 없는 오류'}`);
  }
}
