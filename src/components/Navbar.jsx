import  {  useState } from 'react';
import { Link } from 'react-router-dom';
import { navLinks } from '../constants';
import { menu, close } from '../assets';


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='sm:px-16 px-6 w-full flex items-center py-10 fixed top-0 z-20 bg-gray-950'>
      <div className='  w-full flex justify-between items-center max-w-7xl '>
        <Link
          to='/'
          className='flex items-center gap-2 '
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
         <div className="group cursor-pointer">
         <p className="text-[#915eff] text-[24px] font-extrabold flex group hover:scale-110 hover:text-[#ff8a00] transition-all duration-300 ease-in-out">
  <span className="text-4xl font-serif bg-gradient-to-r from-[#915eff] to-[#6a1b9a] text-transparent bg-clip-text">
    AnduA
  </span>
</p>
  {/* <p className="text-white text-[18px] font-bold flex hidden group-hover:block">
    Andualem Assefa
  </p> */}
</div>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-blue-300 text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              {link.id === 'blog' ? (
                <Link to='/blogs'>{link.title}</Link>
              ) : (
                <a href={`#${link.id}`}>{link.title}</a>
              )}
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-gray-950 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  {link.id === 'blog' ? (
                    <Link to='/blogs'>{link.title}</Link>
                  ) : (
                    <a href={`#${link.id}`}>{link.title}</a>
                  )}
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
