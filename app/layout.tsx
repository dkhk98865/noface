import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoSansKR = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "노페이스 - AI 콘텐츠 자동화 플랫폼",
  description: "기사를 60초 바이럴 영상으로 변환하고 유튜브 쇼츠, 틱톡, 인스타그램 릴스에 자동 업로드하세요.",
  keywords: "AI, 영상 제작, 콘텐츠 자동화, 유튜브 쇼츠, 틱톡, 인스타그램 릴스, 한국",
  openGraph: {
    title: "노페이스 - AI 콘텐츠 자동화",
    description: "기사를 매력적인 60초 영상으로 자동 변환",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="ko">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${notoSansKR.variable} antialiased font-sans`}
          style={{ fontFamily: 'var(--font-noto-sans-kr), var(--font-geist-sans), system-ui, sans-serif' }}
        >

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
