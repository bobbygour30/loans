import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import assets from "../assets/assets";
import { Link } from "react-router-dom";



export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile hamburger
  const [openDropdown, setOpenDropdown] = useState(null); // desktop dropdown index
  const closeTimer = useRef(null);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [mobileOpenIndex, setMobileOpenIndex] = useState(null); // mobile accordion index
  const [mobileNumber, setMobileNumber] = useState("");

  const navItems = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
      sublinks: [
        { label: "Why Fyntegra", href: "/why-fyntegra" },
        { label: "Platform", href: "/platform" },
      ],
    },
    { label: "Solutions", href: "/solutions" , sublinks: [
      { label: "Customer Experience & Sales", href: "/solutions/cx-sales" },
      { label: "Collections & Recovery", href: "/solutions/collections" },
      { label: "Compliance & Verification", href: "/solutions/compliance" },
      { label: "AI + SaaS Tools", href: "/solutions/ai-saas" },
    ]},
    {
      label: "Compliance & Grievance",
      href: "/grievance",
    },
    {
      label: "Loans",
      href: "/loans",
      sublinks: [
        { label: "Eligibility", href: "/eligibility" },
      ],
    },
    { label: "EMI Calculator", href: "/emi-calculator" },
    {
      label: "Contact",
      href: "/contact",
      sublinks: [
        { label: "Support", href: "/support" },
        { label: "Careers", href: "/careers" },
      ],
    },
  ];

  // Clean up timers
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  const handleMouseEnter = (index) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 250);
  };

  const toggleMobileIndex = (index) => {
    setMobileOpenIndex((prev) => (prev === index ? null : index));
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 768) { // Mobile breakpoint
        if (window.scrollY > 100) { // Show after scrolling 100px
          setIsMobileMenuVisible(true);
        } else {
          setIsMobileMenuVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleApplyClick = () => {
    if (mobileNumber) {
      alert(`Loan application started with mobile number: ${mobileNumber}`);
      setMobileNumber(""); // Clear input after submission
    } else {
      alert("Please enter a mobile number.");
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="px-4 sm:px-6 lg:px-8 flex items-center sm:justify-evenly justify-between md:justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={assets.logo} alt="Logo" className="h-16 sm:h-24 w-auto object-contain ml-0 sm:ml-0 md:ml-0 lg:ml-64" />
            </Link>
          </div>

          {/* Desktop Menu (visible above 1235px) */}
          <ul className="hidden xl:flex items-center space-x-6 lg:space-x-8 font-medium text-gray-700 flex-1 justify-center">
            {navItems.map((item, i) => (
              <li
                key={i}
                className="relative"
                onMouseEnter={() => (item.sublinks ? handleMouseEnter(i) : setOpenDropdown(null))}
                onMouseLeave={() => (item.sublinks ? handleMouseLeave() : null)}
              >
                <div className="flex items-center gap-1">
                  <Link to={item.href} className="relative group transition-colors duration-200">
                    {item.label}
                    {item.sublinks && (
                      <span className="ml-1 inline-block">
                        <ChevronDown size={14} className={`transition-transform ${openDropdown === i ? "rotate-180" : ""}`} />
                      </span>
                    )}
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#01495F] transition-all duration-200 group-hover:w-full"></span>
                  </Link>
                </div>

                {/* Dropdown (desktop) */}
                <AnimatePresence>
                  {openDropdown === i && item.sublinks && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-full mt-2 bg-white rounded-md shadow-lg min-w-[200px] z-50 py-2 ring-1 ring-black ring-opacity-5"
                      onMouseEnter={() => {
                        if (closeTimer.current) {
                          clearTimeout(closeTimer.current);
                          closeTimer.current = null;
                        }
                      }}
                      onMouseLeave={handleMouseLeave}
                    >
                      {item.sublinks.map((sublink, si) => (
                        <Link
                          key={si}
                          to={sublink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>

          {/* Action buttons on the right (desktop, above 1235px) */}
          <ul className="hidden xl:flex items-center space-x-2 sm:space-x-3 font-medium text-gray-700">
            <li>
              <Link to="/apply">
                <button className="px-3 sm:px-4 py-2 bg-[#0E8299] text-sm text-white rounded-full  hover:scale-105 transition duration-200">
                  Apply Now
                </button>
              </Link>
            </li>
            <li>
              <Link to="/partner-with-us">
                <button className="px-3 sm:px-4 py-2 bg-[#FFD35B] text-sm text-black rounded-full hover:bg-gray-900 hover:scale-105 transition duration-200">
                  Partner With Us
                </button>
              </Link>
            </li>
            <li>
              <Link to="/sign-up">
                <button className="px-3 sm:px-4 py-2 bg-[#0E8299] text-sm text-white rounded-full  hover:scale-105 transition duration-200">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>

          {/* Mobile Hamburger (visible at 1235px and below) */}
          <div className="xl:hidden">
            <button onClick={() => setIsOpen((s) => !s)} className="text-gray-800 focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu (accordion, visible at 1235px and below) */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="xl:hidden bg-white shadow-md flex flex-col space-y-1 p-4 text-gray-800"
            >
              {navItems.map((item, i) => (
                <li key={i} className="w-full">
                  <div className="flex items-center justify-between w-full">
                    <Link
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className="py-2 block flex-1 text-sm sm:text-base"
                    >
                      {item.label}
                    </Link>
                    {item.sublinks && (
                      <button
                        aria-label="toggle submenu"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleMobileIndex(i);
                        }}
                        className={`p-2 rounded-md transform transition-transform ${mobileOpenIndex === i ? "rotate-180" : ""}`}
                      >
                        <ChevronDown size={18} />
                      </button>
                    )}
                  </div>

                  {/* Mobile sublinks */}
                  <AnimatePresence>
                    {mobileOpenIndex === i && item.sublinks && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18 }}
                        className="pl-4 overflow-hidden"
                      >
                        {item.sublinks.map((sublink, si) => (
                          <Link
                            key={si}
                            to={sublink.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                          >
                            {sublink.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}

              {/* Mobile action buttons */}
              <li className="pt-2">
                <Link to="/apply" onClick={() => setIsOpen(false)}>
                  <button className="w-full px-4 py-2 bg-[#0E8299] text-sm text-white rounded-full ">
                    Apply Now
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/partner-with-us" onClick={() => setIsOpen(false)}>
                  <button className="w-full px-4 py-2 bg-[#FFD35B] text-sm text-black rounded-full hover:bg-gray-800">
                    Partner With Us
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/sign-up" onClick={() => setIsOpen(false)}>
                  <button className="w-full px-4 py-2 bg-[#0E8299] text-sm text-white rounded-full ">
                    Sign Up
                  </button>
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </nav>
       <AnimatePresence>
        {isMobileMenuVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed bottom-0 left-0 w-full bg-gray-800 backdrop-blur-md shadow-lg p-4 z-40"
          >
            <p className="text-white text-center mb-2">Need Cash? Get up to 5 Lakhs instantly</p>
            <div className="flex items-center gap-2 w-full">
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter mobile"
                className="p-2 border rounded-lg w-full text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#01495F]"
              />
              <button
                onClick={handleApplyClick}
                className="px-3 py-2 w-1/2 bg-[#01495F] text-white rounded text-sm hover:bg-red-700"
              >
                Apply Now
              </button>
            </div>
            
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}