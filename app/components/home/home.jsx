"use client"
import React, {useContext} from 'react';
import './home.css'
import { TranslationContext } from '../../TranslationContext';
import Link from 'next/link';
function Home() {
  const { t} = useContext(TranslationContext);
 
  return (
  
      <div className='home' id='home'>
      
<div className="home-content">
  <div className="home-content-description">
    <h1 className='home-title'>

    {t('Your excellence starts here')}
    </h1>
    <p className='content-description  marketing-text3'>
  
    {t("Welcome to « Webhived, » where we take care of everything related to your online presence. Thanks to our expertise and innovative solutions, we help you achieve digital success on all fronts. Starting from creating your website, ensuring its security, and ensuring its advanced positions in search results, to leading an effective and successful digital marketing campaign.")}
    
    </p>
    <p className='content-description  marketing-text3  home-text2'>
  
  {t('Contact us, discuss your project and goals, and let us take care of the rest.')}
  
  </p>
  
     <Link href='/contact-us.html' className='LNK'><button className='button-home' >{t('Send Message')}</button></Link>

  </div>
  <div className="home-image">
    <img src='/home.svg' alt="webhived" className='image-content' />
  </div>
</div>
    </div>
   
 
    
  )
}

export default Home