import React, { useState, useEffect, useContext } from 'react';
import { data } from './dummy/mockData'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import styles, { layout } from "../style";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { BrowserRouter, Link, Route } from 'react-router-dom';

function Roadmap() {
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
            {t("roadmap.title")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-2/3">

          <div className='pt-2 flex flex-col justify-center items-center'>
            <div className='w-20 p-1 bg-green-400 text-center text-white rounded-full'>2016</div>
            <div className='h-12 flex flex-col justify-center items-center'>
              <div className='w-4 h-4 mt-2 bg-green-400 rounded-full' />
              <div class="h-4 mt-1 border-l-2 border-dashed border-sky-500" />
            </div>
            <div class="w-full border-b-2 border-dashed border-sky-500" />

            <div className='mt-4 h-40 w-5/6 rounded-lg bg-slate-700 p-3'>
              <h2 className={`${styles.heading6} text-center text-green-500 hover:underline mb-4`}>
                {t("roadmap.year-1")}
              </h2>
              <p className={`text-center text-green-200  hover:underline`}>
                {t("roadmap.year-1-content")}
              </p>
            </div>
          </div>

          <div className='pt-2 flex flex-col justify-center items-center'>
            <div className='w-20 p-1 bg-blue-400 text-center text-white rounded-full'>2019</div>
            <div className='h-12 flex flex-col justify-center items-center'>
              <div className='w-4 h-4 mt-2 bg-blue-400 rounded-full' />
              <div class="h-4 mt-1 border-l-2 border-dashed border-sky-500" />
            </div>
            <div class="w-full border-b-2 border-dashed border-sky-500" />

            <div className='mt-4 h-40 w-5/6 rounded-lg bg-slate-700 p-3'>
              <h2 className={`${styles.heading6} text-center text-blue-400 hover:underline mb-4`}>
                {t("roadmap.year-2")}
              </h2>
              <p className={`text-center text-green-200  hover:underline`}>
                {t("roadmap.year-2-content")}
              </p>
            </div>
          </div>

          <div className='pt-2 flex flex-col justify-center items-center'>
            <div className='w-20 p-1 bg-orange-400 text-center text-white rounded-full'>2020</div>
            <div className='h-12 flex flex-col justify-center items-center'>
              <div className='w-4 h-4 mt-2 bg-orange-400 rounded-full' />
              <div class="h-4 mt-1 border-l-2 border-dashed border-sky-500" />
            </div>
            <div class="w-full border-b-2 border-dashed border-sky-500" />

            <div className='mt-4 h-40 w-5/6 rounded-lg bg-slate-700 p-3'>
              <h2 className={`${styles.heading6} text-center text-orange-400 hover:underline mb-4`}>
                {t("roadmap.year-3")}
              </h2>
              <p className={`text-center text-green-200  hover:underline`}>
                {t("roadmap.year-3-content")}
              </p>
            </div>
          </div>

          <div className='pt-2 flex flex-col justify-center items-center'>
            <div className='w-20 p-1 bg-pink-400 text-center text-white rounded-full'>2023</div>
            <div className='h-12 flex flex-col justify-center items-center'>
              <div className='w-4 h-4 mt-2 bg-pink-400 rounded-full' />
              <div class="h-4 mt-1 border-l-2 border-dashed border-sky-500" />
            </div>
            <div class="w-full border-b-2 border-dashed border-sky-500" />

            <div className='mt-4 h-40 w-5/6 rounded-lg bg-slate-700 p-3'>
              <h2 className={`${styles.heading6} text-center text-pink-400 hover:underline mb-4`}>
                {t("roadmap.year-4")}
              </h2>
              <p className={`text-center text-green-200  hover:underline`}>
                {t("roadmap.year-4-content")}
              </p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Roadmap;