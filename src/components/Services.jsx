import React, { useState, useEffect, useContext, useLayoutEffect } from 'react';
import styles, { layout } from "../style";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { Link, NavLink } from 'react-router-dom';
import { IoEarth, IoWater, IoPulseSharp } from "react-icons/io5";
import { logo } from "../assets";

function Services() {
  const [t, i18n] = useTranslation("global");



  return (
    <section id="services" className={`${layout.section}  bg-gray-800 py-16`}>

    <div className={`flex-1 flex-col flex justify-start items-start ${styles.paddingX}`}>
        <img src={logo} alt="logo" className="w-[50%] relative z-[5] my-6" />
        <div className='justify-center text-left'>
          <div className="dreamit-section-title">
            <h5 className='pb-3'>
              {t("services.intro")}<br className="sm:block hidden" />
            </h5>
          </div>

        </div>


        <div className='pt-4 py-6 rounded-lg'>
          <div className='grid grid-cols-2 gap-4'>
            <Link to="/prospection">
              <div className='w-full h-full flex flex-col items-center border rounded-lg p-3 hover:bg-gray-900'>
                <IoPulseSharp className='text-teal-300 text-[48px]' name='call'></IoPulseSharp>
                <h2 className={`xs:text-lg text-md text-white text-center hover:underline my-4`}>
                  {t("services.service-1")}
                </h2>
              </div>
            </Link>

            <Link to="/search">
              <div className='w-full h-full flex flex-col items-center border rounded-lg pt-3 px-4 hover:bg-gray-900'>
                <IoWater className='text-teal-300 text-[48px]' name='call'></IoWater>
                <h2 className={`xs:text-lg text-sm text-white text-center hover:underline my-4`}>
                  {t("services.service-2")}
                </h2>
              </div>
            </Link>
          </div>
        </div>
      </div>


      <div className={`${layout.sectionInfo} ${styles.paddingX}`}>
        <div className='youtubeContainer'>
          <div className='iframe'>
            <iframe src="https://www.youtube.com/embed/ZsNrIz81aVE?si=OsIC20qzKHxBk1hw&amp;controls=0" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
          </div>
        </div>

      </div>

      
    </section>

  );
};

export default Services;