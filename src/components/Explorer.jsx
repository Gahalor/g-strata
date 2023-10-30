import { waterlink } from "../assets";
import styles, { layout } from "../style";
import Connect from "./buttons/Connect";
import React, { useContext } from 'react';
import { useTranslation } from "react-i18next";

function Explorer() {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="explorer" className={layout.section}>
      <div className={layout.sectionInfo}>

        <div className="dreamit-section-title mb-3">
          <h5>
            {t("explorer.intro")}<br className="sm:block hidden" />
          </h5>
        </div>
        <h2 className={styles.heading1}>
          {t("explorer.title")}<br className="sm:block hidden" />
        </h2>
        <p className={`${styles.paragraph_b} max-w-[470px] mt-5`}>
          {t("explorer.content-1")}
        </p>
        <p className={`${styles.paragraph_b} max-w-[470px] mt-5`}>
          {t("explorer.content-2")}
        </p>

        <a target="_blank" href="https://www.g-waterlink.io/">
          <div className="">
            <Connect styles={`mt-8`} />
          </div>
        </a>

      </div>
      <div className={`${layout.sectionImg}`}>
        <div style={{ flex: 1, flexDirection: 'column' }} className="text-center">
          <video src={waterlink} width="960" height="540" controls="controls" autoPlay muted />
        </div>
      </div>
    </section>
  );
};

export default Explorer;