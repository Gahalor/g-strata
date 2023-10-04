import { wlogo } from "../assets";
import styles, { layout } from "../style";

import { useTranslation } from "react-i18next";

function Company() {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="company" className={layout.section}>
      <div className={`${layout.sectionInfo}`}>
        <div className={layout.sectionInfo}>
          <div className="dreamit-section-title">
            <h5>
              {t("company.intro")}
            </h5>
          </div>
          <h4 className={styles.heading1}>
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
      <div className={layout.sectionImgReverse}>
        <img src={wlogo} alt="aibd" className="w-[90%] relative z-[5]" />
      </div>
    </section>
  )
};

export default Company;