import { metamask, instruments, polygon, discount } from "../assets";
import styles, { layout } from "../style";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { features } from "../translations/en/constants";

function Instruments () {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
  <section id="instruments" className={layout.sectionReverse}>
    <div data-aos="fade-right" className={layout.sectionImgReverse}>
      <img src={instruments} alt="aibd" className="w-[90%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>

        <div data-aos="fade-left" className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        {t("instruments.title")}<br className="sm:block hidden" />
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {t("instruments.content-1")}
      </p>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mt-6 mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 `}>
            <span className="text-white">On development:</span>
          </p>
        </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        {t("instruments.content-2")}
      </p>
    </div>
    </div>
  </section>
);
  };

export default Instruments;