import { stats } from '../translations/en/constants';
import styles from "../style";
import { useTranslation } from "react-i18next";

const Stats = () => (
  <section className={`${styles.flexCenter} w-3/4 items-center flex-row flex-wrap`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`h-[120px] flex-1 flex justify-center items-center flex-row`} >
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
          {stat.value}<br className="sm:block hidden" />
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;