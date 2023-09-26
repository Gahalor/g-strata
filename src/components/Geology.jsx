import { explorer2, discount, placeholder } from "../assets";
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

function Geology() {
  const { currentAccount } = useContext(TransactionContext);
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="w-full flex justify-center flex-col items-center">

            <div className="bg-gray-800 font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] mt-6 py-4 w-full text-center">
              {t("geology.1")}
            </div>

      <div className="w-[80%] ">
        <section id="prospection" className={layout.section}>
          <div className={layout.sectionInfo}>
            <div data-aos="fade-right" className={layout.sectionInfo}>
              <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
                {t("search.1-1-1-text-1")}
              </p>
            </div>
          </div>
          <div data-aos="fade-left" className={`${layout.sectionImg}`}>
            <img src={placeholder} alt="image" className="w-[80%] relative z-[5]" />
          </div>
        </section>

      </div>
    </div>
  );
};

export default Geology;