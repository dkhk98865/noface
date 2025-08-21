import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { articleText } = await request.json();

    if (!articleText || articleText.trim().length === 0) {
      return NextResponse.json(
        { error: 'Article text is required' },
        { status: 400 }
      );
    }

    // For demo purposes, we'll use a simple summarization logic
    // In production, this would integrate with OpenAI GPT API
    const script = await generateScript(articleText);

    return NextResponse.json({ script });
  } catch (error) {
    console.error('Summarization error:', error);
    return NextResponse.json(
      { error: 'Failed to generate script' },
      { status: 500 }
    );
  }
}

async function generateScript(articleText: string): Promise<string> {
  // This is a mock implementation
  // In production, you would integrate with OpenAI API like this:
  /*
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const response = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are an expert at creating engaging 60-second video scripts for social media platforms like YouTube Shorts, TikTok, and Instagram Reels. 
        
        Your task is to transform long-form articles into compelling short-form video scripts that:
        1. Hook viewers in the first 3 seconds
        2. Deliver key insights in an engaging way
        3. Include a clear call-to-action
        4. Are optimized for the 60-second format
        5. Use conversational, energetic language
        
        Structure your response with:
        - Hook (3-5 seconds)
        - Main Points (45-50 seconds)
        - Call to Action (5-7 seconds)`
      },
      {
        role: "user",
        content: `Please create a 60-second video script from this article: ${articleText}`
      }
    ],
    max_tokens: 500,
    temperature: 0.7
  });

  return response.choices[0].message.content || "Failed to generate script";
  */

  // Korean mock response for demo
  const words = articleText.split(' ').slice(0, 10).join(' ');
  return `🎬 60초 영상 스크립트

🪝 훅 (0-3초):
"이거 진짜 믿을 수 없는 일이 일어났어요..."

📝 메인 콘텐츠 (3-53초):
"${words}..."에 관한 기사를 바탕으로 핵심 내용을 정리해드릴게요:

• 포인트 1: [기사의 주요 인사이트]
• 포인트 2: [뒷받침하는 증거나 통계]
• 포인트 3: [시청자에게 중요한 이유]

가장 놀라운 부분은? [흥미로운 사실이나 반전]

이건 정말 [주제]에 대한 우리의 생각을 완전히 바꿀 수 있을 것 같아요.

📢 행동 유도 (53-60초):
"여러분은 어떻게 생각하세요? 댓글로 의견 남겨주시고 더 많은 인사이트를 원하시면 팔로우 잊지 마세요!"

✨ 참여도 높이는 팁:
- 핵심 포인트에서 손짓 사용하기
- 관련 비주얼/그래픽 보여주기
- 카메라와 아이컨택 유지하기
- 에너지 있고 열정적으로 말하기

예상 낭독 시간: 58초
최적 플랫폼: 유튜브 쇼츠, 틱톡, 인스타그램 릴스`;
}
