import { clients } from '../translations/en/constants';
import styles from "../style";
import { useTranslation } from "react-i18next";

function Techonologies () {
  const [t, i18n] = useTranslation("global");

  // <section className={`${styles.flexCenter} mt-12 mb-20`}>
  //   <div className={`${styles.flexCenter} flex-wrap w-full`}>
  //     {clients.map((client) => (
  //       <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
  //         <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
  //       </div>
  //     ))}
  //   </div>
  // </section>
  <section className={`${styles.flexCenter} mt-12 mb-20`}>
    <div className={`${styles.flexCenter} flex-wrap w-full`}>
      <div className='flex flex-row'>
        <div className='flex-col'>

      </div>
        <div>
        <h2 className={styles.heading2}>
          {t("services.title")}<br className="sm:block hidden" />
      </h2>
                <p>Tomografía de Resistividad Eléctrica (TER)</p>
          <p>IP de Alta Densidad</p>
          <p>S.E.V.</p>
          <p>Magnetotelúrico</p>
        </div>
        <div>
          <p>Prospección Sísmica</p>
        </div>
        <div>
          <p>Georadar</p>
        </div>
        <div>
          <p>Resistividad Térmica</p>
        </div>

      </div>
    </div>
  </section>
};

export default Techonologies;