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
          <img alt='First slide' className='d-block w-100 custom-img' height='100%' src={Slide1} width='100%' />
        </Carousel.Item>
        <Carousel.Item>
          <img alt='second slide' className='d-block w-100 custom-img' height='100%' src={Slide2} width='100%' />
        </Carousel.Item>
        <Carousel.Item>
          <img alt='Third slide' className='d-block w-100 custom-img' height='100%' src={Slide3} width='100%' />
        </Carousel.Item>
      </Carousel>
      <ScrollDown />
    </div>

  )
}
