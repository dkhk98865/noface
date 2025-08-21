import Link from 'next/link';

export default function RefundPolicy() {
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
        <h1 className="text-3xl font-bold text-gray-900 mb-8">환불 정책</h1>
        
        <div className="bg-white rounded-lg shadow-sm border p-8 space-y-8">
          <div>
            <p className="text-sm text-gray-600 mb-6">최종 업데이트: 2024년 12월</p>
            <p className="text-gray-700 leading-relaxed">
              주식회사 노페이스(이하 "회사")는 디지털 콘텐츠 서비스의 특성상 원칙적으로 환불이 불가능한 정책을 
              운영하고 있습니다. 본 정책은 노페이스 서비스의 환불 불가 원칙과 예외적인 경우에 대해 안내합니다.
            </p>
          </div>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제1조 (기본 원칙)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1. 환불 불가 원칙</strong>
                <p className="ml-4 mt-2">노페이스 서비스는 디지털 콘텐츠 및 AI 기반 서비스의 특성상 <strong>원칙적으로 환불이 불가능</strong>합니다.</p>
              </div>
              <div>
                <strong>2. 적용 범위</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li>모든 유료 구독 서비스</li>
                  <li>종량제 크레딧 구매</li>
                  <li>프리미엄 기능 이용료</li>
                  <li>기타 부가 서비스</li>
                </ul>
              </div>
              <div>
                <strong>3. 법적 근거</strong>
                <p className="ml-4 mt-2">전자상거래법 제17조 제2항에 따라 디지털콘텐츠의 제공이 개시된 경우 청약철회가 제한됩니다.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제2조 (환불 불가 사유)</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <strong>다음의 경우 환불이 불가능합니다:</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li><strong>서비스 이용 개시 후:</strong> 계정 생성 및 로그인을 통해 서비스 이용을 시작한 경우</li>
                  <li><strong>콘텐츠 생성 후:</strong> AI를 통해 스크립트나 영상을 생성한 경우</li>
                  <li><strong>크레딧 사용 후:</strong> 구매한 크레딧을 일부라도 사용한 경우</li>
                  <li><strong>단순 변심:</strong> 서비스가 기대와 다르거나 사용법을 모르는 경우</li>
                  <li><strong>서비스 오남용:</strong> 약관에 위반하여 서비스를 이용한 경우</li>
                  <li><strong>무료 체험 후:</strong> 무료 체험을 이용한 후 유료 결제한 경우</li>
                  <li><strong>할인 구매:</strong> 프로모션이나 할인을 통해 구매한 경우</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제3조 (예외적 환불 사유)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>다음의 경우에만 예외적으로 환불이 검토될 수 있습니다:</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li><strong>중복 결제:</strong> 시스템 오류로 인한 명백한 중복 결제 발생시</li>
                  <li><strong>서비스 장애:</strong> 회사 귀책사유로 연속 72시간 이상 서비스 이용 불가시</li>
                  <li><strong>기술적 결함:</strong> 회사가 인정하는 중대한 기술적 결함으로 서비스 이용 불가시</li>
                  <li><strong>법적 의무:</strong> 관련 법령에 의해 환불이 의무화된 경우</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                <p className="text-sm text-yellow-800">
                  <strong>⚠️ 주의:</strong> 위 사유에 해당하더라도 회사의 검토를 거쳐 환불 여부가 최종 결정되며, 
                  환불이 승인되더라도 수수료 등이 차감될 수 있습니다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제4조 (서비스 이용 고지)</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <strong>1. 사전 고지 의무</strong>
                <p className="ml-4 mt-2">회사는 결제 전 다음 사항을 명확히 고지합니다:</p>
                <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                  <li>디지털 콘텐츠 서비스의 환불 불가 원칙</li>
                  <li>서비스 이용 개시 시점 및 조건</li>
                  <li>결제 완료 즉시 서비스 이용 가능함</li>
                  <li>청약철회권 제한 사유</li>
                </ul>
              </div>

              <div>
                <strong>2. 이용자 동의</strong>
                <p className="ml-4 mt-2">결제 시 이용자는 다음 사항에 동의한 것으로 간주됩니다:</p>
                <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                  <li>환불 불가 정책에 대한 이해 및 동의</li>
                  <li>디지털 콘텐츠 특성상 청약철회 제한 동의</li>
                  <li>서비스 이용 즉시 개시에 대한 동의</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-sm text-red-800">
                  <strong>🚫 중요:</strong> 결제 완료와 동시에 서비스 이용이 시작되며, 이후 환불이 불가능합니다. 
                  결제 전 충분히 검토하시기 바랍니다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제5조 (문의 및 이의제기)</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <strong>1. 결제 관련 문의</strong>
                <p className="ml-4 mt-2">결제나 정책에 대한 문의는 다음 채널을 통해 가능합니다:</p>
                <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                  <li>이메일: support@noface.ai</li>
                  <li>고객센터: 02-1234-5678 (평일 09:00-18:00)</li>
                  <li>웹사이트 내 고객지원 센터</li>
                </ul>
              </div>

              <div>
                <strong>2. 이의제기 절차</strong>
                <p className="ml-4 mt-2">환불 불가 결정에 대한 이의제기는 다음 절차를 따릅니다:</p>
                <ol className="list-decimal list-inside ml-8 mt-2 space-y-1">
                  <li>이의제기 신청 (이메일 또는 고객센터)</li>
                  <li>관련 증빙 자료 제출</li>
                  <li>회사 내부 검토 (영업일 기준 5-7일)</li>
                  <li>최종 결정 통지</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>💡 참고:</strong> 이의제기가 받아들여지더라도 환불이 보장되는 것은 아니며, 
                  회사의 최종 검토 결과에 따라 결정됩니다.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제6조 (대안 서비스)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1. 무료 체험 서비스</strong>
                <p className="ml-4 mt-2">결제 전 서비스 품질을 확인할 수 있도록 제한된 무료 체험을 제공합니다:</p>
                <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                  <li>기본 기능 체험 (일일 제한)</li>
                  <li>샘플 콘텐츠 생성</li>
                  <li>인터페이스 및 사용법 확인</li>
                </ul>
              </div>
              
              <div>
                <strong>2. 고객 지원</strong>
                <p className="ml-4 mt-2">환불 대신 다음과 같은 지원을 제공합니다:</p>
                <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                  <li>상세한 사용법 안내 및 교육</li>
                  <li>기술적 문제 해결 지원</li>
                  <li>서비스 개선 요청 접수</li>
                  <li>맞춤형 사용 가이드 제공</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제7조 (법적 근거 및 권리)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1. 전자상거래법 적용</strong>
                <p className="ml-4 mt-2">전자상거래법 제17조 제2항 각 호에 따라 다음과 같은 사유로 청약철회가 제한됩니다:</p>
                <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                  <li>용역 또는 디지털콘텐츠의 제공이 개시된 경우</li>
                  <li>시간이 지나 재판매가 곤란할 정도로 재화의 가치가 현저히 감소한 경우</li>
                </ul>
              </div>
              
              <div>
                <strong>2. 소비자 권리</strong>
                <p className="ml-4 mt-2">이용자는 다음과 같은 권리를 가집니다:</p>
                <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                  <li>소비자분쟁조정위원회 조정 신청권</li>
                  <li>공정거래위원회 신고권</li>
                  <li>관할 법원 소송 제기권</li>
                </ul>
              </div>
              
              <div>
                <strong>3. 특수 상황</strong>
                <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                  <li><strong>베타 서비스:</strong> 베타 서비스는 무료 제공이 원칙이며, 유료 베타의 경우 별도 고지</li>
                  <li><strong>기업 계약:</strong> 기업 고객과의 별도 계약 조건이 우선 적용</li>
                  <li><strong>프로모션:</strong> 할인 또는 무료 프로모션 서비스는 더욱 엄격한 환불 제한 적용</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제8조 (정책 변경 및 시행)</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1. 정책 변경</strong>
                <p className="ml-4 mt-2">본 환불 정책은 다음과 같은 경우 변경될 수 있습니다:</p>
                <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                  <li>관련 법령의 제정 또는 개정</li>
                  <li>회사 서비스 정책의 변경</li>
                  <li>소비자 보호를 위한 개선</li>
                </ul>
              </div>
              
              <div>
                <strong>2. 변경 고지</strong>
                <p className="ml-4 mt-2">정책 변경시 최소 7일 전 다음 방법으로 고지합니다:</p>
                <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                  <li>웹사이트 공지사항</li>
                  <li>이메일 통지 (회원)</li>
                  <li>앱 내 알림</li>
                </ul>
              </div>
              
              <div>
                <strong>3. 적용 원칙</strong>
                <p className="ml-4 mt-2">정책 변경 시 다음 원칙을 적용합니다:</p>
                <ul className="list-disc list-inside ml-8 mt-2 space-y-1">
                  <li>변경 전 결제 건은 기존 정책 적용</li>
                  <li>변경 후 결제 건은 새 정책 적용</li>
                  <li>이용자에게 불리한 변경은 별도 동의 절차</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">제9조 (연락처)</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="space-y-2 text-gray-700">
                <div><strong>고객지원 담당부서:</strong> 고객지원팀</div>
                <div><strong>일반 문의:</strong> support@noface.ai</div>
                <div><strong>결제/환불 문의:</strong> billing@noface.ai</div>
                <div><strong>전화:</strong> 02-1234-5678</div>
                <div><strong>운영시간:</strong> 평일 09:00-18:00 (주말 및 공휴일 제외)</div>
                <div><strong>주소:</strong> 서울특별시 강남구 테헤란로 123, 노페이스 빌딩 5층</div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">부칙</h2>
            <div className="space-y-3 text-gray-700">
              <div>
                <strong>1.</strong> 본 환불 정책은 2024년 12월 1일부터 시행됩니다.
              </div>
              <div>
                <strong>2.</strong> 본 정책은 노페이스 서비스 이용약관과 함께 읽혀야 하며, 상충하는 내용이 있을 경우 본 환불 정책이 우선 적용됩니다.
              </div>
              <div>
                <strong>3.</strong> 본 정책에서 정하지 않은 사항은 전자상거래법, 소비자보호법 등 관련 법령에 따릅니다.
              </div>
            </div>
          </section>

          <div className="border-t pt-6 mt-8">
            <div className="bg-red-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-red-800 font-semibold">
                ⚠️ 중요 안내: 노페이스는 디지털 콘텐츠 서비스 특성상 환불이 불가능합니다. 
                결제 전 무료 체험을 통해 서비스를 충분히 확인하시기 바랍니다.
              </p>
            </div>
            <p className="text-sm text-gray-600">
              정책과 관련한 문의사항이 있으시면 
              <a href="mailto:billing@noface.ai" className="text-purple-600 hover:underline">billing@noface.ai</a>로 
              연락해 주세요.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
