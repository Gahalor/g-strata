import styles from './style';
import React from 'react';

import { Navbar, Hero, Stats, Solutions, Company, Explorer, Services, CTA, Footer, Instruments, Cards, Prospection, Search, Geology } from './components';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="prospection" element={<Service_Prospection />} />
      <Route path="search" element={<Service_Search />} />
      <Route path="geology" element={<Service_Geology />} /> */}
    </Routes>
  )
}

function Home() {
  return (
    <div className="">
      <div className="">
        <div className="w-full bg-gray-100">
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
              <Explorer />
            </div>
          </div>
          <Instruments />
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

// function Service_Prospection() {
//   return (
//     <div className='gradient-bg-home'>
//       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Navbar />
//         </div>
//       </div>
//       <div className={`${styles.paddingX} ${styles.flexStart}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Prospection />
//         </div>
//       </div>
//       <div className={`${styles.paddingX} ${styles.flexStart}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }

// function Service_Search() {
//   return (
//     <div className='gradient-bg-home'>
//       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Navbar />
//         </div>
//       </div>
//       <div className={`${styles.paddingX} ${styles.flexStart}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Search />
//         </div>
//       </div>
//       <div className={`${styles.paddingX} ${styles.flexStart}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }

// function Service_Geology() {
//   return (
//     <div className='gradient-bg-home'>
//       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Navbar />
//         </div>
//       </div>
//       <div className={`${styles.paddingX} ${styles.flexStart}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Geology />
//         </div>
//       </div>
//       <div className={`${styles.paddingX} ${styles.flexStart}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// }

export default App;