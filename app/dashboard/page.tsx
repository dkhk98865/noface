'use client';

import { useState } from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Dashboard() {
  const [articleText, setArticleText] = useState('');
  const [articleUrl, setArticleUrl] = useState('');
  const [inputMethod, setInputMethod] = useState<'text' | 'url'>('text');
  const [isProcessing, setIsProcessing] = useState(false);
  const [script, setScript] = useState('');
  const [extractedArticle, setExtractedArticle] = useState<any>(null);
  const [isGeneratingVideo, setIsGeneratingVideo] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<any>(null);

  return (
    <>
      <SignedIn>
        <DashboardContent 
          articleText={articleText}
          setArticleText={setArticleText}
          articleUrl={articleUrl}
          setArticleUrl={setArticleUrl}
          inputMethod={inputMethod}
          setInputMethod={setInputMethod}
          isProcessing={isProcessing}
          setIsProcessing={setIsProcessing}
          script={script}
          setScript={setScript}
          extractedArticle={extractedArticle}
          setExtractedArticle={setExtractedArticle}
          isGeneratingVideo={isGeneratingVideo}
          setIsGeneratingVideo={setIsGeneratingVideo}
          generatedVideo={generatedVideo}
          setGeneratedVideo={setGeneratedVideo}
        />
      </SignedIn>
      <SignedOut>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-sm border p-8 text-center max-w-md">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">로그인이 필요합니다</h1>
            <p className="text-gray-600 mb-6">
              노페이스 서비스를 이용하려면 로그인이 필요합니다.
            </p>
            <SignInButton mode="modal">
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                로그인하기
              </button>
            </SignInButton>
            <div className="mt-4">
              <Link href="/" className="text-purple-600 hover:text-purple-700 text-sm">
                홈으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </SignedOut>
    </>
  );
}

function DashboardContent({
  articleText,
  setArticleText,
  articleUrl,
  setArticleUrl,
  inputMethod,
  setInputMethod,
  isProcessing,
  setIsProcessing,
  script,
  setScript,
  extractedArticle,
  setExtractedArticle,
  isGeneratingVideo,
  setIsGeneratingVideo,
  generatedVideo,
  setGeneratedVideo
}: {
  articleText: string;
  setArticleText: (text: string) => void;
  articleUrl: string;
  setArticleUrl: (url: string) => void;
  inputMethod: 'text' | 'url';
  setInputMethod: (method: 'text' | 'url') => void;
  isProcessing: boolean;
  setIsProcessing: (processing: boolean) => void;
  script: string;
  setScript: (script: string) => void;
  extractedArticle: any;
  setExtractedArticle: (article: any) => void;
  isGeneratingVideo: boolean;
  setIsGeneratingVideo: (generating: boolean) => void;
  generatedVideo: any;
  setGeneratedVideo: (video: any) => void;
}) {

  const handleCreateVideo = async () => {
    if (inputMethod === 'url' && !articleUrl.trim()) return;
    if (inputMethod === 'text' && !articleText.trim()) return;
    
    setIsProcessing(true);
    setScript(''); // Clear previous script
    setExtractedArticle(null); // Clear previous extraction
    
    try {
      const requestBody = inputMethod === 'url' 
        ? { articleUrl: articleUrl.trim() }
        : { articleText: articleText.trim() };

      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || '스크립트 생성에 실패했습니다.');
      }
      
      if (data.script) {
        setScript(data.script);
        
        // If URL was used, store the extracted article
        if (data.extractedArticle) {
          setExtractedArticle(data.extractedArticle);
          setArticleText(data.extractedArticle.content);
        }
      } else {
        throw new Error('스크립트를 받지 못했습니다.');
      }
    } catch (error) {
      console.error('Error generating script:', error);
      const errorMessage = error instanceof Error ? error.message : '스크립트 생성 중 오류가 발생했습니다. 다시 시도해주세요.';
      setScript(`❌ 오류: ${errorMessage}`);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleGenerateVideo = async () => {
    if (!script.trim()) return;
    
    setIsGeneratingVideo(true);
    
    try {
      const response = await fetch('/api/generate-video', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          script,
          voiceSettings: { voiceId: 'default' },
          visualStyle: { style: 'modern' }
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate video');
      }
      
      const videoData = await response.json();
      setGeneratedVideo(videoData);
    } catch (error) {
      console.error('Error generating video:', error);
      alert('영상 생성 중 오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsGeneratingVideo(false);
    }
  };

  const handlePublishToSocial = async (platforms: string[]) => {
    if (!generatedVideo) return;
    
    try {
      const response = await fetch('/api/social-media', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          videoId: generatedVideo.videoId,
          platforms,
          caption: script.split('\n')[0] // Use first line as caption
        }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to publish to social media');
      }
      
      const publishData = await response.json();
      const platformNames = platforms.map(p => {
        switch(p) {
          case 'youtube': return '유튜브';
          case 'tiktok': return '틱톡';
          case 'instagram': return '인스타그램';
          default: return p;
        }
      });
      alert(`${platformNames.join(', ')}에 성공적으로 업로드되었습니다!`);
      console.log('Publish results:', publishData);
    } catch (error) {
      console.error('Error publishing to social media:', error);
      alert('SNS 업로드 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-purple-600">노페이스</Link>
            <div className="flex gap-6 items-center">
              <Link href="/dashboard" className="text-purple-600 font-medium">대시보드</Link>
              <Link href="/videos" className="text-gray-600 hover:text-purple-600">내 영상</Link>
              <Link href="/settings" className="text-gray-600 hover:text-purple-600">설정</Link>
              <UserButton 
                appearance={{
                  elements: {
                    avatarBox: "w-8 h-8"
                  }
                }}
              />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">영상 제작하기</h1>
          <p className="text-gray-600">기사를 매력적인 숏폼 영상으로 변환하세요</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">기사 입력</h2>
            
            {/* Input Method Selection */}
            <div className="mb-4">
              <div className="flex gap-2 mb-4">
                <button
                  onClick={() => setInputMethod('text')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    inputMethod === 'text'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  📝 텍스트 직접 입력
                </button>
                <button
                  onClick={() => setInputMethod('url')}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    inputMethod === 'url'
                      ? 'bg-purple-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  🔗 URL에서 자동 추출
                </button>
              </div>
            </div>

            {/* Text Input */}
            {inputMethod === 'text' && (
              <textarea
                value={articleText}
                onChange={(e) => setArticleText(e.target.value)}
                placeholder="여기에 블로그 포스트나 뉴스 기사를 붙여넣으세요..."
                className="w-full h-64 p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            )}

            {/* URL Input */}
            {inputMethod === 'url' && (
              <div className="space-y-4">
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={articleUrl}
                    onChange={(e) => setArticleUrl(e.target.value)}
                    placeholder="https://example.com/article-url"
                    className="flex-1 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleCreateVideo}
                    disabled={!articleUrl.trim() || isProcessing}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
                  >
                    {isProcessing ? '추출 중...' : '기사 추출'}
                  </button>
                </div>
                
                {/* URL Tips */}
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-blue-800">
                    💡 <strong>지원되는 사이트:</strong> 네이버 블로그, 다음 카페, 티스토리, 
                    뉴스 사이트, 일반 블로그 등 대부분의 웹사이트
                  </p>
                </div>

                {/* Extracted Article Preview */}
                {extractedArticle && (
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-900 mb-2">✅ 기사 추출 완료</h3>
                    <p className="text-sm text-green-800 mb-2">
                      <strong>제목:</strong> {extractedArticle.title}
                    </p>
                    <p className="text-sm text-green-800 mb-3">
                      <strong>내용:</strong> {extractedArticle.content.substring(0, 200)}...
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setArticleText(extractedArticle.content)}
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                      >
                        📝 텍스트로 복사
                      </button>
                      <button
                        onClick={() => setInputMethod('text')}
                        className="border border-green-600 text-green-600 hover:bg-green-50 px-4 py-2 rounded text-sm font-medium transition-colors"
                      >
                        편집하기
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {inputMethod === 'text' ? `${articleText.length}자` : 'URL 입력'}
              </span>
              <button
                onClick={handleCreateVideo}
                disabled={
                  (inputMethod === 'text' && !articleText.trim()) ||
                  (inputMethod === 'url' && !articleUrl.trim()) ||
                  isProcessing
                }
                className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                {isProcessing ? '분석 중...' : '스크립트 생성'}
              </button>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">60초 영상 스크립트</h2>
            {isProcessing ? (
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">AI가 기사를 분석하고 있습니다...</p>
                </div>
              </div>
            ) : script ? (
              <div className="space-y-4">
                <div className={`p-4 rounded-lg ${
                  script.startsWith('❌ 오류:') 
                    ? 'bg-red-50 border border-red-200' 
                    : 'bg-green-50 border border-green-200'
                }`}>
                  <pre className={`whitespace-pre-wrap text-sm ${
                    script.startsWith('❌ 오류:') ? 'text-red-700' : 'text-green-700'
                  }`}>{script}</pre>
                </div>
                <div className="flex gap-3">
                  <button 
                    onClick={handleGenerateVideo}
                    disabled={isGeneratingVideo}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    {isGeneratingVideo ? '영상 생성 중...' : '영상 생성하기'}
                  </button>
                  <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors">
                    스크립트 편집
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-500">
                생성된 스크립트가 여기에 표시됩니다
              </div>
            )}
          </div>
        </div>

        {/* Generated Video Section */}
        {generatedVideo && (
          <div className="mt-8 bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">생성된 영상</h2>
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Video Preview */}
              <div>
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center text-white text-lg font-medium mb-4">
                  영상 미리보기 ({generatedVideo.duration}초)
                </div>
                <div className="text-sm text-gray-600 space-y-1">
                  <p><strong>영상 ID:</strong> {generatedVideo.videoId}</p>
                  <p><strong>상태:</strong> {generatedVideo.status === 'completed' ? '완료' : generatedVideo.status}</p>
                  <p><strong>길이:</strong> {generatedVideo.duration}초</p>
                </div>
              </div>

              {/* Publishing Options */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">SNS에 업로드하기</h3>
                <div className="space-y-3">
                  <button 
                    onClick={() => handlePublishToSocial(['youtube'])}
                    className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <span>📺</span> 유튜브 쇼츠에 업로드
                  </button>
                  <button 
                    onClick={() => handlePublishToSocial(['tiktok'])}
                    className="w-full bg-black hover:bg-gray-800 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <span>🎵</span> 틱톡에 업로드
                  </button>
                  <button 
                    onClick={() => handlePublishToSocial(['instagram'])}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <span>📷</span> 인스타그램 릴스에 업로드
                  </button>
                  <button 
                    onClick={() => handlePublishToSocial(['youtube', 'tiktok', 'instagram'])}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                  >
                    <span>🚀</span> 모든 플랫폼에 업로드
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Recent Videos */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">최근 제작한 영상</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400"></div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">샘플 영상 {i}</h3>
                  <p className="text-sm text-gray-600 mb-3">2시간 전 제작</p>
                  <div className="flex gap-2">
                    <button className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">유튜브</button>
                    <button className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded">틱톡</button>
                    <button className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">인스타그램</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="border-t bg-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">&copy; 2024 노페이스. AI로 콘텐츠 제작을 혁신합니다.</p>
            <div className="flex gap-6 text-sm">
              <Link href="/terms" className="text-gray-600 hover:text-purple-600 transition-colors">
                이용약관
              </Link>
              <Link href="/privacy" className="text-gray-600 hover:text-purple-600 transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/refund" className="text-gray-600 hover:text-purple-600 transition-colors">
                환불정책
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
