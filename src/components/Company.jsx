import { stats } from '../translations/constants';
// import styles from "../style";
import { useTranslation } from "react-i18next";
import { stars } from "../assets";
import { IoMapOutline, IoLocationSharp, IoWater, IoStatsChart } from "react-icons/io5";
import { solution } from "../assets";
import { imgcompany } from "../assets";
import styles, { layout } from "../style";
import { useEffect } from 'react';
import Aos from "aos";
import { CompanyCards } from '../components';
function Company() {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="solutions" className='sm:py-16 pt-20'>
      <div className="w-full flex flex-col space-y-16">
        <div className={`flex items-start ${layout.sectionInfo}`}>

          <div className="dreamit-section-title mb-3">
            <h5>
              {t("company.intro")}<br className="sm:block hidden" />
            </h5>
          </div>

          <h4 className={styles.heading1}>
            {t("company.title")}<br className="sm:block hidden" />
          </h4>
          <p className={`${styles.paragraph_b} max-w-[960px] mt-5`}>
            {t("company.content-1")}
          </p>
          <p className={`${styles.paragraph_b} max-w-[960px] mt-5`}>
            {t("company.content-2")}
          </p>
        </div>
        <div className={layout.sectionImgReverse}>
          <img src={imgcompany} alt="g-strata" className="w-[100%] relative z-[5]" />
        </div>
        {/* <CompanyCards /> */}

      </div>

    </section>
  )
};

export default Company;