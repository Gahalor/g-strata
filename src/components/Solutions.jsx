import { aibig } from "../assets";

import { features } from "../translations/en/constants";
import styles, { layout } from "../style";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";

function Solutions () {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="solutions" className={layout.section}>
      <div data-aos="fade-right" className={`flex items-start ${layout.sectionInfo}`}>
        
        <div className="dreamit-section-title">
          <h5>
            {t("solution.intro")}<br className="sm:block hidden" />
          </h5>
        </div>

          <h4 className={styles.heading2}>
            {t("solution.title")}<br className="sm:block hidden" />
          </h4>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            {t("solution.content-1")}
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            {t("solution.content-2")}
          </p>
      </div>

      <div data-aos="fade-left" className={layout.sectionImgReverse}>
        <img src={aibig} alt="placeholder" className="w-[100%] h-[100%] border-4 rounded-lg relative z-[5] shadow-lg" />
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>

    </section>
  )
};

export default Solutions;