import { FaShoppingCart } from "react-icons/fa";
import { FcLikePlaceholder } from "react-icons/fc";
import { Link, NavLink, useLocation } from 'react-router-dom';
import { getAllCarts, getAllWishlists } from '../utils';

const Navbar = () => {
  const links = <>
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/statistics"> Statistics </NavLink></li>
    <li><NavLink to="/dashboard"> Dashboard</NavLink></li>
  </>;

const cartItems = getAllCarts();
const cartLength = cartItems.length;

const wishlistItems = getAllWishlists();
const wishlistLength = wishlistItems.length;

const location = useLocation();
const isHomePage = location.pathname === '/';

  return (
    <div>
      <div className={isHomePage ? 'navbar p-20' : 'navbar bg-base-100'}>
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className=" font-bold text-3xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-7 text-2xl">
          <div className="relative">
            <Link to={'/dashboard/cart'}>
              <FaShoppingCart className="text-3xl cursor-pointer" />
            </Link>
            {cartLength > 0 && (
              <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full text-xs p-1">
                {cartLength}
              </span>
            )}
          </div>

          <div className="relative">
            <Link to={'/dashboard/wishlist'}>
              <FcLikePlaceholder className="text-3xl cursor-pointer" />
            </Link>
            {wishlistLength > 0 && (
              <span className="absolute top-[-8px] right-[-8px] bg-red-500 text-white rounded-full text-xs p-1">
                {wishlistLength}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;