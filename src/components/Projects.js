import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from '@merc/react-timeline'
import { Accordion, Card, Image } from 'react-bootstrap'
import {
  L_CALCULATOR, L_CHAI, L_EXPRESS, L_HEROKU,
  L_HTML5, L_JASMINE, L_JAVASCRIPT, L_MOCHA, L_MONGODB, L_NODEJS, L_OMDB,
  L_PORTFOLIO, L_REACT, L_REACT_ROUTER, L_REACT_BOOTSTRAP, L_REDUX, L_SASS,
  L_SEARCH_MOVIES, L_WEBSITE_CONSTRUCTION, L_GITHUB_PAGES
} from '../assets/img'

import '../styles/style.sass'

export default function () {
  return (
    <div id='projects'>
      <h1 className='pt-3 text-center font-details-b pb-3'>My Recent Work</h1>
      <Card.Text className='text-center style style-color'>
        Here are some projects and demos I've worked on recently.
      </Card.Text>
      <Timeline>
        <Events>

          <ImageEvent
            alt='Portfolio'
            className='text-center'
            date=''
            src={L_PORTFOLIO}
            text='PORTFOLIO'
          >
            <div className='d-flex flex-column justify-content-between mt-1'>
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey='0' className='p-2 text-center accordian-main'>
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey='0' className='text-left'>
                      <Card.Body>
                        <strong>Description:</strong> My personal portfolio.
                        <hr />
                        <strong>Features:</strong>
                        <ul className='list-styles pt-1'>
                          <li>About me.</li>
                          <li>Tech skills.</li>
                          <li>Carrer summary.abs</li>
                          <li>My recent work.</li>
                          <li>Contact me.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className='p-2'>
                              <Image alt='React' className='image-style1 m-1' height='45' src={L_REACT} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='React Bootstrap' className='image-style1 m-1' height='45' src={L_REACT_BOOTSTRAP} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='Sass' className='image-style1 m-1' height='45' src={L_SASS} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='Heroku' className='image-style1 m-1' height='45' src={L_HEROKU} rounded width='100' />
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className='d-flex justify-content-between flex-nowrap text-center'>
                <UrlButton href='https://github.com/anvidmen/portfolio' target='_blank' rel='noopener noreferrer'>
                                    SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            alt='7 Potencias'
            className='text-center'
            date=''
            src={L_WEBSITE_CONSTRUCTION}
            text='7 POTENCIAS'
          >
            <div className='d-flex flex-column justify-content-between mt-1'>
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey='0' className='p-2 text-center accordian-main'>
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey='0' className='text-left'>
                      <Card.Body>
                        <strong>Description:</strong> This is an oficial web site for students and potential customers interested on taking lessons in the dance school 7 Potencias.
                        <hr />
                        <strong>Features:</strong>
                        <ul className='list-styles pt-1'>
                          <li>User registration and login.</li>
                          <li>Access to: multimedia, Purchase of dance class packages.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className='p-2'>
                              <Image alt='ReactJs' className='image-style1 m-1' height='45' src={L_REACT} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='ReactJs' className='image-style1 m-1' height='45' src={L_REACT_ROUTER} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='Sass' className='image-style1 m-1' height='45' src={L_SASS} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='NodeJs' className='image-style1 m-1' height='45' src={L_NODEJS} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='Express' className='image-style1 m-1' height='45' src={L_EXPRESS} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='MongoDB' className='image-style1 m-1' height='45' src={L_MONGODB} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='MongoDB' className='image-style1 m-1' height='45' src={L_MOCHA} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='MongoDB' className='image-style1 m-1' height='45' src={L_CHAI} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='MongoDB' className='image-style1 m-1' height='45' src={L_HEROKU} rounded width='100' />
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className='d-flex justify-content-between flex-nowrap text-center'>
                <UrlButton href='https://github.com/anvidmen/7-potencias' target='_blank' rel='noopener noreferrer'>
                                    SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            alt='Calculator'
            className='text-center'
            date=''
            src={L_CALCULATOR}
            text='CALCULATOR'
          >
            <div className='d-flex flex-column justify-content-between  mt-1'>
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey='0' className='p-2 text-center accordian-main'>
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey='0' className='text-left'>
                      <Card.Body>
                        <strong>Description:</strong> Calculator to perform basic operations.
                        <hr />
                        <strong>Features:</strong>
                        <ul className='list-styles pt-1'>
                          <li>Functions of addition, subtraction, multiplication, division, decimals and elimination.</li>
                          <li>tested logic.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className='p-2'>
                              <Image alt='JavaScript' className='image-style1 m-1' height='45' src={L_JAVASCRIPT} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='Html5' className='image-style1 m-1' height='45' src={L_HTML5} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='Sass' className='image-style1 m-1' height='45' src={L_SASS} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='Jasmine' className='image-style1 m-1' height='45' src={L_JASMINE} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='Jasmine' className='image-style1 m-1' height='45' src={L_GITHUB_PAGES} rounded width='100' />
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className='d-flex justify-content-between flex-nowrap text-center'>
                <UrlButton href='https://anvidmen.github.io/demo-calculator' target='_blank' rel='noopener noreferrer'>
                                    SEE LIVE
                </UrlButton>
                <UrlButton href='https://github.com/anvidmen/demo-calculator' target='_blank' rel='noopener noreferrer'>
                                    SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            alt='Search Movies'
            className='text-center'
            date=''
            src={L_SEARCH_MOVIES}
            text='SEARCH MOVIES'
          >
            <div className='d-flex flex-column justify-content-between mt-1'>
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey='0' className='p-2 text-center accordian-main'>
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey='0' className='text-left'>
                      <Card.Body>
                        <strong>Description:</strong> Application to search for movies.
                        <hr />
                        <strong>Features:</strong>
                        <ul className='list-styles pt-1'>
                          <li>To obtain the information of the movies is called OMDb API (The Open Movie Database).</li>
                          <li>React as a framework giving prominence to props and components.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className='p-2'>
                              <Image alt='React' className='image-style1 m-1' height='45' src={L_REACT} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='React Router' className='image-style1 m-1' height='45' src={L_REACT_ROUTER} rounded width='100' />
                            </span>
                          </li>
                          <li>src={L_REACT_ROUTER}
                            <span className='p-2'>
                              <Image alt='Sass' className='image-style1 m-1' height='45' src={L_SASS} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='OMDB Api' className='image-style1 m-1' height='45' src={L_OMDB} rounded width='100' />
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className='d-flex justify-content-between flex-nowrap text-center'>
                <UrlButton href='http://search-movies-om.surge.sh' target='_blank' rel='noopener noreferrer'>
                                    SEE LIVE
                </UrlButton>
                <UrlButton href='https://github.com/anvidmen/search-movies' target='_blank' rel='noopener noreferrer'>
                                    SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

          <ImageEvent
            alt='Calculator Redux'
            className='text-center'
            date=''
            src={L_WEBSITE_CONSTRUCTION}
            text='CALCULATOR REDUX'
          >
            <div className='d-flex flex-column justify-content-between mt-1'>
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle as={Card.Header} eventKey='0' className='p-2 text-center accordian-main'>
                                            PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey='0' className='text-left'>
                      <Card.Body>
                        <strong>Description:</strong> Basic calculator using React Redux.
                        <hr />
                        <strong>Features:</strong>
                        <ul className='list-styles pt-1'>
                          <li>Basic operations: add, subtract, multiply, divide, add decimals, delete.</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className='p-2'>
                              <Image alt='React' className='image-style1 m-1' height='45' src={L_REACT} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='Redux' className='image-style1 m-1' height='45' src={L_REDUX} rounded width='100' />
                            </span>
                          </li>
                          <li>
                            <span className='p-2'>
                              <Image alt='Sass' className='image-style1 m-1' height='45' src={L_SASS} rounded width='100' />
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className='d-flex justify-content-between flex-nowrap text-center'>
                <UrlButton href='https://github.com/anvidmen/calculator_Redux' target='_blank' rel='noopener noreferrer'>
                                SOURCE CODE
                </UrlButton>
              </div>
            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  )
}
