"use client"
import React, {useContext} from 'react';
import './footer.css'

import { FaFacebook ,FaLinkedin,FaInstagram ,FaYoutube,FaPhone} from 'react-icons/fa';
import { FiAtSign} from 'react-icons/fi';
import { TranslationContext } from '../../TranslationContext';
import Link from 'next/link';
// import loo from '../../loo'

function Footer() {
  const { t} = useContext(TranslationContext);

//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     // Simulate a 3-second delay before setting isLoading to false
//     const timer = setTimeout(() => {
//       setIsLoading(false);
//     });

//     return () => {
//       clearTimeout(timer);
//     };
//   }, []);
  return (
    // <>
    // {isLoading ? (
    //   <loo />
    // ) : (
        <div className='footer'>
        <div className="footer-section1">
        <div className="footer-service">
            <ul className='footer-service-parent'>
        <div className="footer-company-title">{t('services')}</div>
        
            <li className='footer-service-child'><Link href='/Web-development.html'  className='ll '  >   {t('kindw')}</Link></li>
            <li className='footer-service-child'><Link href='/Digital-marketing&SEO.html'  className=' ll'   >  {t('kindseo')}</Link></li>
            <li className='footer-service-child'><Link href='/Digital-marketing&SEO.html'className=' ll'    > {t('kindd')}</Link></li>
            <li className='footer-service-child'><Link href='/contact-us.html'className=' ll'    > {t('consultation-title')}</Link></li>
            
             
            
               
            </ul>
        </div>
        <div className="footer-company">
            <ul className="footer-company-parent">
        <div className="footer-company-title">{t('company')}</div>
        <li className='footer-company-child'><Link href='/' className=' ll'    > {t('home')}</Link></li>
        <li className='footer-company-child'><Link href='/about-us.html'className=' ll'    > {t('about')}</Link></li>
        <li className='footer-company-child'><Link href='/offers.html' className=' ll'    > {t('offers')}</Link></li>
        <li className='footer-company-child'><Link href='/contact-us.html' className=' ll'    > {t('contact')}</Link></li>
        <li className='footer-company-child'><Link href='/frequently-asked-questions.html' className=' ll'    >{t('faq')}</Link></li>


            </ul>
        </div>
        </div>
        <div className="footer-call">
            <div className="footer-call-img">
                <img src='/vertical-logo.svg' alt="company name"  className='footer-logo'/>
            </div>
            <div className="footer-calls">
                <div className="footer-calls-all">
                <div className="footer-calls-a">{t('phone')}</div>
                <div className="footer-calls-b">0699675430</div>
                </div>
                <div className="icon-phone">
                    <FaPhone className='icon-p-icon'/>
                </div>
            </div>
            <div className="footer-calls">
                <div className="footer-calls-all">
                <div className="footer-calls-a">{t('email-us')}</div>
                <div className="footer-calls-b">agency@webhived.com</div>

                </div>
                <div className="icon-phone  icon-email">
                    <FiAtSign className='icon-p-icon  icon-e-icon'/>
                </div>
            </div>
            <div className="footer-icons">
                <Link href='https://www.facebook.com/profile.php?id=100090340773259&mibextid=9R9pXO'>
                <FaFacebook className='icon'  />
                </Link>
                <Link href='https://www.linkedin.com/in/saad-el-bouazaoui-41933027b'>
                <FaLinkedin className='icon'/>
                </Link>
                <Link href='https://instagram.com/web_hived18?igshid=OGQ5ZDc2ODk2ZA=='>
                <FaInstagram className='icon' />
                </Link>
                <Link href='https://www.youtube.com/@WebHivedAgencyTalks'>
                <FaYoutube className='icon' />
                </Link>
    
  </div>
  
        </div>
    </div>
//      )} 
//  </>
   
)
}

export default Footer