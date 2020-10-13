import React from 'react'
import { Carousel } from 'react-bootstrap'
import { ScrollDown } from '../components'
import { Slide1, Slide2, Slide3 } from '../assets/img'
import '../styles/style.sass'

export default function () {
  return (
    <div id='home'>
      <Carousel controls={false} indicators interval={3500}>
        <Carousel.Item>
          <img className='d-block w-100 custom-img' src={Slide1} alt='Third slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100 custom-img' src={Slide2} alt='second slide' />
        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100 custom-img' src={Slide3} alt='First slide' />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>

  )
}
