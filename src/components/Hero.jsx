import styles from "../style";
import { discount, hero, globe, worldhero, bghero } from "../assets";
import GetStarted from "./GetStarted";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import Contact from "./buttons/Contact";

function Hero () {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (    
    <section id="home" className={`flex md:flex-row flex-col  ${styles.paddingY}`}>

      <div data-aos="fade-right" className={`flex-1 ${styles.flexStart} flex-row xl:px-0 sm:px-16 px-6`}>
        <div className="h-full mr-6">
          <div className="w-0.5 h-72 bg-green-gradient"></div>
        </div>

        <div className="flex-1 flex-col xl:px-0 sm:px-16 px-6">
          <h1 className="flex-1 font-poppins font-normal ss:text-[48px] text-[52px] text-white">
            {/* <span className="font-base ss:text-[32px]">
            {t("hero.new-tech")}<br className="sm:block hidden" />
            </span> */}

            <span className="text-gradient font-semibold ss:text-[52px]">
            {t("hero.groundwater")}<br className="sm:block hidden" />
            </span>
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-4`}>
          {t("hero.solution")}
          </p>
          <div className="mt-5">
            <Contact styles={`mt-2`} />
          </div>
          <div className="flex mt-4 flex-row items-center">
            <div className="w-4 h-4 bg-green-500 rounded-full"/>
            <p className="ml-2 text-white">
              Integrating blockchain technology
            </p>

          </div>
        </div>
      </div>

      <div data-aos="zoom-in" className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={worldhero} alt="billing" className="w-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>


    </section>
  );
};

export default Hero;