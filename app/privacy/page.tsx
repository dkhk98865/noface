import Link from 'next/link';

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">개인정보 처리방침</h1>
        
        <div className="bg-white rounded-lg shadow-sm border p-8 space-y-8">
          <div>
            <p className="text-sm text-gray-600 mb-6">최종 업데이트: 2024년 12월</p>
            <p className="text-gray-700 leading-relaxed">
              주식회사 노페이스(이하 "회사")는 개인정보보호법에 따라 이용자의 개인정보를 보호하고 이와 관련한 
              고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리방침을 수립·공개합니다.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제1조 (개인정보의 처리목적)</h2>
            <div className="space-y-3 text-gray-700">
              <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.</p>
              
              <div>
                <strong>1. 회원가입 및 관리</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>회원 가입의사 확인</li>
                  <li>회원제 서비스 제공에 따른 본인 식별·인증</li>
                  <li>회원자격 유지·관리</li>
                  <li>서비스 부정이용 방지</li>
                  <li>각종 고지·통지</li>
                </ul>
              </div>

              <div>
                <strong>2. 서비스 제공</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>AI 콘텐츠 생성 서비스 제공</li>
                  <li>맞춤형 서비스 제공</li>
                  <li>서비스 이용 기록 관리</li>
                  <li>고객지원 서비스</li>
                </ul>
              </div>

              <div>
                <strong>3. 요금결제 및 정산</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>유료 서비스 이용에 따른 요금 결제</li>
                  <li>결제 및 환불</li>
                  <li>채권추심</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제2조 (개인정보의 처리 및 보유기간)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1.</strong> 회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
              </div>
              
              <div>
                <strong>2.</strong> 각각의 개인정보 처리 및 보유 기간은 다음과 같습니다:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li><strong>회원정보:</strong> 회원 탈퇴 시까지</li>
                  <li><strong>서비스 이용 기록:</strong> 3년 (통신비밀보호법)</li>
                  <li><strong>결제 정보:</strong> 5년 (전자상거래법)</li>
                  <li><strong>소비자 불만 또는 분쟁처리 기록:</strong> 3년 (전자상거래법)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제3조 (개인정보의 제3자 제공)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1.</strong> 회사는 정보주체의 개인정보를 제1조의 개인정보 처리목적에서 명시한 범위 내에서만 처리하며, 정보주체의 동의, 법률의 특별한 규정 등 개인정보보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게 제공합니다.
              </div>
              
              <div>
                <strong>2.</strong> 회사는 다음과 같이 개인정보를 제3자에게 제공하고 있습니다:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li><strong>소셜미디어 플랫폼 연동:</strong> 이용자가 선택한 소셜미디어 플랫폼(유튜브, 틱톡, 인스타그램)에 콘텐츠 업로드를 위한 최소한의 정보</li>
                  <li><strong>결제 대행업체:</strong> 서비스 결제 처리를 위한 필요한 정보</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제4조 (개인정보처리의 위탁)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1.</strong> 회사는 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li><strong>클라우드 서비스:</strong> AWS, Google Cloud 등 (서버 호스팅, 데이터 저장)</li>
                  <li><strong>AI 서비스:</strong> OpenAI, ElevenLabs 등 (콘텐츠 생성)</li>
                  <li><strong>결제 서비스:</strong> 결제 대행업체 (결제 처리)</li>
                </ul>
              </div>
              
              <div>
                <strong>2.</strong> 회사는 위탁계약 체결시 개인정보보호법 제26조에 따라 위탁업무 수행목적 외 개인정보 처리금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고 있습니다.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제5조 (정보주체의 권리·의무 및 행사방법)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1.</strong> 정보주체는 회사에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>개인정보 처리현황 통지요구</li>
                  <li>개인정보 열람요구</li>
                  <li>개인정보 정정·삭제요구</li>
                  <li>개인정보 처리정지요구</li>
                </ul>
              </div>
              
              <div>
                <strong>2.</strong> 제1항에 따른 권리 행사는 회사에 대해 개인정보보호법 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 지체없이 조치하겠습니다.
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제6조 (개인정보의 파기)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1.</strong> 회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
              </div>
              
              <div>
                <strong>2.</strong> 개인정보 파기의 절차 및 방법은 다음과 같습니다:
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li><strong>파기절차:</strong> 회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.</li>
                  <li><strong>파기방법:</strong> 전자적 파일 형태의 정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다.</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제7조 (개인정보의 안전성 확보조치)</h2>
            <div className="space-y-3 text-gray-700">
              <p>회사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적 조치를 하고 있습니다:</p>
              
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>개인정보 취급 직원의 최소화 및 교육</li>
                <li>개인정보에 대한 접근 제한</li>
                <li>개인정보를 처리하는 데이터베이스시스템에 대한 접근권한의 부여·변경·말소를 통한 개인정보에 대한 접근통제</li>
                <li>해킹이나 컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위한 보안프로그램 설치 및 갱신·점검</li>
                <li>개인정보의 안전한 저장을 위한 저장매체의 물리적 보관</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제8조 (개인정보 보호책임자)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1.</strong> 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다:
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div><strong>개인정보 보호책임자</strong></div>
                <div>성명: 김대표</div>
                <div>직책: 대표이사</div>
                <div>연락처: support@noface.ai</div>
                <div>전화번호: 02-1234-5678</div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제9조 (개인정보 처리방침 변경)</h2>
            <p className="text-gray-700 leading-relaxed">
              이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">부칙</h2>
            <p className="text-gray-700">
              본 방침은 2024년 12월 1일부터 시행됩니다.
            </p>
          </section>

          <div className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-600">
              개인정보 처리와 관련한 문의사항이 있으시면 
              <a href="mailto:privacy@noface.ai" className="text-purple-600 hover:underline">privacy@noface.ai</a>로 
              연락해 주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

