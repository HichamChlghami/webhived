"use client"

import './talk.css'
import React, { useRef,useState ,useContext,useEffect} from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { TranslationContext } from '../TranslationContext';

import loading from '../loading';
import Head from 'next/head';


import { Footer ,Navbar} from '../components'
function Talk() {
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

  const form = useRef();
  const [alert,Setalert]=useState()
  const [ErrorName,SetErrorName]=useState()
  const [ErrorEmail,SetErrorEmail]=useState()
  const [ErrorText,SetErrorText]=useState()
  const [ErrorPhone,SetErrorPhone]=useState()
  const [ErrorCountry,SetErrorCountry]=useState()
  const [ErrorSubject,SetErrorSubject]=useState()

  const [inputEmail, setInputEmail] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputText, setInputText] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputCountry, setInputCountry] = useState('');
  const [inputSubject, setInputSubject] = useState('');

  const handleChangeEmail = (e) => {
    setInputEmail(e.target.value);
    
  };
  const handleChangeName = (e) => {
    setInputName(e.target.value);
  };
  const handleChangeText = (e) => {
    setInputText(e.target.value);
  };
  const handleChangePhone = (e) => {
    setInputPhone(e.target.value);
    
  };
  const handleChangeCountry = (e) => {
    setInputCountry(e.target.value);
  };
  const handleChangeSubject = (e) => {
    setInputSubject(e.target.value);
  };
  const sendEmail = (e) => {
          e.preventDefault();
          // use for  when we submit the default value be empty
          // setInputEmail('');
          // setInputName('');
          // setInputText('');
        
          if(inputName===''  ){
            SetErrorName(true)
           
            Setalert(false)
       

        }
      
     
          if(inputText===''){
            SetErrorText(true)

            Setalert(false)

          }
       
           
          if(inputEmail===''  ){
            SetErrorEmail(true)
   
            Setalert(false)

          }
          if(inputPhone===''  ){
            SetErrorPhone(true)
   
            Setalert(false)

          }
          
          if(inputCountry===''  ){
            SetErrorCountry(true)
   
            Setalert(false)

          }
          if(inputSubject===''  ){
            SetErrorSubject(true)
   
            Setalert(false)

          }
       
else{
  Setalert(true)
  emailjs.sendForm('service_da0csab', 'template_qh5v2dk', form.current, 'h3I0qXr89nzDp6wv9')
  .then((result) => {
    setInputEmail('');
    setInputName('');
    setInputText('');
    setInputPhone('');
    setInputCountry('');
    setInputSubject('');
      console.log(result.text);
        
     
  }, (error) => {
      console.log(error.text);
  });
  SetErrorName(false)
  SetErrorEmail(false)
  SetErrorText(false)
  SetErrorPhone(false)
  SetErrorCountry(false)
  SetErrorSubject(false)

  
}
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
  };
  return (
<>

<link rel="canonical" href="https://www.webhived.com/discuss-offer.html" />

<meta property="og:image" content="https://www.webhived.com/logo-search.svg" />
      <Head>
        <title>Webhived agency- Contact us and discuss your goals & needs</title>
        <meta name="description" content="Try to Reach us with your email, get our free consultation and all your questions answered. Don’t hesitate to Contact us." />
      </Head>

  {isLoading ? (
     <>
     <loading />
     <div style={{ display: 'none' }}>
     
      <>
      
      <div className='contact' id='contact'>
          <Navbar/>
        
  
         
        <div className="alert">
        <div className="contact-header">
        <h1 className="about-title about-contact-title ">{t('digital-title')}</h1>
        <div className="about-logo">
          <img src='/WebHive-image.svg' alt="logo" className='about-logo-picture' />
        </div>
        <div className="about-content-first-p">{t('talk-title1')}</div>
        <div className="about-content-second-p about-content-talk">{t('talk-details')}</div>
  
  
        </div>
     
     </div>
        <div className="all">
        <form ref={form} onSubmit={sendEmail} className='contact_form'>
       <div className="form-part1">
       <div className="input-name">
       {/* <label>{t('nameform')}</label> */}
        <input  value={inputName}  className="input input1" type="text" name="user_name" placeholder={t('fullname')} onChange={handleChangeName}   />
         {  ErrorName&&<div className='Erorr error'>{t('ername')}</div>}
  
       </div>
       
        <div className="input-email">
        {/* <label>{t('emailform')}</label> */}
        <input  value={inputEmail} type="email" name="user_email" onChange={handleChangeEmail} className="input input1" placeholder={t('emailform')} />
        {  ErrorEmail&&<div className='Erorr error'>{t('eremail')} </div>}
        </div>
       </div>
       <div className="form-part1 from-part2">
       <div className="input-phone">
       {/* <label>{t('nameform')}</label> */}
        <input value={inputPhone}  onChange={handleChangePhone} className="input input1" type="text" name="user_phone" placeholder={t('phone')}   />
         {  ErrorPhone&&<div className='Erorr error'>{t('phoneer')}</div>}
  
       </div>
       <div className="input-country">
        {/* <label>{t('emailform')}</label> */}
        <input  value={inputCountry} onChange={handleChangeCountry} className="input input1" type="text"   name="user_country" placeholder={t('country')} />
        {  ErrorCountry&&<div className='Erorr error'>{t('countryer')}</div>}
        </div>
       </div>
       {/* parte three */}
       <div className="form-part1 from-part3">
       <div className="input-subject">
       {/* <label>{t('nameform')}</label> */}
        <input value={inputSubject}  onChange={handleChangeSubject} className="input input1" type="text" name="user_subject" placeholder={t('subject')}   />
         {  ErrorSubject&&<div className='Erorr error'>{t('subjecter')}</div>}
  
       </div>
       
        
       </div>
       {
        alert&&<div className='success'>
           <FaCheckCircle size={24} color="green" className='k' />
          <div className='succes-message'>{t('success')}</div>
            </div >
      }
        <div className="areatext">
        {/* <label>{t('messageform')}</label> */}
        <textarea  placeholder={t('messageform')} name="message" value={inputText} onChange={handleChangeText} className="textarea input1"/>
        {  ErrorText&&<div className='Erorr error'> {t('ertext')} </div>}
  
        </div>
        <input type="submit" value={t('send')} className='submit' />
      </form>
   
        </div>
        <Footer/>
      </div>
     
      </>
     
         </div>
  
 
 </>
  ) : (
    <>
<Head>
        <title>Webhived agency- Contact us and discuss your goals & needs</title>
        <meta name="description" content="Try to Reach us with your email, get our free consultation and all your questions answered. Don’t hesitate to Contact us." />
      </Head>      
    
    <div className='contact' id='contact'>
        <Navbar/>
      

       
      <div className="alert">
      <div className="contact-header">
      <h1 className="about-title about-contact-title ">{t('digital-title')}</h1>
      <div className="about-logo">
        <img src='/WebHive-image.svg' alt="logo" className='about-logo-picture' />
      </div>
      <div className="about-content-first-p">{t('talk-title1')}</div>
      <div className="about-content-second-p about-content-talk">{t('talk-details')}</div>


      </div>
   
   </div>
      <div className="all">
      <form ref={form} onSubmit={sendEmail} className='contact_form'>
     <div className="form-part1">
     <div className="input-name">
     {/* <label>{t('nameform')}</label> */}
      <input  value={inputName}  className="input input1" type="text" name="user_name" placeholder={t('fullname')} onChange={handleChangeName}   />
       {  ErrorName&&<div className='Erorr error'>{t('ername')}</div>}

     </div>
     
      <div className="input-email">
      {/* <label>{t('emailform')}</label> */}
      <input  value={inputEmail} type="email" name="user_email" onChange={handleChangeEmail} className="input input1" placeholder={t('emailform')} />
      {  ErrorEmail&&<div className='Erorr error'>{t('eremail')} </div>}
      </div>
     </div>
     <div className="form-part1 from-part2">
     <div className="input-phone">
     {/* <label>{t('nameform')}</label> */}
      <input value={inputPhone}  onChange={handleChangePhone} className="input input1" type="text" name="user_phone" placeholder={t('phone')}   />
       {  ErrorPhone&&<div className='Erorr error'>{t('phoneer')}</div>}

     </div>
     <div className="input-country">
      {/* <label>{t('emailform')}</label> */}
      <input  value={inputCountry} onChange={handleChangeCountry} className="input input1" type="text"   name="user_country" placeholder={t('country')} />
      {  ErrorCountry&&<div className='Erorr error'>{t('countryer')}</div>}
      </div>
     </div>
     {/* parte three */}
     <div className="form-part1 from-part3">
     <div className="input-subject">
     {/* <label>{t('nameform')}</label> */}
      <input value={inputSubject}  onChange={handleChangeSubject} className="input input1" type="text" name="user_subject" placeholder={t('subject')}   />
       {  ErrorSubject&&<div className='Erorr error'>{t('subjecter')}</div>}

     </div>
     
      
     </div>
     {
      alert&&<div className='success'>
         <FaCheckCircle size={24} color="green" className='k' />
        <div className='succes-message'>{t('success')}</div>
          </div >
    }
      <div className="areatext">
      {/* <label>{t('messageform')}</label> */}
      <textarea  placeholder={t('messageform')} name="message" value={inputText} onChange={handleChangeText} className="textarea input1"/>
      {  ErrorText&&<div className='Erorr error'> {t('ertext')} </div>}

      </div>
      <input type="submit" value={t('send')} className='submit' />
    </form>
 
      </div>
      <Footer/>
    </div>
   
    </>
   
     )} 
 </>

    
  //   <div className='contact' id='contact'>
  //       <Navbar/>
      

       
  //     <div className="alert">
  //     <div className="contact-header">
  //     <h1 className="about-title about-contact-title ">{t('digital-title')}</h1>
  //     <div className="about-logo">
  //       <img src='/WebHive-image.svg' alt="logo" className='about-logo-picture' />
  //     </div>
  //     <div className="about-content-first-p">{t('talk-title1')}</div>
  //     <div className="about-content-second-p about-content-talk">{t('talk-details')}</div>


  //     </div>
   
  //  </div>
  //     <div className="all">
  //     <form ref={form} onSubmit={sendEmail} className='contact_form'>
  //    <div className="form-part1">
  //    <div className="input-name">
  //    {/* <label>{t('nameform')}</label> */}
  //     <input  value={inputName}  className="input input1" type="text" name="user_name" placeholder={t('fullname')} onChange={handleChangeName}   />
  //      {  ErrorName&&<div className='Erorr error'>{t('ername')}</div>}

  //    </div>
     
  //     <div className="input-email">
  //     {/* <label>{t('emailform')}</label> */}
  //     <input  value={inputEmail} type="email" name="user_email" onChange={handleChangeEmail} className="input input1" placeholder={t('emailform')} />
  //     {  ErrorEmail&&<div className='Erorr error'>{t('eremail')} </div>}
  //     </div>
  //    </div>
  //    <div className="form-part1 from-part2">
  //    <div className="input-phone">
  //    {/* <label>{t('nameform')}</label> */}
  //     <input value={inputPhone}  onChange={handleChangePhone} className="input input1" type="text" name="user_phone" placeholder={t('phone')}   />
  //      {  ErrorPhone&&<div className='Erorr error'>{t('phoneer')}</div>}

  //    </div>
  //    <div className="input-country">
  //     {/* <label>{t('emailform')}</label> */}
  //     <input  value={inputCountry} onChange={handleChangeCountry} className="input input1" type="text"   name="user_country" placeholder={t('country')} />
  //     {  ErrorCountry&&<div className='Erorr error'>{t('countryer')}</div>}
  //     </div>
  //    </div>
  //    {/* parte three */}
  //    <div className="form-part1 from-part3">
  //    <div className="input-subject">
  //    {/* <label>{t('nameform')}</label> */}
  //     <input value={inputSubject}  onChange={handleChangeSubject} className="input input1" type="text" name="user_subject" placeholder={t('subject')}   />
  //      {  ErrorSubject&&<div className='Erorr error'>{t('subjecter')}</div>}

  //    </div>
     
      
  //    </div>
  //    {
  //     alert&&<div className='success'>
  //        <FaCheckCircle size={24} color="green" className='k' />
  //       <div className='succes-message'>{t('success')}</div>
  //         </div >
  //   }
  //     <div className="areatext">
  //     {/* <label>{t('messageform')}</label> */}
  //     <textarea  placeholder={t('messageform')} name="message" value={inputText} onChange={handleChangeText} className="textarea input1"/>
  //     {  ErrorText&&<div className='Erorr error'> {t('ertext')} </div>}

  //     </div>
  //     <input type="submit" value={t('send')} className='submit' />
  //   </form>
 
  //     </div>
  //     <Footer/>
  //   </div>
  )
}
export default Talk



