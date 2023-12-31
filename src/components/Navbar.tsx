import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-20 h-20 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Kauã &nbsp;<span className="sm:block hidden">Morais</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map(link => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white transition-colors duration-300 cursor-pointer text-[18px] font-medium`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <div className="flex gap-x-3">
            <FaLinkedin
              size={28}
              className="cursor-pointer transition-all duration-300 text-secondary hover:text-[#804dee] hover:scale-125"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/kauamorais03/',
                  '_blank',
                )
              }
            />
            <FaGithubSquare
              size={28}
              className="cursor-pointer transition-all duration-300 text-secondary hover:text-[#804dee] hover:scale-125"
              onClick={() =>
                window.open('https://github.com/moraiskaua', '_blank')
              }
            />
          </div>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div className="flex gap-x-3 mr-5">
            <FaLinkedin
              size={25}
              className="cursor-pointer transition-all duration-300 text-secondary hover:text-[#804dee] hover:scale-125"
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/kauamorais03/',
                  '_blank',
                )
              }
            />
            <FaGithubSquare
              size={25}
              className="cursor-pointer transition-all duration-300 text-secondary hover:text-[#804dee] hover:scale-125"
              onClick={() =>
                window.open('https://github.com/moraiskaua', '_blank')
              }
            />
          </div>
          <img
            src={toggleMenu ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
          <div
            className={`${
              !toggleMenu ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map(link => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggleMenu(!toggleMenu);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
