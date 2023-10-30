import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from '../translations/constants';
import { Link } from 'react-router-dom';

const Footer = () => (
  <section className={`${styles.flexCenter} py-8 flex-col  bg-slate-200`}>
    <div className={`${styles.paddingX} w-full flex justify-between items-center md:flex-row flex-col text-muted-foreground `}>
      <p className="font-poppins font-normal text-center text-sm leading-[27px]">
        Copyright Ⓒ 2022 G-Strata. All Rights Reserved.
      </p>


      <Link to="/information">
        <h2 className={`font-poppins font-normal text-center text-sm leading-[27px]`}>
          Datos financieros y convenios
        </h2>
      </Link>

      <div className="flex flex-row md:mt-0 mt-6 ">
        <div className="flex-[1] flex flex-col justify-center items-center">
          <img
            src={logo}
            alt="hoobank"
            className="h-[32px] object-contain"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Footer;