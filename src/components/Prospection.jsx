import { explorer2, discount, wlogo, placeholder } from "../assets";
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

function Prospection() {
  const { currentAccount } = useContext(TransactionContext);
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-full flex justify-center flex-col items-center">

            <div className="bg-gray-800 font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] mt-6 py-4 w-full text-center">
              {t("prospection.1")}
            </div>

      <div className="w-[80%] ">
        <section id="geoelectrica" className={layout.section}>
          <div className={layout.sectionInfo}>
            <div className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-left">
              {t("prospection.1-1")}
            </div>
          </div>
        </section>


        <section id="prospection" className={layout.section}>
          <div className={layout.sectionInfo}>
            <div data-aos="fade-right" className={layout.sectionInfo}>
              <div className={styles.heading3}>
                {t("prospection.1-1-1")}
              </div>
              <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
                {t("prospection.1-1-1-text-1")}
              </p>
              <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
                {t("prospection.1-1-1-text-2")}
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className={`${layout.sectionImg}`}>
            <img src={placeholder} alt="image" className="w-[80%] relative z-[5]" />
          </div>
        </section>


        <section id="prospection" className={layout.section}>
          <div data-aos="fade-right" className={layout.sectionImgReverse}>
            <img src={placeholder} alt="image" className="w-[80%] relative z-[5]" />
          </div>
          <div className={layout.sectionInfo}>
            <div data-aos="fade-left" className={layout.sectionInfo}>
              <div className={styles.heading3}>
                {t("prospection.1-1-2")}
              </div>
              <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
                {t("prospection.1-1-2-text-1")}
              </p>
              <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
                {t("prospection.1-1-2-text-1")}
              </p>
            </div>
          </div>
        </section>


        <section id="prospection" className={layout.section}>
          <div className={layout.sectionInfo}>
            <div data-aos="fade-right" className={layout.sectionInfo}>
              <div className={styles.heading3}>
                {t("prospection.1-1-3")}
              </div>
              <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
                {t("prospection.1-1-3-text-1")}
              </p>
              <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
                {t("prospection.1-1-3-text-2")}
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className={`${layout.sectionImg}`}>
            <img src={placeholder} alt="image" className="w-[80%] relative z-[5]" />
          </div>
        </section>


        <section id="prospection" className={layout.section}>
          <div data-aos="fade-right" className={layout.sectionImgReverse}>
            <img src={placeholder} alt="image" className="w-[80%] relative z-[5]" />
          </div>
          <div className={layout.sectionInfo}>
            <div data-aos="fade-left" className={layout.sectionInfo}>
              <div className={styles.heading3}>
                {t("prospection.1-1-4")}
              </div>
              <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
                {t("prospection.1-1-4-text-1")}
              </p>
              <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
                {t("prospection.1-1-4-text-1")}
              </p>
            </div>
          </div>
        </section>

        <hr style={{ background: 'green', color: 'green', borderColor: 'green', height: '3px', }} />

        <section id="sismica" className={layout.section}>
          <div className={layout.sectionInfo}>
            <div className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-left">
              {t("prospection.1-2")}
            </div>
          </div>
        </section>


        <section id="prospection" className={layout.section}>
          <div className={layout.sectionInfo}>
            <div data-aos="fade-right" className={layout.sectionInfo}>
              <div className={styles.heading3}>
                {t("prospection.1-2-1")}
              </div>
              <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
                {t("prospection.1-2-1-text-1")}
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className={`${layout.sectionImg}`}>
            <img src={placeholder} alt="image" className="w-[80%] relative z-[5]" />
          </div>
        </section>


        <section id="prospection" className={layout.section}>
          <div data-aos="fade-right" className={layout.sectionImgReverse}>
            <img src={placeholder} alt="image" className="w-[80%] relative z-[5]" />
          </div>
          <div className={layout.sectionInfo}>
            <div data-aos="fade-left" className={layout.sectionInfo}>
              <div className={styles.heading3}>
                {t("prospection.1-2-2")}
              </div>
              <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
                {t("prospection.1-2-2-text-1")}
              </p>
              <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
                {t("prospection.1-2-2-text-1")}
              </p>
            </div>
          </div>
        </section>


        <section id="prospection" className={layout.section}>
          <div className={layout.sectionInfo}>
            <div data-aos="fade-right" className={layout.sectionInfo}>
              <div className={styles.heading3}>
                {t("prospection.1-2-3")}
              </div>
              <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
                {t("prospection.1-2-3-text-1")}
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className={`${layout.sectionImg}`}>
            <img src={placeholder} alt="image" className="w-[80%] relative z-[5]" />
          </div>
        </section>

        <hr style={{ background: 'green', color: 'green', borderColor: 'green', height: '3px', }} />

        <section id="gravimetria" className={layout.section}>
          <div className={layout.sectionInfo}>
            <div className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-left">
              {t("prospection.1-3")}
            </div>
            <p className={`${styles.paragraph} mt-5`}>
                {t("prospection.1-3-1-text-1")}
              </p>
          </div>
        </section>

        <section id="magnetometria" className={layout.section}>

          <div data-aos="fade-up" className={`${layout.sectionImg}`}>
            <img src={placeholder} alt="image" className="w-[50%] relative z-[5]" />
          </div>
        </section>

        <hr style={{ background: 'green', color: 'green', borderColor: 'green', height: '3px', }} />

        <section id="magnetometria" className={layout.section}>
          <div className={layout.sectionInfo}>
            <div className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full text-left">
              {t("prospection.1-4")}
            </div>
            <p className={`${styles.paragraph} mt-5`}>
                {t("prospection.1-4-1-text-1")}
              </p>
          </div>
        </section>

        <section id="magnetometria" className={layout.section}>

          <div data-aos="fade-up" className={`${layout.sectionImg}`}>
            <img src={placeholder} alt="image" className="w-[50%] relative z-[5]" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Prospection;