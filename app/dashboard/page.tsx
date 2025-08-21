'use client';

import { useState } from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/nextjs';

export default function Dashboard() {
  const [articleUrl, setArticleUrl] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [script, setScript] = useState('');
  const [error, setError] = useState('');
  const [lastProcessedUrl, setLastProcessedUrl] = useState('');

  const handleSummarize = async () => {
    if (!articleUrl.trim()) {
      setError('기사 URL을 입력해주세요.');
      return;
    }

    // Validate URL format
    try {
      new URL(articleUrl.trim());
    } catch {
      setError('올바른 URL 형식이 아닙니다.');
      return;
    }

    setIsProcessing(true);
    setError('');
    setScript('');

    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ articleUrl: articleUrl.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '영상 스크립트 생성에 실패했습니다.');
      }

      if (data.success && data.summary) {
        setScript(data.summary);
        setLastProcessedUrl(data.url);
      } else {
        throw new Error('영상 스크립트를 받지 못했습니다.');
      }
    } catch (error) {
      console.error('Error generating script:', error);
      const errorMessage = error instanceof Error ? error.message : '영상 스크립트 생성 중 오류가 발생했습니다.';
      setError(errorMessage);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClear = () => {
    setArticleUrl('');
    setScript('');
    setError('');
    setLastProcessedUrl('');
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

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">AI 영상 스크립트 생성</h1>
          <p className="text-gray-600">웹페이지 URL을 입력하면 AI가 60초 영상용 스크립트를 자동으로 생성합니다</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">기사 URL 입력</h2>
            
            <div className="space-y-4">
              <input
                type="url"
                value={articleUrl}
                onChange={(e) => setArticleUrl(e.target.value)}
                placeholder="https://example.com/article-url"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                disabled={isProcessing}
              />
              
              {/* URL Tips */}
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-blue-800">
                  💡 <strong>지원되는 사이트:</strong> 네이버 블로그, 다음 카페, 티스토리, 
                  뉴스 사이트, 일반 블로그 등 대부분의 웹사이트
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={handleSummarize}
                  disabled={!articleUrl.trim() || isProcessing}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  {isProcessing ? 'AI 분석 중...' : 'AI 영상 스크립트 생성'}
                </button>
                <button
                  onClick={handleClear}
                  disabled={isProcessing}
                  className="px-4 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-medium transition-colors"
                >
                  초기화
                </button>
              </div>
            </div>
          </div>

          {/* Output Section */}
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">AI 생성 영상 스크립트</h2>
            
            {isProcessing ? (
              <div className="h-64 flex items-center justify-center">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">AI가 웹페이지를 분석하고 영상 스크립트를 작성하고 있습니다...</p>
                  <p className="text-sm text-gray-500 mt-2">잠시만 기다려주세요</p>
                </div>
              </div>
            ) : error ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">❌ 오류 발생</h3>
                <p className="text-red-800">{error}</p>
                <button
                  onClick={() => setError('')}
                  className="mt-3 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                >
                  오류 지우기
                </button>
              </div>
            ) : script ? (
              <div className="space-y-4">
                {/* URL Info */}
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>처리된 URL:</strong> {lastProcessedUrl}
                  </p>
                </div>
                
                {/* Script Content */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="prose prose-sm max-w-none">
                    <pre className="whitespace-pre-wrap text-green-800 font-medium">{script}</pre>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => navigator.clipboard.writeText(script)}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    📋 스크립트 복사
                  </button>
                  <button
                    onClick={handleClear}
                    className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg font-medium transition-colors"
                  >
                    새로 시작
                  </button>
                </div>
              </div>
            ) : (
              <div className="h-64 flex items-center justify-center text-gray-500">
                <div className="text-center">
                  <p className="text-lg mb-2">URL을 입력하고 AI 영상 스크립트를 생성하세요</p>
                  <p className="text-sm">지원되는 모든 웹사이트에서 작동합니다</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* How It Works Section */}
        <div className="mt-12 bg-white rounded-xl shadow-sm border p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">🔍 작동 원리</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">1. 웹페이지 수집</h3>
              <p className="text-gray-600 text-sm">입력된 URL에서 웹페이지 내용을 자동으로 수집합니다</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">2. AI 분석</h3>
              <p className="text-gray-600 text-sm">OpenAI GPT-4가 내용을 분석하고 영상 스크립트를 작성합니다</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎬</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">3. 스크립트 생성</h3>
              <p className="text-gray-600 text-sm">60초 영상용 최적화된 스크립트를 자동으로 생성합니다</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="border-t bg-white py-6 mt-12 rounded-xl">
          <div className="text-center">
            <p className="text-gray-600">&copy; 2024 노페이스. AI로 영상 스크립트 생성을 혁신합니다.</p>
            <div className="flex justify-center gap-6 mt-4 text-sm">
              <Link href="/terms" className="text-gray-500 hover:text-gray-700">이용약관</Link>
              <Link href="/privacy" className="text-gray-500 hover:text-gray-700">개인정보처리방침</Link>
              <Link href="/refund" className="text-gray-500 hover:text-gray-700">환불정책</Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
