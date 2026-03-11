import { useState, useEffect  } from 'react'
import Header from './components/Header'
import Bg from './components/Bg.jsx'
import Section1 from './components/Section1.jsx'
import Section2 from './components/Section2.jsx'
import Section3 from './components/Section3.jsx'
import Section4 from './components/Section4.jsx'
import Footer from './components/Footer.jsx'
import Loading from './components/loader/Loader.jsx'

import { ApiProvider } from './context/ApiContext'; // Provider 불러오기
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // 3초 후 로딩 끝
  }, []);
  if (loading) return <Loading />;
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
