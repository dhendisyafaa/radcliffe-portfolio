import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'

const Home = () => {
  return (
    <div className='bg-primary overflow-x-hidden'>
      <Navbar />
      <div className="container mx-auto text-white mt-16 px-3">
        <Hero/>
        <About/>
        <Project />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default Home