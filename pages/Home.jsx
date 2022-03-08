import React from 'react'
import "./home.css";


function Home() {
  return (
    <>
      <div className='home'>
        <div className='homeleft'>
          <h2>Simple and smart way </h2>
           <h2>to start trading in</h2>
           <div className='homeleftbtn'>
             <button>GET CHARTS</button>
           </div>
        </div>
        <div className='homeright'>
          <img src='https://thinkmarkets.com/getmedia/151533f2-d570-4ae0-8ad3-6c278cdcfc5b/Forex-Trading-Strategies.jpg.aspx' className='homerightimg' />
        </div>

      </div>
    </>
  )
}

export default Home