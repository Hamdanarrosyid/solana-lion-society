import Image from 'next/image'
import { Fragment } from 'react/cjs/react.production.min'
import '../styles/globals.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
  const [show, setShow] = useState()
  return (
    <Fragment>
      <header className='header' id='header' style={{ backgroundColor: 'rgba(0,0,0,.5)', position: 'sticky', width: '100%', top: 0, zIndex: 1 }}>
        <nav className='navbar container py-2' style={{ backgroundColor: 'transparent' }}>
          <div className='navbar-brand'>
            <a className='navbar-item ml-2'>
              <div className='image is-64x64 '>
                <Image src='/images/Logo.png' alt='logo-solana-lion' layout='fill' width='10' height='60' className='is-rounded' />
              </div>
            </a>
            <a role="button" onClick={() => setShow(!show)} className={`navbar-burger has-text-white ${show ? 'is-active' : ''}`} style={{ height: 'auto' }} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className={`navbar-menu ${show ? 'show' : ''}`}>
            <div className='is-hidden-desktop'>
              <div className='navbar-item'>
                <a className="panel-block has-text-white is-justify-content-center" href='#home-section' onClick={() => setShow(!show)}>
                  Home
                </a>
                <a className="panel-block has-text-white is-justify-content-center" href='#about-section' onClick={() => setShow(!show)}>
                  About
                </a>
                <a className="panel-block has-text-white is-justify-content-center" href='#roadmap-section' onClick={() => setShow(!show)}>
                  Roadmap
                </a>
                <a className="panel-block has-text-white is-justify-content-center" href='#legendary-section' onClick={() => setShow(!show)}>
                  Legendary
                </a>
              </div>
            </div>
            <div className="navbar-end is-hidden-mobile">
              <div className="navbar-item">
                <a href='#home-section' className="navbar-button">
                  Home
                </a>

                <a href='#about-section' className="navbar-button">
                  About
                </a>
                <a href='#roadmap-section' className="navbar-button">
                  Roadmap
                </a>
                <a href='#legendary-section' className="navbar-button">
                  Legendary
                </a>
                <a className="navbar-button">
                  <span className='icon has-text-whte'>
                    <FontAwesomeIcon icon={faDiscord} />
                  </span>
                </a>
                <a className="navbar-button">
                  <span className='icon has-text-whte'>
                    <FontAwesomeIcon icon={faTwitter} />
                  </span>
                </a>
                <a className="navbar-button">
                  <span className='icon has-text-whte'>
                    <FontAwesomeIcon icon={faInstagram} />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Component {...pageProps} />
    </Fragment>
  )
}

export default MyApp
