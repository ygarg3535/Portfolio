
import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Expertise from './components/Expertise'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Services from './components/Services'

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Services/>
      <Expertise/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default App
