import { metamask, instruments, polygon, discount } from "../assets";
import styles, { layout } from "../style";
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { features } from "../translations/en/constants";

function Instruments() {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="instruments" className={layout.sectionReverse}>
      <div className="flex w-full px-36 items-center justify-center bg-gray-800 pt-12 pb-16 ">
        <div className={layout.sectionImgReverse}>
          <img src={instruments} alt="aibd" className="w-[90%] relative z-[5]" />
          {/* <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" /> */}
        </div>
        <div className={layout.sectionInfo}>
          <div className={layout.sectionInfo}>
            <h2 className={styles.heading2}>
              {t("instruments.title")}<br className="sm:block hidden" />
            </h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              {t("instruments.content-1")}
            </p>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              {t("instruments.content-2")}
            </p>
            <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mt-6 mb-2">
              <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
              <p className={`${styles.paragraph} ml-2 `}>
                <span className="text-white">On development:</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Instruments;