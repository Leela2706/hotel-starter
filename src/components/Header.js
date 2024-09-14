import React, { useState, useEffect } from 'react';

import LogoWhite from '../assets/img/logo-white.svg'
import LogoDark from '../assets/img/logo-dark.svg'

const Header = () => {
  const [header, setHeader] = useState(false);
  const [menuOptions, setMenuOptions] = useState([]);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    getMenuOptions();
  }, []);

  const getMenuOptions = async () => {
    const response = await fetch("http://localhost:3000/menuOptions");
    const menuInfo = await response.json();
    setMenuOptions(menuInfo)
  }
  return (
    <header className={`${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-500`}>
      <div className='container flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0 mx-auto'>
        <a href='/'>
          {header ? (
            <img className='w-[160px]' src={LogoDark} />
          ) : (
            <img className='w-[160px]' src={LogoWhite} />)}
        </a>

        <nav className={`${header ? 'text-primary' : 'text-white'} flex gap-x-4 font-tertiary tracking-[3px] text-[15px] items-center uppercase lg:gap-x-8`}>
          {menuOptions.map((menu) =>{
                return (
                  <a href='' className='hover:text-accent transition'>
                {menu.name}
              </a>
                )
              })}
        </nav>
      </div>
    </header>
  )
};

export default Header;
