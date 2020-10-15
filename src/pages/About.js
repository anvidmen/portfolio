import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import '../styles/style.sass'

export default function () {
  return (
    <div id='about'>
      <div className='about'>
        <h1 className='pt-3 text-center font-details pb-3'>About Me</h1>
        <Container>
          <Row className='pt-3 pb-5 align-items-center'>
            <Col md={12}>
              <Row className=' align-items-start p-2 my-details rounded'>
                <p>
                  Hi there! I'm <strong>&nbsp;Juan David Omen.</strong>
                </p>
                <p>
                A passionate about chemistry, programming and travel, born in Colombia and currently living in Barcelona. I'm a chemist and Full Stack developer (React / Native, Redux, Node.js, Express.js, MongoDB, MySQL, etc ...).
                </p>
                <p>
                In 2020, I gave a total change to my professional career by studying full stack web development in the bootcamp modality, at Skylab Coders Academy.
                From an early age I showed great interest in applied sciences, therefore I studied Chemistry applied to the industry and pure chemistry.
                </p>
                <p>
                My goal in life is to discover everything that is possible, so I am constantly growing learning about new technologies, methodologies and problems and then looking at how I can solve them and use them to create or develop better solutions that are scalable.
                </p>
                <Col className='d-flex justify-content-center flex-wrap'>
                  <div>
                    <a href='#contact'>
                      <Button className='m-2' variant='outline-primary'>Let's talk</Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href='https://drive.google.com/file/d/1GfgucXwpCgV6whowYeqj4Ke5imEjDLHO/view?usp=sharing'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button className='m-2' variant='outline-success'>My Resume</Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href='https://github.com/anvidmen'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button className='m-2' variant='outline-dark'>GitHub</Button>
                    </a>
                  </div>
                  <div>
                    <a
                      href='https://www.linkedin.com/in/juan-om/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Button className='m-2' variant='outline-info'>LinkedIn</Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}
