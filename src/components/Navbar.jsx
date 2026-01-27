import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { navbarStyles } from "../assets/dummyStyles";
import logo from "../assets/logo.png";
import { BookMarked, BookOpen, Home, Users, Phone } from "lucide-react";

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Courses", icon: BookOpen, href: "/courses" },
  { name: "About", icon: BookMarked, href: "/about" },
  { name: "Faculty", icon: Users, href: "/faculty" },
  { name: "Contact", icon: Phone, href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);

  const desktopLinkClass = (isActive) =>
    `${navbarStyles.desktopNavItem} ${
      isActive ? navbarStyles.desktopNavItemActive : ""
    }`;

  const mobileLinkClass = (isActive) =>
    `${navbarStyles.mobileMenuItem} ${
      isActive
        ? navbarStyles.mobileMenuItemActive
        : navbarStyles.mobileMenuItemHover
    }`;

  return (
    <nav
      className={`
        ${navbarStyles.navbar}
        ${showNavbar ? navbarStyles.navbarVisible : navbarStyles.navbarHidden}
        ${isScrolled ? navbarStyles.navbarScrolled : navbarStyles.navbarDefault}
      `}
    >
      <div className={navbarStyles.container}>
        <div className={navbarStyles.innerContainer}>
          {/* LOGO */}
          <div className="flex items-center gap-3 select-none">
            <img src={logo} alt="Logo" className="w-16 h-16" />
            <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-700 to-cyan-600 font-serif leading-[0.95]">
              SkillForge
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className={navbarStyles.desktopNav}>
            <div className={navbarStyles.desktopNavContainer}>
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    end={item.href === "/"}
                    className={({ isActive }) =>
                      desktopLinkClass(isActive)
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <Icon
                        size={16}
                        className={navbarStyles.desktopNavIcon}
                      />
                      <span className={navbarStyles.desktopNavItemText}>{item.name}</span>
                    </div>
                  </NavLink>
                );
              })}
            </div>
          </div>
{/*right side*/}
<div className={navbarStyles.authContainer}>

</div>


        </div>
      </div>
    </nav>
  );
};

export default Navbar;
