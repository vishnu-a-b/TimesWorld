import React from 'react'
import fb from "../assets/fb.png";
import youTube from "../assets/youTube.png";
import twitter from "../assets/twitter.png";
import linkedIn from "../assets/linkedIn.png";
export default function Footer() {
  return (
    <div className='footer'>
        <div className="social">
          <img src={fb} alt={fb} />
          <img src={twitter} alt={twitter} />
          <img src={linkedIn} alt={linkedIn} />
          <img src={youTube} alt={youTube} />
        </div>
        <h6>Example@email.com</h6>
        <h6>Copyright © 2020 Name. All rights reserved.</h6>
    </div>
  )
}
