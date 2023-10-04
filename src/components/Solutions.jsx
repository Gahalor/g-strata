import { aibig } from "../assets";

import { features } from "../translations/en/constants";
import styles, { layout } from "../style";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { Cards  } from '../components';

function Solutions () {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section id="solutions" className={layout.section}>
      <div className="w-full flex flex-col space-y-16">
        <div className={` flex items-start ${layout.sectionInfo}`}>
          
          <div className="dreamit-section-title">
            <h5>
              {t("solution.intro")}<br className="sm:block hidden" />
            </h5>
          </div>

            <h4 className={styles.heading1}>
              {t("solution.title")}<br className="sm:block hidden" />
            </h4>
            <p className={`${styles.paragraph_b} max-w-[960px] mt-5`}>
              {t("solution.content-1")}
            </p>
            <p className={`${styles.paragraph_b} max-w-[960px] mt-5`}>
              {t("solution.content-2")}
            </p>
        </div>

        <Cards />

      </div>

    </section>
  )
};

export default Solutions;