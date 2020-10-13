import React from 'react'
import '../styles/style.sass'
import { ContactForm } from '../pages'

export default function () {
  return (
    <div className='py-2 text-center footer-style'>
      <ContactForm />
      <div>© Juan David Omen&nbsp; {new Date().getFullYear()}</div>
    </div>
  )
}
