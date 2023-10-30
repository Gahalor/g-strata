import { imgpetrus, imgdraper, imgcorfo, imgarauco, imgfugro, imgvik, imggwater, imgessbio, lasninas, antofagastam, xtrata } from "../assets";
import styles, { layout } from "../style";
import { useEffect } from 'react';
import { useTranslation } from "react-i18next";
import { features } from "../translations/constants";

function Partners() {
  const [t, i18n] = useTranslation("global");

  return (
    <section id="instruments" className={layout.section}>
      <div className="w-full flex flex-col justify-center  bg-gray-400 py-12">
          <p className={`${styles.heading1} text-center pb-6`}>
            Asociados y Clientes
          </p>
      <div className="logos">
        <div className="logos-slide">
          <div className="flex flex-row">
            <img src={imgfugro} alt="logo" />
            <img src={imgarauco} alt="logo" />
            <img src={imgcorfo} alt="logo" />
            <img src={imgpetrus} alt="logo" />
            <img src={imgvik} alt="logo" />
            <img src={imgdraper} alt="logo" />
            <img src={imggwater} alt="logo" />
            <img src={imgessbio} alt="logo" />
            <img src={xtrata} alt="logo" />
            <img src={lasninas} alt="logo" />
            <img src={antofagastam} alt="logo" />

            <div className="flex flex-row">
              <img src={imgfugro} alt="logo" />
              <img src={imgarauco} alt="logo" />
              <img src={imgcorfo} alt="logo" />
              <img src={imgpetrus} alt="logo" />
              <img src={imgvik} alt="logo" />
              <img src={imgdraper} alt="logo" />
              <img src={imggwater} alt="logo" />
              <img src={imgessbio} alt="logo" />
              <img src={xtrata} alt="logo" />
              <img src={lasninas} alt="logo" />
              <img src={antofagastam} alt="logo" />


            </div>
          </div>
        </div>
        </div>
        </div>
    </section>
  );
};

export default Partners;