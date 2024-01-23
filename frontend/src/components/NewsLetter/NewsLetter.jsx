import React from 'react'
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <>
    
    <div className='newsLetter'>
    <div className="newsLetter-left">
        <img src="https://static.vecteezy.com/system/resources/previews/010/872/534/original/3d-send-email-illustration-png.png" alt="..." />
    <h2>Get Exclusive Offers On Your Email</h2>
    <hr />
      <p>Subscribe to our newletter and stay updated</p>
    </div>
     
      <form action="">
        <span className='label'>Don&apos;t miss this</span>
        <input type="email" placeholder='Enter Your Email' required />
        <button>Subscribe</button>
      </form>
      <img className = "newsLetter-img" src="https://static.vecteezy.com/system/resources/previews/009/415/131/original/email-illustration-3d-free-png.png" alt="..." />
    </div>
    </>
  )
}

export default NewsLetter
