"use client"

import React,{useState,useEffect,useContext} from 'react'

import './call.css'

import { Contact,Footer ,Navbar} from '../components'
import loading from '../loading'
import { TranslationContext } from '../TranslationContext'
import Head from 'next/head';

function Call() {
  const { t} = useContext(TranslationContext);

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate a 3-second delay before setting isLoading to false
    const timer = setTimeout(() => {
      setIsLoading(false);
    });

    return () => {
      clearTimeout(timer);
    };
  }, []);

  
  return (

    <>
      <Head>
        <title>Webhived agency- Contact us and discuss your goals & needs</title>
        <meta name="description" content="Try to Reach us with your email, get our free consultation and all your questions answered. Don’t hesitate to Contact us." />
      </Head>

<meta property="og:image" content="https://www.webhived.com/logo-search.svg" />

<script
         type="application/ld+json"
         dangerouslySetInnerHTML={{
           __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "ContactPage",
            "name": t('contact'),
            "description": t('contact-services-description'),
            "url": "https://www.webhived.com/contact-us.html"
           })
         }}
       />
       
        
       
             <link rel="canonical" href="https://www.webhived.com/contact-us.html" />

  {isLoading ? (
    <>
    <loading />
    <div style={{ display: 'none' }}>
    
    <Navbar/>
         <Contact/>
         <Footer/>   
        </div>
 

</>
  ) : (
    <>
      <Head>
        <title>Webhived agency- Contact us and discuss your goals & needs</title>
        <meta name="description" content="Try to Reach us with your email, get our free consultation and all your questions answered. Don’t hesitate to Contact us." />
      </Head>    
       <Navbar/>
         <Contact/>
         <Footer/>   
    </>
   
     )} 
 </>
    // <div className='call'>
      
    //     <Navbar/>
    //     <Contact/>
    //     <Footer/>        
    //     </div>
  )
}

export default Call