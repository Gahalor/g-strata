import styles, { layout } from "../style";
import { useTranslation } from "react-i18next";
import { searchimg } from "../assets";
import NavbarInt from "./NavbarInt";

function Search() {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="search" >
      <div className="w-full overflow-hidden h-[190px] sm:h-[580px]">
        <img src={searchimg} alt="g-strata" className="w-full relative" />
        <div className="content">
          <NavbarInt />
        </div>
      </div>
        <div className="w-full flex justify-center items-center bg-slate-800 px-4">
          <div className="font-poppins font-semibold xs:text-[36px] text-[24px] text-white xs:leading-[76.8px] leading-[56.8px] py-4 w-full text-center">
            {t("search.2")}
          </div>
        </div>

      <div className="w-full flex flex-col space-y-0 sm:space-y-4">
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
          <h5 className={styles.heading1}>
            {t("search.2-1")}
            <hr style={{ background: 'green', color: 'green', borderColor: 'green', height: '3px' }} />
          </h5>
        </div>

        <div className={`${styles.paddingX} ${layout.sectionInfo} `}>
          <h2 className={styles.heading1}>
            {t("search.2-1-1")}
          </h2>
          <p className={`${styles.paragraph_b} mt-2`}>
            {t("search.2-1-1-text-1")}
          </p>
          <p className={`${styles.heading2_b} text-sm mt-8`}>
            {t("search.2-1-1-text-2")}
          </p>
          <p className={`${styles.paragraph_b} mt-2`}>
            {t("search.2-1-1-text-3")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">
            <div className="flex flex-col border p-6 rounded-lg">
              <p className={`${styles.heading2_b} text-sm`}>
                {t("search.2-1-1-text-4")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("search.2-1-1-text-5")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("search.2-1-1-text-6")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("search.2-1-1-text-7")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("search.2-1-1-text-8")}
              </p>
            </div>
            <div className="flex flex-col border p-6 rounded-lg">
              <p className={`${styles.heading2_b} text-sm`}>
                {t("search.2-1-1-text-9")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("search.2-1-1-text-10")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("search.2-1-1-text-11")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("search.2-1-1-text-12")}
              </p>
              <p className={`${styles.paragraph_b} mt-2`}>
                {t("search.2-1-1-text-13")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col space-y-0 sm:space-y-4">
        <div className={`${styles.paddingX} ${styles.paddingY}`}>
          <h5 className={styles.heading1}>
            {t("search.2-3")}
            <hr style={{ background: 'green', color: 'green', borderColor: 'green', height: '3px' }} />
          </h5>
        </div>

        <div className={`${styles.paddingX} ${layout.sectionInfo} `}>
          <h2 className={styles.paragraph_b}>
            {t("search.2-3-1")}
          </h2>
          <p className={`${styles.paragraph_b} mt-2`}>
            {t("search.2-3-2")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Search;