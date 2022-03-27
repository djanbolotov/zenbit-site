import React from 'react'
import indeed from './assets/icons/indeed.png'
import twitter from './assets/icons/twitter.png'
import facebook from './assets/icons/facebook.png'
import Vector from './assets/icons/Vector.png'

function Footer() {
  return (
    <div className='footer-icons'>
        <div>
            <img alt='indeed' src={indeed}/>
        </div>
        <div>
            <img alt='twitter' src={twitter}/>
        </div>
        <div>
            <img alt='facebook' src={facebook}/>
        </div>
        <div>
            <img alt='vector' src={Vector}/>
        </div>
    </div>
  )
}

export default Footer