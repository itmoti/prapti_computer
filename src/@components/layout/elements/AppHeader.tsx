import Link from 'next/link';
import React, { useEffect } from 'react';
import { Paths } from '@lib/constant';
import { FaClock, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const AppHeader = () => {
  useEffect(() => {
    const navigation = document.querySelector('.navigation');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navigation?.classList.add('active');
      } else {
        navigation?.classList.remove('active');
      }
    });

    if (window.scrollY > 100) {
      navigation?.classList.add('active');
    }
  }, []);

  const handleNav = () => {
    const navTogglerBtn: any = document.querySelector('.nav-toggler');
    const nav: any = document.querySelector('.nav');
    nav.classList.toggle('open');
    navTogglerBtn.classList.toggle('open');
  };

  return (
    <React.Fragment>
      <header className="app-header">
        <div className="container">
          <div className="py-8 flex justify-between">
            <div className="max-w-xs">
              <Link href={Paths.root}>
                
                <div className='  content-between '>
                <img src="/images/logo1.png" className=' inline-block align-baseline w-7 border-red-200' alt="Prapti Computer logo" />
                <span className='text-3xl'>Prapti Computer</span>
                  </div>                
              </Link>
            </div>
            <div className="hidden md:flex gap-4 items-center">
              <FaClock className="text-[#85ef47] text-3xl" />
              <div className="">
                <h4 className="text-xl font-semibold">Opening Hours</h4>
                <p>Mon - Fri 12AM - 7PM</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="navigation">
        <div className="container">
          <div className="menu">
            <nav className="nav">
              <ul>
                <li>
                  <Link href={Paths.root}>Home</Link>
                </li>
                <li>
                  <a href={Paths.about}> About Us</a>
                </li>
                <li>
                  <a href={Paths.services}>Services</a>
                </li>
                <li>
                  <a href={Paths.contact}>Contact</a>
                </li>
              </ul>
            </nav>
            <div className="flex gap-4 px-6">
              <Link
                href={Paths.links.facebook}
                className="bg-[#85ef47] hover:bg-[#6deb24] text-white w-8 h-8 rounded-full grid place-content-center"
              >
                <FaFacebookF />
              </Link>
              <Link
                href={Paths.links.facebook}
                className="bg-[#85ef47] hover:bg-[#6deb24] text-white w-8 h-8 rounded-full grid place-content-center"
              >
                <FaInstagram />
              </Link>
              <Link
                href={Paths.links.facebook}
                className="bg-[#85ef47] hover:bg-[#6deb24] text-white w-8 h-8 rounded-full grid place-content-center"
              >
                <FaTwitter />
              </Link>
            </div>
            <div className="nav-toggler block md:hidden" onClick={handleNav}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppHeader;
