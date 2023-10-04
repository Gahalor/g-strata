import { stats } from '../translations/en/constants';
import styles from "../style";
import { useTranslation } from "react-i18next";
import { stars } from "../assets";
import { IoMapOutline, IoLocationSharp, IoWater, IoStatsChart } from "react-icons/io5";
import { solution } from "../assets";

function Cards() {
  const [t, i18n] = useTranslation("global");

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap`}>
      <div className="flex h-[620px] w-full items-end justify-center" style={{ backgroundImage: `url(${solution})` }}>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 pb-8">

          <a href="/#services">
          <div className="group relative cursor-pointer border border-white rounded-md items-center justify-center overflow-hidden">
              <div className="h-56 w-72 bg-slate-900/20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/60 group-hover:to-black/60"></div>
                <div className="absolute inset-0 flex translate-y-[20%] flex-col items-center justify-center px-4 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className='pb-4'>
                    <IoWater size={52} color="white" />
                  </div>
                  <h1 className="text-xl font-semibold text-white pb-4">
                    {t("card.1")}<br className="sm:block hidden" />
                  </h1>
                  <p className="text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {t("card.1-text")}<br className="sm:block hidden" />
                  </p>
                </div>
              </div>
            </div>
          </a>
          
          <a href="/#services">
          <div className="group relative cursor-pointer border border-white rounded-md items-center justify-center overflow-hidden">
              <div className="h-56 w-72 bg-slate-900/20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/60 group-hover:to-black/60"></div>
                <div className="absolute inset-0 flex translate-y-[20%] flex-col items-center justify-center px-6 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className='pb-4'>
                    <IoLocationSharp size={52} color="white" />
                  </div>
                  <h1 className="text-xl font-bold text-white pb-4">
                    {t("card.2")}<br className="sm:block hidden" />
                  </h1>
                  <p className="text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {t("card.2-text")}<br className="sm:block hidden" />
                  </p>
                </div>
              </div>
            </div>
          </a>
          
          <a href="/#services">
            <div className="group relative cursor-pointer border border-white rounded-md items-center justify-center overflow-hidden">
              <div className="h-56 w-72 bg-slate-900/20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/60 group-hover:to-black/60"></div>
                <div className="absolute inset-0 flex translate-y-[20%] flex-col items-center justify-center px-6 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className='pb-4'>
                    <IoMapOutline size={52} color="white" />
                  </div>
                  <h1 className="text-xl font-bold text-white pb-4">
                    {t("card.3")}<br className="sm:block hidden" />
                  </h1>
                  <p className="text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {t("card.3-text")}<br className="sm:block hidden" />
                  </p>
                </div>
              </div>
            </div>
          </a>

          <a href="/#services">
          

          <div className="group relative cursor-pointer border border-white rounded-md items-center justify-center overflow-hidden">
              <div className="h-56 w-72 bg-slate-900/20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/60 group-hover:to-black/60"></div>
                <div className="absolute inset-0 flex translate-y-[20%] flex-col items-center justify-center px-6 text-center transition-all duration-500 group-hover:translate-y-0">
                  <div className='pb-4'>
                    <IoStatsChart size={52} color="white" />
                  </div>
                  <h1 className="text-xl font-bold text-white pb-4">
                    {t("card.4")}<br className="sm:block hidden" />
                  </h1>
                  <p className="text-md text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {t("card.4-text")}<br className="sm:block hidden" />
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
};

export default Cards;