import React from 'react'
import './NewsLetter.css'

const NesLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offerns On Your EMAIL!</h1>
      <p>Subscribe to our newsletter and stay updated!</p>
      <div>
        <input type="email" placeholder='Enter Your Email ID'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NesLetter
