import styles from '../style';
import React from 'react';
import { useEffect } from "react";
import { Footer, Information } from '.';

function InformationPage() {
  useEffect(() => {
    scrollTo(0, 0)
  });

  return (
    <section className={`${styles.flexCenter} flex-col  bg-slate-200`}>
      <div className='bg-gray-100 w-full overflow-hidden'>
        <div className={`${styles.paddingH} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth} `}>
            <Information />
          </div>
        </div>
          <div className={`pt-32`}>
            <Footer />
          </div>
      </div>
    </section>
  );
}

export default InformationPage;

