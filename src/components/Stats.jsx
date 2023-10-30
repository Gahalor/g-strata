import { stats } from '../translations/constants';
import styles from "../style";
import { useTranslation } from "react-i18next";

const Stats = () => (
  <div className='max-w-[1700px] '>
    <section className={`${styles.flexCenter} ${styles.paddingX} w-full h-[120px] grid grid-cols-3  bg-slate-800/40`}>
      {stats.map((stat) => (
        <div key={stat.id} className={`w-full flex sm:flex-row flex-col justify-center items-center`} >
          <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[22.89px] xs:leading-[53.16px] leading-[43.16px] text-center text-white  mx-3">
            {stat.value}<br className="sm:block hidden" />
          </h4>
          <p className="font-poppins font-normal xs:text-[20.45px] text-[10.45px] xs:leading-[26.58px] leading-[21.58px] text-center text-gradient uppercase">
            {stat.title}
          </p>
        </div>
      ))}
    </section>

  </div>

);

export default Stats;