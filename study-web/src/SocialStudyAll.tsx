import { useState } from 'react'
import './SocialStudyAll.css'
import './SocialStudyNew.css'

const ALL_UNITS = [
  { id: 0, title: '0. 지리 기초', category: '기초' },
  { id: 1, title: '1. 아프리카', category: '세계지리' },
  { id: 2, title: '2. 아메리카', category: '세계지리' },
  { id: 3, title: '3. 오세아니아와 극지방', category: '세계지리' },
  { id: 4, title: '4. 유럽과 북부 아메리카', category: '세계지리' },
  { id: 5, title: '5. 동아시아', category: '세계지리' },
  { id: 6, title: '6. 서남아시아와 북아프리카', category: '세계지리' },
  { id: 7, title: '7. 인간과 사회생활', category: '사회' },
  { id: 8, title: '8. 다양한 문화의 이해', category: '사회' },
  { id: 9, title: '9. 민주주의와 시민', category: '사회' },
  { id: 10, title: '10. 정치과정과 시민 참여', category: '사회' },
  { id: 11, title: '11. 일상생활과 법', category: '사회' },
  { id: 12, title: '12. 인권과 기본권', category: '사회' },
]

export default function SocialStudyAll() {
  const [selectedUnit, setSelectedUnit] = useState(0)

  const currentUnit = ALL_UNITS.find(u => u.id === selectedUnit)

  return (
    <div className="social_dashboard">
      <nav className="sidebar" style={{ overflowY: 'auto' }}>
        <div className="sidebar_header">
          <h2 style={{color: '#3498db'}}>📚 사회 1 핵심 요약</h2>
          <p className="sidebar_info">천재교과서 기반 정밀 요약</p>
        </div>
        <div className="menu_section">
          {ALL_UNITS.map(unit => (
            <div key={unit.id} className={`menu_item ${selectedUnit === unit.id ? 'active' : ''}`} onClick={() => setSelectedUnit(unit.id)}>
              <span style={{fontSize: '0.7rem', opacity: 0.7, display: 'block', textTransform: 'uppercase'}}>{unit.category}</span>
              <span style={{fontWeight: selectedUnit === unit.id ? 'bold' : 'normal'}}>{unit.title}</span>
            </div>
          ))}
        </div>
      </nav>

      <main className="main_wrapper">
        <header style={{ marginBottom: '2rem' }}>
          <div className="pill_tag exam" style={{ marginBottom: '1rem' }}>CORE CONCEPT MASTER</div>
          <h1 style={{ fontSize: '2.2rem' }}>{currentUnit?.title}</h1>
          <p style={{ color: '#7f8c8d' }}>중학생을 위한 핵심 개념 정리 — 다이어그램 · 표 · 예시 포함</p>
        </header>

        <div className="content_area">
          {/* Unit 0: 지리 기초 */}
          {selectedUnit === 0 && (
            <>
              <div className="study_card">
                <div className="card_header"><div className="card_title">📍 0-1 위치 표현과 지도</div></div>
                <div className="grid-diagram">
                  <div className="grid-item"><strong>위도 (Latitude)</strong><br/>가로선, 적도 기준.<br/>기후 결정의 핵심 요소.</div>
                  <div className="grid-item"><strong>경도 (Longitude)</strong><br/>세로선, 본초 자오선 기준.<br/>시간 차이(15도=1시간) 결정.</div>
                </div>
                <div className="concept-box" style={{marginTop: '1.5rem'}}>
                  <p><strong>지도의 종류:</strong> 일반도(지형, 도로 등 종합), 주제도(인구, 기후 등 특정 주제)</p>
                </div>
              </div>
              <div className="study_card">
                <div className="card_header"><div className="card_title">🌦️ 0-2 기후와 지형 기초</div></div>
                <table className="study_table">
                  <thead><tr><th>기후대</th><th>특징</th></tr></thead>
                  <tbody>
                    <tr><td>열대</td><td>연중 고온 다우, 밀림 형성</td></tr>
                    <tr><td>건조</td><td>강수량 매우 적음, 사막/초원</td></tr>
                    <tr><td>온대</td><td>사계절 뚜렷, 인간 거주 유리</td></tr>
                    <tr><td>냉/한대</td><td>춥고 긴 겨울, 툰드라 등</td></tr>
                  </tbody>
                </table>
                <div className="grid-diagram" style={{marginTop: '1.5rem'}}>
                  <div className="node"><strong>신기 습곡 산지</strong><br/>높고 험준 (알프스, 안데스)<br/>화산/지진 잦음</div>
                  <div className="node"><strong>고기 습곡 산지</strong><br/>낮고 완만 (애팔래치아)<br/>지각 안정, 석탄 풍부</div>
                </div>
              </div>
            </>
          )}

          {/* Unit 1: 아프리카 */}
          {selectedUnit === 1 && (
            <>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">🌍 1-1 아프리카의 지리적 특성</div>
                </div>
                <div className="diagram-container">
                  <div className="mindmap">
                    <div className="root-node">아프리카</div>
                    <div className="grid-diagram" style={{marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem'}}>
                      <div className="node"><strong>위치</strong><br/>적도가 대륙 중앙 통과<br/>북쪽 지중해 연안, 남쪽 희망봉</div>
                      <div className="node"><strong>지형</strong><br/>넓은 고원 대륙, 나일강(최장)<br/>사하라 사막(최대), 콩고 분지</div>
                      <div className="node"><strong>기후</strong><br/>열대(적도), 건조(사막)<br/>지중해성(북·남부), 고산(동부)</div>
                    </div>
                  </div>
                </div>
                <table className="study_table">
                  <thead>
                    <tr><th>지역</th><th>기후</th><th>특징</th><th>대표 지역</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>적도 부근</td><td>열대우림기후</td><td>연중 고온다습, 밀림</td><td>콩고 분지</td></tr>
                    <tr><td>북부·남부</td><td>사바나기후</td><td>건기·우기 뚜렷</td><td>사헬 지대</td></tr>
                    <tr><td>사하라·칼라하리</td><td>사막기후</td><td>강수량 극히 적음</td><td>사하라 사막</td></tr>
                    <tr><td>지중해 연안</td><td>지중해성기후</td><td>여름 건조·겨울 습윤</td><td>튀니지, 남아공</td></tr>
                    <tr><td>동아프리카 고원</td><td>고산기후</td><td>고도 높아 선선</td><td>에티오피아</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">💎 1-2 아프리카의 문화와 지역 잠재력</div>
                </div>
                <p style={{marginBottom: '1.5rem'}}><strong>핵심 키워드:</strong> 구술 문화 · 공동체 문화 · 자원 부국</p>
                <div className="concept-box">
                  <p><strong>풍부한 천연자원 (세계 기준 비율):</strong> 다이아몬드 54%, 금 40%, 코발트 48%, 석유·가스 8%</p>
                </div>
                <table className="study_table" style={{marginTop: '1.5rem'}}>
                  <thead><tr><th>자원</th><th>주요 생산국</th></tr></thead>
                  <tbody>
                    <tr><td>석유</td><td>나이지리아, 앙골라, 알제리</td></tr>
                    <tr><td>금</td><td>남아프리카공화국, 가나</td></tr>
                    <tr><td>다이아몬드</td><td>보츠와나, DR콩고</td></tr>
                    <tr><td>코발트</td><td>DR콩고</td></tr>
                    <tr><td>카카오</td><td>코트디부아르, 가나</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">🌱 1-3 지속 가능한 발전을 위한 노력</div>
                </div>
                <div className="diagram-container">
                  <div className="process-flow">
                    <div className="flow-circle">아프리카 문제<br/><small>빈곤·기아, 환경파괴, 내전</small></div>
                    <div className="flow-connector"></div>
                    <div className="flow-circle">SDGs 달성 노력<br/><small>지속 가능한 발전 목표</small></div>
                    <div className="flow-connector"></div>
                    <div className="flow-circle">해결 방안<br/><small>농업 향상, 재생에너지, 교육</small></div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Unit 2: 아메리카 */}
          {selectedUnit === 2 && (
            <>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">🏔️ 2-1 아메리카의 국가와 자연환경</div>
                </div>
                <table className="study_table">
                  <thead><tr><th>구분</th><th>북아메리카</th><th>라틴아메리카</th></tr></thead>
                  <tbody>
                    <tr><td>대표 국가</td><td>미국, 캐나다</td><td>브라질, 멕시코, 아르헨티나</td></tr>
                    <tr><td>언어</td><td>영어</td><td>스페인어, 포르투갈어</td></tr>
                    <tr><td>기후</td><td>냉대~온대</td><td>열대~건조~온대</td></tr>
                    <tr><td>특징</td><td>선진국, 높은 GDP</td><td>개발도상국 다수</td></tr>
                  </tbody>
                </table>
                <div className="diagram-container">
                  <div className="mindmap">
                    <div className="root-node">아메리카 자연환경</div>
                    <div className="grid-diagram" style={{marginTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
                      <div className="node"><strong>북아메리카</strong><br/>로키산맥(서부), 애팔래치아(동부)<br/>미시시피강 대평원, 오대호</div>
                      <div className="node"><strong>라틴아메리카</strong><br/>안데스산맥(최장), 아마존강(열대우림)<br/>파타고니아 고원, 카리브해</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">👨‍👩‍👧‍👦 2-2 다양한 민족과 문화</div>
                </div>
                <h4 style={{marginBottom: '1rem'}}>문화 특징 비교</h4>
                <table className="study_table">
                  <thead><tr><th>지역</th><th>음식</th><th>음악·축제</th><th>종교</th></tr></thead>
                  <tbody>
                    <tr><td>멕시코</td><td>타코, 엔칠라다</td><td>마리아치, 카니발</td><td>가톨릭</td></tr>
                    <tr><td>브라질</td><td>슈하스코, 페이조아다</td><td>삼바, 리우 카니발</td><td>가톨릭</td></tr>
                    <tr><td>미국</td><td>햄버거, 바비큐</td><td>재즈, 블루스</td><td>개신교</td></tr>
                    <tr><td>페루</td><td>세비체</td><td>잉카 전통 의식</td><td>가톨릭+토착신앙</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">🏢 2-3 초국적 기업과 지역 변화</div>
                </div>
                <div className="concept-box">
                  <p><strong>초국적 기업:</strong> 여러 나라에 생산·판매 시설을 두고 세계적으로 활동하는 기업 (이윤 추구 + 일자리 창출)</p>
                </div>
              </div>
            </>
          )}

          {/* Unit 3: 오세아니아와 극지방 */}
          {selectedUnit === 3 && (
            <>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">🌊 3-1 오세아니아와 자원 수출</div>
                </div>
                <table className="study_table">
                  <thead><tr><th>자원</th><th>세계 순위</th><th>주요 수입국</th></tr></thead>
                  <tbody>
                    <tr><td>철광석</td><td>1위</td><td>중국</td></tr>
                    <tr><td>석탄</td><td>상위권</td><td>일본, 한국</td></tr>
                    <tr><td>천연가스</td><td>상위권</td><td>일본, 중국</td></tr>
                    <tr><td>양모</td><td>1위</td><td>중국, 이탈리아</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">❄️ 3-3 극지방의 중요성과 개발</div>
                </div>
                <table className="study_table">
                  <thead><tr><th>구분</th><th>북극</th><th>남극</th></tr></thead>
                  <tbody>
                    <tr><td>형태</td><td>빙하로 덮인 바다</td><td>대륙 위 빙하</td></tr>
                    <tr><td>영유권</td><td>주변 8개국 관할</td><td>남극조약 공동관리</td></tr>
                    <tr><td>중요성</td><td>북극 항로</td><td>과학기지 연구</td></tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Unit 4: 유럽과 북부 아메리카 */}
          {selectedUnit === 4 && (
            <>
              <div className="study_card">
                <div className="card_header"><div className="card_title">🏰 4-1 유럽의 자연과 산업</div></div>
                <div className="concept-box">
                  <p><strong>핵심:</strong> 산업 혁명의 발상지, 선진 공업국, 유럽 연합(EU) 통합</p>
                </div>
                <div className="grid-diagram">
                  <div className="node"><strong>혼합 농업</strong><br/>식량 작물 + 가축 사육</div>
                  <div className="node"><strong>수목 농업</strong><br/>지중해(포도, 올리브)</div>
                  <div className="node"><strong>낙농업</strong><br/>북해 연안(우유, 치즈)</div>
                </div>
              </div>
              <div className="study_card">
                <div className="card_header"><div className="card_title">🍎 4-2 북부 아메리카의 특징</div></div>
                <div className="concept-box">
                  <p><strong>적지적작:</strong> 기계화된 대규모 기업적 농업 (밀, 옥수수, 목축 벨트)</p>
                  <p><strong>멜팅 팟 → 샐러드 볼:</strong> 다양한 민족의 문화를 존중하는 다문화 사회</p>
                </div>
              </div>
              <div className="study_card">
                <div className="card_header"><div className="card_title">🌍 4-3 [심화] 세계의 문화 지역</div></div>
                <div className="diagram-container">
                  <div className="mindmap">
                    <div className="root-node">문화 지역</div>
                    <div className="grid-diagram" style={{marginTop: '2rem'}}>
                      <div className="node"><strong>동양</strong><br/>유교, 벼농사</div>
                      <div className="node"><strong>이슬람</strong><br/>건조기후, 알라</div>
                      <div className="node"><strong>유럽</strong><br/>산업화, 기독교</div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Unit 5: 동아시아 */}
          {selectedUnit === 5 && (
            <>
              <div className="study_card">
                <div className="card_header"><div className="card_title">🥢 5-1 동아시아의 문화와 기후</div></div>
                <div className="concept-box">
                  <p><strong>몬순(계절풍):</strong> 여름(고온다우 → 벼농사), 겨울(한랭건조)</p>
                  <p><strong>공통점:</strong> 유교·불교 영향, 한자 사용, 젓가락 문화</p>
                </div>
              </div>
              <div className="study_card">
                <div className="card_header"><div className="card_title">🌋 5-2 [심화] 지구의 자연재해</div></div>
                <div className="diagram-container">
                  <div className="process-flow">
                    <div className="flow-circle">지각 운동<br/><small>지진, 화산</small></div>
                    <div className="flow-connector"></div>
                    <div className="flow-circle">기상 현상<br/><small>태풍, 홍수</small></div>
                    <div className="flow-connector"></div>
                    <div className="flow-circle">불의 고리<br/><small>환태평양 조산대</small></div>
                  </div>
                </div>
                <div className="concept-box">
                  <p><strong>대응:</strong> 기상 예보 시스템, 내진 설계, 제방 건설 및 주민 대피 훈련</p>
                </div>
              </div>
            </>
          )}

          {/* Unit 6: 서남아시아와 북아프리카 */}
          {selectedUnit === 6 && (
            <>
              <div className="study_card">
                <div className="card_header"><div className="card_title">🕌 6-1 건조 기후와 이슬람</div></div>
                <div className="concept-box">
                  <p><strong>생활:</strong> 흙벽집, 온몸을 감싸는 옷, 유목 생활</p>
                  <p><strong>종교:</strong> 이슬람교(유일신 알라, 돼지고기 금지, 라마단 금식)</p>
                </div>
              </div>
              <div className="study_card">
                <div className="card_header"><div className="card_title">💎 6-2 [심화] 자원과 갈등</div></div>
                <div className="concept-box">
                  <p><strong>자원의 특성:</strong> 유한성(한계), 가변성(가치 변동), 편재성(일부 집중)</p>
                </div>
                <table className="study_table" style={{marginTop: '1.5rem'}}>
                  <thead><tr><th>자원</th><th>갈등 원인</th><th>지역</th></tr></thead>
                  <tbody>
                    <tr><td><strong>석유</strong></td><td>에너지 패권, 오일 머니</td><td>서남아시아, 카스피해</td></tr>
                    <tr><td><strong>물</strong></td><td>상류 댐 건설 분쟁</td><td>나일강, 티그리스강</td></tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Unit 7: 인간과 사회생활 */}
          {selectedUnit === 7 && (
            <>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">👤 7-1 사회화와 자아 정체성</div>
                </div>
                <div className="diagram-container">
                  <div className="process-flow">
                    <div className="flow-circle">가족<br/><small>1차적·기본적</small></div>
                    <div className="flow-connector"></div>
                    <div className="flow-circle">또래·학교<br/><small>공식적 교육</small></div>
                    <div className="flow-connector"></div>
                    <div className="flow-circle">대중 매체<br/><small>간접 경험</small></div>
                    <div className="flow-connector"></div>
                    <div className="flow-circle">자아 정체성<br/><small>형성</small></div>
                  </div>
                </div>
                <table className="study_table">
                  <thead><tr><th>구분</th><th>1차적 사회화 기관</th><th>2차적 사회화 기관</th></tr></thead>
                  <tbody>
                    <tr><td>예시</td><td>가족</td><td>학교, 직장, 대중매체</td></tr>
                    <tr><td>특징</td><td>친밀하고 자연스러운 관계</td><td>공식적이고 목적적 관계</td></tr>
                    <tr><td>시기</td><td>어린 시절 집중</td><td>청소년기 이후</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">💼 7-2 사회적 지위와 역할</div>
                </div>
                <div className="grid-diagram">
                  <div className="node"><strong>귀속 지위</strong><br/>선천적 (성별, 나이, 가문)</div>
                  <div className="node"><strong>성취 지위</strong><br/>노력으로 획득 (직업, 학력)</div>
                </div>
                <div className="concept-box" style={{marginTop: '1.5rem'}}>
                  <p><strong>역할 갈등:</strong> 지위에 따른 기대 행동이 충돌할 때 발생</p>
                </div>
              </div>
            </>
          )}

          {/* Unit 8: 다양한 문화의 이해 */}
          {selectedUnit === 8 && (
            <>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">🎨 8-1 문화의 특징</div>
                </div>
                <div className="grid-diagram">
                  <div className="node">공유성</div>
                  <div className="node">학습성</div>
                  <div className="node">축적성</div>
                  <div className="node">전체성</div>
                  <div className="node">변동성</div>
                </div>
              </div>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">🌏 8-3 문화를 이해하는 태도</div>
                </div>
                <table className="study_table">
                  <thead><tr><th>태도</th><th>설명</th><th>문제점</th></tr></thead>
                  <tbody>
                    <tr><td>자문화 중심주의</td><td>내 문화가 최고</td><td>갈등·분쟁 유발</td></tr>
                    <tr><td>문화 사대주의</td><td>타 문화가 우월</td><td>정체성 상실</td></tr>
                    <tr><td><strong>문화 상대주의</strong></td><td><strong>맥락에서 이해</strong></td><td><strong>바람직한 태도</strong></td></tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Unit 9: 민주주의와 시민 */}
          {selectedUnit === 9 && (
            <>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">🗳️ 9-1 정치와 민주주의 가치</div>
                </div>
                <div className="grid-diagram">
                  <div className="grid-item">인간 존엄성</div>
                  <div className="grid-item">자유</div>
                  <div className="grid-item">평등</div>
                </div>
              </div>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">📜 9-2 민주주의의 원리</div>
                </div>
                <table className="study_table">
                  <thead><tr><th>원리</th><th>의미</th></tr></thead>
                  <tbody>
                    <tr><td>국민주권</td><td>권력의 원천은 국민</td></tr>
                    <tr><td>권력분립</td><td>입법·행정·사법 분리</td></tr>
                    <tr><td>기본권 보장</td><td>국민 권리 보호</td></tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Unit 10: 정치과정 */}
          {selectedUnit === 10 && (
            <>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">🗳️ 10-1 선거의 4원칙</div>
                </div>
                <div className="grid-diagram">
                  <div className="grid-item">보통선거</div>
                  <div className="grid-item">평등선거</div>
                  <div className="grid-item">직접선거</div>
                  <div className="grid-item">비밀선거</div>
                </div>
              </div>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">🏛️ 10-2 정치 주체</div>
                </div>
                <table className="study_table">
                  <thead><tr><th>주체</th><th>역할</th></tr></thead>
                  <tbody>
                    <tr><td>정당</td><td>정권 획득, 정책화</td></tr>
                    <tr><td>이익집단</td><td>특정 집단 이익 대변</td></tr>
                    <tr><td>시민단체</td><td>공익 목적 감시</td></tr>
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* Unit 11: 일상생활과 법 */}
          {selectedUnit === 11 && (
            <>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">📜 11-2 우리 생활의 법</div>
                </div>
                <table className="study_table">
                  <thead><tr><th>법의 종류</th><th>내용</th></tr></thead>
                  <tbody>
                    <tr><td>헌법</td><td>최고 법규, 기본권</td></tr>
                    <tr><td>민법</td><td>개인 간 관계</td></tr>
                    <tr><td>형법</td><td>범죄와 형벌</td></tr>
                    <tr><td>사회법</td><td>약자 보호(노동법 등)</td></tr>
                  </tbody>
                </table>
              </div>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">👨‍⚖️ 11-3 공정한 재판 (3심제)</div>
                </div>
                <div className="concept-box">
                  <p>지방법원(1심) → 고등법원(2심, 항소) → 대법원(3심, 상고)</p>
                  <p style={{marginTop: '1rem'}}>* 원칙: 법관 독립, 공개 재판, 무죄 추정</p>
                </div>
              </div>
            </>
          )}

          {/* Unit 12: 인권과 기본권 */}
          {selectedUnit === 12 && (
            <>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">🌍 12-1 헌법상 기본권</div>
                </div>
                <div className="grid-diagram">
                  <div className="grid-item">자유권</div>
                  <div className="grid-item">평등권</div>
                  <div className="grid-item">참정권</div>
                  <div className="grid-item">사회권</div>
                  <div className="grid-item">청구권</div>
                </div>
              </div>
              <div className="study_card">
                <div className="card_header">
                  <div className="card_title">👷 12-3 근로자의 권리</div>
                </div>
                <div className="concept-box">
                  <p><strong>노동 3권:</strong> 단결권, 단체교섭권, 단체행동권</p>
                  <p style={{marginTop: '1rem'}}><strong>보호법:</strong> 최저임금법, 근로기준법</p>
                </div>
              </div>
            </>
          )}

          {/* Summary Section */}
          <div className="study_card" style={{borderTop: '4px solid #3498db'}}>
            <div className="card_header"><div className="card_title">📝 단원별 핵심 정리</div></div>
            <table className="study_table">
              <thead><tr><th>단원</th><th>핵심 개념</th></tr></thead>
              <tbody>
                <tr><td>지리 기초</td><td>위도·경도, 5대 기후, 습곡 산지</td></tr>
                <tr><td>아프리카</td><td>다양한 기후대, SDGs</td></tr>
                <tr><td>아메리카</td><td>다인종 사회, 초국적 기업</td></tr>
                <tr><td>오세아니아</td><td>자원 수출, 환경 위기</td></tr>
                <tr><td>유럽·북미</td><td>EU, 기업적 농업, 샐러드 볼</td></tr>
                <tr><td>동아시아</td><td>벼농사, 자연재해(불의 고리)</td></tr>
                <tr><td>서남아시아</td><td>건조 기후, 자원 갈등(석유)</td></tr>
                <tr><td>사회/정치</td><td>사회화, 민주주의, 법과 인권</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  )
}
