import React from 'react'

export default function Hero() {
  return (
    <section className="hero">
        <p className="blurb">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ducimus laudantium assumenda voluptatem? Magni error iure reiciendis sed exercitationem nulla, fugiat possimus porro ex sint!</p>
            <ul className="social__media">
                <li><a className='icon' href="#"></a></li>
                <li><a className='icon' href="#"></a></li>
                <li><a className='icon' href="#"></a></li>
            </ul>
            <div className="headshot">
                <Image />
            </div>
    </section>
  )
}
