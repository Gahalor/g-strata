import { metamask, wlogo, polygon, discount } from "../assets";
import styles, { layout } from "../style";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { features } from "../translations/en/constants";

function Company() {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="company" className={layout.section}>
      
      <div data-aos="fade-right" className={`${layout.sectionInfo}`}>

        <div className="dreamit-section-title">
          <h5 className=''>
            {t("company.intro")}<br className="sm:block hidden" />
          </h5>
        </div>

        <div className={layout.sectionInfo}>
          <h4 className={styles.heading2}>
            {t("company.title")}<br className="sm:block hidden" />
          </h4>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            {t("company.content-1")}
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            {t("company.content-2")}
          </p>
        </div>

      </div>

      <div data-aos="fade-left" className={layout.sectionImgReverse}>
      <img src={wlogo} alt="aibd" className="w-[90%] relative z-[5]" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>

    </section>
  )
};

export default Company;