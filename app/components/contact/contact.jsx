"use client"
import './contact.css'
import React, { useRef,useState ,useContext} from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

import { TranslationContext } from '../../TranslationContext';
import Head from 'next/head';
function Contact() {
  const { t} = useContext(TranslationContext);

  const form = useRef();
  const [alert,Setalert]=useState()
  const [ErrorName,SetErrorName]=useState()
  const [ErrorEmail,SetErrorEmail]=useState()
  const [ErrorText,SetErrorText]=useState()


  const [inputEmail, setInputEmail] = useState('');
  const [inputName, setInputName] = useState('');
  const [inputText, setInputText] = useState('');

  const handleChangeEmail = (e) => {
    setInputEmail(e.target.value);
    
  };
  const handleChangeName = (e) => {
    setInputName(e.target.value);
  };
  const handleChangeText = (e) => {
    setInputText(e.target.value);
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
          
         
       
else{
  Setalert(true)
  emailjs.sendForm('service_2qqfmiz', 'template_6d7yz8h', form.current, 'h3I0qXr89nzDp6wv9')
  .then((result) => {
    setInputEmail('');
    setInputName('');
    setInputText('');
      console.log(result.text);
        
     
  }, (error) => {
      console.log(error.text);
  });
  SetErrorName(false)
  SetErrorEmail(false)
  SetErrorText(false)

  
}
         
  };
  return (
    <div className='contact' id='contact'>
     <Head>
        <title>Webhived agency- Contact us and discuss your goals & needs</title>
        <meta name="description" content="Try to Reach us with your email, get our free consultation and all your questions answered. Don’t hesitate to Contact us." />
      </Head>  

      <div className="alert">
      <div className="contact-header">
      <h1 className="about-title about-contact-title ">{t('Webhived agency- Contact us and discuss your goals & needs')}</h1>
      <p style={{display:"none"}}>
      Try to Reach us with your email, get our free consultation and all your questions answered. Don’t hesitate to Contact us
      </p>
      <div className="about-logo">
        <img src='/WebHive-image.svg'alt="logo" className='about-logo-picture' />
      </div>
      <div className="about-content-title">{t('contact')}</div>
      <div className="about-content-first-p"> {t('contact-us-big-discription')} </div>
      <div className="about-content-2  ">{t('contact-us-small-discription')}</div>


              </div>
    {
      alert&&<div className='success'>
         <FaCheckCircle size={24} color="green" className='k' />
        <div className='succes-message'>{t('success')}</div>
          </div >
    }
   </div>
      <div className="all">
      <form ref={form} onSubmit={sendEmail} className='contact_form'>
     <div className="form-part1">
     <div className="input-name">
     {/* <label>{t('nameform')}</label> */}
      <input  value={inputName}  className="input" type="text" name="user_name" placeholder={t('nameform')} onChange={handleChangeName}   />
       {  ErrorName&&<div className='Erorr'>{t('ername')}</div>}

     </div>
     
      <div className="input-email">
      {/* <label>{t('emailform')}</label> */}
      <input  value={inputEmail} type="email" name="user_email" onChange={handleChangeEmail} className="input" placeholder={t('emailform')} />
      {  ErrorEmail&&<div className='Erorr'>{t('eremail')} </div>}
    
      </div>
     </div>
      <div className="areatext">
      {/* <label>{t('messageform')}</label> */}
      <textarea  placeholder={t('messageform')} name="message" value={inputText} onChange={handleChangeText} className="textarea"/>
      {  ErrorText&&<div className='Erorr'> {t('ertext')} </div>}

      </div>
      <input type="submit" value={t('send')} className='submit' />
    </form>
 
      </div>
      
      <Head>
        <title>Webhived agency- Contact us and discuss your goals & needs</title>
        <meta name="description" content="Try to Reach us with your email, get our free consultation and all your questions answered. Don’t hesitate to Contact us." />
      </Head>  

    </div>
  )
}
export default Contact



