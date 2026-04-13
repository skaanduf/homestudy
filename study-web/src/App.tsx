import { useState } from 'react'
import SocialStudy from './SocialStudy'
import SocialStudyNew from './SocialStudyNew'
import SocialStudyAll from './SocialStudyAll'
import './index.css'

type AppVersion = 'old' | 'new' | 'all'

function App() {
  const [version, setVersion] = useState<AppVersion>('all')

  return (
    <div>
      <div className="version-toggle">
        <button 
          className={version === 'old' ? 'active' : ''} 
          onClick={() => setVersion('old')}
        >
          기존
        </button>
        <button 
          className={version === 'new' ? 'active' : ''} 
          onClick={() => setVersion('new')}
        >
          심화(9-10)
        </button>
        <button 
          className={version === 'all' ? 'active' : ''} 
          onClick={() => setVersion('all')}
        >
          ✨ 통합 대시보드 (전체)
        </button>
      </div>
      
      {version === 'old' && <SocialStudy />}
      {version === 'new' && <SocialStudyNew />}
      {version === 'all' && <SocialStudyAll />}
    </div>
  )
}

export default App
