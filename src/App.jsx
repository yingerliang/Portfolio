import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
