"use client"
import React, { useContext} from 'react';

import'./services.css'
import { TranslationContext } from '../../TranslationContext';
import Link from 'next/link';
// import loo from '../../loo'

function Service() {
  const { t} = useContext(TranslationContext);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(() => {
  //   // Simulate a 3-second delay before setting isLoading to false
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   });

  //   return () => {
  //     clearTimeout(timer);
  //   };
  // }, []);
  return (
    
      <div className='services' id='services'>
   
      <div className="marketing-third-s  home-service">
       <div className="marketing-third-s-content   content-home">
       <div className="marketing-third-s-image addno">
          <img src='/programming.svg' alt="analitics" className="marketing-third-s-img" />
        </div>
       <div className="marketing-third-s-des">
        
        <div className="marketing-third-s-title">{t('dev-main-title')}</div>
        <div className="marketing-text3"> {t('dev-main')}</div>
       
        <Link  href='/Web-development.html'  className='LNK'><button className='button-home later'>{t('learn-more')}</button></Link> 
      
        </div>
        <div className="addly">
          <img src='/programming.svg' alt="analitics" className="marketing-third-s-img" />
        </div>
       </div>
    
      </div>
        {/* fivth-s */}
        <div className="marketing-third-s">
       <div className="marketing-third-s-content">
       <div className="marketing-third-s-des">
        <div className="marketing-third-s-title">
    {t('digital-marketing-main-title')}
           </div>
   
    <div className="marketing-text3"> {t('digital-marketing-main')}</div>

    <Link  href='/Digital-marketing&SEO.html'  className='LNK'><button className='button-home later'>{t('learn-more')}</button></Link> 


        </div>
        <div className="marketing-third-s-image">
          <img src='/seo-search-digitalmarketing.svg' alt="advertizing" className="marketing-third-s-img" />
        </div>
       </div>
      </div>
      <div className="server-title ">{t('services')}</div>
      <div className="server-content">
        
 <div className="card1">
        <img src='/dev.svg' alt="devlopment web" className="card-image" />
        <Link  href='/Web-development'  className="card-title ">
        {t('kindw')}

        </Link>
       
      </div>
   
      <div className="card1">
      <img src='/seo.svg' alt="" className="card-image" />
          <Link  href='/Digital-marketing&SEO'   className="card-title ">
          {t('kindseo')}
        </Link>
      </div>
      {/* card5 for  marketing */}
      <div className="card1">
      <img src='/marketing.svg'  alt="" className="card-image card-image-u" />
      
          <Link  href='/Digital-marketing&SEO'  className="card-title ">
          {t('kindd')}
        </Link>
    


      </div>

  </div>   
      </div>
    )

   

 

}

export default Service