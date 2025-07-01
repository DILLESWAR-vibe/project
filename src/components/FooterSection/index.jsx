import { footerDetails, myInfo, navLinks, social_links } from "../../data";
import logo from "../../assets/logo.svg";
import { IoIosArrowRoundUp } from "react-icons/io";
import PropTypes from "prop-types";

const Footer = ({ onScrollTo }) => {
  return (
    <footer className="relative bg-secondary text-white py-2 px-4 md:px-12 pt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div className="flex flex-col items-end md:items-start">
          <img src={logo} alt="Logo" className="mb-2 h-auto w-14" />
          <p className="text-sm text-gray-400">{footerDetails.designation}</p>
        </div>

        <p className="text-left md:text-center">{footerDetails.email}</p>

        <div className="flex gap-5 md:gap-10 justify-start md:justify-end">
          <nav>
            <p className="mr-3 uppercase font-ragnear text-center text-gray-500 text-lg md:text-xl mb-2">
              NavLinks
            </p>
            <ul className="nocursor">
              {navLinks.map((navlink) => (
                <li
                  key={navlink.id}
                  className="cursor-pointer  w-fit text-sm flex items-center mb-1 group"
                >
                  <IoIosArrowRoundUp className="text-xl translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 transition-all duration-300 ease-in-out rotate-45" />
                  <button
                    onClick={(e) =>
                      onScrollTo(e, navlink.link.replace("#", ""))
                    }
                    className="relative cursor-pointer before:content-[] capitalize before:absolute before:left-0 before:bottom-0 before:h-[2px] before:bg-primary before:w-full before:scale-x-0 before:origin-right group-hover:before:scale-x-100 group-hover:before:origin-left before:transition-transform before:duration-1000 transition-all"
                  >
                    {navlink.name}
                  </button>
                  <IoIosArrowRoundUp className="text-xl ml-1 translate-y-0 group-hover:-translate-y-2 group-hover:opacity-0 opacity-100  transition-all duration-300 ease-in-out rotate-45" />
                </li>
              ))}
            </ul>
          </nav>

          <div className="nocursor">
            <p className="m-0 uppercase font-ragnear text-center text-gray-500 text-lg md:text-xl mb-2">
              Socials
            </p>
            {social_links.map((social_link) => (
              <a
                key={social_link.id}
                href={social_link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-sm mb-1 group cursor-pointer"
              >
                <IoIosArrowRoundUp className="text-xl translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 opacity-0 hover:text-blue-500 transition-all duration-300 ease-in-out rotate-45" />
                <span className="relative before:content-[] capitalize before:absolute before:left-0 before:bottom-0 before:h-[2px] before:bg-primary before:w-full before:scale-x-0 before:origin-right hover:before:scale-x-100 hover:before:origin-left before:transition-transform before:duration-1000 transition-all">
                  {social_link.name}
                </span>
                <IoIosArrowRoundUp className="text-xl ml-1 translate-y-0 group-hover:-translate-y-2 group-hover:opacity-0 opacity-100 hover:text-blue-500 transition-all duration-300 ease-in-out rotate-45" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full mt-10">
        <p className="text-8xl md:text-9xl font-ragnear font-extrabold">
          {myInfo.name}
        </p>
        <div className="uppercase font-ragnear text-gray-500 text-xl md:text-2xl flex gap-2">
          <span className="font-middleburg inline-block">&copy;</span>
          <span>
            {new Date().getFullYear()} {myInfo.name}. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  onScrollTo: PropTypes.func.isRequired,
};
