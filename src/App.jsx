import { useState } from 'react'
import Header from './components/Header.jsx'
import Bg from './components/Bg.jsx'
import Section1 from './components/Section1.jsx'
import Section2 from './components/Section2.jsx'
import Section3 from './components/Section3.jsx'
import Section4 from './components/Section4.jsx'
import Footer from './components/Footer.jsx'

import { ApiProvider } from './context/ApiContext'; // Provider 불러오기
import './App.css'
function App() {
  const [count, setCount] = useState(0)
  return (
    <ApiProvider>
      <div className="App">
        <Header />
        <Bg />
        <section id="home">
          <Section1 />
        </section>
        <section id="today">
          <Section2 />
        </section>
        <section id="weather">
          <Section3 />
        </section>
        <section id="about">
          <Section4 />
        </section>
        <Footer />
      </div>
    </ApiProvider>
  )
}

export default App
