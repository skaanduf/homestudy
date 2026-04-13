import { useState } from 'react'
import './SocialStudyAll.css'
import './SocialStudyNew.css'

const ALL_UNITS = [
  { id: 1, title: 'I. 내가 사는 세계', pages: 'pp. 10-25' },
  { id: 2, title: 'II. 우리와 다른 기후와 생활', pages: 'pp. 26-45' },
  { id: 3, title: 'III. 자연으로 떠나는 여행', pages: 'pp. 46-65' },
  { id: 4, title: 'IV. 다양한 세계 문화', pages: 'pp. 66-85' },
  { id: 5, title: 'V. 지구 곳곳의 자연재해', pages: 'pp. 86-105' },
  { id: 6, title: 'VI. 자원과 갈등', pages: 'pp. 106-125' },
  { id: 7, title: 'VII. 인구 변화와 문제', pages: 'pp. 126-145' },
  { id: 8, title: 'VIII. 도시화와 살기 좋은 도시', pages: 'pp. 146-173' },
  { id: 9, title: 'IX. 정치와 민주주의', pages: 'pp. 174-195' },
  { id: 10, title: 'X. 정치과정과 시민 참여', pages: 'pp. 196-215' },
  { id: 11, title: 'XI. 일상생활과 법', pages: 'pp. 216-235' },
  { id: 12, title: 'XII. 인권과 기본권', pages: 'pp. 236-255' },
]

export default function SocialStudyAll() {
  const [selectedUnit, setSelectedUnit] = useState(1)

  return (
    <div className="social_dashboard">
      <nav className="sidebar" style={{ overflowY: 'auto' }}>
        <div className="sidebar_header">
          <h2 style={{color: '#3498db'}}>📚 사회 1 전과정</h2>
          <p className="sidebar_info">전단원 초정밀 요약 Dashboard</p>
        </div>
        <div className="menu_section">
          {ALL_UNITS.map(unit => (
            <div key={unit.id} className={`menu_item ${selectedUnit === unit.id ? 'active' : ''}`} onClick={() => setSelectedUnit(unit.id)}>
              <span>{unit.title}</span>
            </div>
          ))}
        </div>
      </nav>

      <main className="main_wrapper">
        <header style={{ marginBottom: '2rem' }}>
          <div className="pill_tag exam" style={{ marginBottom: '1rem' }}>FULL COURSE MASTER</div>
          <h1 style={{ fontSize: '2.2rem' }}>{ALL_UNITS.find(u => u.id === selectedUnit)?.title}</h1>
          <p style={{ color: '#7f8c8d' }}>모든 핵심 개념 다이어그램 정리</p>
        </header>

        <div className="content_area">
          {/* Unit 1: 내가 사는 세계 */}
          {selectedUnit === 1 && (
            <div className="study_card">
              <div className="card_header">
                <div className="card_title">📍 위치 표현과 지도</div>
              </div>
              <div className="grid-diagram">
                <div className="grid-item"><strong>위도와 경도</strong><br/>위도(가로, 기후 결정), 경도(세로, 시간 결정)</div>
                <div className="grid-item"><strong>우리나라 위치</strong><br/>북위 33~43°, 동경 124~132° (중위도, 동북아시아)</div>
              </div>
              <div className="diagram-container">
                  <div className="mindmap">
                    <div className="root-node">지도의 종류</div>
                    <div className="child-nodes">
                      <div className="node"><strong>일반도</strong><br/>지형, 도로 등 종합 정보</div>
                      <div className="node"><strong>주제도</strong><br/>인구, 강수량 등 특정 주제</div>
                    </div>
                  </div>
              </div>
            </div>
          )}

          {/* Unit 2: 기후와 생활 */}
          {selectedUnit === 2 && (
            <div className="study_card">
              <div className="card_header">
                <div className="card_title">🌦️ 세계의 5대 기후대 비교</div>
              </div>
              <table className="study_table">
                <thead>
                  <tr>
                    <th>기후대</th>
                    <th>주요 특징</th>
                    <th>생활 양식(의식주)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td><strong>열대</strong></td><td>연중 고온 다우, 스콜</td><td>고상 가옥, 얇은 옷, 향신료</td></tr>
                  <tr><td><strong>건조</strong></td><td>강수량 부족, 사막/초원</td><td>흙벽집(작은 창), 긴 옷, 유목</td></tr>
                  <tr><td><strong>온대</strong></td><td>사계절 뚜렷, 인간 거주 유리</td><td>다양한 농업, 계절별 의복</td></tr>
                  <tr><td><strong>냉대</strong></td><td>길고 추운 겨울, 타이가(침엽수)</td><td>통나무집, 임업 발달</td></tr>
                  <tr><td><strong>한대</strong></td><td>몹시 추움, 툰드라</td><td>폐쇄적 가옥, 순록 유목</td></tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Unit 3: 자연 지형 */}
          {selectedUnit === 3 && (
            <div className="study_card">
              <div className="card_header">
                <div className="card_title">⛰️ 산지 및 해안 지형</div>
              </div>
              <div className="comparison-grid">
                <div className="comp-box">
                  <h4 style={{color: '#3498db'}}>신기 습곡 산지</h4>
                  <p>높고 험준함 (히말라야, 알프스, 안데스)</p>
                  <small>자원: 구리, 석유 등</small>
                </div>
                <div className="vs-circle">VS</div>
                <div className="comp-box">
                  <h4 style={{color: '#e67e22'}}>고기 습곡 산지</h4>
                  <p>완만하고 낮음 (애팔래치아, 우랄)</p>
                  <small>자원: 석탄 풍부</small>
                </div>
              </div>
            </div>
          )}

          {/* Unit 4: 다양한 문화 */}
          {selectedUnit === 4 && (
            <div className="study_card">
              <div className="card_header">
                <div className="card_title">🌍 세계의 종교와 문화</div>
              </div>
              <div className="grid-diagram">
                <div className="grid-item"><strong>불교</strong><br/>자비, 윤회 (동부/동남아시아)</div>
                <div className="grid-item"><strong>크리스토교</strong><br/>사랑, 박애 (유럽, 아메리카)</div>
                <div className="grid-item"><strong>이슬람교</strong><br/>유일신 알라, 메카 (서남아시아, 아프리카)</div>
                <div className="grid-item"><strong>힌두교</strong><br/>카스트 제도 영향, 소 숭배 (인도)</div>
              </div>
            </div>
          )}

          {/* Unit 5: 자연재해 */}
          {selectedUnit === 5 && (
            <div className="study_card">
              <div className="card_header">
                <div className="card_title">⚠️ 자연재해의 원인과 대책</div>
              </div>
              <div className="diagram-container">
                <div className="process-flow">
                  <div className="flow-circle">발생 원인<br/><small>지각 변동<br/>기상 현상</small></div>
                  <div className="flow-connector"></div>
                  <div className="flow-circle">피해 종류<br/><small>지진, 태풍<br/>홍수, 가뭄</small></div>
                  <div className="flow-connector"></div>
                  <div className="flow-circle">대응 방안<br/><small>예보 시스템<br/>내진 설계</small></div>
                </div>
              </div>
            </div>
          )}

          {/* Unit 6: 자원과 갈등 */}
          {selectedUnit === 6 && (
            <div className="study_card">
              <div className="card_header">
                <div className="card_title">💎 자원의 특성과 갈등</div>
              </div>
              <div className="concept-box">
                <p><strong>자원의 3가지 특성:</strong> 가변성(가치 변동), 유한성(매장량 한계), 편재성(일부 지역 분포)</p>
              </div>
              <table className="study_table" style={{marginTop: '1.5rem'}}>
                <thead><tr><th>자원 유형</th><th>핵심 내용</th></tr></thead>
                <tbody>
                  <tr><td>석유/천연가스</td><td>서남아시아 집중, 갈등 심화 지역</td></tr>
                  <tr><td>생산 비중</td><td>중국(희토류), 오스트레일리아(철광석)</td></tr>
                </tbody>
              </table>
            </div>
          )}

          {/* Unit 7: 인구 변화 */}
          {selectedUnit === 7 && (
            <div className="study_card">
              <div className="card_header">
                <div className="card_title">👪 세계의 인구 문제</div>
              </div>
              <div className="comparison-grid">
                <div className="comp-box">
                  <h4 style={{color: '#ef4444'}}>개발도상국</h4>
                  <p>급격한 인구 증가</p>
                  <small>문제: 기아, 빈곤, 실업</small>
                </div>
                <div className="vs-circle">↔️</div>
                <div className="comp-box">
                  <h4 style={{color: '#3b82f6'}}>선진국</h4>
                  <p>저출산 및 고령화</p>
                  <small>문제: 노동력 부족, 복지 비용</small>
                </div>
              </div>
            </div>
          )}

          {/* Unit 8: 도시화 */}
          {selectedUnit === 8 && (
            <div className="study_card">
              <div className="card_header">
                <div className="card_title">🏙️ 도시화와 도시 문제</div>
              </div>
              <div className="diagram-container">
                <div className="mindmap">
                  <div className="root-node">도시 문제</div>
                  <div className="child-nodes">
                    <div className="node"><strong>주택/교통</strong><br/>슬럼가, 교통 혼잡</div>
                    <div className="node"><strong>환경</strong><br/>대기 오염, 열섬 현상</div>
                  </div>
                </div>
              </div>
              <div style={{marginTop: '1.5rem', fontStyle: 'italic', color: '#64748b'}}>* 살기 좋은 도시: 삶의 질, 안전, 문화 시설이 균형 잡힌 도시</div>
            </div>
          )}

          {/* Unit 9~12 (정리된 심화 내용 유지) */}
          {selectedUnit === 9 && (
            <div className="study_card">
              <div className="card_header"><div className="card_title">⚖️ 정치와 민주주의 심화</div></div>
              <div className="diagram-container">
                <div className="process-flow">
                  <div className="flow-circle">고대 아테네<br/><small>직접 민주 정치</small></div>
                  <div className="flow-connector"></div>
                  <div className="flow-circle">근대 시민 혁명<br/><small>민주주의 확립</small></div>
                  <div className="flow-connector"></div>
                  <div className="flow-circle">현대 대중 사회<br/><small>보통 선거 완성</small></div>
                </div>
              </div>
              <div className="grid-diagram">
                 <div className="grid-item">국민 주권</div><div className="grid-item">권력 분립</div>
                 <div className="grid-item">국민 자치</div><div className="grid-item">법치주의</div>
              </div>
            </div>
          )}

          {selectedUnit === 10 && (
            <div className="study_card">
              <div className="card_header"><div className="card_title">🗳️ 정치 과정과 시민 참여</div></div>
              <div className="comparison-grid">
                <div className="comp-box"><h4>정당</h4><p>정권 획득 목표</p></div>
                <div className="vs-circle">VS</div>
                <div className="comp-box"><h4>시민단체</h4><p>공익 실현 목표</p></div>
              </div>
            </div>
          )}

          {selectedUnit === 11 && (
            <div className="study_card">
              <div className="card_header"><div className="card_title">📜 일상생활과 법</div></div>
              <div className="grid-diagram">
                <div className="grid-item"><strong>공법</strong><br/>헌법, 형법, 행정법</div>
                <div className="grid-item"><strong>사법</strong><br/>민법, 상법</div>
                <div className="grid-item"><strong>사회법</strong><br/>노동법, 경제법</div>
              </div>
            </div>
          )}

          {selectedUnit === 12 && (
            <div className="study_card">
              <div className="card_header"><div className="card_title">🌍 인권 보장과 기본권</div></div>
              <div className="grid-diagram">
                <div className="grid-item">자유권</div><div className="grid-item">평등권</div>
                <div className="grid-item">참정권</div><div className="grid-item">사회권</div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
