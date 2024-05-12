"use client"
import React,{useContext} from 'react'
import { TranslationContext } from '../../TranslationContext';
import './about.css'

function About() {
  const { t} = useContext(TranslationContext);
  
  return (
    
    <div className='about'>

      <div className="about-content">
      <h1 className="about-title about-marketing-content ">{t('webhived agency Discover our offers')}</h1>
      <div className="about-logo">
        <img src='/WebHive-image.svg' alt="logo" className='about-logo-picture' />
        
      </div>
      <div className="about-decription">
        <div className="logo-identiy"><span className='span-identity'>
           {t('about-us-identity-icon')}</span><img src='/identity-icon.svg' alt="identity_picture" className='identity' />
           </div>
        <p className="about-des">
          {t('about-us-identity')}
        </p>
      </div>
      <div className="about-decription  other-description">
        <div className="logo-identiy">
          <span className='span-vision'>{t('about-us-vision-icon')}</span><img src='/vision-icon.svg' alt="vision" className='identity vision' /></div>
        <p className="about-des  other-des">
        {t('about-us-vision')}
        </p>
      </div>
      <div className="about-decription  nargin-description">
        <div className="logo-identiy">
          <span className='span-identity'>{t('about-us-mission-icon')}
          </span><img src='/mission-icon.svg' alt="identity_picture" className='identity' /></div>
        <p className="about-des last-des">
        {t('about-us-mission')}
        </p>
      </div>

     
      </div>

      
    </div>
    
  )
}

export default About