import { Link } from 'react-router-dom';
// import logo1 from "../../../assets/icon/luxury4.png"
import logo2 from "../../../assets/icon/luxaryWhite.jpg"
// import { useEffect, useState } from 'react';


const Navbar = () => {
    //  const [navLogo, setNavLogo] = useState([logo2]);
    //  const [navBg, setNavBg] = useState(false);
    //  const [navMenu, setNavMenu] = useState(false);

     const menuItem= <>
       <li><Link  to="/">Home</Link></li>
       <li><Link  to="/">Destination</Link></li>
       <li><Link  to="/">Tour Package</Link></li>
       <li className="group">
          <span>
            Pages
            <svg className="dropdown-pages" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
          </span>
          <ul className="rounded-box bg-base-100 p-2">
          <li><Link  to="/">Gallery Page</Link></li>
          <li><Link  to="/">Guide Page</Link></li>
          <li><Link  to="/">Destination Page</Link></li>
          <li><Link  to="/">FAQ Page</Link></li>
          </ul>
       </li>
       <li><Link to="/">About</Link></li>
       <li><Link to="/">Contact</Link></li>
    </>;

  return (
   <>
     <div className="navbar bg-white ">

       <div className="navbar-start mx-20">
      <div className="dropdown">
       <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
       </label>
       <ul tabIndex={0} className="menu-item">
        {menuItem}
       </ul>
      </div>
        <Link to="/">
          <img className='h-16' src={logo2} alt="logo" />
        </Link>
       </div>


       <div className=" navbar-center">
      <div className="dropdown">
       <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
       </label>
       <ul className="menu menu-horizontal bg-white-100 rounded-box p-2">
        {menuItem}
       </ul>
      </div>
       </div>


       <div className="navbar-end mx-20">
        <button className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </button>
    
        <div className="dropdown dropdown-end ">
         <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
            <img alt='nj' src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
         </label>
         <ul className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
            <li>
            <Link to="/" className="justify-between">
                Profile
                <span className="badge">New</span>
            </Link>
            </li>
            <li><Link to="/">Settings</Link></li>
            <li><Link to="/">Logout</Link></li>
         </ul>
        </div>
       </div>

    </div>  




    {/* <div className="navbar bg-base-100">
  <div className="navbar-start">
     <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li tabIndex={0}>
          <a className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div> 
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li tabIndex={0}>
        <a>
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </a>
        <ul className="p-2">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Get started</a>
  </div>
</div> */}
   </>
  )
}

export default Navbar