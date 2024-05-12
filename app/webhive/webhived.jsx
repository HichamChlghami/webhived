"use client"
// import React from 'react';
import React, { useEffect,useState ,useContext} from 'react';
import { TranslationContext } from '../TranslationContext';

import { Navbar,Home,Services,Portfolio,Footer,Chalange } from "../components"
import loading from '../loading';
import Head from 'next/head';

function Webhived() {

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
  <link rel="canonical" href="https://www.webhive.com/" />
<Head>
<title>WebHived | Web Development & Digital marketing agency</title>
<meta name="description" content="WebHived is Web Development & Digital Marketing agency based in Fez, specializing in Web Design & Development, Cyber Security, Cloud services, SEO services, and Ads Management." />
</Head>

<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
"@context": "http://schema.org",
"@type": "Organization", // Specify that it's a website
"name": "Web Hived", // Website name
"description":  t('html-description'),
"url": "https://www.webhived.com"
})
}}
/>


{isLoading ? (
  <>
    <loading />
    <div style={{ display: 'none' }}>
    <Navbar />
        <Home />
        <Services />
        <Portfolio />
        <Chalange/>
        <Footer />
       
        </div>
 

</>
  ) : (
    <>
<Head>
<title>WebHived | Web Development & Digital marketing agency</title>
<meta name="description" content="WebHived is Web Development & Digital Marketing agency based in Fez, specializing in Web Design & Development, Cyber Security, Cloud services, SEO services, and Ads Management." />
</Head>

        <Navbar />
        <Home />
        <Services />
        <Portfolio />
        <Chalange/>
        <Footer />
       
     
    </>
   
     )} 

        {/* <Navbar />
        <Home />
        <Services />
        <Portfolio />
        <Footer />
        */}
   
    </>
  )
}

export default Webhived