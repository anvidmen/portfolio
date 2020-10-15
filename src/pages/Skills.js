import React from 'react'
import { Card, CardDeck, Col, Image, Row } from 'react-bootstrap'
import { skills } from './SkillsData'
import '../styles/style.sass'

export default function () {
  return (
    <div className='pt-3 pb-3' id='skills'>
      <h1 className='text-center font-details-b pb-4'>Tech Skills</h1>
      <CardDeck>
        <Row className='d-flex justify-content-around'>
          <Col md={4}>
            <Card className='focus mt-2 mb-2'>
              <Card.Body>
                <Card.Title className='text-center  card-title'>Frontend</Card.Title>
                <hr />
                <Card.Text className='card-text d-flex justify-content-start flex-column'>
                  {skills.frontend.map((skill, index) => (
                    <span className='p-2' key={index}>
                      <a
                        className='text-dark text-decoration-none'
                        href={skill.link}
                        target='_blank' rel='noopener noreferrer'
                      >
                        <Image
                          alt={skill.imgAltText}
                          className='image-style m-1'
                          height='35'
                          rounded
                          src={skill.imgSrc}
                          width='60'
                        /> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='focus mt-2 mb-2'>
              <Card.Body>
                <Card.Title className='text-center  card-title'>Backend</Card.Title>
                <hr />
                <Card.Text className='card-text d-flex justify-content-start flex-column'>
                  {skills.backend.map((skill, index) => (
                    <span className='p-2' key={index}>
                      <a
                        className='text-dark text-decoration-none'
                        href={skill.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Image
                          alt={skill.imgAltText}
                          className='image-style m-1'
                          height='35'
                          rounded
                          src={skill.imgSrc}
                          width='60'
                        /> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='focus mt-2 mb-2'>
              <Card.Body>
                <Card.Title className='text-center  card-title'>Programming Languages</Card.Title>
                <hr />
                <Card.Text className='card-text d-flex justify-content-start flex-column'>
                  {skills.programmingLanguages.map((skill, index) => (
                    <span className='p-2' key={index}>
                      <a
                        className='text-dark text-decoration-none'
                        href={skill.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Image
                          alt={skill.imgAltText}
                          className='image-style m-1'
                          height='35'
                          rounded
                          src={skill.imgSrc}
                          width='60'
                        /> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='focus mt-2 mb-2'>
              <Card.Body>
                <Card.Title className='text-center  card-title'>Database</Card.Title>
                <hr />
                <Card.Text className='card-text d-flex justify-content-start flex-column'>
                  {skills.databases.map((skill, index) => (
                    <span className='p-2' key={index}>
                      <a
                        className='text-dark text-decoration-none'
                        href={skill.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Image
                          alt={skill.imgAltText}
                          className='image-style m-1'
                          height='35'
                          rounded
                          src={skill.imgSrc}
                          width='60'
                        /> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='focus mt-2 mb-2'>
              <Card.Body>
                <Card.Title className='text-center  card-title'>Testing</Card.Title>
                <hr />
                <Card.Text className='card-text d-flex justify-content-start flex-column'>
                  {skills.testing.map((skill, index) => (
                    <span className='p-2' key={index}>
                      <a
                        className='text-dark text-decoration-none'
                        href={skill.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Image
                          alt={skill.imgAltText}
                          className='image-style m-1'
                          height='35'
                          rounded
                          src={skill.imgSrc}
                          width='60'
                        /> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className='focus mt-2 mb-2 '>
              <Card.Body>
                <Card.Title className='text-center  card-title'>Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className='card-text d-flex justify-content-start flex-column'>
                  {skills.hostingPlatforms.map((skill, index) => (
                    <span className='p-2' key={index}>
                      <a
                        className='text-dark text-decoration-none'
                        href={skill.link}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        <Image
                          alt={skill.imgAltText}
                          className='image-style m-1'
                          height='35'
                          rounded
                          src={skill.imgSrc}
                          width='60'
                        /> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='focus mt-2 mb-2'>
              <Card.Body>
                <Card.Title className='text-center  card-title'>Version Control</Card.Title>
                <hr />
                <Card.Text className='card-text d-flex justify-content-start flex-column'>
                  <span className='p-2'>
                    <a
                      className='text-dark text-decoration-none'
                      href={skills.versionControl[0].link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Image
                        alt={skills.versionControl[0].imgAltText}
                        height='35'
                        rounded className='image-style m-1'
                        src={skills.versionControl[0].imgSrc}
                        width='60'
                      /> {skills.versionControl[0].skillName}
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='focus mt-2 mb-2'>
              <Card.Body>
                <Card.Title className='text-center  card-title'>Others</Card.Title>
                <hr />
                <Card.Text className='card-text d-flex justify-content-start flex-column'>
                  <span className='p-2'>
                    <a
                      className='text-dark text-decoration-none'
                      href={skills.others[0].link}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <Image
                        alt={skills.others[0].imgAltText}
                        height='35'
                        rounded className='image-style m-1'
                        src={skills.others[0].imgSrc}
                        width='60'
                      /> {skills.others[0].skillName}
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </CardDeck>
    </div>
  )
}
