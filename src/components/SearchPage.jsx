import styles from '../style';
import React from 'react';
import { useEffect } from "react";
import { Footer, Search } from '.';

function SearchPage() {
  useEffect(() => {
    scrollTo(0, 0)
  });

  return (
    <section className={`${styles.flexCenter} flex-col  bg-slate-200`}>
      <div className='bg-gray-100 w-full overflow-hidden'>
        <div className={`${styles.paddingH} ${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Search />
          </div>
        </div>
          <div className={`pt-12`}>
            <Footer />
          </div>
      </div>
    </section>
  );
}

export default SearchPage;