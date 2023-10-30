import Send from "./buttons/Send";
import emailjs from '@emailjs/browser';
import { IoCall, IoMail, IoEarth } from "react-icons/io5";
import { BsFacebook, BsDiscord, BsTwitter, BsLinkedin, BsFillTelephoneFill, BsEnvelopeFill, BsGlobe } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import styles, { layout } from "../style";


const sendEmail = (event) => {
  event.preventDefault();
  emailjs.sendForm('service_zwpnasa', 'template_0v971hj', event.target, 'sUGhnZBoyzwPA2DXh')
    .then(response => console.log(response))
    .catch(error => console.log(error))
}

function CTA() {
  const [t, i18n] = useTranslation("global");
  return (
    <section id="contact" className={`sm:flex-row flex-col ${layout.section} px-0 sm:px-32`}>
      <div className='bg-slate-800 md:space-x-6 space-y-6 md:space-y-0 w-full p-8 sm:p-12 rounded-xl shadow-lg text-white'>
        <div className='w-full text-center'>
          <h2 className={`${styles.heading1_w} pb-6`}>
            {t("contact.title")}

          </h2>
        </div>
        <div className='flex flex-col md:flex-row pt-5'>
          <div className='space-y-8 w-full justify-between'>
            <div>
              <p className={`${styles.paragraph}`}>
                {t("contact.content-1")}
              </p>
            </div>

            <div className='flex flex-col space-y-6 pb-8'>
              <div className='inline-flex space-x-2 items-center'>
                <IoCall className='text-teal-300 text-xl' name='call'></IoCall>
                <span>+(56) 9 7518 2336</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <IoMail className='text-teal-300 text-xl' name='mail'></IoMail>
                <span>contacto@g-strata.com</span>
              </div>
              <div className='inline-flex space-x-2 items-center'>
                <IoEarth className='text-teal-300 text-xl' name='address'></IoEarth>
                <span>Concepción, Chile</span>
              </div>
            </div>

          </div>

          <div className='text-gray-600 w-full px-8'>
            <form className='flex flex-col space-y-4' onSubmit={sendEmail}>
              <div>
                <input type='text' placeholder='Your name' name='user_name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2outline-none focus:ring-2 focus:ring-teal-300'></input>
              </div>
              <div>
                <input type='email' placeholder='Your email address' name='user_email' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300'></input>
              </div>
              <div>
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
  )
};

export default CTA;