"use client"

import React, { useEffect,useState ,useContext} from 'react';

import './faq.css'
import { TranslationContext } from '../TranslationContext';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { Footer ,Navbar} from '../components'
import Link from 'next/link';
import loading from '../loading';
import Head from 'next/head';

function Faq() {
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

    const [select , setSlect]= useState(false)
    const toggle =(i)=>{
        if(select === i){
          return  setSlect(false)
        }
        
       return    setSlect(i)
        
    }
    const data = [
        {
            "question":t('question1') ,
            "answer":t('answer1') 
        },  {
            "question":t('question2') ,
            "answer":t('answer2') 
        },  {
            "question":t('question3') ,
            "answer":t('answer3') 
        },  {
            "question":t('question4') ,
            "answer":t('answer4') 
        },  {
            "question":t('question5') ,
            "answer":t('answer5') 
        },
      
         ]
  return (
    <>
<link rel="canonical" href="https://www.webhived.com/frequently-asked-questions.html" />

 
<meta property="og:image" content="https://www.webhived.com/logo-search.svg" />
  
<Head>
        <title>webhived agency – Discover FAQs to make it clear</title>
        <meta name="description" content="Sometimes you don’t need to ask Us, we are providing a FAQs page Where we put questions that we receive frequently, check it and save your time." />
      </Head>

  {isLoading ? (
     <>
     <loading />
     <div style={{ display: 'none' }}>
     <>
      
      <div className='faq'>


<Navbar/>

<h1 className="about-title about-marketing-content  fd ">{t('digital-title')}</h1>
<div className="about-logo">
<img src='/WebHive-image.svg' alt="logo" className='about-logo-picture' />

</div>
<div className="according-title">{t('FAQ')}</div>

<div className="according">
{
data.map((item ,i ) =>{
    return(

<div className="item">
<div className="title-item" onClick={()=>toggle(i)}>
<div className="title-faq">{item.question}</div>
<div className="icons-item"> {select === i ? <MdExpandLess/> : <MdExpandMore/>}</div>
</div>
<div className={select === i ? 'show':'item-content'}>{item.answer}</div>
</div>
)
})
}

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
        <title>webhived agency – Discover FAQs to make it clear</title>
        <meta name="description" content="Sometimes you don’t need to ask Us, we are providing a FAQs page Where we put questions that we receive frequently, check it and save your time." />
      </Head>
            
      <div className='faq'>


<Navbar/>

<h1 className="about-title about-marketing-content  fd ">{t('digital-title')}</h1>
<div className="about-logo">
<img src='/WebHive-image.svg' alt="logo" className='about-logo-picture' />

</div>
<div className="according-title">{t('FAQ')}</div>

<div className="according">
{
data.map((item ,i ) =>{
    return(

<div className="item">
<div className="title-item" onClick={()=>toggle(i)}>
<div className="title-faq">{item.question}</div>
<div className="icons-item"> {select === i ? <MdExpandLess/> : <MdExpandMore/>}</div>
</div>
<div className={select === i ? 'show':'item-content'}>{item.answer}</div>
</div>
)
})
}

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
//     <div className='faq'>


//         <Navbar/>

//         <h1 className="about-title about-marketing-content  fd ">{t('digital-title')}</h1>
//       <div className="about-logo">
//         <img src='/WebHive-image.svg' alt="logo" className='about-logo-picture' />
        
//       </div>
//     <div className="according-title">{t('FAQ')}</div>

// <div className="according">
//     {
//         data.map((item ,i ) =>{
//             return(

// <div className="item">
//     <div className="title-item" onClick={()=>toggle(i)}>
//         <div className="title-faq">{item.question}</div>
//         <div className="icons-item"> {select === i ? <MdExpandLess/> : <MdExpandMore/>}</div>
//     </div>
//     <div className={select === i ? 'show':'item-content'}>{item.answer}</div>
// </div>
// )
//         })
//     }
    
// </div>
// <div className="about-consltation about-consultation-marketing ">
//       <div className="title-contsltation">{t('consultation')}</div>
//       <button className='button-home button-consltation'>
//       <Link href='/contact-us.html'  className='LNK'>   {t('consultation-title')} </Link> 
//           </button>      
//       </div>
// <Footer/>
//     </div>
  )
 

}

export default Faq