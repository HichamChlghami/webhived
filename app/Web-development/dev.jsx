"use client"
import React, { useEffect,useState ,useContext} from 'react';
import './dev.css'

import { TranslationContext } from '../TranslationContext';
import { MdCheck } from 'react-icons/md'; // Checkmark and cross icons
import { Footer ,Navbar} from '../components'
import loading from '../loading';
import Link from 'next/link';
import Head from 'next/head';

function Development() {
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
        <title>WebHived Agency – Web development | Cyber security & cloud services</title>
        <meta name="description" content="In WebHived Agency we are providing high-quality web Development & Design services and cyber security & Cloud services. We care about your digital presence." />
      </Head>

<link rel="canonical" href="https://www.webhived.com/Web-development.html" />


<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "http://schema.org",
      "@type": "Service",
      "serviceType":t('kindw'),
      "provider": {
        "@type": "Organization",
        "name": "Web Hived"
      },
      "description":t('web-services-description'),
      "url": "https://webhived.com/Web-development.html"
    })
  }}
/>

    {isLoading ? (
      <>
      <loading />
      <div style={{ display: 'none' }}>
      <>
      <Head>
        <title>WebHived Agency – Web development | Cyber security & cloud services</title>
        <meta name="description" content="In WebHived Agency we are providing high-quality web Development & Design services and cyber security & Cloud services. We care about your digital presence." />
      </Head>

    <div className='dev'>
      <Navbar/>
      <div className="dev-content">
      <div className="marketing-first-s">
      <h1 className="about-title about-marketing-content ">{t('webhived agency Discover our offers')}</h1>
      <div className="about-logo">
        <img src='/WebHive-image.svg' alt="logo" className='about-logo-picture' />
      </div>
      </div>
      <div className="marketing-second-s">
      <h1 className="marketing-second-s-title">{t('dev-main-title')}</h1>
      <div className="marketing-second-s-content marketing-text3 ">
      {t('dev-main')}   
         </div>

      </div>
      
      {/* fourth-s */}
      <div className="marketing-third-s">
       <div className="marketing-third-s-content">
       <div className="marketing-third-s-des">
        <div className="marketing-third-s-title">{t('dev-web-title')}</div>
<div className="marketing-text3">
           {t('dev-web')}    
           </div>
        <div className="dev-offer-service">  {t('dev-web1-title')}</div>
        <div className="marketing-text3">
        {t('dev-web1')}

        </div>
<div className="dev-offer-service">   {t('dev-web2-title')} </div>
<div className="marketing-text3">
{t('dev-web2')}        

</div>

<div className="dev-offer-service">   {t('dev-web3-title')}</div>
<div className="marketing-text3">
{t('dev-web3')}      

</div>


  </div>
        <div className="marketing-third-s-image">
          <img src='/web-s.svg' alt="web_picture" className="marketing-third-s-img" />
        </div>
       </div>
      </div>
      <div className="marketing-third-s">
       <div className="marketing-third-s-content">
       <div className="marketing-third-s-image  addno">
          <img src='/security.svg' alt="analitics" className="marketing-third-s-img" />
        </div>
       <div className="marketing-third-s-des">
        
        <div className="marketing-third-s-title">{t('dev-security-title')} </div>
        <div className="marketing-text3">
        {t('dev-security')}
        </div>
        </div>
        <div className="marketing-third-s-image addly">
          <img src='/security.svg' alt="analitics" className="marketing-third-s-img" />
        </div>
       </div>
       
      </div>
      {/* fivth-s */}
      <div className="marketing-third-s">
       <div className="marketing-third-s-content">
       <div className="marketing-third-s-des">
        <div className="marketing-third-s-title"> {t('dev-loading-title')}</div>
        <div className="marketing-text3">
        {t('dev-loading')}      
        </div> 
         </div>
        <div className="marketing-third-s-image">
          <img src='/speed.svg' alt="advertizing" className="marketing-third-s-img" />
        </div>
       </div>
      </div>
      </div>
      <div className="section-dev">
    <div className="dev-offer-title">{t('dev-offer-title')}</div>
    <div className="cards-dev">
       <div className="card-dev-one">
       <div className="price-">890$</div>
        <div className="tools">{t('f1')}</div>
        <div className="feature"><MdCheck className='checked'/> {t('f2')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f3')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f4')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f5')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f6')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f7')}</div>
        {/* <div className="feature under"><MdClose className='no-checked'/>{t('f8')}</div>
        <div className="feature under"><MdClose className='no-checked'/>{t('f9')}</div> */}
        <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
        <div className="feature "><MdCheck className='checked'/>{t('f12')}</div>
        {/* <div className="feature"> <MdCheck className='checked'/> {t('f29')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f14')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f15')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f16')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f19')}</div>
               
      <div className="security-features">{t('f22')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f23')}</div>
      <div className="feature"> <MdCheck className='checked'/> {t('f13')}</div>

      <div className="security-tool"><MdCheck className='checked'/>{t('f24')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f25')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f26')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f27')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f28')}</div>
      <div className="security-tool "><MdCheck className='checked'/>{t('f30')}</div> */}
      <Link href="/discuss-offer.html"><button className="button-offer">{t('talk-us')}</button></Link>

      
       </div>
<div className="card-dev-two">
<div className="price-">1490$</div>
<div className="tools">{t('f1')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f2')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f3')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f4')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f5')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f66')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f7')}</div>
        {/* <div className="feature "><MdCheck className='checked'/>{t('f8')}</div>
        <div className="feature "><MdCheck className='checked'/>{t('f9')}</div> */}
        <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
        <div className="feature "><MdCheck className='checked'/>{t('f12')}</div>
        {/* <div className="feature"> <MdCheck className='checked'/> {t('f29')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f14')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f15')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f16')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f19')}</div>
   
        <div className="security-features">{t('f22')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f23')}</div>
      <div className="feature"> <MdCheck className='checked'/> {t('f13')}</div>

      <div className="security-tool"><MdCheck className='checked'/>{t('f24')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f25')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f26')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f27')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f28')}</div>
      <div className="security-tool "><MdCheck className='checked'/>{t('f30')}</div> */}
      <Link href="/discuss-offer.html"><button className="button-offer">{t('talk-us')}</button></Link>
        
</div>
<div className="card-dev-three">
<div className="price-">1999$</div>
<div className="tools">{t('f1')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f2')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f3')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f4')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f5')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f666')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f7')}</div>
        {/* <div className="feature "><MdCheck className='checked'/>{t('f8')}</div>
        <div className="feature "><MdCheck className='checked'/>{t('f9')}</div> */}
        <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f12')}</div>
        {/* <div className="feature"> <MdCheck className='checked'/> {t('f29')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f14')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f15')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f16')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f19')}</div>
      

        <div className="security-features">{t('f22')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f23')}</div>
      <div className="feature">  <MdCheck className='checked'/>{t('f13')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f24')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f25')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f26')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f27')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f28')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f30')}</div> */}
       <a href="/discuss-offer.html"><button className="button-offer">{t('talk-us')}</button></a>

</div>
    </div>
    <div className="other-offer">
    <Link href='/discuss-offer.html'><button className="button-offer   button-offer-dev">{t('react-out')}</button></Link>

    </div>
   </div>
      <div className="about-consltation about-consultation-marketing ">
      <div className="title-contsltation">{t('consultation')}</div>
      <button className='button-home button-consltation'>
      <Link href='/contact-us.html'  className='LNK'>   {t('consultation-title')} </Link> 
          </button>      
      </div>
<Footer/>
    </div>
     
      </>
       
          </div>
   
  
  </>
    ) : (
      <>
<Head>
        <title>WebHived Agency – Web development | Cyber security & cloud services</title>
        <meta name="description" content="In WebHived Agency we are providing high-quality web Development & Design services and cyber security & Cloud services. We care about your digital presence." />
      </Head>

    <div className='dev'>
      <Navbar/>
      <div className="dev-content">
      <div className="marketing-first-s">
      <h1 className="about-title about-marketing-content ">{t('webhived agency Discover our offers')}</h1>
      <div className="about-logo">
        <img src='/WebHive-image.svg' alt="logo" className='about-logo-picture' />
      </div>
      </div>
      <div className="marketing-second-s">
      <h1 className="marketing-second-s-title">{t('dev-main-title')}</h1>
      <div className="marketing-second-s-content marketing-text3 ">
      {t('dev-main')}   
         </div>

      </div>
      
      {/* fourth-s */}
      <div className="marketing-third-s">
       <div className="marketing-third-s-content">
       <div className="marketing-third-s-des">
        <div className="marketing-third-s-title">{t('dev-web-title')}</div>
<div className="marketing-text3">
           {t('dev-web')}    
           </div>
        <div className="dev-offer-service">  {t('dev-web1-title')}</div>
        <div className="marketing-text3">
        {t('dev-web1')}

        </div>
<div className="dev-offer-service">   {t('dev-web2-title')} </div>
<div className="marketing-text3">
{t('dev-web2')}        

</div>

<div className="dev-offer-service">   {t('dev-web3-title')}</div>
<div className="marketing-text3">
{t('dev-web3')}      

</div>


  </div>
        <div className="marketing-third-s-image">
          <img src='/web-s.svg' alt="web_picture" className="marketing-third-s-img" />
        </div>
       </div>
      </div>
      <div className="marketing-third-s">
       <div className="marketing-third-s-content">
       <div className="marketing-third-s-image  addno">
          <img src='/security.svg' alt="analitics" className="marketing-third-s-img" />
        </div>
       <div className="marketing-third-s-des">
        
        <div className="marketing-third-s-title">{t('dev-security-title')} </div>
        <div className="marketing-text3">
        {t('dev-security')}
        </div>
        </div>
        <div className="marketing-third-s-image addly">
          <img src='/security.svg' alt="analitics" className="marketing-third-s-img" />
        </div>
       </div>
       
      </div>
      {/* fivth-s */}
      <div className="marketing-third-s">
       <div className="marketing-third-s-content">
       <div className="marketing-third-s-des">
        <div className="marketing-third-s-title"> {t('dev-loading-title')}</div>
        <div className="marketing-text3">
        {t('dev-loading')}      
        </div> 
         </div>
        <div className="marketing-third-s-image">
          <img src='/speed.svg' alt="advertizing" className="marketing-third-s-img" />
        </div>
       </div>
      </div>
      </div>
      <div className="section-dev">
    <div className="dev-offer-title">{t('dev-offer-title')}</div>
    <div className="cards-dev">
       <div className="card-dev-one">
       <div className="price-">890$</div>
        <div className="tools">{t('f1')}</div>
        <div className="feature"><MdCheck className='checked'/> {t('f2')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f3')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f4')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f5')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f6')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f7')}</div>
        {/* <div className="feature under"><MdClose className='no-checked'/>{t('f8')}</div>
        <div className="feature under"><MdClose className='no-checked'/>{t('f9')}</div> */}
        <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
        <div className="feature "><MdCheck className='checked'/>{t('f12')}</div>
        {/* <div className="feature"> <MdCheck className='checked'/> {t('f29')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f14')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f15')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f16')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f19')}</div>
               
      <div className="security-features">{t('f22')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f23')}</div>
      <div className="feature"> <MdCheck className='checked'/> {t('f13')}</div>

      <div className="security-tool"><MdCheck className='checked'/>{t('f24')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f25')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f26')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f27')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f28')}</div>
      <div className="security-tool "><MdCheck className='checked'/>{t('f30')}</div> */}
      <Link href="/discuss-offer.html"><button className="button-offer">{t('talk-us')}</button></Link>

      
       </div>
<div className="card-dev-two">
<div className="price-">1490$</div>
<div className="tools">{t('f1')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f2')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f3')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f4')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f5')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f66')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f7')}</div>
        {/* <div className="feature "><MdCheck className='checked'/>{t('f8')}</div>
        <div className="feature "><MdCheck className='checked'/>{t('f9')}</div> */}
        <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
        <div className="feature "><MdCheck className='checked'/>{t('f12')}</div>
        {/* <div className="feature"> <MdCheck className='checked'/> {t('f29')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f14')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f15')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f16')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f19')}</div>
   
        <div className="security-features">{t('f22')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f23')}</div>
      <div className="feature"> <MdCheck className='checked'/> {t('f13')}</div>

      <div className="security-tool"><MdCheck className='checked'/>{t('f24')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f25')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f26')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f27')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f28')}</div>
      <div className="security-tool "><MdCheck className='checked'/>{t('f30')}</div> */}
      <Link href="/discuss-offer.html"><button className="button-offer">{t('talk-us')}</button></Link>
        
</div>
<div className="card-dev-three">
<div className="price-">1999$</div>
<div className="tools">{t('f1')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f2')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f3')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f4')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f5')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f666')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f7')}</div>
        {/* <div className="feature "><MdCheck className='checked'/>{t('f8')}</div>
        <div className="feature "><MdCheck className='checked'/>{t('f9')}</div> */}
        <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
        <div className="feature"><MdCheck className='checked'/>{t('f12')}</div>
        {/* <div className="feature"> <MdCheck className='checked'/> {t('f29')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f14')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f15')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f16')}</div>
        <div className="feature"> <MdCheck className='checked'/> {t('f19')}</div>
      

        <div className="security-features">{t('f22')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f23')}</div>
      <div className="feature">  <MdCheck className='checked'/>{t('f13')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f24')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f25')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f26')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f27')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f28')}</div>
      <div className="security-tool"><MdCheck className='checked'/>{t('f30')}</div> */}
       <a href="/discuss-offer.html"><button className="button-offer">{t('talk-us')}</button></a>

</div>
    </div>
    <div className="other-offer">
    <Link href='/discuss-offer.html'><button className="button-offer   button-offer-dev">{t('react-out')}</button></Link>

    </div>
   </div>
      <div className="about-consltation about-consultation-marketing ">
      <div className="title-contsltation">{t('consultation')}</div>
      <button className='button-home button-consltation'>
      <Link href='/contact-us.html'  className='LNK'>   {t('consultation-title')} </Link> 
          </button>      
      </div>
<Footer/>
    </div>
     
      </>
     
       )} 
   </>

//     <div className='dev'>
//       <Navbar/>
//       <div className="dev-content">
//       <div className="marketing-first-s">
//       <h1 className="about-title about-marketing-content ">{t('digital-title')}</h1>
//       <div className="about-logo">
//         <img src='/WebHive-image.svg' alt="logo" className='about-logo-picture' />
//       </div>
//       </div>
//       <div className="marketing-second-s">
//       <h1 className="marketing-second-s-title">{t('dev-main-title')}</h1>
//       <div className="marketing-second-s-content marketing-text3 ">
//       {t('dev-main')}   
//          </div>

//       </div>
      
//       {/* fourth-s */}
//       <div className="marketing-third-s">
//        <div className="marketing-third-s-content">
//        <div className="marketing-third-s-des">
//         <div className="marketing-third-s-title">{t('dev-web-title')}</div>
// <div className="marketing-text3">
//            {t('dev-web')}    
//            </div>
//         <div className="dev-offer-service">  {t('dev-web1-title')}</div>
//         <div className="marketing-text3">
//         {t('dev-web1')}

//         </div>
// <div className="dev-offer-service">   {t('dev-web2-title')} </div>
// <div className="marketing-text3">
// {t('dev-web2')}        

// </div>

// <div className="dev-offer-service">   {t('dev-web3-title')}</div>
// <div className="marketing-text3">
// {t('dev-web3')}      

// </div>


//   </div>
//         <div className="marketing-third-s-image">
//           <img src='/web-s.svg' alt="web_picture" className="marketing-third-s-img" />
//         </div>
//        </div>
//       </div>
//       <div className="marketing-third-s">
//        <div className="marketing-third-s-content">
//        <div className="marketing-third-s-image  addno">
//           <img src='/security.svg' alt="analitics" className="marketing-third-s-img" />
//         </div>
//        <div className="marketing-third-s-des">
        
//         <div className="marketing-third-s-title">{t('dev-security-title')} </div>
//         <div className="marketing-text3">
//         {t('dev-security')}
//         </div>
//         </div>
//         <div className="marketing-third-s-image addly">
//           <img src='/security.svg' alt="analitics" className="marketing-third-s-img" />
//         </div>
//        </div>
       
//       </div>
//       {/* fivth-s */}
//       <div className="marketing-third-s">
//        <div className="marketing-third-s-content">
//        <div className="marketing-third-s-des">
//         <div className="marketing-third-s-title"> {t('dev-loading-title')}</div>
//         <div className="marketing-text3">
//         {t('dev-loading')}      
//         </div> 
//          </div>
//         <div className="marketing-third-s-image">
//           <img src='/speed.svg' alt="advertizing" className="marketing-third-s-img" />
//         </div>
//        </div>
//       </div>
//       </div>
//       <div className="section-dev">
//     <div className="dev-offer-title">{t('dev-offer-title')}</div>
//     <div className="cards-dev">
//        <div className="card-dev-one">
//        <div className="price-">890$</div>
//         <div className="tools">{t('f1')}</div>
//         <div className="feature"><MdCheck className='checked'/> {t('f2')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f3')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f4')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f5')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f6')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f7')}</div>
//         {/* <div className="feature under"><MdClose className='no-checked'/>{t('f8')}</div>
//         <div className="feature under"><MdClose className='no-checked'/>{t('f9')}</div> */}
//         <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
//         <div className="feature "><MdCheck className='checked'/>{t('f12')}</div>
//         {/* <div className="feature"> <MdCheck className='checked'/> {t('f29')}</div>
//         <div className="feature"> <MdCheck className='checked'/> {t('f14')}</div>
//         <div className="feature"> <MdCheck className='checked'/> {t('f15')}</div>
//         <div className="feature"> <MdCheck className='checked'/> {t('f16')}</div>
//         <div className="feature"> <MdCheck className='checked'/> {t('f19')}</div>
               
//       <div className="security-features">{t('f22')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f23')}</div>
//       <div className="feature"> <MdCheck className='checked'/> {t('f13')}</div>

//       <div className="security-tool"><MdCheck className='checked'/>{t('f24')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f25')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f26')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f27')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f28')}</div>
//       <div className="security-tool "><MdCheck className='checked'/>{t('f30')}</div> */}
//       <Link href="/discuss-offer.html"><button className="button-offer">{t('talk-us')}</button></Link>

      
//        </div>
// <div className="card-dev-two">
// <div className="price-">1490$</div>
// <div className="tools">{t('f1')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f2')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f3')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f4')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f5')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f66')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f7')}</div>
//         {/* <div className="feature "><MdCheck className='checked'/>{t('f8')}</div>
//         <div className="feature "><MdCheck className='checked'/>{t('f9')}</div> */}
//         <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
//         <div className="feature "><MdCheck className='checked'/>{t('f12')}</div>
//         {/* <div className="feature"> <MdCheck className='checked'/> {t('f29')}</div>
//         <div className="feature"> <MdCheck className='checked'/> {t('f14')}</div>
//         <div className="feature"> <MdCheck className='checked'/> {t('f15')}</div>
//         <div className="feature"> <MdCheck className='checked'/> {t('f16')}</div>
//         <div className="feature"> <MdCheck className='checked'/> {t('f19')}</div>
   
//         <div className="security-features">{t('f22')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f23')}</div>
//       <div className="feature"> <MdCheck className='checked'/> {t('f13')}</div>

//       <div className="security-tool"><MdCheck className='checked'/>{t('f24')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f25')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f26')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f27')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f28')}</div>
//       <div className="security-tool "><MdCheck className='checked'/>{t('f30')}</div> */}
//       <Link href="/discuss-offer.html"><button className="button-offer">{t('talk-us')}</button></Link>
        
// </div>
// <div className="card-dev-three">
// <div className="price-">1999$</div>
// <div className="tools">{t('f1')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f2')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f3')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f4')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f5')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f666')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f7')}</div>
//         {/* <div className="feature "><MdCheck className='checked'/>{t('f8')}</div>
//         <div className="feature "><MdCheck className='checked'/>{t('f9')}</div> */}
//         <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f12')}</div>
//         {/* <div className="feature"> <MdCheck className='checked'/> {t('f29')}</div>
//         <div className="feature"> <MdCheck className='checked'/> {t('f14')}</div>
//         <div className="feature"> <MdCheck className='checked'/> {t('f15')}</div>
//         <div className="feature"> <MdCheck className='checked'/> {t('f16')}</div>
//         <div className="feature"> <MdCheck className='checked'/> {t('f19')}</div>
      

//         <div className="security-features">{t('f22')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f23')}</div>
//       <div className="feature">  <MdCheck className='checked'/>{t('f13')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f24')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f25')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f26')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f27')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f28')}</div>
//       <div className="security-tool"><MdCheck className='checked'/>{t('f30')}</div> */}
//        <a href="/discuss-offer.html"><button className="button-offer">{t('talk-us')}</button></a>

// </div>
//     </div>
//     <div className="other-offer">
//     <Link href='/discuss-offer.html'><button className="button-offer   button-offer-dev">{t('react-out')}</button></Link>

//     </div>
//    </div>
//       <div className="about-consltation about-consultation-marketing ">
//       <div className="title-contsltation">{t('consultation')}</div>
//       <button className='button-home button-consltation'>
//       <Link href='/contact-us.html'  className='LNK'>   {t('consultation-title')} </Link> 
//           </button>      
//       </div>
// <Footer/>
//     </div>
  )
}

export default Development