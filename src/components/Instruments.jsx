import { imginstarument, instruments, polygon, discount, imgcompany } from "../assets";
import styles, { layout } from "../style";
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { features } from "../translations/constants";

function Instruments() {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="instruments" className={`flex md:flex-row flex-col sm:py-16 py-20 ${styles.paddingX} bg-gray-800`}>
      <div className={`${layout.sectionInfo}`}>

        {/* <div className="dreamit-section-title">
          <h5 className='pb-3'>
            {t("services.intro")}<br className="sm:block hidden" />
          </h5>
        </div> */}
        <div className="mt-4">
          <img src={imginstarument} alt="g-strata" className="w-[100%] relative z-[5]" />
        </div>
      </div>

      <div className={`${layout.sectionInfo} ${styles.paddingX}`}>
        <img src={instruments} alt="logo" className="w-[70%] relative z-[5] -mb-4" />
        <p className={` max-w-[470px] text-blue-400 font-semibold pb-3`}>
          {t("instruments.content-3")}
        </p>
        <p className={` max-w-[470px] ${styles.heading2} text-blue-400`}>
          {t("instruments.title")}
        </p>
        <p className={` max-w-[470px] text-white`}>
          {t("instruments.content-2")}
        </p>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mt-6 mb-2 ">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph_w} ml-2 `}>
            <a href="/#contact">
              <span className="text-white">Contactar</span>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Instruments;