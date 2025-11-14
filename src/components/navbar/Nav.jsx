import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 w-fit rounded-bl-lg z-50 bg-black text-white font-sans">
      {/* TOP NAVBAR */}
      <div className="flex rounded-bl-lg hover:bg-lime-300 hover:text-black justify-between items-center px-6 sm:px-8 md:px-10 py-3 sm:py-4">
        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(true)}
          className={`relative text-3xl sm:text-4xl flex flex-col justify-between items-center group ${
            isOpen ? "pointer-events-none" : ""
          }`}
        >
          <i className="ri-menu-4-line"></i>
        </button>
      </div>

      {/* FULLSCREEN MENU */}
      <div
        className={`fixed inset-0 bg-black transition-all duration-500 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close “X” Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 text-6xl sm:text-7xl md:text-8xl hover:text-lime-300"
        >
          <i className="ri-close-large-fill"></i>
        </button>

        {/* Center Menu Links */}
        <div className="flex flex-col justify-center items-center h-full w-full text-5xl sm:text-6xl md:text-7xl font-bold uppercase">
          
          {/* Link */}
          <Link to="/" className="block py-5 w-full border-white border-t-2 text-center hover:text-lime-300 hover:line-through transition-all duration-300" onClick={() => setIsOpen(false)}>Home</Link>

          {/* Each menu item with full-width border line */}
          {["Work", "Agency", "Contact", "Blog"].map((item, index) => (
            
            <div key={index} className="w-full">
              {/* Top divider line */}
              <div className="border-t-2 border-white w-full"></div>

              {/* Link */}
              <Link
                to={`/${item.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block py-5 text-center hover:text-lime-300 hover:line-through transition-all duration-300"
              >
                {item}
              </Link>
              
            </div>
            
          ))}
          {/* Bottom divider */}
          <div className="border-t-2 border-white w-full"></div>
        </div>

        {/* Bottom Left Legal Links */}
        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-[10px] sm:text-xs space-y-1 text-gray-400 leading-tight">
          <p>PRIVACY POLICY</p>
          <p>PRIVACY NOTICE</p>
          <p>ETHICS REPORT</p>
          <p>CONSENT CHOICES</p>
        </div>

        {/* Bottom Right Social Links */}
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex gap-2 sm:gap-3">
          {["FB", "IG", "IN", "BE"].map((s) => (
            <span
              key={s}
              className="border border-white px-2 sm:px-3 py-[2px] rounded-full text-[10px] sm:text-sm hover:bg-white hover:text-black transition"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}
