import styles from './style';
import React, { useContext } from 'react';
import { TransactionContext } from './utils/TransactionContext';

import { Navbar, Hero, Stats, Solutions, Company, Explorer, Services, Techonologies, CTA, Footer, Instruments, Cards, Prospection, Search, Geology, Roadmap } from './components';
import { Routes, Route } from "react-router-dom";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from 'react';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="prospection" element={<Service_Prospection />} />
      <Route path="search" element={<Service_Search />} />
      <Route path="geology" element={<Service_Geology />} />
    </Routes>
  )
}

function Home() {
  const { currentAccount } = useContext(TransactionContext);
  // <div className="bg-[url('./assets/bg-hero.jpg')]">
  // <div className='gradient-bg-home'>

  return (
    <div className="gradient-bg-home">
      <div className="w-full overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter} bg-gray-900`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className="min-h-screen bg-no-repeat bg-[url('./assets/bg-hero.jpg')]">
          <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Hero />
              <Stats />
            </div>
          </div>
          <Cards />
          <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Solutions />
            </div>
          </div>
          <Services />
          <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <Company />
              <Explorer />
              <Instruments />
              {/* <Techonologies /> */}
            </div>
          </div>
          <Roadmap />
          <div className={`${styles.paddingX} ${styles.flexStart}`}>
            <div className={`${styles.boxWidth}`}>
              <CTA />
            </div>
          </div>
          <div className='px-12'>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

function Service_Prospection() {
  return (
    <div className='gradient-bg-home'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Prospection />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

function Service_Search() {
  return (
    <div className='gradient-bg-home'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Search />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

function Service_Geology() {
  return (
    <div className='gradient-bg-home'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Geology />
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;