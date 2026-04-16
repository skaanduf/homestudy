import './SocialStudy.css'

const sections = [
  {
    unit: '단원 1',
    title: '내가 사는 세계 (지리 기초)',
    color: 'orange',
    topics: [
      {
        num: '①',
        title: '위치 표현과 기후, 지형',
        pages: 'pp.12~28',
        content: [
          {
            type: 'table',
            title: '위도와 경도의 비교',
            headers: ['구분', '위도', '경도'],
            rows: [
              ['기준선', '적도 (가로선)', '본초 자오선 (세로선)'],
              ['가장 큰 영향', '기후 차이 발생', '시간 차이 발생'],
            ]
          },
          {
            type: 'table',
            title: '습곡 산지 비교',
            headers: ['특징', '신기 습곡 산지', '고기 습곡 산지'],
            rows: [
              ['모양 매장', '비교적 최근 생성, 험준, 석유/구리', '오래전 생성, 완만, 석탄/철광석'],
            ]
          },
          {
            type: 'quiz',
            difficulty: '보통',
            question: '다음 [도표]는 세계의 시차 계산 원리를 나타낸 것이다. 이를 바탕으로 추론한 내용 중 가장 옳은 것은?',
            context: '(서경) -1시간 ← | ... | 런던(본초 자오선 0도, 오전 9시) | ... | → +1시간 (동경)\n* 15도 이동할 때마다 1시간의 시차가 발생함.',
            choices: [
              '경도선은 기후대를 결정짓는 가장 중요한 기준선이다.',
              '런던에서 동쪽으로 이동할수록 시간이 점차 느려진다.',
              '런던이 오전 9시라면, 동경 135도에 위치한 대한민국은 오후 6시일 것이다.',
              '서경 15도에 위치한 도시는 런던보다 시간이 1시간 빠를 것이다.',
              '시차를 결정하는 것은 위도이며, 계절은 경도이다.'
            ],
            answer: 3,
            explanation: '지구는 24시간 동안 360도를 자전하므로 1시간에 15도씩 회전합니다. 동쪽은 런던보다 해를 일찍 보므로 시간이 빠릅니다. 동경 135도는 런던(0도)과 135/15 = 9시간 차이가 나며 런던의 오전 9시 + 9시간 = 오후 6시가 됩니다. 그리고 기후는 위도, 시차는 경도가 결정합니다.'
          },
          {
            type: 'quiz',
            difficulty: '어려움',
            question: '다음 지도 정보의 A, B 지역 산지 지형과 관련된 설명이다. 주어진 정보로 옳은 것은?',
            context: '[지도 정보]\n* A (환태평양 조산대) : 로키 산맥 및 안데스 산맥 지역\n* B (대륙 내부) : 애팔래치아 산맥 및 우랄 산맥 지역',
            choices: [
              'A지역 산지들은 오랜 기간 침식을 받아 해발 고도가 낮고 완만하다.',
              'B지역은 고기 습곡 산지로 분류되며 석탄이나 철광석이 풍부하다.',
              'A지역의 산지는 B지역 산지보다 먼저 생성되었 기 때문에 험준한 산세를 유지한다.',
              'B지역은 지각 변동이 활발해 지진과 화산 활동이 빈번하다.',
              'A지역과 B지역은 모두 계절풍의 강한 영향을 받아 벼농사가 발달한다.'
            ],
            answer: 2,
            explanation: 'B지역(우랄, 애팔래치아)은 오랜 침식으로 완만하고 석탄/철광석이 많은 고기 습곡 산지입니다. 반면 A지역(로키, 안데스)은 최근에 생성되어 험준하고 화산/지진이 잦은 신기 습곡 산지입니다.'
          },
          {
            type: 'quiz',
            difficulty: '쉬움',
            question: '지구의 위치 표현이다. A(가로선)와 B(세로선)에 들어갈 개념과 연결 특징으로 올바르게 짝지어진 것은?',
            context: '- (A) : 적도 기준 가로선, 각 지역의 [ㄱ] 분포에 영향\n- (B) : 본초 자오선 기준 세로선, 각 지역의 [ㄴ] 차이 발생에 영향',
            choices: [
              'A: 위도, B: 경도, ㄱ: 기후, ㄴ: 시간',
              'A: 위도, B: 경도, ㄱ: 시간, ㄴ: 기후',
              'A: 경도, B: 위도, ㄱ: 지형, ㄴ: 기후',
              'A: 경도, B: 위도, ㄱ: 시간, ㄴ: 지형',
              'A: 위도, B: 고도, ㄱ: 화산, ㄴ: 계절'
            ],
            answer: 1,
            explanation: '적도를 기준으로 하는 가로선은 위도(A)이며 태양 에너지를 받는 양이 달라져 기후(ㄱ) 분포에 영향을 줍니다. 본초 자오선을 기준으로 하는 세로선은 경도(B)이며 지구가 자전함에 따라 시간(ㄴ) 차이를 일으킵니다.'
          }
        ]
      }
    ]
  },
  {
    unit: '단원 9',
    title: '정치와 민주주의',
    color: 'blue',
    topics: [
      {
        num: '①',
        title: '정치가 어떤 역할을 하나?',
        pages: 'pp.154~155',
        content: [
          {
            type: 'definition',
            term: '정치의 의미',
            desc: '사람들이 함께 살면서 생기는 갈등과 이해관계를 조율하고, 공동의 문제를 해결하는 집단적 의사 결정 활동',
          },
          {
            type: 'list',
            title: '정치의 역할',
            items: [
              '규칙(법)을 만들어 사회 질서를 유지한다',
              '사회 구성원의 요구를 반영해 공익을 실현한다',
              '다양한 이해관계를 조율해 갈등을 해결한다',
            ],
          },
          {
            type: 'example',
            title: '정치 행위의 예',
            text: '학급 회의, 지역 주민 회의, 국회 입법 등',
          },
        ],
      },
      {
        num: '②',
        title: '민주주의는 무엇이고 왜 필요한가?',
        pages: 'pp.156~157',
        content: [
          {
            type: 'definition',
            term: '민주주의의 의미',
            desc: '"국민이 주인인 정치" — 사회 구성원 모두가 주권을 가지고 스스로를 다스리는 정치 체제',
          },
          {
            type: 'list',
            title: '민주주의가 필요한 이유',
            items: [
              '사람마다 생각과 이해관계가 다름',
              '다양한 의견을 민주적으로 조율하지 않으면 갈등이 심화됨',
              '모든 구성원의 자유와 권리를 보장하기 위해 필요',
            ],
          },
          {
            type: 'example',
            title: '민주주의 실천 방법',
            text: '대화, 타협, 다수결, 소수 의견 존중',
          },
        ],
      },
      {
        num: '③',
        title: '민주주의의 발전 과정과 원리',
        pages: 'pp.158~161',
        content: [
          {
            type: 'timeline',
            title: '민주주의 발전 과정',
            steps: [
              { label: '고대 그리스 아테네', desc: '직접 민주주의 시작 (단, 노예·여성 제외)' },
              { label: '근대 시민 혁명', desc: '영국 명예혁명·미국 독립혁명·프랑스 혁명 → 자유·평등 권리 확대' },
              { label: '현대 민주주의', desc: '보통선거 확립 + 대의(간접) 민주주의로 발전' },
            ],
          },
          {
            type: 'table',
            title: '민주주의 3대 이념과 원리',
            headers: ['이념·원리', '내용'],
            rows: [
              ['인간의 존엄성', '모든 사람은 존엄하며 그 자체로 가치 있음'],
              ['자유', '스스로 판단하고 행동할 수 있는 권리'],
              ['평등', '모든 사람이 차별 없이 동등하게 대우받음'],
            ],
          },
        ],
      },
      {
        num: '④',
        title: '현대 민주주의의 특징과 발전을 위한 노력',
        pages: 'pp.162~167',
        content: [
          {
            type: 'definition',
            term: '대의 민주주의 (간접 민주주의)',
            desc: '시민이 대표자를 선출해 대신 정치하게 하는 방식 — 현대 국가의 기본 형태',
          },
          {
            type: 'list',
            title: '현대 민주주의의 과제',
            items: [
              '정치 무관심 증가',
              '대표자가 시민 의견을 제대로 반영 못 하는 문제',
            ],
          },
          {
            type: 'list',
            title: '보완 제도 (직접 민주주의 요소)',
            items: [
              '국민 투표 — 중요 국가 사안을 국민이 직접 결정',
              '주민 발의 — 주민이 직접 조례 제정을 요구',
              '주민 소환 — 문제 있는 공직자를 임기 중에 해임',
            ],
          },
          {
            type: 'example',
            title: '시민 참여 방법',
            text: '선거 참여, 시민 단체 활동, 청원, 집회·시위 등',
          },
        ],
      },
    ],
  },
  {
    unit: '단원 10',
    title: '정치과정과 시민 참여',
    color: 'green',
    topics: [
      {
        num: '①',
        title: '선거의 의미와 시민의 역할',
        pages: 'pp.170~173',
        content: [
          {
            type: 'definition',
            term: '선거의 의미',
            desc: '시민이 자신을 대표할 사람을 직접 뽑는 민주주의의 핵심 절차',
          },
          {
            type: 'list',
            title: '선거의 기능',
            items: [
              '대표자 선출',
              '정치권력에 정당성 부여',
              '대표자 통제 (잘못하면 다음 선거에서 심판)',
              '시민의 의견을 정치에 반영',
            ],
          },
          {
            type: 'table',
            title: '민주 선거의 4대 원칙',
            headers: ['원칙', '내용'],
            rows: [
              ['보통 선거', '일정 나이 이상 모든 국민에게 투표권 부여'],
              ['평등 선거', '1인 1표, 모든 표의 가치가 동등'],
              ['직접 선거', '본인이 직접 투표 (대리 불가)'],
              ['비밀 선거', '누구에게 투표했는지 비밀 보장'],
            ],
          },
        ],
      },
      {
        num: '②',
        title: '정치 주체와 정치과정',
        pages: 'pp.174~177',
        content: [
          {
            type: 'table',
            title: '정치 주체의 종류와 역할',
            headers: ['주체', '역할'],
            rows: [
              ['국가기관 (국회·행정부·법원)', '법 제정, 정책 집행, 법적 심판'],
              ['정당', '같은 정치적 의견을 가진 집단, 선거 후보 추천·정책 제시'],
              ['이익집단', '특정 집단의 이익 대변 (노동조합, 경제단체 등)'],
              ['시민단체', '공익을 위해 자발적 활동 (환경·인권 단체 등)'],
              ['언론', '정보 전달, 여론 형성, 정치권력 감시'],
            ],
          },
          {
            type: 'flow',
            title: '정치과정의 흐름',
            steps: [
              '시민의 요구·지지',
              '정치 주체들이 의견 수렴',
              '정책 결정',
              '정책 집행',
              '평가·환류',
            ],
          },
        ],
      },
      {
        num: '③',
        title: '지방자치와 시민 참여',
        pages: 'pp.178~',
        content: [
          {
            type: 'definition',
            term: '지방 자치',
            desc: '지역 주민이 스스로 지역 문제를 결정하고 처리하는 제도 → "민주주의의 학교"',
          },
          {
            type: 'list',
            title: '지방 자치의 의의',
            items: [
              '중앙 정부의 권한 분산 → 권력 남용 방지',
              '지역 특성에 맞는 행정 가능',
              '주민이 직접 정치에 참여하는 경험 → 민주주의 생활화',
            ],
          },
          {
            type: 'table',
            title: '지방 자치 기관',
            headers: ['기관', '역할'],
            rows: [
              ['지방 의회', '조례 제정, 예산 심의·의결'],
              ['지방 자치 단체장', '행정 집행 (시장, 도지사, 군수 등)'],
            ],
          },
          {
            type: 'list',
            title: '시민이 지역사회 문제 해결에 참여하는 방법',
            items: [
              '지역 선거 참여 (지방의회 의원·단체장 선출)',
              '주민 발의·주민 소환·주민 투표',
              '지역 시민단체 활동',
              '공청회·주민 회의 참석',
            ],
          },
        ],
      },
    ],
  },
]

type Content =
  | { type: 'definition'; term: string; desc: string }
  | { type: 'list'; title: string; items: string[] }
  | { type: 'example'; title: string; text: string }
  | { type: 'table'; title: string; headers: string[]; rows: string[][] }
  | { type: 'timeline'; title: string; steps: { label: string; desc: string }[] }
  | { type: 'flow'; title: string; steps: string[] }
  | { type: 'quiz'; difficulty: string; question: string; context?: string; choices: string[]; answer: number; explanation: string }

function renderContent(c: Content, i: number) {
  switch (c.type) {
    case 'definition':
      return (
        <div key={i} className="card definition">
          <span className="tag">핵심 개념</span>
          <strong>{c.term}</strong>
          <p>{c.desc}</p>
        </div>
      )
    case 'list':
      return (
        <div key={i} className="card list-card">
          <h4>{c.title}</h4>
          <ul>
            {c.items.map((item, j) => <li key={j}>{item}</li>)}
          </ul>
        </div>
      )
    case 'example':
      return (
        <div key={i} className="card example">
          <span className="tag example-tag">예시</span>
          <strong>{c.title}</strong>
          <p>{c.text}</p>
        </div>
      )
    case 'table':
      return (
        <div key={i} className="card table-card">
          <h4>{c.title}</h4>
          <table>
            <thead>
              <tr>{c.headers.map((h, j) => <th key={j}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {c.rows.map((row, j) => (
                <tr key={j}>{row.map((cell, k) => <td key={k}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'timeline':
      return (
        <div key={i} className="card timeline-card">
          <h4>{c.title}</h4>
          <div className="timeline">
            {c.steps.map((s, j) => (
              <div key={j} className="timeline-item">
                <div className="timeline-dot">{j + 1}</div>
                <div>
                  <strong>{s.label}</strong>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    case 'flow':
      return (
        <div key={i} className="card flow-card">
          <h4>{c.title}</h4>
          <div className="flow">
            {c.steps.map((s, j) => (
              <div key={j} className="flow-row">
                <div className="flow-box">{s}</div>
                {j < c.steps.length - 1 && <div className="flow-arrow">▼</div>}
              </div>
            ))}
          </div>
        </div>
      )
    case 'quiz':
      return (
        <div key={i} className="card quiz-card">
          <div className="quiz-header">
            <span className={`quiz-badge diff-${c.difficulty}`}>{c.difficulty}</span>
            <h4 className="quiz-q">{c.question}</h4>
          </div>
          {c.context && <pre className="quiz-context">{c.context}</pre>}
          <ol className="quiz-choices">
            {c.choices.map((choice, j) => (
              <li key={j}>{choice}</li>
            ))}
          </ol>
          <details className="quiz-exp">
            <summary>정답 및 해설 보기</summary>
            <div className="quiz-exp-content">
              <strong>정답: {c.answer}번</strong>
              <p>{c.explanation}</p>
            </div>
          </details>
        </div>
      )
  }
}

export default function SocialStudy() {
  return (
    <div className="social-study">
      <header className="study-header">
        <div className="header-badge">사회 1</div>
        <h1>중등 사회 전체 요약 밎 실전 모의고사</h1>
        <p className="subtitle">교과서 핵심 요약 및 표/그래프 실전 출제 문제 풀이</p>
        <div className="page-range">📖 단원 1 · 단원 9 · 단원 10</div>
      </header>

      {/* 키워드 요약 */}
      <section className="keyword-bar">
        <span className="kw-label">주요 키워드</span>
        {['위도와 경도', '기후', '시간차별', '정치', '민주주의', '선거 4원칙', '지방자치'].map((kw, i) => (
          <span key={i} className="keyword">{kw}</span>
        ))}
      </section>

      {sections.map((section, si) => (
        <section key={si} className={`unit-section unit-${section.color}`}>
          <div className="unit-header">
            <span className="unit-badge">{section.unit}</span>
            <h2>{section.title}</h2>
          </div>

          {section.topics.map((topic, ti) => (
            <div key={ti} className="topic">
              <div className="topic-header">
                <span className="topic-num">{topic.num}</span>
                <h3>{topic.title}</h3>
                <span className="page-label">{topic.pages}</span>
              </div>
              <div className="topic-content">
                {topic.content.map((c, ci) => renderContent(c as Content, ci))}
              </div>
            </div>
          ))}
        </section>
      ))}

      <footer className="study-footer">
        <p>천재교육 중학교 사회 1 | 위도경도 기초 & 정치/민주주의</p>
      </footer>
    </div>
  )
}
