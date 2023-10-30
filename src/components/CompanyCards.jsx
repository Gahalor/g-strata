import { stats } from '../translations/constants';
import styles from "../style";
import { useTranslation } from "react-i18next";
import { stars } from "../assets";
import { IoMapOutline, IoLocationSharp, IoWater, IoStatsChart } from "react-icons/io5";
import { imgcompany } from "../assets";
import { logo } from "../assets";

function CompanyCards() {
  const [t, i18n] = useTranslation("global");

  return (
    <section className={`${styles.flexCenter} flex-row flex-wrap`}>
      <div className="flex h-[620px] w-full items-end justify-start" style={{ backgroundImage: `url(${imgcompany})` }}>

          <div className="group relative cursor-pointer overflow-hidden">
            {/* <div className="h-[620px] w-[620px] ">
              <div className="absolute inset-0 flex translate-y-[20%] flex-col items-center justify-center px-4 text-center transition-all duration-500 group-hover:translate-y-0">
                <div className="flex-[1] flex flex-col justify-center items-center mb-12">
                  <img
                    src={logo}
                    alt="hoobank"
                    className="w-[266px] h-[72.14px] object-contain"
                  />
                </div>
              </div>
            </div> */}
        </div>
      </div>
    </section>
  )
};

export default CompanyCards;