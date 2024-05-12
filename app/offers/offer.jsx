"use client"

import React, { useEffect,useState ,useContext} from 'react';
import './offers.css'
import { TranslationContext } from '../TranslationContext';

import { MdCheck, MdClose } from 'react-icons/md'; // Checkmark and cross icons

import Link from 'next/link';
import { Footer ,Navbar} from '../components'
import loading from '../loading';
import Head from 'next/head';

function Offers() {
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


        
<link rel="canonical" href="https://www.webhived.com/offers.html" />
<Head>
        <title>WebHived agency – Discover new  Offers that satisfy your needs</title>
        <meta name="description" content="In WebHived, we provide many discussable offers that vary to meet your different needs and help you reach your goals and success." />
  </Head>

<meta name="keywords" content={t('offer-services-keys')} />
<meta property="og:image" content="https://www.webhived.com/logo-search.svg" />

<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
  "@context": "http://schema.org",
  "@type": "ContactPage",
  "name": t('offers'),
  "description": t('offer-services-description'),
  "url": "https://webhived.com/offers.html"
})
}}
/>

      {isLoading ? (
         <>
         <loading />
         <div style={{ display: 'none' }}>
         
         <>
          
          <div className='offers'>
     

     <Navbar/>
     <div className="marketing-first-s">
   
   
  {/* <h1 className="about-title about-marketing-content ">{t('webhived agency Discover our offers')}</h1> */}
  <p style={{display:'none'}}>
  Reach out to us through our website, email, or social media to discuss your website requirements and design preferences.
  </p>
   <div className="about-logo">
     <img src='/WebHive-image.svg' alt="logo" className='about-logo-picture' />
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
     <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('f12')}</div>
    
   <Link href='/discuss-offer.html' ><button className="button-offer">{t('talk-us')}</button></Link>

   
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
     <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('f12')}</div>
     

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
     <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('f12')}</div>
    
    <Link href="/discuss-offer.html"><button className="button-offer">{t('talk-us')}</button></Link>

</div>
 </div>
 <div className="other-offer">
   <Link href='/discuss-offer.html'><button className="button-offer   button-offer-dev">{t('react-out')}</button></Link>

 </div>
</div>
{/* foe  seo  service */}
<div className="section-dev">
 <div className="dev-offer-title">{t('seo-offer')}</div>
 <div className="cards-dev">
    <div className="card-dev-one">
    <div className="price-">{t('ff0')}</div>
     <div className="tools">{t('ff1price')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff2')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff3')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff4')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff5')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff6')}</div>
     <div className="feature other">{t('ff7')}</div>
     <div className="feature  under"><MdClose className='no-checked'/>{t('ff8')}</div>
     <div className="feature  under"><MdClose className='no-checked'/>{t('ff9')}</div>
     <div className="feature  under"><MdClose className='no-checked'/>{t('ff10')}</div>
     <div className="feature  under"><MdClose className='no-checked'/>{t('ff11')}</div>
     <div className="feature under"><MdClose className='no-checked'/>{t('ff12')}</div>
     <div className="feature under"> <MdClose className='no-checked'/> {t('ff13')}</div>
     <div className="feature under"> <MdClose className='no-checked'/> {t('ff14')}</div>
     <div className="feature under"> <MdClose className='no-checked'/> {t('ff15')}</div>
     <div className="feature under"> <MdClose className='no-checked'/> {t('ff16')}</div>
     <div className="feature other18 ">  {t('ff18')}</div>
     <Link href='/discuss-offer.html' ><button className="button-offer">{t('talk-us')}</button></Link>



   
    </div>
<div className="card-dev-two">
       <div className="price-">{t('ff00')}</div>
     <div className="tools">{t('ff11price')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff2')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff3')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff4')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff5')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff6')}</div>
     <div className="feature other">{t('ff7')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('ff8')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('ff9')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('ff10')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('ff11')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff12')}</div>
     <div className="feature"><MdCheck className='checked'/>  {t('ff13')}</div>
     <div className="feature under"> <MdClose className='no-checked'/> {t('ff14')}</div>
     <div className="feature under"><MdClose className='no-checked'/>  {t('ff15')}</div>
     <div className="feature under">  <MdClose className='no-checked'/>{t('ff16')}</div>
     <div className="feature other18 ">  {t('ff18')}</div>
   <Link href='/discuss-offer.html' ><button className="button-offer">{t('talk-us')}</button></Link>
    

     
</div>
<div className="card-dev-three">
<div className="price-">{t('ff000')}</div>
     <div className="tools">{t('ff111price')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff2')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff3')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff4')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff5')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff6')}</div>
     <div className="feature other">{t('ff7')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('ff8')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('ff9')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('ff10')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('ff11')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff12')}</div>
     <div className="feature"> <MdCheck className='checked'/> {t('ff13')}</div>
     <div className="feature"> <MdCheck className='checked'/> {t('ff14')}</div>
     <div className="feature"> <MdCheck className='checked'/> {t('ff15')}</div>
     <div className="feature"> <MdCheck className='checked'/> {t('ff16')}</div>
     <div className="feature other18 ">  {t('ff18')}</div>
     <Link href='/discuss-offer.html' ><button className="button-offer">{t('talk-us')}</button></Link>


</div>

 </div>
 
</div>

{/* foe  seo  service */}
<div className="section-dev">
 <div className="dev-offer-title">{t('title-ads')}</div>
 <div className="cards-dev">
    <div className="card-dev-one">
    <div className="price-">{t('ff0')}</div>
    <div className="tools">{t('fff1')}</div>
     <div className="feature xx">{t('fff2')}</div>
     <div className="feature toll">{t('fff3')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('fff4')}</div>
     <div className="feature other">{t('fff51')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('fff6')}</div>
     <div className="feature other">{t('fff51')}</div>

     <div className="feature <MdCheck className='checked'/>  ">{t('fff8')}</div>
     <div className="feature other">{t('fff51')}</div>

     <div className="feature <MdCheck className='checked'/> ">{t('fff10')}</div>
     <div className="feature other">{t('fff51')}</div>

     <div className="feature "><MdCheck className='checked'/>{t('fff12')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff13')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff14')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff15')}</div>
     <div className="feature other">{t('fff16')}</div>
     <div className="feature other">{t('fff1616')}</div>

     <div className="feature  under">  <MdClose className='no-checked'/>{t('fff17')}</div>
     <div className="feature under  "> <MdClose className='no-checked'/> {t('fff18')}</div>
     <div className="feature  under "> <MdClose className='no-checked'/> {t('fff19')}</div>
     <Link href='/discuss-offer.html' ><button className="button-offer">{t('talk-us')}</button></Link>



   
    </div>
<div className="card-dev-two">
<div className="price-">{t('ff00')}</div>
<div className="tools">{t('fff11')}</div>
     <div className="feature xx">{t('fff2')}</div>
     <div className="feature toll">{t('fff33')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('fff4')}</div>
     <div className="feature other">{t('fff52')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('fff6')}</div>
     <div className="feature other">{t('fff52')}</div>

     <div className="feature   "><MdCheck className='checked'/>{t('fff8')}</div>
     <div className="feature other">{t('fff52')}</div>

     <div className="feature  "><MdCheck className='checked'/>{t('fff10')}</div>
     <div className="feature other">{t('fff52')}</div>
     
     <div className="feature "><MdCheck className='checked'/>{t('fff12')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff13')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff14')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff15')}</div>
     <div className="feature other">{t('fff16')}</div>
     <div className="feature other">{t('fff1616')}</div>

     <div className="feature  "> <MdCheck className='checked'/> {t('fff17')}</div>
     <div className="feature under  "> <MdClose className='no-checked'/> {t('fff18')}</div>
     <div className="feature  under "> <MdClose className='no-checked'/> {t('fff19')}</div>
   <Link href='/discuss-offer.html' ><button className="button-offer">{t('talk-us')}</button></Link>

     
</div>
<div className="card-dev-three">
<div className="price-">{t('ff000')}</div>
     <div className="tools ">{t('fff111')}</div>

     <div className="feature xx">{t('fff2')}</div>
     <div className="feature toll">{t('fff333')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('fff4')}</div>
     <div className="feature other">{t('fff53')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('fff6')}</div>
     <div className="feature other">{t('fff53')}</div>

     <div className="feature   "><MdCheck className='checked'/>{t('fff8')}</div>
     <div className="feature other">{t('fff53')}</div>

     <div className="feature  "><MdCheck className='checked'/>{t('fff10')}</div>
     <div className="feature other">{t('fff53')}</div>

     <div className="feature "><MdCheck className='checked'/>{t('fff12')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff13')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff14')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff15')}</div>
     <div className="feature other">{t('fff16')}</div>
     <div className="feature other">{t('fff1616')}</div>

     <div className="feature  "><MdCheck className='checked'/>  {t('fff17')}</div>
     <div className="feature  "> <MdCheck className='checked'/> {t('fff18')}</div>
     <div className="feature  "> <MdCheck className='checked'/> {t('fff19')}</div>
   <Link href='/discuss-offer.html' ><button className="button-offer">{t('talk-us')}</button></Link>

</div>
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
        <title>WebHived agency – Discover new  Offers that satisfy your needs</title>
        <meta name="description" content="In WebHived, we provide many discussable offers that vary to meet your different needs and help you reach your goals and success." />
  </Head>
          
          <div className='offers'>
     

     <Navbar/>
     <div className="marketing-first-s">
   <h1 className="about-title about-marketing-content ">{t('webhived agency Discover our offers')}</h1>
   <div className="about-logo">
     <img src='/WebHive-image.svg' alt="logo" className='about-logo-picture' />
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
     <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('f12')}</div>
    
   <Link href='/discuss-offer.html' ><button className="button-offer" id='Discuss-offer-btn'>{t('talk-us')}</button></Link>

   
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
     <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('f12')}</div>
     

   <Link href="/discuss-offer.html"><button id='Discuss-offer-btn' className="button-offer">{t('talk-us')}</button></Link>
     
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
     <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('f12')}</div>
    
    <Link href="/discuss-offer.html"><button id='Discuss-offer-btn' className="button-offer">{t('talk-us')}</button></Link>

</div>
 </div>
 <div className="other-offer">
   <Link href='/discuss-offer.html'><button id='Discuss-offer-btn' className="button-offer   button-offer-dev">{t('react-out')}</button></Link>

 </div>
</div>
{/* foe  seo  service */}
<div className="section-dev">
 <div className="dev-offer-title">{t('seo-offer')}</div>
 <div className="cards-dev">
    <div className="card-dev-one">
    <div className="price-">{t('ff0')}</div>
     <div className="tools">{t('ff1price')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff2')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff3')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff4')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff5')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff6')}</div>
     <div className="feature other">{t('ff7')}</div>
     <div className="feature  under"><MdClose className='no-checked'/>{t('ff8')}</div>
     <div className="feature  under"><MdClose className='no-checked'/>{t('ff9')}</div>
     <div className="feature  under"><MdClose className='no-checked'/>{t('ff10')}</div>
     <div className="feature  under"><MdClose className='no-checked'/>{t('ff11')}</div>
     {/* <div className="feature under"><MdClose className='no-checked'/>{t('ff12')}</div> */}
     <div className="feature under"> <MdClose className='no-checked'/> {t('ff13')}</div>
     <div className="feature under"> <MdClose className='no-checked'/> {t('ff14')}</div>
     <div className="feature under"> <MdClose className='no-checked'/> {t('ff15')}</div>
     <div className="feature under"> <MdClose className='no-checked'/> {t('ff16')}</div>
     <div className="feature other18 ">  {t('ff18')}</div>
     <Link href='/discuss-offer.html' ><button id='Discuss-offer-btn' className="button-offer">{t('talk-us')}</button></Link>



   
    </div>
<div className="card-dev-two">
       <div className="price-">{t('ff00')}</div>
     <div className="tools">{t('ff11price')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff2')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff3')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff4')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff5')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff6')}</div>
     <div className="feature other">{t('ff7hicham')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('ff8')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('ff9')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('ff10')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('ff11')}</div>
     {/* <div className="feature"><MdCheck className='checked'/>{t('ff12')}</div> */}
     <div className="feature"><MdCheck className='checked'/>  {t('ff13')}</div>
     <div className="feature under"> <MdClose className='no-checked'/> {t('ff14')}</div>
     <div className="feature under"><MdClose className='no-checked'/>  {t('ff15')}</div>
     <div className="feature under">  <MdClose className='no-checked'/>{t('ff16')}</div>
     <div className="feature other18 ">  {t('ff18')}</div>
   <Link href='/discuss-offer.html' ><button id='Discuss-offer-btn' className="button-offer">{t('talk-us')}</button></Link>
    

     
</div>
<div className="card-dev-three">
<div className="price-">{t('ff000')}</div>
     <div className="tools">{t('ff111price')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff2')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff3')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff4')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff5')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('ff6')}</div>
     <div className="feature other">{t('ff7saad')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('ff8')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('ff9')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('ff10')}</div>
     <div className="feature "><MdCheck className='checked'/>{t('ff11')}</div>
     {/* <div className="feature"><MdCheck className='checked'/>{t('ff12')}</div> */}
     <div className="feature"> <MdCheck className='checked'/> {t('ff13')}</div>
     <div className="feature"> <MdCheck className='checked'/> {t('ff14')}</div>
     <div className="feature"> <MdCheck className='checked'/> {t('ff15')}</div>
     <div className="feature"> <MdCheck className='checked'/> {t('ff16')}</div>
     <div className="feature other18 ">  {t('ff18')}</div>
     <Link href='/discuss-offer.html' ><button id='Discuss-offer-btn' className="button-offer">{t('talk-us')}</button></Link>


</div>

 </div>
 
</div>

{/* foe  seo  service */}
<div className="section-dev">
 <div className="dev-offer-title">{t('title-ads')}</div>
 <div className="cards-dev">
    <div className="card-dev-one">
    <div className="price-">{t('ff0')}</div>
    <div className="tools">{t('fff1')}</div>
     <div className="feature xx">{t('fff2')}</div>
     <div className="feature toll">{t('fff3')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('fff4')}</div>
     <div className="feature other">{t('fff51')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('fff6')}</div>
     <div className="feature other">{t('fff51')}</div>

     <div className="feature <MdCheck className='checked'/>  ">{t('fff8')}</div>
     <div className="feature other">{t('fff51')}</div>

     <div className="feature <MdCheck className='checked'/> ">{t('fff10')}</div>
     <div className="feature other">{t('fff51')}</div>

     <div className="feature "><MdCheck className='checked'/>{t('fff12')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff13')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff14')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff15')}</div>
   

     <div className="feature  under">  <MdClose className='no-checked'/>{t('fff17')}</div>
     <div className="feature under  "> <MdClose className='no-checked'/> {t('fff18')}</div>
     <div className="feature  under "> <MdClose className='no-checked'/> {t('fff19')}</div>
     <Link href='/discuss-offer.html' ><button id='Discuss-offer-btn' className="button-offer">{t('talk-us')}</button></Link>



   
    </div>
<div className="card-dev-two">
<div className="price-">{t('ff00')}</div>
<div className="tools">{t('fff11')}</div>
     <div className="feature xx">{t('fff2')}</div>
     <div className="feature toll">{t('fff33')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('fff4')}</div>
     <div className="feature other">{t('fff52')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('fff6')}</div>
     <div className="feature other">{t('fff52')}</div>

     <div className="feature   "><MdCheck className='checked'/>{t('fff8')}</div>
     <div className="feature other">{t('fff52')}</div>

     <div className="feature  "><MdCheck className='checked'/>{t('fff10')}</div>
     <div className="feature other">{t('fff52')}</div>
     
     <div className="feature "><MdCheck className='checked'/>{t('fff12')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff13')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff14')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff15')}</div>
    

     <div className="feature  "> <MdCheck className='checked'/> {t('fff17')}</div>
     <div className="feature under  "> <MdClose className='no-checked'/> {t('fff18')}</div>
     <div className="feature  under "> <MdClose className='no-checked'/> {t('fff19')}</div>
   <Link href='/discuss-offer.html' ><button  id='Discuss-offer-btn' className="button-offer">{t('talk-us')}</button></Link>

     
</div>
<div className="card-dev-three">
<div className="price-">{t('ff000')}</div>
     <div className="tools ">{t('fff111')}</div>

     <div className="feature xx">{t('fff2')}</div>
     <div className="feature toll">{t('fff333')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('fff4')}</div>
     <div className="feature other">{t('fff53')}</div>
     <div className="feature"><MdCheck className='checked'/>{t('fff6')}</div>
     <div className="feature other">{t('fff53')}</div>

     <div className="feature   "><MdCheck className='checked'/>{t('fff8')}</div>
     <div className="feature other">{t('fff53')}</div>

     <div className="feature  "><MdCheck className='checked'/>{t('fff10')}</div>
     <div className="feature other">{t('fff53')}</div>

     <div className="feature "><MdCheck className='checked'/>{t('fff12')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff13')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff14')}</div>
     <div className="feature "> <MdCheck className='checked'/> {t('fff15')}</div>
  
     <div className="feature  "><MdCheck className='checked'/>  {t('fff17')}</div>
     <div className="feature  "> <MdCheck className='checked'/> {t('fff18')}</div>
     <div className="feature  "> <MdCheck className='checked'/> {t('fff19')}</div>
   <Link href='/discuss-offer.html' ><button id='Discuss-offer-btn' className="button-offer">{t('talk-us')}</button></Link>

</div>
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
//     <div className='offers'>
     

//         <Navbar/>
//         <div className="marketing-first-s">
//       <h1 className="about-title about-marketing-content ">{t('digital-title')}</h1>
//       <div className="about-logo">
//         <img src='/WebHive-image.svg' alt="logo" className='about-logo-picture' />
//       </div>
//     </div>
//    <div className="section-dev">
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
//         <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
//         <div className="feature "><MdCheck className='checked'/>{t('f12')}</div>
       
//       <Link href='/discuss-offer.html' ><button className="button-offer">{t('talk-us')}</button></Link>

      
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
//         <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
//         <div className="feature "><MdCheck className='checked'/>{t('f12')}</div>
        
   
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
//         <div className="feature "><MdCheck className='checked'/>{t('f10')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('f12')}</div>
       
//        <Link href="/discuss-offer.html"><button className="button-offer">{t('talk-us')}</button></Link>

// </div>
//     </div>
//     <div className="other-offer">
//       <Link href='/discuss-offer.html'><button className="button-offer   button-offer-dev">{t('react-out')}</button></Link>

//     </div>
//    </div>
// {/* foe  seo  service */}
// <div className="section-dev">
//     <div className="dev-offer-title">{t('seo-offer')}</div>
//     <div className="cards-dev">
//        <div className="card-dev-one">
//        <div className="price-">{t('ff0')}</div>
//         <div className="tools">{t('ff1price')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff2')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff3')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff4')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff5')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff6')}</div>
//         <div className="feature other">{t('ff7')}</div>
//         <div className="feature  under"><MdClose className='no-checked'/>{t('ff8')}</div>
//         <div className="feature  under"><MdClose className='no-checked'/>{t('ff9')}</div>
//         <div className="feature  under"><MdClose className='no-checked'/>{t('ff10')}</div>
//         <div className="feature  under"><MdClose className='no-checked'/>{t('ff11')}</div>
//         <div className="feature under"><MdClose className='no-checked'/>{t('ff12')}</div>
//         <div className="feature under"> <MdClose className='no-checked'/> {t('ff13')}</div>
//         <div className="feature under"> <MdClose className='no-checked'/> {t('ff14')}</div>
//         <div className="feature under"> <MdClose className='no-checked'/> {t('ff15')}</div>
//         <div className="feature under"> <MdClose className='no-checked'/> {t('ff16')}</div>
//         <div className="feature other18 ">  {t('ff18')}</div>
//         <Link href='/discuss-offer.html' ><button className="button-offer">{t('talk-us')}</button></Link>

  

      
//        </div>
// <div className="card-dev-two">
//           <div className="price-">{t('ff00')}</div>
//         <div className="tools">{t('ff11price')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff2')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff3')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff4')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff5')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff6')}</div>
//         <div className="feature other">{t('ff7')}</div>
//         <div className="feature "><MdCheck className='checked'/>{t('ff8')}</div>
//         <div className="feature "><MdCheck className='checked'/>{t('ff9')}</div>
//         <div className="feature "><MdCheck className='checked'/>{t('ff10')}</div>
//         <div className="feature "><MdCheck className='checked'/>{t('ff11')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff12')}</div>
//         <div className="feature"><MdCheck className='checked'/>  {t('ff13')}</div>
//         <div className="feature under"> <MdClose className='no-checked'/> {t('ff14')}</div>
//         <div className="feature under"><MdClose className='no-checked'/>  {t('ff15')}</div>
//         <div className="feature under">  <MdClose className='no-checked'/>{t('ff16')}</div>
//         <div className="feature other18 ">  {t('ff18')}</div>
//       <Link href='/discuss-offer.html' ><button className="button-offer">{t('talk-us')}</button></Link>
       
  
        
// </div>
// <div className="card-dev-three">
// <div className="price-">{t('ff000')}</div>
//         <div className="tools">{t('ff111price')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff2')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff3')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff4')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff5')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff6')}</div>
//         <div className="feature other">{t('ff7')}</div>
//         <div className="feature "><MdCheck className='checked'/>{t('ff8')}</div>
//         <div className="feature "><MdCheck className='checked'/>{t('ff9')}</div>
//         <div className="feature "><MdCheck className='checked'/>{t('ff10')}</div>
//         <div className="feature "><MdCheck className='checked'/>{t('ff11')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('ff12')}</div>
//         <div className="feature"> <MdCheck className='checked'/> {t('ff13')}</div>
//         <div className="feature"> <MdCheck className='checked'/> {t('ff14')}</div>
//         <div className="feature"> <MdCheck className='checked'/> {t('ff15')}</div>
//         <div className="feature"> <MdCheck className='checked'/> {t('ff16')}</div>
//         <div className="feature other18 ">  {t('ff18')}</div>
//         <Link href='/discuss-offer.html' ><button className="button-offer">{t('talk-us')}</button></Link>


// </div>

//     </div>
    
//    </div>
 
//    {/* foe  seo  service */}
// <div className="section-dev">
//     <div className="dev-offer-title">{t('title-ads')}</div>
//     <div className="cards-dev">
//        <div className="card-dev-one">
//        <div className="price-">{t('ff0')}</div>
//        <div className="tools">{t('fff1')}</div>
//         <div className="feature xx">{t('fff2')}</div>
//         <div className="feature toll">{t('fff3')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('fff4')}</div>
//         <div className="feature other">{t('fff51')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('fff6')}</div>
//         <div className="feature other">{t('fff51')}</div>

//         <div className="feature <MdCheck className='checked'/>  ">{t('fff8')}</div>
//         <div className="feature other">{t('fff51')}</div>

//         <div className="feature <MdCheck className='checked'/> ">{t('fff10')}</div>
//         <div className="feature other">{t('fff51')}</div>

//         <div className="feature "><MdCheck className='checked'/>{t('fff12')}</div>
//         <div className="feature "> <MdCheck className='checked'/> {t('fff13')}</div>
//         <div className="feature "> <MdCheck className='checked'/> {t('fff14')}</div>
//         <div className="feature "> <MdCheck className='checked'/> {t('fff15')}</div>
//         <div className="feature other">{t('fff16')}</div>
//         <div className="feature other">{t('fff1616')}</div>

//         <div className="feature  under">  <MdClose className='no-checked'/>{t('fff17')}</div>
//         <div className="feature under  "> <MdClose className='no-checked'/> {t('fff18')}</div>
//         <div className="feature  under "> <MdClose className='no-checked'/> {t('fff19')}</div>
//         <Link href='/discuss-offer.html' ><button className="button-offer">{t('talk-us')}</button></Link>

  

      
//        </div>
// <div className="card-dev-two">
// <div className="price-">{t('ff00')}</div>
// <div className="tools">{t('fff11')}</div>
//         <div className="feature xx">{t('fff2')}</div>
//         <div className="feature toll">{t('fff33')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('fff4')}</div>
//         <div className="feature other">{t('fff52')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('fff6')}</div>
//         <div className="feature other">{t('fff52')}</div>

//         <div className="feature   "><MdCheck className='checked'/>{t('fff8')}</div>
//         <div className="feature other">{t('fff52')}</div>

//         <div className="feature  "><MdCheck className='checked'/>{t('fff10')}</div>
//         <div className="feature other">{t('fff52')}</div>
        
//         <div className="feature "><MdCheck className='checked'/>{t('fff12')}</div>
//         <div className="feature "> <MdCheck className='checked'/> {t('fff13')}</div>
//         <div className="feature "> <MdCheck className='checked'/> {t('fff14')}</div>
//         <div className="feature "> <MdCheck className='checked'/> {t('fff15')}</div>
//         <div className="feature other">{t('fff16')}</div>
//         <div className="feature other">{t('fff1616')}</div>

//         <div className="feature  "> <MdCheck className='checked'/> {t('fff17')}</div>
//         <div className="feature under  "> <MdClose className='no-checked'/> {t('fff18')}</div>
//         <div className="feature  under "> <MdClose className='no-checked'/> {t('fff19')}</div>
//       <Link href='/discuss-offer.html' ><button className="button-offer">{t('talk-us')}</button></Link>

        
// </div>
// <div className="card-dev-three">
// <div className="price-">{t('ff000')}</div>
//         <div className="tools ">{t('fff111')}</div>

//         <div className="feature xx">{t('fff2')}</div>
//         <div className="feature toll">{t('fff333')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('fff4')}</div>
//         <div className="feature other">{t('fff53')}</div>
//         <div className="feature"><MdCheck className='checked'/>{t('fff6')}</div>
//         <div className="feature other">{t('fff53')}</div>

//         <div className="feature   "><MdCheck className='checked'/>{t('fff8')}</div>
//         <div className="feature other">{t('fff53')}</div>

//         <div className="feature  "><MdCheck className='checked'/>{t('fff10')}</div>
//         <div className="feature other">{t('fff53')}</div>

//         <div className="feature "><MdCheck className='checked'/>{t('fff12')}</div>
//         <div className="feature "> <MdCheck className='checked'/> {t('fff13')}</div>
//         <div className="feature "> <MdCheck className='checked'/> {t('fff14')}</div>
//         <div className="feature "> <MdCheck className='checked'/> {t('fff15')}</div>
//         <div className="feature other">{t('fff16')}</div>
//         <div className="feature other">{t('fff1616')}</div>

//         <div className="feature  "><MdCheck className='checked'/>  {t('fff17')}</div>
//         <div className="feature  "> <MdCheck className='checked'/> {t('fff18')}</div>
//         <div className="feature  "> <MdCheck className='checked'/> {t('fff19')}</div>
//       <Link href='/discuss-offer.html' ><button className="button-offer">{t('talk-us')}</button></Link>

// </div>
//     </div>
    
//    </div>
//    <div className="about-consltation about-consultation-marketing ">
//       <div className="title-contsltation">{t('consultation')}</div>
//       <button className='button-home button-consltation'>
//       <Link href='/contact-us.html'  className='LNK'>   {t('consultation-title')} </Link> 
//           </button>      
//       </div>
//       <Footer/>
//     </div>
    )
}

export default Offers