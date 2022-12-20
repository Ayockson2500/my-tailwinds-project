import React from 'react'
import logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { navElement } from "./NavElement";

const NavBar = () => {
  return (
    <div>
       <nav className="relative container mx-auto p-6">
        {/* flex container */}
        <div className="flex items-center justify-between">
          <div className="pt-2">
            <img src={logo} alt="logo" />
          </div>
          {/* menu items */}
          <div className="hidden md:flex space-x-6 ">
            {navElement.map((item, idx) => (
              <Link
                className="hover:text-darkGrayishBlue"
                key={idx}
                to={item.url}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Link className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight hidden md:block">
            Get started
          </Link>
        </div>
      </nav> 
    </div>
  )
}

export default NavBar