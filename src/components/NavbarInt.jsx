import React, { useContext, useState } from 'react';
import { close, logo, menu } from '../assets';
import { navLinks } from '../translations/constants';
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from 'i18next';
import styles from "../style";

const NavbarInt = () => {
  const [toggle, setToggle] = useState(false);

  return (

    <nav className={`${styles.paddingX} ${styles.flexStart} w-full flex py-3 justify-between items-center bg-slate-800/40 px-16`}>
      <Link to="/">
        <img src={logo} alt="gstrata" className="h-[52px]" />
      </Link>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white`}>
            <a href={`http://www.g-strata.com/#${nav.id}`}>
              {nav.title}
            </a>
          </li>

        ))}
        <button onClick={() => i18next.changeLanguage("es")} className='text-white rounded border px-3 ml-10'>ES</button>
        <button onClick={() => i18next.changeLanguage("en")} className='text-white rounded border px-3 ml-3'>EN</button>
      </ul>

      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px]
            object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'} text-white`}>
                <a href={`http://www.g-strata.com/#${nav.id}`}>
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarInt