import React from 'react'
import { Jumbotron, Button, Col, Row } from 'react-bootstrap'
import '../styles/style.sass'

export default function () {
  return (
    <div id='contact'>
      <h1 className='pt-3 text-center font-details-b pb-3 contact-me'>Contact Me</h1>
      <Jumbotron className='contact-jumbotron'>
        <div className='text-city'> Barcelona, España</div>
        <Row>
          <Col className='d-flex justify-content-center flex-wrap'>
            <div className='m-2'>
              <a href='mailto:anvidmen@gmail.com' target='_blank' rel='noopener noreferrer'>
                <Button variant='outline-danger' title='anvidmen@gmail.com'>
                  <i className='fas fa-envelope-square' /> Email Me
                </Button>
              </a>
            </div>
            <div className='m-2'>
              <a href='https://www.linkedin.com/in/juan-om' target='_blank' rel='noopener noreferrer'>
                <Button variant='outline-primary' title='Visit my LinkenIn'>
                  <i className='fab fa-linkedin' /> LinkedIn
                </Button>
              </a>
            </div>
            <div className='m-2'>
              <a href='https://github.com/anvidmen' target='_blank' rel='noopener noreferrer'>
                <Button variant='outline-dark' title='My other projects'>
                  <i className='fab fa-github-square' /> GitHub
                </Button>
              </a>
            </div>
            <div className='m-2'>
              <a href='https://twitter.com/JuanDaOm' target='_blank' rel='noopener noreferrer'>
                <Button variant='outline-info' title='Tweets are welcomed!'>
                  <i className='fab fa-twitter' /> Twitter
                </Button>
              </a>
            </div>
          </Col>
        </Row>
      </Jumbotron>
    </div>
  )
}
