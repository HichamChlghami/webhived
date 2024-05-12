"use client"
import React,{useState,useEffect,useContext} from 'react'
import { TranslationContext } from '../TranslationContext';
import './company.css'
import { Navbar ,About,Footer,} from '../components';
import loading from '../loading';
import Head from 'next/head';

function Company() {
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
  <link rel="canonical" href="https://www.webhived.com/about-us.html" />
      <Head>
        <title>Webhived – We use our skills and experience to strengthen your online presence</title>
        <meta name="description" content="Established in Fez, webhived Agency gives a new push to the digital transformation in Morocco, Our skills, experiences, and comprehensive solutions that we provide used to strengthen your online presence." />
      </Head>

  <meta property="og:image" content="https://www.webhived.com/logo-search.svg" />


  <script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
  
  "@context": "http://schema.org",
  "@type": "AboutPage",
  "name": t('about'),
  "description": t('about-services-description'),
  "url": "https://webhived.com/about-us.html"
})
}}
/>



  {isLoading ? (
    
    <>
    <loading />
    <div style={{ display: 'none' }}>

    <Navbar/>
<About/>
<Footer/>
       
        </div>
 

</>
  ) : (
    <>
 <Head>
        <title>Webhived – We use our skills and experience to strengthen your online presence</title>
        <meta name="description" content="Established in Fez, webhived Agency gives a new push to the digital transformation in Morocco, Our skills, experiences, and comprehensive solutions that we provide used to strengthen your online presence." />
      </Head>
     <Navbar/>
<About/>
<Footer/>
    </>
   
     )} 
 </>
 
)


//   return (
//     <div className='company'>
    





// <Navbar/>
// <About/>
// <Footer/>

//     </div>
//   )
}

export default Company