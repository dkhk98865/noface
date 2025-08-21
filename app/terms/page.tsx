import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-purple-600">노페이스</Link>
            <Link href="/" className="text-gray-600 hover:text-purple-600">홈으로 돌아가기</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">서비스 이용약관</h1>
        
        <div className="bg-white rounded-lg shadow-sm border p-8 space-y-8">
          <div>
            <p className="text-sm text-gray-600 mb-6">최종 업데이트: 2024년 12월</p>
            <p className="text-gray-700 leading-relaxed">
              노페이스 서비스를 이용해 주셔서 감사합니다. 본 약관은 NoFace Inc.(이하 "회사")가 제공하는 
              AI 콘텐츠 자동화 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 
              책임사항을 규정합니다. NoFace Inc.는 미국 델라웨어주에 설립된 법인으로, 본 서비스는 미국 법률에 따라 운영됩니다.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제1조 (목적 및 적용법)</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                본 약관은 미국 델라웨어주에 설립된 NoFace Inc.가 제공하는 AI 기반 콘텐츠 자동화 서비스의 이용조건 및 절차, 
                회사와 이용자 간의 권리·의무 및 책임사항을 규정함을 목적으로 합니다.
              </p>
              <p>
                <strong>본 서비스는 미국 법률의 적용을 받으며, 특히 다음 법률들이 적용됩니다:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>미국 연방 통신품위법(Communications Decency Act)</li>
                <li>미국 저작권법(U.S. Copyright Act)</li>
                <li>캘리포니아 소비자 개인정보보호법(CCPA) - 해당 이용자에 한함</li>
                <li>기타 관련 미국 연방법 및 주법</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제2조 (용어의 정의)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1. "서비스"</strong>란 회사가 제공하는 AI 기반 콘텐츠 자동화 플랫폼을 의미합니다.
              </div>
              <div>
                <strong>2. "이용자"</strong>란 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.
              </div>
              <div>
                <strong>3. "회원"</strong>이란 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 정보를 지속적으로 제공받으며 회사가 제공하는 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
              </div>
              <div>
                <strong>4. "콘텐츠"</strong>란 이용자가 서비스를 통해 입력하는 텍스트, 생성되는 영상, 스크립트 등 모든 형태의 정보를 말합니다.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제3조 (서비스의 제공)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1.</strong> 회사는 다음과 같은 서비스를 제공합니다:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>AI 기반 텍스트 요약 및 스크립트 생성</li>
                  <li>자동 영상 생성 (음성, 비주얼, 자막)</li>
                  <li>소셜미디어 플랫폼 자동 업로드</li>
                  <li>기타 회사가 정하는 서비스</li>
                </ul>
              </div>
              <div>
                <strong>2.</strong> 서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다. 다만, 시스템 점검 등의 사유로 서비스가 일시 중단될 수 있습니다.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제4조 (회원가입)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1.</strong> 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.
              </div>
              <div>
                <strong>2.</strong> 회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>가입신청자가 본 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                  <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
                  <li>허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제5조 (개인정보보호)</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                회사는 이용자의 개인정보를 보호하기 위해 미국의 관련 법령에 따라 별도의 개인정보처리방침을 
                정하고 있으며, 이용자의 개인정보 보호에 최선을 다합니다.
              </p>
              <p>
                <strong>적용되는 미국 개인정보 법률:</strong>
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>캘리포니아 소비자 개인정보보호법(CCPA)</li>
                <li>캘리포니아 개인정보보호권리법(CPRA)</li>
                <li>아동 온라인 개인정보보호법(COPPA)</li>
                <li>기타 적용 가능한 주법 및 연방법</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제6조 (이용자의 의무)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1.</strong> 이용자는 다음 행위를 하여서는 안 됩니다:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>신청 또는 변경시 허위내용의 등록</li>
                  <li>타인의 정보 도용</li>
                  <li>회사가 게시한 정보의 변경</li>
                  <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                  <li>회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                  <li>타인의 명예를 손상시키거나 불이익을 주는 행위</li>
                  <li>음란하거나 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 공개 또는 게시하는 행위</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제7조 (저작권)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1.</strong> 이용자가 생성한 콘텐츠에 대한 저작권은 이용자에게 있습니다.
              </div>
              <div>
                <strong>2.</strong> 이용자는 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제8조 (서비스 이용의 제한)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1.</strong> 회사는 이용자가 본 약관의 의무를 위반하거나 서비스의 정상적인 운영을 방해한 경우, 경고, 일시정지, 영구이용정지 등으로 서비스 이용을 단계적으로 제한할 수 있습니다.
              </div>
              <div>
                <strong>2.</strong> 회사는 전항에도 불구하고, 미국 법률을 위반한 다음과 같은 경우에는 즉시 영구이용정지를 할 수 있습니다:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>신원 도용 및 결제 사기</li>
                  <li>미국 저작권법(DMCA)을 위반한 불법 복제 및 배포</li>
                  <li>컴퓨터 사기 및 남용법(CFAA)을 위반한 해킹 및 불법 접근</li>
                  <li>악성 소프트웨어 배포 및 사이버 공격</li>
                  <li>기타 미국 연방법 및 주법 위반 행위</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제9조 (손해배상 및 책임제한)</h2>
            <div className="space-y-3 text-gray-700">
              <p>
                미국 법률에 따라, 회사는 서비스와 관련하여 이용자에게 발생한 손해에 대해 다음과 같이 책임을 제한합니다:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li><strong>간접손해 면책:</strong> 회사는 특별, 간접, 부수적, 징벌적 손해에 대해 책임지지 않습니다</li>
                <li><strong>책임 한도:</strong> 회사의 총 책임은 이용자가 지불한 서비스 요금을 초과하지 않습니다</li>
                <li><strong>면책 조항:</strong> 서비스는 "있는 그대로" 제공되며, 묵시적 보증을 포함한 모든 보증을 부인합니다</li>
                <li><strong>주법 적용:</strong> 일부 주에서는 특정 책임 제한을 허용하지 않을 수 있으며, 이 경우 해당 주법이 적용됩니다</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제10조 (면책조항)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1.</strong> 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.
              </div>
              <div>
                <strong>2.</strong> 회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.
              </div>
              <div>
                <strong>3.</strong> 회사는 이용자가 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖의 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제11조 (준거법 및 분쟁해결)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1. 준거법:</strong> 본 약관의 해석 및 회사와 이용자 간의 분쟁에 대하여는 미국 델라웨어주 법률을 적용하며, 
                연방법이 우선 적용되는 사안에 대해서는 미국 연방법을 적용합니다.
              </div>
              <div>
                <strong>2. 관할법원:</strong> 본 약관과 관련된 모든 분쟁은 미국 델라웨어주 연방법원 또는 주법원의 
                전속 관할에 따르며, 양 당사자는 해당 법원의 관할권에 동의합니다.
              </div>
              <div>
                <strong>3. 중재 조항:</strong> 회사와 이용자 간의 분쟁은 미국중재협회(AAA) 규칙에 따라 구속력 있는 
                중재를 통해 해결될 수 있습니다. 단, 집단 소송이나 대표 소송은 제외됩니다.
              </div>
              <div>
                <strong>4. 국제 이용자:</strong> 미국 외 지역 이용자의 경우에도 위 조항이 적용되며, 
                현지법과 상충하는 경우 법률이 허용하는 최대 범위 내에서 미국법이 적용됩니다.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">부칙</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1.</strong> 본 약관은 2024년 12월 1일부터 적용됩니다.
              </div>
              <div>
                <strong>2.</strong> 회사 정보:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li><strong>회사명:</strong> NoFace Inc.</li>
                  <li><strong>설립지:</strong> 미국 델라웨어주</li>
                  <li><strong>사업자 등록:</strong> Delaware Corporation</li>
                  <li><strong>본사 주소:</strong> 1209 Orange Street, Wilmington, DE 19801, USA</li>
                </ul>
              </div>
              <div>
                <strong>3.</strong> 본 약관은 영어 원본을 한국어로 번역한 것이며, 해석상 차이가 있을 경우 영어 원본이 우선합니다.
              </div>
            </div>
          </section>

          <div className="border-t pt-6 mt-8">
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-blue-800">
                <strong>🇺🇸 중요:</strong> NoFace Inc.는 미국 회사로서 미국 법률의 적용을 받습니다. 
                본 서비스 이용시 미국 법률 및 관할권에 동의하는 것으로 간주됩니다.
              </p>
            </div>
            <p className="text-sm text-gray-600">
              문의사항이 있으시면 
              <a href="mailto:legal@noface.ai" className="text-purple-600 hover:underline">legal@noface.ai</a> 또는 
              <a href="mailto:support@noface.ai" className="text-purple-600 hover:underline">support@noface.ai</a>로 
              연락해 주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
