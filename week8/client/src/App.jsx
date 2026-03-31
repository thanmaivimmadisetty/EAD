import { HashRouter, Link, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import './App.css'
import Checker from './Components/Checker'
function App() {

  return (
    <>
      {/* Week 8 update: content refreshed on May 1, 2026 */}
      <div style={{ textAlign: 'center', paddingTop: '20px' }}>
        <p style={{ color: '#555', marginBottom: '1rem' }}>
          Week 8 updated on May 1, 2026
        </p>
        <Checker />
      </div>
    </>
  )
}

export default App
