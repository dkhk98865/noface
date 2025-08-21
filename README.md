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

1. **기사 입력**: 
   - **직접 입력**: 블로그 포스트나 뉴스 기사 텍스트를 붙여넣기
   - **URL 추출**: 기사 URL을 입력하면 자동으로 내용을 추출
2. **스크립트 생성**: **AI가 참여도가 높은 60초 영상 스크립트 작성**
   - OpenAI GPT-4를 사용한 고품질 스크립트 생성
   - 각 기사마다 고유하고 맞춤형 콘텐츠
   - 한국어 최적화된 자연스러운 표현
3. **영상 제작**: 음성, 비주얼, 자막이 포함된 영상 생성
4. **게시**: 유튜브 쇼츠, 틱톡, 인스타그램 릴스에 원클릭 업로드

### 🤖 **AI 스크립트 생성 시스템**

#### **실제 AI 처리 (권장)**
- **OpenAI GPT-4**: 각 기사마다 고유한 스크립트 생성
- **한국어 최적화**: 자연스러운 한국어 표현과 문화적 맥락 이해
- **맞춤형 콘텐츠**: 기사 내용에 따라 다른 훅, 포인트, 마무리
- **품질 보장**: 전문적인 영상 스크립트 작성 능력

#### **데모 모드 (API 키 없을 때)**
- **향상된 템플릿**: 기사 길이에 따라 다른 스타일 적용
- **동적 콘텐츠**: 기사 제목과 내용을 반영한 기본 스크립트
- **API 연동 준비**: 언제든지 OpenAI API 키만 추가하면 실제 AI 사용 가능

### 🔗 URL 추출 지원 사이트
- 네이버 블로그, 다음 카페, 티스토리
- 뉴스 사이트 (연합뉴스, 조선일보, 중앙일보 등)
- 일반 블로그 및 웹사이트
- 소셜미디어 포스트 (지원되는 경우)

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

## 💰 **비용 분석**

### **OpenAI API 비용 (스크립트 생성)**
- **GPT-4 모델**: 약 $0.03 per 1K tokens
- **평균 기사 (1000자)**: 약 $0.09 per script
- **한국어 최적화**: 더 정확하고 자연스러운 결과

### **대안 API 옵션**
- **Anthropic Claude**: $0.015 per 1K tokens (더 저렴)
- **Google Gemini**: $0.001 per 1K tokens (가장 저렴, 한국어 지원 제한적)

### **비용 효율성**
- **고품질 결과**: 각 기사마다 고유한 스크립트
- **사용자 만족도**: 템플릿이 아닌 실제 AI 생성 콘텐츠
- **ROI**: 전문 콘텐츠 제작 시간 대폭 단축

## 🚀 Deployment

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
