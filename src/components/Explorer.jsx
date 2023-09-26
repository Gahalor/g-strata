import { explorer2, discount } from "../assets";
import styles, { layout } from "../style";
import Mintchainer from "./buttons/Mintchainer";
import Connect from "./buttons/Connect";
import Metamask from "./buttons/Metamask";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import React, { useContext } from 'react';
import { TransactionContext } from '../utils/TransactionContext';
import { useTranslation } from "react-i18next";

const { ethereum } = window;

function Explorer() {
  const { currentAccount } = useContext(TransactionContext);
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="collection" className={layout.section}>

      <div className={layout.sectionInfo}>
        <div data-aos="fade-right" className={layout.sectionInfo}>
          <h2 className={styles.heading2}>
            {t("explorer.title")}<br className="sm:block hidden" />
          </h2>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            {t("explorer.content-1")}
          </p>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            {t("explorer.content-2")}
          </p>

          <a target="_blank" href="https://www.g-waterlink.io/">
          <div className="ml-12">
            <Connect styles={`mt-8`} />
          </div>
            </a>

  
        </div>

      </div>
      <div data-aos="fade-left" className={`${layout.sectionImg}`}>
        <div style={{ flex: 1, flexDirection: 'column' }} className="text-center">
          <img src={explorer2} alt="explorer" className="w-[100%] h-[100%]" />
          <h2 className={styles.heading3}>
            G-Water Platform<br className="sm:block hidden" />
          </h2>
          <p className={`${styles.paragraph2} mt-1`}>
            Global Groundwater Information
          </p>
        </div>
      </div>
    </section>
  );
};

export default Explorer;