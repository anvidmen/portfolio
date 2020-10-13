import React from 'react'
import { Container, Jumbotron, Card } from 'react-bootstrap'
import { L_SKYLAB } from '../assets/img'
import Tilt from 'react-tilt'
import '../styles/style.sass'

export default function () {
  return (
    <div id='experience'>
      <h1 className='pt-3 text-center font-details-b pb-3'>Career Summary</h1>
      <Jumbotron className='jumbo-style'>
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as='h5' className='d-flex flex-wrap justify-content-center '>
                <Card.Img variant='top' className='img-resize' src={L_SKYLAB} alt='Skylab logo' />
              </Card.Header>
              <Card.Body className='d-flex justify-content-center flex-column'>
                <div>
                  <Card.Title className='text-center'>Skylab Coders Academy</Card.Title>
                </div>
                <div>
                  <Card.Text className='text-center style'>
                    <strong className='body-title-style '>Full Stack Web Developer</strong>
                    <br />
                    <strong>Role:</strong> Full Stack Developer
                    <br />
                    <strong>Description:</strong> Plan, design and develop a full stack project (stateful), work as a team and individually remote, create demos and projects with ReactJS, create a demo with React Native and graphQL,
                      create a RESTful API with NodeJS(Express), create database using MongoDB(mongoose), TDD with Mocha Chai and Jasmine, Deploy applications on Heroku and AWS, use APIs.
                    <br /> <br />
                    <strong>Technology:</strong> JavaScript, React, MongoDB, Express.js, Nodejs.
                    <br />
                    <strong>Duration:</strong> April 2020 - June 2020

                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  )
}
