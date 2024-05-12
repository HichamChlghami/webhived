"use client"

import React,{useContext,useState,useEffect} from 'react'

import './marketing.css'

import { TranslationContext } from '../TranslationContext';
import { MdCheck, MdClose } from 'react-icons/md'; // Checkmark and cross icons

import Link from 'next/link';
import { Footer ,Navbar} from '../components'
import loading from '../loading';
import Head from 'next/head';

function Marketing() {
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
        <title>Web hive agency – SEO & Ads Management services</title>
        <meta name="description" content="In WebHived Agency, we provide high-quality Digital Marketing services (SEO & Ads Management). We combine creativity and efficiency to satisfy your needs." />
      </Head>
<meta property="og:image" content="https://www.webhived.com/logo-search.svg" />

<link rel="canonical" href="https://www.webhived.com/Digital-marketing&SEO.html" />




<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "http://schema.org",
      "@type": "Service",
      "serviceType": t('kindd'),
      "provider": {
        "@type": "Organization",
        "name": "WebHived"
      },
      "description":t('digital-services-description'),
      "url": "https://webhived.com/Digital-marketing&SEO"
    })
  }}
/>

  {isLoading ? (
    <>
    <loading />
    <div style={{ display: 'none' }}>
    
    <>
    <Head>
        <title>Web hive agency – SEO & Ads Management services</title>
        <meta name="description" content="In WebHived Agency, we provide high-quality Digital Marketing services (SEO & Ads Management). We combine creativity and efficiency to satisfy your needs." />
      </Head>
      
     <div className='marketing'>



<Navbar/>
<div className="marketing-content">
<div className="marketing-first-s">
<h1 className="about-title about-marketing-content ">{t('webhived agency Discover our offers')}</h1>
<div className="about-logo">
  <img src='/WebHive-image.svg' alt="logo" className='about-logo-picture' />
</div>
</div>
<div className="marketing-second-s">
<h1 className="marketing-second-s-title">
{t('digital-marketing-main-title')}
  
    </h1>
<div className="marketing-second-s-content  marketing-text3">
{t('digital-marketing-main')}

</div>

</div>
<div className="marketing-third-s">
 <div className="marketing-third-s-content">
 <div className="marketing-third-s-des">
  <div className="marketing-third-s-title">{t('digital-marketing-seo-title')} </div>
  <div className="marketing-text3">
  {t('digital-marketing-seo')}
  </div>
  
  </div>
  <div className="marketing-third-s-image">
    <img src='/seo-service.svg' alt="seo-service" className="marketing-third-s-img" />
  </div>
 </div>
</div>
{/* fourth-s */}
<div className="marketing-third-s">
 <div className="marketing-third-s-content">
 <div className="marketing-third-s-image  addno">
    <img src='/Analytics.svg' alt="analitics" className="marketing-third-s-img" />
  </div>
 <div className="marketing-third-s-des">
  
  <div className="marketing-third-s-title">{t('digital-marketing-performence-title')}</div>
 <div className="marketing-text3">

  {t('digital-marketing-performence')}    
  </div>
      </div>
  <div className="marketing-third-s-image  addly">
    <img src='/Analytics.svg' alt="analitics" className="marketing-third-s-img" />
  </div>
 </div>
</div>
{/* fivth-s */}
<div className="marketing-third-s">
 <div className="marketing-third-s-content">
 <div className="marketing-third-s-des">
  <div className="marketing-third-s-title">{t('digital-marketing-management-title')}</div>
  <div className="marketing-text3">
  {t('digital-marketing-management')}
  </div>
  </div>
  <div className="marketing-third-s-image">
    <img src='/ads.svg' alt="advertizing" className="marketing-third-s-img" />
  </div>
 </div>
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
        <title>Web hive agency – SEO & Ads Management services</title>
        <meta name="description" content="In WebHived Agency, we provide high-quality Digital Marketing services (SEO & Ads Management). We combine creativity and efficiency to satisfy your needs." />
      </Head>     
     <div className='marketing'>



<Navbar/>
<div className="marketing-content">
<div className="marketing-first-s">
<h1 className="about-title about-marketing-content ">{t('webhived agency Discover our offers')}</h1>
<div className="about-logo">
  <img src='/WebHive-image.svg' alt="logo" className='about-logo-picture' />
</div>
</div>
<div className="marketing-second-s">
<h1 className="marketing-second-s-title">
{t('digital-marketing-main-title')}
  
    </h1>
<div className="marketing-second-s-content  marketing-text3">
{t('digital-marketing-main')}

</div>

</div>
<div className="marketing-third-s">
 <div className="marketing-third-s-content">
 <div className="marketing-third-s-des">
  <div className="marketing-third-s-title">{t('digital-marketing-seo-title')} </div>
  <div className="marketing-text3">
  {t('digital-marketing-seo')}
  </div>
  
  </div>
  <div className="marketing-third-s-image">
    <img src='/seo-service.svg' alt="seo-service" className="marketing-third-s-img" />
  </div>
 </div>
</div>
{/* fourth-s */}
<div className="marketing-third-s">
 <div className="marketing-third-s-content">
 <div className="marketing-third-s-image  addno">
    <img src='/Analytics.svg' alt="analitics" className="marketing-third-s-img" />
  </div>
 <div className="marketing-third-s-des">
  
  <div className="marketing-third-s-title">{t('digital-marketing-performence-title')}</div>
 <div className="marketing-text3">

  {t('digital-marketing-performence')}    
  </div>
      </div>
  <div className="marketing-third-s-image  addly">
    <img src='/Analytics.svg' alt="analitics" className="marketing-third-s-img" />
  </div>
 </div>
</div>
{/* fivth-s */}
<div className="marketing-third-s">
 <div className="marketing-third-s-content">
 <div className="marketing-third-s-des">
  <div className="marketing-third-s-title">{t('digital-marketing-management-title')}</div>
  <div className="marketing-text3">
  {t('digital-marketing-management')}
  </div>
  </div>
  <div className="marketing-third-s-image">
    <img src='/ads.svg' alt="advertizing" className="marketing-third-s-img" />
  </div>
 </div>
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
   
     )} 
 </>

//     <div className='marketing'>



//       <Navbar/>
//       <div className="marketing-content">
//       <div className="marketing-first-s">
//       <h1 className="about-title about-marketing-content ">{t('digital-title')}</h1>
//       <div className="about-logo">
//         <img src='/WebHive-image.svg' alt="logo" className='about-logo-picture' />
//       </div>
//       </div>
//       <div className="marketing-second-s">
//       <h1 className="marketing-second-s-title">
//     {t('digital-marketing-main-title')}
        
//           </h1>
//       <div className="marketing-second-s-content  marketing-text3">
//     {t('digital-marketing-main')}

//       </div>

//       </div>
//       <div className="marketing-third-s">
//        <div className="marketing-third-s-content">
//        <div className="marketing-third-s-des">
//         <div className="marketing-third-s-title">{t('digital-marketing-seo-title')} </div>
//         <div className="marketing-text3">
//         {t('digital-marketing-seo')}
//         </div>
        
//         </div>
//         <div className="marketing-third-s-image">
//           <img src='/seo-service.svg' alt="seo-service" className="marketing-third-s-img" />
//         </div>
//        </div>
//       </div>
//       {/* fourth-s */}
//       <div className="marketing-third-s">
//        <div className="marketing-third-s-content">
//        <div className="marketing-third-s-image  addno">
//           <img src='/Analytics.svg' alt="analitics" className="marketing-third-s-img" />
//         </div>
//        <div className="marketing-third-s-des">
        
//         <div className="marketing-third-s-title">{t('digital-marketing-performence-title')}</div>
//        <div className="marketing-text3">

//         {t('digital-marketing-performence')}    
//         </div>
//             </div>
//         <div className="marketing-third-s-image  addly">
//           <img src='/Analytics.svg' alt="analitics" className="marketing-third-s-img" />
//         </div>
//        </div>
//       </div>
//       {/* fivth-s */}
//       <div className="marketing-third-s">
//        <div className="marketing-third-s-content">
//        <div className="marketing-third-s-des">
//         <div className="marketing-third-s-title">{t('digital-marketing-management-title')}</div>
//         <div className="marketing-text3">
//         {t('digital-marketing-management')}
//         </div>
//         </div>
//         <div className="marketing-third-s-image">
//           <img src='/ads.svg' alt="advertizing" className="marketing-third-s-img" />
//         </div>
//        </div>
//       </div>
//       </div>

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
   

//       <div className="about-consltation about-consultation-marketing ">
//       <div className="title-contsltation">{t('consultation')}</div>
//       <button className='button-home button-consltation'>
//       <Link href='/contact-us.html'  className='LNK'>   {t('consultation-title')} </Link> 
//           </button>      
//       </div>
//       <Footer/>
//     </div>
  )
}

export default Marketing