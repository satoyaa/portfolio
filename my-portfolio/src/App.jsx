import { useState, createContext} from 'react'

import './App.css'

import Navigation from './components/Navigation.jsx'
import Contents from './components/Contents.jsx'
import { AppContext } from './components/Context/Context.jsx';
import Footer from './components/Footer.jsx'

/*
メイン部分
ページ左にナビゲーション，右にコンテンツでナビゲーションを押すとコンテンツ部分が切り替わる
フッターには各種SNS(qiita, git hub, instagram)へのリンクを記載
*/

function App() {
  const [pageFlag, setPageFlag] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AppContext.Provider value={{ isOpen, setIsOpen }}>
      <main className={isOpen ? 'App move' : 'App'}>
        <Navigation pageFlag={pageFlag} setPageFlag={setPageFlag}></Navigation>
        <Contents pageFlag={pageFlag}></Contents>
        <Footer></Footer>
      </main>
    </AppContext.Provider>
  )
}

export default App
