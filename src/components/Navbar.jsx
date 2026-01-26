
import React,{useState} from 'react'
 import{navbarStyles}from '../assets/dummyStyles'
import logo from '../assets/logo.png';

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Courses", icon: BookOpen, href: "/courses" },
  { name: "About", icon: BookMarked, href: "/about" },
  { name: "Faculty", icon: Users, href: "/faculty" },
  { name: "Contact", icon: Contact, href: "/contact" },
];

const Navbar =()=>{
  const [isScrolled,setIsScrolled]=useState(false);
  const[showNavbar,setShowNavbar]=useState(true);
  return(
   
    <nav
  className={`
    ${navbarStyles.navbar} 
    ${showNavbar ? navbarStyles.navbarVisible : navbarStyles.navbarHidden} 
    ${isScrolled ? navbarStyles.navbarScrolled : navbarStyles.navbarDefault}
  `}
>

          <div className={navbarStyles.container}>
            <div className={navbarStyles.innerContainer}>
              {/*LOGO*/}
              <div className="flex items-center gap-3 select-none">
                <img src={logo} alt="Logo" className="w-18 h-16"/>
                <div className="text-xl font-bold bg-clip-text text-transport bg-linear-to-r from-sky-700 to-cyan-600 font-serif leading-[0.95]">
                     SkillForge
                </div>
              </div>
              {/*Desktop*/}
              <div className={navbarStyles.desktopNav}>
                <div>
                  <div className={navbarStyles.desktopNavContainer}>
                </div>
                </div>        
            </div>
          </div>

        </nav>
  );
};
export default Navbar;