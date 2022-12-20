import React from "react";
import { socialMediaLinks } from "./footerElements";
import { footerMenuOne } from "./footerElements";
import { footerMenuTwo } from "./footerElements";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-veryDarkBlue">
      {/* <!-- Flex Container --> */}
      <div className="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* <!-- Logo and social links container --> */}
        <div className="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start">
          <div className="mx-auto my-6 text-center text-white md:hidden">
            Copyright &copy; 2022, All Rights Reserved
          </div>
          {/* <!-- Logo --> */}
          <div>
            <img src="img/logo-white.svg" class="h-8" alt="" />
          </div>
          {/* <!-- Social Links Container --> */}
          <div className="flex justify-center space-x-4">
            {socialMediaLinks.map((item) => (
              <Link to={item.url}>
                <img src={item.Img} alt="" className="h-8" />
              </Link>
            ))}
          </div>
        </div>
        {/* <!-- List Container --> */}
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-3 text-white">
            {footerMenuOne.map((items, idx) => (
              <Link key={idx} to={items.url} className="hover:text-brightRed">
                {items.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col space-y-3 text-white">
            {footerMenuTwo.map((items, idx) => (
              <Link to={idx} className="hover:text-brightRed">
                {items.title}
              </Link>
            ))}
          </div>
        </div>

        {/* <!-- Input Container --> */}
        <div className="flex flex-col justify-between">
          <form>
            <div className="flex space-x-3">
              <input
                type="text"
                className="flex-1 px-4 rounded-full focus:outline-none"
                placeholder="Updated in your inbox"
              />
              <button className="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none">
                Go
              </button>
            </div>
          </form>
          <div className="hidden text-white md:block">
            Copyright &copy; 2022, All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
