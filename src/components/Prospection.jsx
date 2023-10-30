import styles, { layout } from "../style";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import { prospectionimg, imgnakamura, imgtomografia, imgmagnetotelurico } from "../assets";
import NavbarInt from "./NavbarInt";

function Prospection() {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="prospection" >
      <div className="w-full overflow-hidden h-[190px] sm:h-[580px]">
        <img src={prospectionimg} alt="g-strata" className="w-full relative" />
        <div className="content">
          <NavbarInt />
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-slate-800 px-4">
        <div className="font-poppins font-semibold xs:text-[36px] text-[24px] text-white xs:leading-[76.8px] leading-[46.8px] py-4 w-full text-center">
          {t("prospection.1")}
        </div>
      </div>

      <div className="w-full flex flex-col space-y-0 sm:space-y-4">
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
          <h5 className={styles.heading1}>
            {t("prospection.1-1")}
            <hr style={{ background: 'green', color: 'green', borderColor: 'green', height: '3px' }} />
          </h5>
        </div>

        <div className={`${styles.paddingX} ${layout.sectionInfo} `}>
          <h2 className={styles.heading1}>
            {t("prospection.1-1-1")}
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
            <div className="flex flex-col  p-6 rounded-lg">

              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-1-text-1")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-1-text-1")}
              </p>

            </div>
            <div className="flex flex-col p-6 rounded-lg">

              <img src={imgtomografia} alt="g-strata" className="w-[100%] relative z-[5] rounded-lg" />


            </div>
          </div>
          <div className="flex flex-col border p-6 rounded-lg">

            <p className={`${styles.heading2_b} text-sm`}>
              {t("prospection.1-1-1-text-2")}
            </p>
            <p className={`${styles.paragraph_b} mt-2`}>
              {t("prospection.1-1-1-text-3")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
            <div className="flex flex-col border p-6 rounded-lg">
              <p className={`${styles.heading2_b} text-sm`}>
                {t("prospection.1-1-1-text-4")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-1-text-5")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-1-text-6")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-1-text-7")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-1-text-8")}
              </p>
            </div>
            <div className="flex flex-col border p-6 rounded-lg">
              <p className={`${styles.heading2_b} text-sm`}>
                {t("prospection.1-1-1-text-9")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-1-text-10")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-1-text-11")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-1-text-12")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-1-text-13")}
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.paddingX} ${layout.sectionInfo} `}>
          <h2 className={styles.heading1}>
            {t("prospection.1-1-2")}
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
            <div className="flex flex-col p-6 rounded-lg">

              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-2-text-1")}
              </p>
              <p className={`${styles.heading2_b} text-sm mt-8`}>
                {t("prospection.1-1-2-text-2")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-2-text-3")}
              </p>
            </div>
            <div className="flex flex-col p-6 rounded-lg">
              <img src={imgmagnetotelurico} alt="g-strata" className="w-[100%] relative z-[5] rounded-lg" />

            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
            <div className="flex flex-col border p-6 rounded-lg">
              <p className={`${styles.heading2_b} text-sm`}>
                {t("prospection.1-1-2-text-4")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-2-text-5")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-2-text-6")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-2-text-7")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-2-text-8")}
              </p>
            </div>
            <div className="flex flex-col border p-6 rounded-lg">
              <p className={`${styles.heading2_b} text-sm`}>
                {t("prospection.1-1-2-text-9")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-2-text-10")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-2-text-11")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-2-text-12")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-2-text-13")}
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.paddingX} ${layout.sectionInfo} `}>
          <h2 className={styles.heading1}>
            {t("prospection.1-1-3")}
          </h2>
          <p className={`${styles.paragraph_b} mt-2`}>
            {t("prospection.1-1-3-text-1")}
          </p>
          <p className={`${styles.heading2_b} text-sm mt-8`}>
            {t("prospection.1-1-3-text-2")}
          </p>
          <p className={`${styles.paragraph_b} mt-2`}>
            {t("prospection.1-1-3-text-3")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
            <div className="flex flex-col border p-6 rounded-lg">
              <p className={`${styles.heading2_b} text-sm`}>
                {t("prospection.1-1-3-text-4")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-3-text-5")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-3-text-6")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-3-text-7")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-3-text-8")}
              </p>
            </div>
            <div className="flex flex-col border p-6 rounded-lg">
              <p className={`${styles.heading2_b} text-sm`}>
                {t("prospection.1-1-3-text-9")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-3-text-10")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-3-text-11")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-3-text-12")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-1-3-text-13")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col space-y-0 sm:space-y-4">
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
          <h5 className={styles.heading1}>
            {t("prospection.1-2")}
            <hr style={{ background: 'green', color: 'green', borderColor: 'green', height: '3px' }} />
          </h5>
        </div>

        <div className={`${styles.paddingX} ${layout.sectionInfo} `}>
          <h2 className={styles.heading1}>
            {t("prospection.1-2-1")}
          </h2>
          <p className={`${styles.paragraph_b} mt-2`}>
            {t("prospection.1-2-1-text-1")}
          </p>
          <p className={`${styles.heading2_b} text-sm mt-8`}>
            {t("prospection.1-2-1-text-2")}
          </p>
          <p className={`${styles.paragraph_b} mt-2`}>
            {t("prospection.1-2-1-text-3")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
            <div className="flex flex-col border p-6 rounded-lg">
              <p className={`${styles.heading2_b} text-sm`}>
                {t("prospection.1-2-1-text-4")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-1-text-5")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-1-text-6")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-1-text-7")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-1-text-8")}
              </p>
            </div>
            <div className="flex flex-col border p-6 rounded-lg">
              <p className={`${styles.heading2_b} text-sm`}>
                {t("prospection.1-2-1-text-9")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-1-text-10")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-1-text-11")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-1-text-12")}
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.paddingX} ${layout.sectionInfo} `}>
          <h2 className={styles.heading1}>
            {t("prospection.1-2-2")}
          </h2>
          <p className={`${styles.paragraph_b} mt-2`}>
            {t("prospection.1-2-2-text-1")}
          </p>
          <p className={`${styles.heading2_b} text-sm mt-8`}>
            {t("prospection.1-2-2-text-2")}
          </p>
          <p className={`${styles.paragraph_b} mt-2`}>
            {t("prospection.1-2-2-text-3")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
            <div className="flex flex-col border p-6 rounded-lg">
              <p className={`${styles.heading2_b} text-sm`}>
                {t("prospection.1-2-2-text-4")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-2-text-5")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-2-text-6")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-2-text-7")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-2-text-8")}
              </p>
            </div>
            <div className="flex flex-col border p-6 rounded-lg">
              <p className={`${styles.heading2_b} text-sm`}>
                {t("prospection.1-2-2-text-9")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-2-text-10")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-2-text-11")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-2-text-12")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-2-text-13")}
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.paddingX} ${layout.sectionInfo} `}>

          <h2 className={styles.heading1}>
            {t("prospection.1-2-3")}
          </h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
            <div className="flex flex-col  p-6 rounded-lg">

              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-3-text-1")}
              </p>
              <p className={`${styles.heading2_b} text-sm mt-8`}>
                {t("prospection.1-2-3-text-2")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-3-text-3")}
              </p>

            </div>
            <div className="flex flex-col  p-6 rounded-lg">

              <img src={imgnakamura} alt="g-strata" className="w-[100%] relative z-[5] rounded-lg" />

            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
            <div className="flex flex-col border p-6 rounded-lg">
              <p className={`${styles.heading2_b} text-sm`}>
                {t("prospection.1-2-3-text-4")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-3-text-5")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-3-text-6")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-3-text-7")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-3-text-8")}
              </p>
            </div>
            <div className="flex flex-col border p-6 rounded-lg">
              <p className={`${styles.heading2_b} text-sm`}>
                {t("prospection.1-2-3-text-9")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-3-text-10")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-3-text-11")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-3-text-12")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("prospection.1-2-3-text-13")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prospection;