# 노페이스 - 콘텐츠 자동화 SaaS

블로그 포스트와 뉴스 기사를 AI 음성, 비주얼, 자막이 포함된 매력적인 60초 영상으로 변환하고, 유튜브 쇼츠, 틱톡, 인스타그램 릴스에 자동으로 업로드하세요.

## ✨ 주요 기능

- **🤖 AI 스마트 요약**: AI가 기사를 분석하여 참여도가 높은 60초 영상 스크립트를 작성합니다
- **🎬 자동 영상 생성**: AI 음성, 비주얼, 완벽한 타이밍의 자막을 자동으로 생성합니다
- **📱 SNS 자동 업로드**: 유튜브 쇼츠, 틱톡, 인스타그램 릴스에 원클릭 업로드
- **⚡ 빠른 처리**: 기사에서 게시된 영상까지 몇 분 안에 완성
- **🎯 참여도 최적화**: 숏폼 영상 플랫폼에 특화된 스크립트 설계

## 🚀 시작하기

### 필요 사항

- Node.js 18+ 
- Clerk 계정 및 API 키 (인증용)
- OpenAI, ElevenLabs, 소셜미디어 플랫폼 API 키

### 설치 방법

1. 저장소 복제:
```bash
git clone https://github.com/yourusername/noface.git
cd noface
```

2. 종속성 설치:
```bash
npm install
```

3. Clerk 설정:
   - [Clerk Dashboard](https://dashboard.clerk.com)에서 새 애플리케이션 생성
   - API 키 복사 (Publishable Key와 Secret Key)
   - Sign-in 및 Sign-up 방법 설정 (이메일, 소셜 로그인 등)

4. 환경 변수 설정:
```bash
# .env.local 파일을 생성하고 다음 내용을 입력하세요
```

`.env.local` 파일에 다음 내용 입력:
```
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_clerk_publishable_key_here
CLERK_SECRET_KEY=sk_test_your_clerk_secret_key_here

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# OpenAI API
OPENAI_API_KEY=your_openai_key_here

# ElevenLabs API
ELEVENLABS_API_KEY=your_elevenlabs_key_here

# Social Media APIs
YOUTUBE_CLIENT_ID=your_youtube_client_id
YOUTUBE_CLIENT_SECRET=your_youtube_client_secret
TIKTOK_CLIENT_KEY=your_tiktok_client_key
TIKTOK_CLIENT_SECRET=your_tiktok_client_secret
INSTAGRAM_ACCESS_TOKEN=your_instagram_access_token
```

5. 개발 서버 실행:
```bash
npm run dev
```

6. [http://localhost:3000](http://localhost:3000)에서 애플리케이션 확인

## 🛠️ 기술 스택

- **프론트엔드**: Next.js 14, React, TypeScript, Tailwind CSS
- **백엔드**: Next.js API Routes
- **AI/ML**: OpenAI GPT-4, ElevenLabs Voice AI
- **영상 처리**: FFmpeg (예정)
- **소셜미디어 API**: YouTube Data API, TikTok Content Posting API, Instagram Graph API
- **인증**: JWT (예정)
- **데이터베이스**: PostgreSQL (예정)

## 📖 사용 방법

1. **기사 입력**: 블로그 포스트나 뉴스 기사 텍스트를 붙여넣기
2. **스크립트 생성**: AI가 참여도가 높은 60초 영상 스크립트 작성
3. **영상 제작**: 음성, 비주얼, 자막이 포함된 영상 생성
4. **게시**: 유튜브 쇼츠, 틱톡, 인스타그램 릴스에 원클릭 업로드

## 🔧 Development

The project structure:
```
noface/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── summarize/     # Text summarization
│   │   ├── generate-video/ # Video generation
│   │   └── social-media/  # Social media publishing
│   ├── dashboard/         # Main dashboard page
│   └── page.tsx          # Landing page
├── lib/                   # Utility functions and config
└── public/               # Static assets
```

## 🚀 Deployment

Deploy on Vercel (recommended):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/noface)

Or build for production:
```bash
npm run build
npm start
```

## 📝 API Documentation

### POST /api/summarize
Converts article text to 60-second video script.

### POST /api/generate-video  
Generates video with voiceover, visuals, and subtitles.

### POST /api/social-media
Publishes video to social media platforms.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support, email support@noface.ai or join our Discord community.
