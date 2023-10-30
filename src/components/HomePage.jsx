import styles from '../style';
import React from 'react';

import { Hero, Solutions, Company, Partners, Explorer, Services, CTA, Footer, Instruments } from '.';
import { Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <div className='bg-gray-100 w-full overflow-hidden'>
      <div className={`${styles.paddingH} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth} `}>
          <Hero />
          <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Solutions />
            </div>
          </div>

          <Services />

          <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Company />
            </div>
          </div>

          <Partners />

          <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Explorer />
            </div>
          </div>

          <Instruments />

          <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <CTA />
            </div>
          </div>
          <div className=''>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  )
}



export default HomePage;