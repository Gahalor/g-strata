import { logocorfo, logodga } from "../assets";
import styles, { layout } from "../style";
import "aos/dist/aos.css";
import React, { useContext } from 'react';
import { useTranslation } from "react-i18next";
import { prospectionimg } from "../assets";
import NavbarInt from "./NavbarInt";
import { IoCall, IoMail, IoEarth } from "react-icons/io5";
import Send from "./buttons/Send";
import emailjs from '@emailjs/browser';

const sendEmail = (event) => {
  event.preventDefault();
  emailjs.sendForm('service_zwpnasa', 'template_0v971hj', event.target, 'sUGhnZBoyzwPA2DXh')
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

function Information() {
  const [t, i18n] = useTranslation("global");


  return (
    <div className="w-full flex justify-center flex-col items-center">
      <div className="contentnav">
        <NavbarInt />
      </div>

      <div className={`${styles.paddingX}`}>

        <h5 className={`${styles.heading1} pt-32`}>
          {t("information.1")}<br className="sm:block hidden" />
        </h5>

        <section id="information" className={`${layout.section} py-16`}>
          <div className='md:space-x-6 space-y-6 md:space-y-0 w-full px-8 pb-6 sm:p-12 rounded-xl'>
            <h2 className={styles.heading2_b}>
            {t("information.2")}<br className="sm:block hidden" />
            </h2>
            <div className="flex flex-col">
              <div className='pt-5 space-y-4'>
                <div className='text-gray-600 w-full flex flex-row items-center px-4 border rounded-lg py-2'>
                  <img src={logodga} alt="discount" className="h-[80px]" />
    
                  <a target="_blank" href="http://www.g-strata.com/docs/Contrato_890-3-LR23.pdf">
                    <div className="ml-12">
                    {t("information.3")}<br className="sm:block hidden" />
                    </div>
                  </a>
                </div>

                <div className='text-gray-600 w-full flex flex-row items-center px-4 border rounded-lg py-2'>
                  <img src={logocorfo} alt="discount" className="h-[80px]" />
                  <a target="_blank" href="http://www.g-strata.com/docs/RESOLUCION_DE_SUBSIDIO_INNOVA_EXENTA_ELECTRONICA.pdf">
                    <div className="ml-12">
                    {t("information.4")}<br className="sm:block hidden" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>


          <div className='bg-slate-800 md:space-x-6 space-y-6 md:space-y-0 w-full p-8 sm:p-8 rounded-xl shadow-lg text-white'>
            <div className='w-full text-center'>
              <h2 className={styles.heading2}>
              {t("information.5")}<br className="sm:block hidden" />
              </h2>
              <h2 className={styles.heading2}>
                <span>{t("information.6")}<br className="sm:block hidden" /></span>
              </h2>
            </div>

            <div className='flex flex-col md:flex-row pt-5'>
              <div className='text-gray-600 w-full px-8'>
                <form className='flex flex-col space-y-4 ' onSubmit={sendEmail}>
                  <div>
                    <input type='text' placeholder='Your name' name='user_name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2outline-none focus:ring-2 focus:ring-teal-300'></input>
                  </div>
                  <div>
                    <input type='email' placeholder='Your email address' name='user_email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'></input>
                  </div>
                  <div>
                    {/* <label className='text-sm'>Mensaje</label> */}
                    <textarea type='text' placeholder='Your message' name='user_message' rows='4' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'></textarea>
                  </div>
                  <button className='inline-block self-end'>
                    <Send />
                  </button>
                </form>
              </div>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default Information;