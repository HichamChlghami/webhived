     "use client"
import React,{useState,useContext,useEffect}from 'react';
import './navbar1.css'
import './navbar.css'

import {RiCloseLine,RiMenu3Line}from 'react-icons/ri'

import { TranslationContext } from '../../TranslationContext';
import { MdExpandMore } from 'react-icons/md';
import Link from 'next/link';
    function Navbar() {

      
        

        const [showDropdown, setShowDropdown] = useState(false);
        const [changeit , setCHangeit]=useState(false);
        const okchangelanguage=()=>{
            setCHangeit(!changeit)
        }
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown1 ')) {
              setShowDropdown(false);
            }
            if (!event.target.closest('.closee ')) {
                setMenu(false)
              }
              if (!event.target.closest('.openn')) {
                setMenu(true)
              }
              if (!event.target.closest('.clickopen')) {
            setCHangeit(false)
                
              }
              
            
          };
        
          useEffect(() => {
            document.addEventListener('click', handleClickOutside);
            return () => {
              document.removeEventListener('click', handleClickOutside);
            };
          }, []);
          

          
        const hrefggleDropdown = () => {
          setShowDropdown(!showDropdown);
        };
        const [Menu,setMenu]=useState(true)


const { t, i18n } = useContext(TranslationContext);
            // const [selectedLanguage, setSelectedLanguage] = useState('');
            const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)


  
    const handleLanguageChange = (event) => {
        // setSelectedLanguage(event.target.value);
        const value = event.target.value;
        setSelectedLanguage(value);

       

        if (value === 'English' ) {
            
            i18n.changeLanguage('English');
            document.documentElement.dir = 'ltr'; // Set left-href-right direction
            // simulateDoubleClick();
            setMenu(true)
            setCHangeit(false)
            

        } else if (value === 'Français') {
            i18n.changeLanguage('Français');
            document.documentElement.dir = 'ltr'; // Set left-href-right direction
            // simulateDoubleClick();
            setMenu(true)
            setCHangeit(false)
        

        } else if (value === 'العربية') {
            document.documentElement.dir = 'rtl'; // Set right-href-left direction

            i18n.changeLanguage('العربية');
        // simulateDoubleClick();
        setMenu(true)
        setCHangeit(false)


        }
    }
   


                const Menu1 = ()=>(
                <>
            
                    <p ><Link href='/' className='a closee' >{t('home')} </Link></p>
                    <div  className="dropdown1 openn">
                    <p  className='ser closee'onClick={hrefggleDropdown}>{t('services')}</p>
        {showDropdown && (
            <ul className="dropdown-content  kk">
            <li className='link'> <Link href='/Web-development.html' > <div className="service-option closee " onClick={() => { setMenu(true); hrefggleDropdown(); }}> {t('kindw')}</div></Link></li>
            <li className='link'> < Link href='/Digital-marketing&SEO.html'  > <div className="service-option closee" onClick={() => { setMenu(true); hrefggleDropdown(); }}> {t('kindseo')}</div></Link></li>
            <li className='link'><Link href='/Digital-marketing&SEO.html'  > <div className="service-option closee "onClick={() => { setMenu(true); hrefggleDropdown(); }}>{t('kindd')}</div></Link></li>

             
            </ul>
          )}
        </div>
        <p><Link href='/about-us.html' className='a closee '>{t('about')}</Link></p>
                    
        
                    <p><Link href='/contact-us.html'  className='a  closee' onClick={handleClickOutside} >{t('contact')}</Link></p>
                    <p><Link href='/offers.html' className='a   closee'  >{t('offers')}</Link></p>
                </>



            )
        return (
            <div className='gpt3__Navbar'>
                <div className='gpt3__Navbar-container'>
                    < div className='gpt3__Navbar-links'>
                <div className='gpt3__Navbar-logo'>
                    <Link href='/'>
                    <img src='/vertical-logo.svg' alt='logo'/>
                    </Link>
                </div>
                <div className='gpt3__Navbar-content'>
                <Menu1/>
                </div>
                </div>
                
                <div className='gpt3__Navbar-contact '>
<div className="clickopen  " onClick={okchangelanguage}>
<div className="clickdiv">{(i18n.language)}</div>
<MdExpandMore  className='givemore'/>
</div>
                {
changeit&&(
    < div className='handle-click-language1  '>
     
     <div    className='handclick clo' onClick={() => handleLanguageChange({ target: { value: 'English' } })}>English</div>
         <div   className='handclick  '  onClick={() => handleLanguageChange({ target: { value: 'العربية' } })}>العربية</div>
         <div    className='handclick  ' onClick={() => handleLanguageChange({ target: { value: 'Français' } })}>Français</div>
    </div >

)
                }

                </div>

               
                </div>
                <div className='gpt3__Navbar-menu  openn'>


                    
                    { 
                        Menu?<RiMenu3Line color='#fff' size={27} onClick={()=>{setMenu(false)}} className='openn'/>
                        :< RiCloseLine color='#fff' size={27} onClick={()=>setMenu(true)} className='closee'/>
                    }

                    {
                    !Menu &&(
                        <div className='gpt3__Navbar-menu__container'>
                        <div className='gpt3__Navbar-menu__container-links'>
                        <div className='gpt3__Navbar-sgin'>
           

                        <div className="handllang">{t('lang')}</div>

           <div className="dropdownx " value={selectedLanguage}  >
                   

                   <div    className='handly' onClick={() => handleLanguageChange({ target: { value: 'English' } })}>English</div>
                   <div   className='handly'  onClick={() => handleLanguageChange({ target: { value: 'العربية' } })}>العربية</div>
                   <div    className='handly' onClick={() => handleLanguageChange({ target: { value: 'Français' } })}>Français</div>
                   
                   </div>
                           </div>
                <Menu1/>
              
                            </div>
                        </div>
                        )
                    }
                </div>

                
            </div>
        )
        }

        export default Navbar
        