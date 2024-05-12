"use clinet"
import React ,{useContext}from 'react'
import './chalange.css'
import Link from 'next/link';

import { TranslationContext } from '../../TranslationContext';

function Chalange() {
  const { t} = useContext(TranslationContext);


  return (
    <div className='chalange_page '>
    <h1 className='title__chalange server-title'>{t('WebHived | Web Development & Digital marketing agency')}</h1>
    <div className='content_chalange'>

      <div className='card_chalange'>
<p className='card_chalange-section1'>
{t('1_chlange-1')}
</p>
<div className='card_chalange-section2'>
{t('1_chlange-2')}
</div>
<div className='card_chalange-section3' >
  <img src='/site_probleme.svg' alt='' className='card_chalange-image'/>
</div>
<div className='card_chalange-section4'>
  <lu >
    <li className='card_chalange_li '>{t('1_chlange-3')} </li>
    <li className='card_chalange_li'>{t('1_chlange-4')} </li>
    <li className='card_chalange_li'>{t('1_chlange-5')} </li>
  </lu>



</div>
<div className='card_chalange-section5' >
</div>
<div className='card_chalange-section6' >
<Link href='/Web-development.html' >

<div className='card_chalange-link'>
   <p className='card_chalange-link1'>{t('1_chlange-6') + ' ==> '}</p>
  
       </div> 
                </Link>
</div>
      </div>


      <div className='card_chalange'>
<p className='card_chalange-section1'>
{t('2_chlange-1')}
</p>
<div className='card_chalange-section2'>
{t('2_chlange-2')}
</div>
<div className='card_chalange-section3' >
  <img src='/UX_probleme.svg' alt='' className='card_chalange-image  card_chalange-imagex'/>
</div>
<div className='card_chalange-section4'>
  <lu >
    <li className='card_chalange_li '>{t('2_chlange-3')} </li>
    <li className='card_chalange_li'>{t('2_chlange-4')} </li>
    <li className='card_chalange_li'>{t('2_chlange-5')} </li>
  </lu>



</div>
<div className='card_chalange-section5' >
</div>
<div className='card_chalange-section6' >
<Link href='/Web-development.html' >
<div className='card_chalange-link'>
   <p className='card_chalange-link1'>{t('2_chlange-6') + ' ==> '}</p>
  
       </div> 
                </Link>
</div>
      </div>



      <div className='card_chalange'>
<p className='card_chalange-section1'>
{t('3_chlange-1')}
</p>
<div className='card_chalange-section2'>
{t('3_chlange-2')}
</div>
<div className='card_chalange-section3' >
  <img src='/CTR_probleme.svg' alt='' className='card_chalange-image card_chalange-imagexl'/>
</div>
<div className='card_chalange-section4'>
  <lu >
    <li className='card_chalange_li '>{t('3_chlange-3')} </li>
    <li className='card_chalange_li'>{t('3_chlange-4')} </li>
    <li className='card_chalange_li'>{t('3_chlange-5')} </li>
  </lu>



</div>
<div className='card_chalange-section5' >
</div>
<div className='card_chalange-section6' >
<Link href='/Digital-marketing&SEO.html'>
<div className='card_chalange-link'>
   <p className='card_chalange-link1'>{t('3_chlange-6') + ' ==> '}</p>
  
       </div> 
                </Link>
</div>
      </div>



      <div className='card_chalange'>
<p className='card_chalange-section1'>
{t('4_chlange-1')}
</p>
<div className='card_chalange-section2'>
{t('4_chlange-2')}
</div>
<div className='card_chalange-section3' >
  <img src='/Traffic_probleme.svg' alt='' className='card_chalange-image'/>
</div>
<div className='card_chalange-section4'>
  <lu >
    <li className='card_chalange_li '>{t('4_chlange-3')} </li>
    <li className='card_chalange_li'>{t('4_chlange-4')} </li>
    <li className='card_chalange_li'>{t('4_chlange-5')} </li>
  </lu>



</div>
<div className='card_chalange-section5' >
</div>
<div className='card_chalange-section6' >
<Link href='/Digital-marketing&SEO.html'>
<div className='card_chalange-link'>
   <p className='card_chalange-link1'>{t('4_chlange-6') + ' ==> '}</p>
  
       </div> 
                </Link>
</div>
      </div>


      
    </div>
    <div className="about-consltation about-consultation-marketing ">
      <div className="title-contsltation">{t('consultation')}</div>
      <button className='button-home button-consltation'>
      <Link href='/contact-us.html'  className='LNK'>   {t('consultation-title')} </Link> 
          </button>      
      </div>
    </div>
  )
}

export default Chalange