import { useState, createContext} from 'react'

import './App.css'

import Navigation from './components/Navigation.jsx'
import Contents from './components/Contents.jsx'
import { AppContext } from './components/Context/Context.jsx';
import Footer from './components/Footer.jsx'

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
