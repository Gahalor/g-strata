import { placeholder } from "../assets";
import styles, { layout } from "../style";
import "aos/dist/aos.css";
import React, { useContext } from 'react';
import { TransactionContext } from '../utils/TransactionContext';
import { useTranslation } from "react-i18next";
import { imgcompany } from "../assets";
import Navbar from "./Navbar";

function Geology() {
  const { currentAccount } = useContext(TransactionContext);
  const [t, i18n] = useTranslation("global");


  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div className="w-full h-[580px] overflow-hidden">
        <img src={imgcompany} alt="g-strata" className="w-full relative" />
        <div className="content">
          <Navbar />
          <div className={`h-[395px] flex items-center`}>
          </ div>
          <div className="w-full flex justify-center items-center bg-slate-800/70">
            <div className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] py-4 w-full text-center">
              {t("geology.3")}
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={layout.sectionInfo}>
          <h5 className={styles.heading1}>
            {t("search.3-1")}
            <hr style={{ background: 'green', color: 'green', borderColor: 'green', height: '3px' }} />
          </h5>
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={layout.sectionInfo}>

          <div className="flex flex-row space-x-10 py-6">
            <div className="flex flex-col border p-6 rounded-lg">
            </div>

            <div className="flex flex-col border p-6 rounded-lg">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geology;