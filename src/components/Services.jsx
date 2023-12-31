import React, { useState, useEffect, useContext } from 'react';
import { data } from './dummy/mockData'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import styles, { layout } from "../style";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Link, Route } from 'react-router-dom';

function Services() {
  const [t, i18n] = useTranslation("global");



  const slideLeft = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft - 635
  }

  const slideRight = () => {
    var slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + 635
  }


  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      <div className="flex w-full items-center justify-center bg-gray-800 pt-12 pb-16 flex-col">
        <div className='justify-center mb-6 text-center '>
          <h2 className={styles.heading2} >
            {t("services.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:w-2/3">

          <div className='pt-6 border mx-4 py-6 rounded-lg px-6'>
            <Link to="/prospection">
              <h2 className={`${styles.heading6} text-center text-green-500 hover:underline mb-4`}>
                {t("services.service-1")}
              </h2>
            </Link>

            <div className="ml-5 w-full md:w-full">
              <Link to="/prospection">
                <p className={`${styles.heading5} text-green-200 hover:underline`}>
                  {t("services.service-1-1")}
                </p>
              </Link>

            </div>

            <div className="ml-5 w-full md:w-full">
              <Link to="/prospection">
                <p className={`${styles.heading5} text-green-200  hover:underline`}>
                  {t("services.service-1-2")}
                </p>
              </Link>
            </div>

            <div className="ml-5 w-full md:w-full">
              <Link to="/prospection">
                <p className={`${styles.heading5} text-green-200  hover:underline`}>
                  {t("services.service-1-3")}
                </p>
              </Link>
            </div>
            <div className="ml-5 w-full md:w-full">
              <Link to="/prospection">
                <p className={`${styles.heading5} text-green-200  hover:underline`}>
                  {t("services.service-1-4")}
                </p>
              </Link>
            </div>
          </div>

          <div className='pt-6 border mx-4 py-6 rounded-lg px-6'>
            <Link to="/search">

              <h2 className={`${styles.heading6} text-center text-green-500  hover:underline mb-4`}>
                {t("services.service-2")}
              </h2>
            </Link>

            <div className="ml-5 w-full md:w-full">
              <Link to="/search">
                <p className={`${styles.heading5} text-green-200  hover:underline`}>
                  {t("services.service-2-1")}
                </p>
              </Link>

            </div>
            <div className="ml-5 w-full md:w-full">
              <Link to="/search">
                <p className={`${styles.heading5} text-green-200  hover:underline`}>
                  {t("services.service-2-2")}
                </p>
              </Link>

            </div>
            <div className="ml-5 w-full md:w-full">
              <Link to="/search">
                <p className={`${styles.heading5} text-green-200  hover:underline`}>
                  {t("services.service-2-3")}
                </p>
              </Link>
            </div>
          </div>
          <div className='pt-6 border mx-4 py-6 rounded-lg px-6'>
            <Link to="/geology">
              <h2 className={`${styles.heading6} text-center text-green-500  hover:underline mb-4`}>
                {t("services.service-3")}
              </h2>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Services;