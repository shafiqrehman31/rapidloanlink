"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const HeaderOne: React.FC = () => {
  const pathname = usePathname();
  
  // Simplified menu items with only requested pages
  const MENU = [
    { label: "HOME", to: "/" },
    { label: "ABOUT US", to: "/about-us" },
    { label: "FAQ", to: "/faq" },
    { label: "CONTACT US", to: "/contact" },
  ];

  const [scroll, setScroll] = useState<boolean>(false);
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset < 150) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup to avoid memory leaks
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMobileMenu = (): void => {
    setMobileMenu((prev) => !prev);
  };

  const isItemActive = (item: { to?: string }): boolean => {
    return item.to === pathname;
  };

  return (
    <>
      {/* Overlay for mobile menu */}
      <div className={`overlay ${mobileMenu ? "active" : ""}`} onClick={() => setMobileMenu(false)}></div>
      
      <header
        className={`header bg-base-two-600 transition-all ${
          scroll ? "fixed-header" : ""
        }`}
      >
        <div className='container container-two'>
          <nav className='d-flex align-items-center justify-content-between'>
            {/* Logo Start */}
            <div className='logo'>
              <Link href='/' className='link'>
                <Image
                  src='/assets/images/logo/logo.png'
                  alt='img'
                  className='tw-h-10'
                  width={171}
                  height={40}
                  priority
                />
              </Link>
            </div>
            {/* Logo End  */}
            
            {/* Desktop Menu Start */}
            <div className='header-menu d-lg-block d-none'>
              {/* Nav menu Start */}
              <ul className='nav-menu d-lg-flex align-items-center tw-gap-8'>
                {MENU.map((item) => {
                  const active = isItemActive(item);

                  return (
                    <li
                      key={item.label}
                      className={`nav-menu__item ${
                        active ? "activePage" : ""
                      }`}
                    >
                      <Link
                        href={item.to || '#'}
                        className='nav-menu__link text-white tw-py-9 fw-semibold w-100 hover-text-main-600 tw-duration-300 tw-text-lg'
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              {/* Nav menu End  */}
            </div>
            {/* Desktop Menu End */}
            
            {/* Header Right start - Only Loan Quote button */}
            <div className='d-flex align-items-center tw-gap-6'>
              <div className='d-flex align-items-center'>
                <div className='position-relative z-1'>
                  <Link
                    href='/apply-loan'
                    className='header-item-link text-white fw-bold tw-text-lg tw-px-6 tw-py-3 bg-main-600 border-two-px-solid rounded-2 hover-bg-main-700 tw-duration-300 tw-uppercase tw-tracking-wide'
                  >
                    Loan Quote
                  </Link>
                </div>
              </div>
              
              {/* Mobile Menu Toggle Button */}
              <button
                onClick={handleMobileMenu}
                type='button'
                className='toggle-mobileMenu leading-none d-lg-none text-white tw-text-3xl tw-p-2 hover-bg-neutral-800 tw-rounded-lg'
              >
                <i className='ph ph-list' />
              </button>
            </div>
            {/* Header Right End  */}
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu position-fixed top-0 end-0 tw-h-screen tw-w-80 tw-bg-base-two-700 tw-z-9999 tw-p-6 tw-transform tw-transition-transform tw-duration-300 tw-ease-in-out ${
          mobileMenu ? 'tw-translate-x-0' : 'tw-translate-x-full'
        } d-lg-none`}
      >
        {/* Mobile Menu Header with Close Button */}
        <div className='d-flex align-items-center justify-content-between tw-mb-10 tw-border-b tw-border-neutral-700 tw-pb-4'>
          <Link href='/' className='mobile-menu__logo' onClick={() => setMobileMenu(false)}>
            <Image
              src='/assets/images/logo/logo.png'
              alt='Logo'
              width={140}
              height={35}
              priority
            />
          </Link>
          <button
            onClick={handleMobileMenu}
            type='button'
            className='close-button tw-w-10 tw-h-10 tw-rounded-full d-flex justify-content-center align-items-center text-white bg-neutral-800 hover-bg-neutral-900'
          >
            <i className='ph ph-x tw-text-xl' />
          </button>
        </div>
        
        {/* Mobile Menu Content */}
        <div className='mobile-menu__menu'>
          <ul className='nav-menu nav-menu--mobile tw-space-y-4'>
            {MENU.map((item) => {
              const active = isItemActive(item);

              return (
                <li
                  key={item.label}
                  className={`nav-menu__item ${
                    active ? "activePage active" : ""
                  }`}
                >
                  <Link
                    href={item.to || '#'}
                    className={`nav-menu__link tw-py-4 tw-px-4 fw-semibold w-100 d-block tw-rounded-lg tw-text-lg tw-duration-200 ${
                      active 
                        ? 'tw-text-main-600 tw-bg-neutral-900' 
                        : 'text-white hover-text-main-600 hover-bg-neutral-900'
                    }`}
                    onClick={() => setMobileMenu(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            
            {/* Loan Quote Button in Mobile Menu */}
            <li className='nav-menu__item tw-mt-8 tw-pt-6 tw-border-t tw-border-neutral-700'>
              <Link
                href='/apply-loan'
                className='header-item-link text-white fw-bold tw-text-lg tw-px-6 tw-py-4 bg-main-600 border-two-px-solid rounded-2 hover-bg-main-700 tw-duration-300 tw-w-full tw-text-center tw-block tw-uppercase tw-tracking-wide'
                onClick={() => setMobileMenu(false)}
              >
                Loan Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Custom CSS for mobile menu */}
      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 9998;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
        }
        
        .overlay.active {
          opacity: 1;
          visibility: visible;
        }
        
        .mobile-menu {
          box-shadow: -5px 0 30px rgba(0, 0, 0, 0.1);
        }
        
        /* Ensure mobile menu is visible on mobile */
        @media (max-width: 991px) {
          .mobile-menu {
            display: block !important;
          }
        }
        
        /* Ensure desktop menu hides on mobile */
        @media (max-width: 991px) {
          .header-menu {
            display: none !important;
          }
        }
        
        /* Menu item hover effects */
        .nav-menu__link:hover {
          transform: translateX(5px);
        }
        
        /* Active page indicator */
        .nav-menu__item.activePage .nav-menu__link {
          position: relative;
        }
        
        .nav-menu__item.activePage .nav-menu__link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 8px;
          width: 100%;
          height: 3px;
          background: #E45551;
          border-radius: 2px;
        }
        
        /* Mobile menu active item */
        .nav-menu--mobile .nav-menu__item.activePage .nav-menu__link::after {
          display: none;
        }
        
        /* Mobile menu item spacing */
        .nav-menu--mobile .nav-menu__item {
          margin: 8px 0;
        }
        
        /* Mobile menu scroll if needed */
        .mobile-menu {
          overflow-y: auto;
        }
        
        /* Adjust toggle button spacing */
        @media (max-width: 991px) {
          .toggle-mobileMenu {
            margin-left: 10px !important;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderOne;