import { useState } from 'react'
import './SocialStudyNew.css'

type TabType = 'UNIT9_1' | 'UNIT9_2' | 'UNIT10_1' | 'UNIT10_2'

export default function SocialStudyNew() {
  const [activeTab, setActiveTab] = useState<TabType>('UNIT9_1')

  return (
    <div className="social_dashboard">
      {/* 1. Sidebar */}
      <nav className="sidebar">
        <div className="sidebar_header">
          <h2>📚 사회 1</h2>
          <p className="sidebar_info">천재교육 | 중학교 1학년</p>
        </div>
        
        <div className="menu_section">
          <p style={{fontSize: '0.7rem', color: '#7f8c8d', marginBottom: '1rem', paddingLeft: '1rem'}}>단원 리스트</p>
          <div className={`menu_item ${activeTab.startsWith('UNIT9') ? 'active' : ''}`} onClick={() => setActiveTab('UNIT9_1')}>
            <span>IX. 정치와 민주주의</span>
          </div>
          <div className={`menu_item ${activeTab.startsWith('UNIT10') ? 'active' : ''}`} onClick={() => setActiveTab('UNIT10_1')}>
            <span>X. 정치과정과 시민 참여</span>
          </div>
        </div>

        <div style={{marginTop: 'auto', fontSize: '0.8rem', opacity: 0.5}}>
          <p>Page Range: 154 ~ 178</p>
          <p>Created by AI Study Mate</p>
        </div>
      </nav>

      {/* 2. Main Content Wrapper */}
      <main className="main_wrapper">
        <header style={{marginBottom: '3rem'}}>
          <h1 style={{fontSize: '2.5rem', marginBottom: '0.5rem'}}>
            {activeTab.startsWith('UNIT9') ? 'IX. 정치와 민주주의' : 'X. 정치과정과 시민 참여'}
          </h1>
          <p style={{color: '#7f8c8d'}}>교과서 핵심 내용을 구조화하여 정리하였습니다.</p>
        </header>

        {/* 3. Top Sub-Unit Tabs */}
        <div className="top_tabs">
          {activeTab.startsWith('UNIT9') ? (
            <>
              <button className={`tab_btn ${activeTab === 'UNIT9_1' ? 'active' : ''}`} onClick={() => setActiveTab('UNIT9_1')}>① 정치의 역할</button>
              <button className={`tab_btn ${activeTab === 'UNIT9_2' ? 'active' : ''}`} onClick={() => setActiveTab('UNIT9_2')}>② 민주주의 원리</button>
            </>
          ) : (
            <>
              <button className={`tab_btn ${activeTab === 'UNIT10_1' ? 'active' : ''}`} onClick={() => setActiveTab('UNIT10_1')}>① 선거와 정치과정</button>
              <button className={`tab_btn ${activeTab === 'UNIT10_2' ? 'active' : ''}`} onClick={() => setActiveTab('UNIT10_2')}>② 정치 주체와 참여</button>
            </>
          )}
        </div>

        {/* 4. Tab Contents */}
        <div className="content_area">
          {activeTab === 'UNIT9_1' && (
            <div className="study_card">
              <div className="card_header">
                <div className="card_title">📍 정치의 의미와 사회적 역할</div>
                <div style={{display: 'flex', gap: '5px'}}>
                  <span className="pill_tag exam">시험출제</span>
                  <span className="pill_tag page">pp. 154-155</span>
                </div>
              </div>
              
              <table className="study_table">
                <thead>
                  <tr>
                    <th style={{width: '25%'}}>구분</th>
                    <th>상세 내용</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>정치의 의미</strong></td>
                    <td>사회 구성원 간의 <span className="important_text">이해관계를 조율</span>하고 갈등을 해결하는 집단적 의사결정 과정</td>
                  </tr>
                  <tr>
                    <td><strong>정치의 역할</strong></td>
                    <td>사회적 희소가치(부, 권력 등)를 배분하여 사회 질서를 유지하고 공익을 실현함</td>
                  </tr>
                  <tr>
                    <td><strong>현상적 예시</strong></td>
                    <td>학급 회의, 층간소음 갈등 조절, 국가 간 영토 문제 협상 등</td>
                  </tr>
                </tbody>
              </table>

              <div style={{marginTop: '2rem', padding: '1.5rem', background: '#f0f9ff', borderRadius: '10px', borderLeft: '4px solid #3498db'}}>
                <h4 style={{marginBottom: '0.5rem', color: '#0369a1'}}>💡 왜 정치가 중요한가?</h4>
                <p style={{fontSize: '0.95rem', lineHeight: '1.7'}}>인간은 사회적 존재로 끊임없이 갈등할 수밖에 없습니다. <span className="important_text">정치가 부재할 경우 전면적인 혼란</span>에 빠지기 때문에 체계적인 조율 시스템이 필수적입니다.</p>
              </div>
            </div>
          )}

          {activeTab === 'UNIT9_2' && (
            <div className="study_card">
              <div className="card_header">
                <div className="card_title">⚖️ 민주주의의 근본 원리</div>
                <div style={{display: 'flex', gap: '5px'}}>
                  <span className="pill_tag important">핵심개념</span>
                  <span className="pill_tag page">pp. 156-161</span>
                </div>
              </div>
              
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem'}}>
                <div style={{padding: '1.2rem', border: '1px solid #e1e8ed', borderRadius: '12px'}}>
                  <h4 style={{color: '#2ecc71', marginBottom: '1rem'}}>민주주의의 이념</h4>
                  <ul style={{lineHeight: '2'}}>
                    <li><strong>인간의 존엄성</strong>: 존재 자체로 가치 있음</li>
                    <li><strong>자유</strong>: 스스로 결정하고 행동할 권리</li>
                    <li><strong>평등</strong>: 차별 없이 동등한 권리 부여</li>
                  </ul>
                </div>
                <div style={{padding: '1.2rem', border: '1px solid #e1e8ed', borderRadius: '12px'}}>
                  <h4 style={{color: '#e74c3c', marginBottom: '1rem'}}>정치 원리</h4>
                  <ul style={{lineHeight: '2'}}>
                    <li><strong>국민 주권</strong>: 국가 권력은 국민에게 있음</li>
                    <li><strong>권력 분립</strong>: 권력 독점 방지 (삼권 분립)</li>
                    <li><strong>법치주의</strong>: 법에 의한 국가 통치</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'UNIT10_1' && (
            <div className="study_card">
              <div className="card_header">
                <div className="card_title">🗳️ 선거의 4대 원칙과 절차</div>
                <div style={{display: 'flex', gap: '5px'}}>
                  <span className="pill_tag exam">암기필수</span>
                  <span className="pill_tag page">pp. 170-173</span>
                </div>
              </div>
              
              <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', margin: '1.5rem 0'}}>
                {['보통선거', '평등선거', '직접선거', '비밀선거'].map((v, i) => (
                  <div key={i} style={{textAlign: 'center', background: '#f8fafc', padding: '1.5rem 0.5rem', borderRadius: '12px', border: '1px solid #e2e8f0'}}>
                    <div style={{fontSize: '1.1rem', fontWeight: '800', color: '#1a2a40', marginBottom: '8px'}}>{v}</div>
                    <div style={{fontSize: '0.8rem', color: '#7f8c8d'}}>{
                      i === 0 ? '나이 제한 외 모두 참여' :
                      i === 1 ? '1인 1표 동일 가치' :
                      i === 2 ? '자신이 직접 투표' : '누구에게 표 줬는지 비밀'
                    }</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'UNIT10_2' && (
            <div className="study_card">
              <div className="card_header">
                <div className="card_title">🏢 다양한 정치 주체와 시민 활동</div>
                <div style={{display: 'flex', gap: '5px'}}>
                  <span className="pill_tag important">서술형대비</span>
                  <span className="pill_tag page">pp. 174-178</span>
                </div>
              </div>
              
              <table className="study_table">
                <thead>
                  <tr>
                    <th>주체</th>
                    <th>특징 및 역할</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>정당</strong></td>
                    <td>정치적 견해가 같은 사람들이 <span className="important_text">정권 획득</span>을 위해 조직한 집단</td>
                  </tr>
                  <tr>
                    <td><strong>이익 집단</strong></td>
                    <td>특수한 이익을 실현하기 위해 조직 (집단 이기주의 가능성)</td>
                  </tr>
                  <tr>
                    <td><strong>시민 단체</strong></td>
                    <td><span className="important_text">공익 실현</span>을 목적으로 자발적으로 활동하는 비영리 단체</td>
                  </tr>
                  <tr>
                    <td><strong>언론</strong></td>
                    <td>정보 전달, 여론 형성, 정치 권력에 대한 비판과 감시</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
