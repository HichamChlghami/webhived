"use client"
import React, {useContext} from 'react';import './portfolio.css'

import { TranslationContext } from '../../TranslationContext';

import { FaLink } from 'react-icons/fa';
import Link from 'next/link';
// import loo from '../../loo'

    function Portfolio() {
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
      // <>
      // {isLoading ? (
      //   <loo />
      // ) : (
        <div className='portfolio' id='portfolio'>
         
        <div className="server-title ">Portfolio</div>
            <div className="portfolio-content">
            <div className="projects ">
            <img src='/hospital2.svg' alt="project" className="project-image" />
            <div className="project-title">
            Hospital Website
            </div>
            <div className="project-link">
              <Link  href='https://www.sidra.org/'>
            <FaLink size={24} color="blue"  className='flaink' />
            </Link>
            </div>
        </div>
        {/* project2 */}
        <div className="projects project1 ">
            <img src='/hotel.svg' alt="project" className="project-image" />
            <div className="project-title">
            Hotel Website
            </div>
            <div className="project-link">
              <Link  href='https://www.kimptonhotels.com/'>
              <FaLink size={24} color="#32CD32" className='flaink' />
              </Link>
           

            </div>
        </div>
        {/* project 3 */}
        <div className="projects project2 ">
            <img src='/restaurant.svg' alt="project" className="project-image" />
            <div className="project-title">
            Restaurant Website

            </div>
            <div className="project-link">
              <Link  href='https://www.foundouk.com/'>
            <FaLink size={24} color="yellow" className='flaink' />
            </Link>
            </div>
        </div>
        {/* project4 */}
        <div className="projects project3 ">
        <img src='/e-commerce.svg' alt="project" className="project-image" />

            <div className="project-title">
            E-Commerce Website


            </div>
            <div className="project-link">
              <Link  href='https://www.noon.com/'>
            <FaLink size={24}  color="#FF4500" className='flaink'  />
            </Link>
            </div>
        </div>
        {/* project 5 */}
        <div className="projects project4 ">
        <img src='/hospital.svg'alt="project" className="project-image" />

            <div className="project-title">
            Hospital Website

            </div>
            <div className="project-link">
              <Link href='https://saudigermanhealth.com/'>
            <FaLink size={24}  color="#F0F0F0" className='flaink' />
            </Link>
            </div>
        </div>
        
            </div>
           
        </div>
  //      )} 
  //  </>
       
    )
}

export default Portfolio;