import styles from "../style";
import { discount, hero, globe, worldhero, bghero, videoSource } from "../assets";
import GetStarted from "./GetStarted";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import Contact from "./buttons/Contact";
import Stats from "./Stats";
import Navbar from "./Navbar";

function Hero() {
  const [t, i18n] = useTranslation("global");

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section id="home" className={``}>

      <div className="main">
        <video src={videoSource} autoPlay loop muted />
        <div className="content">
          <Navbar />
          
          <div className={`${styles.paddingX} ${styles.flexStart} h-[524px] flex items-center`}>
            <div className="flex-1 flex-col xl:px-0">
              <h1 className="flex-1 font-poppins font-normal ss:text-[48px] text-[52px] text-white">


                <span className="text-gradient font-semibold ss:text-[52px]">
                  {t("hero.groundwater")}<br className="sm:block hidden" />
                </span>
              </h1>
              <p className={`${styles.paragraph_w} max-w-[620px] mt-4`}>
                {t("hero.solution")}
              </p>
              <div className="mt-5">
                <a href="/#contact">

                  <Contact styles={`mt-2`} />
                </a>
              </div>
              <div className="flex mt-4 flex-row items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full" />
                <p className="ml-2 text-white">
                  Integrating blockchain technology
                </p>
              </div>
            </div>
          </ div>
          <div className="w-full flex justify-center items-center bg-slate-800/40">
            <Stats />
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;