import { useState , useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo1 from "../../../assets/icon/luxury4.png"
import logo2 from "../../../assets/icon/luxaryWhite.jpg"
import { GoArrowDown } from "react-icons/go";


const menusItems = [
  {
    id: 1,
    menu: 'Home',
    link: "/home",
    submenu: []
  },
  {
    id: 2,
    menu: 'Destination',
    link: "/destination",
    submenu: []
  },
  {
    id: 3,
    menu: 'Tour Package',
    link: "/package",
    submenu: []
  },
  {
    id: 4,
    menu:"Pages",
    link: "",
    icon:  <GoArrowDown />,
    submenu: [
      {id: 10, menu: "Gallery Page", link:"/gallery"},
      {id: 11, menu: "Guide Page", link:"/guide"},
      {id: 12, menu: "Destination Page", link:"/destination"},
      {id: 13, menu: "FAQ Page", link:"/faq"},
    ]
  },
  {
    id: 5,
    menu: 'About',
    link: "/about",
    submenu: []
  },
  {
    id: 6,
    menu: 'Contact',
    link: "/contact",
    submenu: []
  },
]

const Navbar = ({title})=>{

    //  const [navLogo, setNavLogo] = useState([logo2]);
    //  const [navBg, setNavBg] = useState(false);
    //  const [navMenu, setNavMenu] = useState(false);

    // Decide What to render
    // let navMenus = navMenu ? "menu-itemScroll" : "menu-item"
    // let activeClass= "text-[#082a74] border-b-2 border-purple-500 font-bold"
    
  // const [show, setShow] = useState(false);
  // const showDropdown = (e)=>{
  //     setShow(!show);
  // }
  // const hideDropdown = e => {
  //     setShow(false);
  // }

  // const onScroll=()=>{
  //   if(window.scrollY>=80){
  //     setNavLogo([logo1])
  //     setNavBg(true)
  //     setNavMenu(true)
  //   }
  //   else{
  //    setNavLogo([logo2])
  //    setNavBg(false)
  //    setNavMenu(false)
  //   }
  // }
  //   useEffect(()=>{
  //    window.addEventListener('scroll', onScroll)
  //     return ()=>{
  //      window.addEventListener('scroll', onScroll)
 
  //     }
  //   }, [])


    // const ActiveLink =(props)=>{
    //   return <NavLink
    //            style={({isActive})=>{
    //             return {
    //               color: isActive ? "#082a74" : "" ,
    //               borderBottom: isActive ? "2px solid #082a74" : "",
    //               fontWeight: isActive ? "bold" : "",
    //             }
    //           }}   
    //           {...props} 
    //       />;
    //    }


    /*
    
      //  <li><NavLink className={`menu-item bg-transparent`} to="/">Home</NavLink></li>
      //  <li><NavLink className={`menu-item bg-transparent`} to="/">Destination</NavLink></li>
      //  <li><NavLink className={`menu-item bg-transparent`} to="/">Tour Package</NavLink></li>
    
    // <li className="group">
    //       <span className={`menu-item `}>
    //         Pages
    //         <svg className="dropdown-pages" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
    //       </span>
    //       <ul className="rounded-box bg-base-100 p-2">
    //       <li><Link to="/">Gallery Page</Link></li>
    //       <li><Link to="/">Guide Page</Link></li>
    //       <li><Link to="/">Destination Page</Link></li>
    //       <li><Link to="/">FAQ Page</Link></li>
    //       </ul>
    //    </li>

      //  <li><NavLink className={`menu-item bg-transparent `} to="/">About</NavLink></li>
      //  <li><NavLink className={`menu-item bg-transparent `} to="/contact">Contact</NavLink></li> 
     */
    
    let menuItem = <>
       {menusItems?.length > 0 && menusItems?.map((menus)=>(
        <li key={menus.id}>
          <NavLink className={`menu-item bg-transparent`} to={menus.link}>{menus.menu}</NavLink>

          {menus?.submenu?.length > 0 && ( 
            <> 
               {/* <span className='p-0 text-[20px] font-serif	 font-[500] text-white'>
                 Pages
               </span>  */}
                <p className='dropdown-pages p-0 z-0 top-0'>{menus?.icon}</p>
                
              <ul className="rounded-box bg-base-100 p-2">
                {menus?.submenu?.map((subMenus)=>(
                  <li key={subMenus.id} ><Link to={subMenus.link}>{subMenus.menu}</Link></li>
                ))}
              </ul>
              </>
            )}
         </li>
        ))}
     </>;     
// let m = menuItem.replace(/<p>/g, "").replace(/<\/p>/g, "") 
  return (
   <>
    <title>{title} - Luxury</title>
     <div className="navbar fixed top-0 z-10">
      <div className="navbar-start mx-20">
      <div className="dropdown">
       <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
       </label>
       <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black-100 rounded-box w-52">
        {menuItem}
       </ul>
      </div>
        <Link to="/">
          <img className='h-16' src={logo2} alt="logo" />
        </Link>
       </div>

      <div className="navbar-center hidden lg:flex">
      <div className="dropdown">
       <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
       </label>
       <ul className="menu menu-horizontal bg-black-100 rounded-box p-2">
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
        <li><Link to="/">Item 1</Link></li>
        <li tabIndex={0}>
          <Link to="/" className="justify-between">
            Parent
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
          </Link>
          <ul className="p-2">
            <li><Link to="/">Submenu 1</Link></li>
            <li><Link to="/">Submenu 2</Link></li>
          </ul>
        </li>
        <li><Link to="/">Item 3</Link></li>
      </ul>
    </div> 
    <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/">Item 1</Link></li>
      <li tabIndex={0}>
        <Link to="/">
          Parent
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
        </Link>
        <ul className="p-2">
          <li><Link to="/">Submenu 1</Link></li>
          <li><Link to="/">Submenu 2</Link ></li>
        </ul>
      </li>
      <li><Link to="/">Item 3</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link to="/" className="btn">Get started</Link >
  </div>
  </div> */}
  </>
 )
}

export default Navbar