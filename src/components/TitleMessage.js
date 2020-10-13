import React from 'react'
import { Image } from 'react-bootstrap'
import Typewriter from 'typewriter-effect'
import styled from 'styled-components'
import { Profile } from '../assets/img'
import '../styles/style.sass'

const TitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 14rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;
  strong {
    font-size: 1.2em;
  }
  div {
    color: ${props => props.theme.textColor};
    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 7px;
    .main-title {
      font-size: 45px;
    }
    .sub {
      margin: 1em;
      font-size: 26px;
      letter-spacing: 2px;
    }
  }
  @media only screen and (min-device-width: 280px) and (max-device-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
    div .main-title {
      font-size: 28px;
    }
    div .sub {
      margin: 2em;
      font-size: 22px
    }
    strong {
      font-size: 1em
    }
  } 
  @media only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) {
    div .main-title {
      font-size: 25px;
    }
    div .sub {
      margin: 1em;
      font-size: 22px
    }
    strong {
      font-size: 1em
    }
  } 
  @media only screen and (min-device-width: 1024px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2){
    div .main-title {
      font-size: 50px;
    }
    div .sub {
      margin: 3em;
      font-size: 28px
    }
    strong {
      font-size: 1.2em
    }
  }
  @media only screen and (min-device-width: 1080px) and (max-device-width: 1920px) and (-webkit-min-device-pixel-ratio: 2){
     div .main-title {
      font-size: 35px;
    }
    div .sub {
      margin: 0.4em;
      font-size: 24px;
    }
  }
`

export default function () {
  return (
    <TitleMessage>
      <div>
        <Image className='avatar' src={Profile} alt='Juan David Omen' />
      </div>
      <div className='titleMessage'>
        <div className='heading'>
          <div className='main-title text-center mb-3'>
            Hi, I'm
            <br />
            <span>
              <strong>Juan David Omen</strong>
            </span>
          </div>
          <div className='sub'>
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'Industrial Chemical', 'Learner'],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
          </div>
        </div>
      </div>
    </TitleMessage>
  )
}
