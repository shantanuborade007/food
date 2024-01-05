import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { toast } from 'react-hot-toast';

const Navbar = (props) => {
  let isloggedIn = props.isloggedIn;
  let setisloggedIn = props.setisloggedIn;

  return (
    <div className='flex bg-[#f06d06] w-full max-h-14 font-semibold text-white text-[18px]'>
      <div className='flex bg-[#f06d06] gap-10 w-11/12 justify-evenly items-center mx-auto'>
        <Link to="/">
          <img src={logo} width={'80px'} height={'80px'} alt='logo' loading='lazy' className='' />
        </Link>

        <nav className='flex gap-3'>
          <ul className='flex gap-10'>
            <li className='hover:opacity-70 transition-opacity'>
              <Link to="/">Home</Link>
            </li>
            <li className='hover:opacity-70 transition-opacity'>
              <Link to="/addrecipe">+ Add new Recipe</Link>
            </li>
            <li className='hover:opacity-70 transition-opacity'>
              <Link to="/viewrecipe">Recipies</Link>
            </li>
          </ul>
        </nav>

        <div className='flex gap-10'>
          {!isloggedIn && (
            <Link to="/Login">
              <button className='py-[8px] px-[18px] rounded-[8px] bg-orange-400'>Login</button>
            </Link>
          )}
          {!isloggedIn && (
            <Link to='/SignUp'>
              <button className='py-[8px] px-[18px] rounded-[8px] bg-orange-400'>SignUp</button>
            </Link>
          )}
          {isloggedIn && (
            <Link to='/'>
              <button
                className='py-[8px] px-[18px] rounded-[8px] bg-orange-400 hover:opacity-70 transition-opacity'
                onClick={() => {
                  setisloggedIn(false);
                  toast.success("Logged Out Sucessfully");
                }}>
                Logout
              </button>
            </Link>
          )}
          {isloggedIn && (
            <Link to='/Dashboard'>
              <button className='py-[8px] px-[18px] rounded-[8px] bg-orange-400 hover:opacity-70 transition-opacity'>
                Dashboards
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
