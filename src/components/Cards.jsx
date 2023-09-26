import { stats } from '../translations/en/constants';
import styles from "../style";
import { useTranslation } from "react-i18next";
import { stars } from "../assets";
import { IoMapOutline, IoLocationSharp, IoWater, IoStatsChart } from "react-icons/io5";

function Cards() {
  const [t, i18n] = useTranslation("global");

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
      <div className="flex w-full items-center justify-center bg-gray-800 py-14">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">

          <a href="/#services">
            <div className="group relative cursor-pointer rounded-lg items-center justify-center overflow-hidden">
              <div className="h-96 w-72 bg-green-600">
                {/* <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={stars} alt="" /> */}
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[20%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <div className='pb-4'>
                  <IoWater size={52} color="white" />
                </div>

                <h1 className="font-dmserif text-3xl font-bold text-white pb-8">
                  {t("card.1")}<br className="sm:block hidden" />
                </h1>
                <p className="mb-3 mt-4 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {t("card.1-text")}<br className="sm:block hidden" />

                </p>
              </div>
            </div>
          </a>

          <a href="/#services">
            <div className="group relative cursor-pointer rounded-lg items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72 bg-green-600">
                {/* <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={stars} alt="" /> */}
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[20%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <div className='pb-4'>
                  <IoLocationSharp size={52} color="white" />
                </div>
                <h1 className="font-dmserif text-3xl font-bold text-white pb-8">
                  {t("card.2")}<br className="sm:block hidden" />
                </h1>
                <p className="mb-3 mt-4 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {t("card.2-text")}<br className="sm:block hidden" />

                </p>
              </div>
            </div>
          </a>

          <a href="/#services">
            <div className="group relative cursor-pointer rounded-lg items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72 bg-green-600">
                {/* <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={stars} alt="" /> */}
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[20%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <div className='pb-4'>
                  <IoMapOutline size={52} color="white" />
                </div>
                <h1 className="font-dmserif text-3xl font-bold text-white pb-8">
                  {t("card.3")}<br className="sm:block hidden" />
                </h1>
                <p className="mb-3 mt-4 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {t("card.3-text")}<br className="sm:block hidden" />

                </p>
              </div>
            </div>
          </a>

          <a href="/#services">


            <div className="group relative cursor-pointer rounded-lg items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
              <div className="h-96 w-72 bg-green-600">
                {/* <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={stars} alt="" /> */}
              </div>

              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent group-hover:from-black/70 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[20%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <div className='pb-4'>
                  <IoStatsChart size={52} color="white" />
                </div>
                <h1 className="font-dmserif text-3xl font-bold text-white pb-8">
                  {t("card.4")}<br className="sm:block hidden" />

                </h1>
                <p className="mb-3 mt-4 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {t("card.4-text")}<br className="sm:block hidden" />
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
};

export default Cards;