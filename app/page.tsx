import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-white">노페이스</div>
          <div className="flex gap-6 items-center">
            <SignedOut>
              <SignInButton mode="modal">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                  로그인
                </button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8"
                  }
                }}
              />
            </SignedIn>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              기사를
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> 바이럴 영상으로</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              블로그 포스트와 뉴스 기사를 AI 음성, 비주얼, 자막이 포함된 매력적인 60초 영상으로 변환하세요. 
              유튜브 쇼츠, 틱톡, 인스타그램 릴스에 자동으로 게시됩니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SignedIn>
                <Link href="/dashboard" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                  🚀 대시보드로 이동
                </Link>
              </SignedIn>
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105">
                    영상 제작 시작하기
                  </button>
                </SignInButton>
              </SignedOut>

            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-24 grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold text-white mb-2">AI 스마트 요약</h3>
              <p className="text-gray-300">AI가 기사를 분석하여 참여도가 높은 60초 영상 스크립트를 작성합니다.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-semibold text-white mb-2">자동 영상 생성</h3>
              <p className="text-gray-300">AI 음성, 비주얼, 완벽한 타이밍의 자막을 자동으로 생성하여 최대 임팩트를 제공합니다.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-2">SNS 자동 업로드</h3>
              <p className="text-gray-300">유튜브 쇼츠, 틱톡, 인스타그램 릴스에 최적화된 형식으로 원클릭 업로드가 가능합니다.</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">1000만+</div>
              <div className="text-gray-300">제작된 영상</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5만+</div>
              <div className="text-gray-300">만족한 크리에이터</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-gray-300">시간 절약</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24시간</div>
              <div className="text-gray-300">자동화 서비스</div>
            </div>
          </div>

          {/* Authenticated User Section */}
          <SignedIn>
            <div className="mt-24 text-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">
                  🎉 환영합니다! 
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  이미 로그인되어 있습니다. 지금 바로 콘텐츠 제작을 시작해보세요!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    href="/dashboard" 
                    className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
                  >
                    🚀 대시보드로 이동
                  </Link>
                  <div className="flex items-center gap-3 text-gray-300">
                    <span>또는</span>
                    <UserButton 
                      appearance={{
                        elements: {
                          avatarBox: "w-10 h-10"
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="mt-6 text-sm text-gray-400">
                  <p>계정 설정, 프로필 관리, 구독 정보 등을 확인할 수 있습니다.</p>
                </div>
              </div>
            </div>
          </SignedIn>

          {/* Guest User Section */}
          <SignedOut>
            <div className="mt-24 text-center">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-4">
                  🚀 지금 시작하세요
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  무료 체험으로 노페이스의 강력한 AI 기능을 경험해보세요
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-4xl mb-3">🎯</div>
                    <h3 className="text-lg font-semibold text-white mb-2">무료 체험</h3>
                    <p className="text-gray-300 text-sm">제한된 기능으로 서비스 품질을 확인해보세요</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">⚡</div>
                    <h3 className="text-lg font-semibold text-white mb-2">빠른 시작</h3>
                    <p className="text-gray-300 text-sm">몇 분 안에 첫 영상을 제작할 수 있습니다</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl mb-3">🔒</div>
                    <h3 className="text-lg font-semibold text-white mb-2">안전한 인증</h3>
                    <p className="text-gray-300 text-sm">Clerk를 통한 안전하고 빠른 로그인</p>
                  </div>
                </div>
                <SignInButton mode="modal">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg text-xl font-semibold transition-all transform hover:scale-105 shadow-lg">
                    🚀 무료로 시작하기
                  </button>
                </SignInButton>
                <p className="text-sm text-gray-400 mt-4">
                  신용카드 정보가 필요하지 않습니다 • 언제든지 취소 가능
                </p>
              </div>
            </div>
          </SignedOut>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/20 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">&copy; 2024 노페이스. AI로 콘텐츠 제작을 혁신합니다.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                이용약관
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/refund" className="text-gray-400 hover:text-white transition-colors">
                환불정책
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
