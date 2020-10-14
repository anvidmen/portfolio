import React from 'react'
import { Fade, Slide } from 'react-reveal'
import { Container } from 'react-bootstrap'
import { Parallax } from 'react-parallax'
import Particles from 'react-particles-js'
import { particles } from './particles'
import { NavBar, Carousel, TitleMessage, Footer, Projects } from './components'
import { About, Skills, Experience } from './pages'
import './App.sass'

const App = () => {
  return (
    <div className='App'>
      <Carousel />
      <TitleMessage />
      <NavBar />
      <Particles className='particles particles-box' params={particles} />
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require('./assets/img/background/background.jpg')}
          bgImageAlt=''
          strength={-200}
        >
          <Container className='container-box rounded'>
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
      <div>
        <Container className='container-box rounded'>
          <Fade duration={500}>
            <Skills />
          </Fade>
        </Container>
      </div>
      <div>
        <Container className='container-box rounded'>
          <Fade duration={500}>
            <Experience />
          </Fade>
        </Container>
      </div>
      <div>
        <Container className='container-box rounded'>
          <Slide bottom duration={500}>
            <hr />
            <Projects />
          </Slide>
        </Container>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
