"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

/* =====================
   Types
===================== */
interface NavItem {
  label: string;
  to?: string;
  children?: NavItem[];
}

const HeaderOne: React.FC = () => {
  const pathname = usePathname();

  /* =====================
     Menu
  ===================== */
  const MENU: NavItem[] = [
    {
      label: "Home",
      to: "/",
    },
    {
      label: "About Us",
      to: "/about-us",
    },
    {
      label: "FAQ",
      to: "/faq",
    },
    {
      label: "Contact Us",
      to: "/contact",
    },
  ];

  const [scroll, setScroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openIndex, setOpenIndex] = useState<number>(-1);

  /* =====================
     Scroll handler
  ===================== */
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.pageYOffset >= 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMobileMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  /* =====================
     Active menu logic
  ===================== */
  const isItemActive = (item: NavItem): boolean =>
    item.to
      ? item.to === pathname
      : item.children?.some((c) => c.to === pathname) ?? false;

  return (
    <>
      <div className="overlay"></div>
      <div className={`side-overlay ${mobileMenu ? "active" : ""}`}></div>

      <header
        className={`header bg-base-two-600 transition-all ${
          scroll ? "fixed-header" : ""
        }`}
      >
        <div className="container container-two">
          <nav className="d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <Link href="/" className="link">
                <Image
                  src="/assets/images/logo/logo.png"
                  alt="Logo"
                  width={171}
                  height={40}
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="header-menu d-lg-block d-none">
              <ul className="nav-menu d-lg-flex align-items-center tw-gap-6">
                {MENU.map((item) => {
                  const active = isItemActive(item);

                  return (
                    <li
                      key={item.label}
                      className={`nav-menu__item ${
                        item.children ? "has-submenu position-relative" : ""
                      } ${active ? "activePage" : ""}`}
                    >
                      {item.children ? (
                        <span className="nav-menu__link tw-pe-5 text-white tw-py-9 fw-semibold w-100 cursor-pointer">
                          {item.label}
                        </span>
                      ) : (
                        <Link
                          href={item.to!}
                          className="nav-menu__link text-white tw-py-9 fw-semibold w-100"
                        >
                          {item.label}
                        </Link>
                      )}

                      {item.children && (
                        <ul className="nav-submenu scroll-sm position-absolute start-0 top-100 tw-w-max bg-white tw-rounded-md tw-p-2 tw-mt-4 tw-z-99">
                          {item.children.map((sub) => (
                            <li
                              key={sub.label}
                              className={`nav-submenu__item ${
                                sub.to === pathname ? "activePage" : ""
                              }`}
                            >
                              <Link
                                href={sub.to!}
                                className="nav-submenu__link text-heading fw-semibold d-block tw-py-2 tw-px-4"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Right Area */}
            <div className="d-flex align-items-center tw-gap-3">
              <Link
                href="/apply-loan"
                className="d-sm-block d-none header-item-link fw-semibold tw-px-4 tw-py-2 bg-main-600 rounded-2"
              >
                Loan Quote
              </Link>

              <button
                onClick={handleMobileMenu}
                type="button"
                className="toggle-mobileMenu d-lg-none ms-3 text-white"
              >
                <i className="ph ph-list" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu d-lg-none position-fixed bg-base-two-600 tw-w-300-px tw-h-screen tw-p-6 tw-z-999 ${
          mobileMenu ? "active" : ""
        }`}
      >
        <button
          onClick={handleMobileMenu}
          className="close-button text-white"
        >
          <i className="ph ph-x" />
        </button>

        <ul className="nav-menu nav-menu--mobile tw-mt-8">
          {MENU.map((item, idx) => {
            const active = isItemActive(item);
            const open = idx === openIndex || active;

            return (
              <li
                key={item.label}
                className={`nav-menu__item ${
                  item.children ? "has-submenu" : ""
                } ${active ? "activePage" : ""}`}
              >
                {item.children ? (
                  <button
                    onClick={() => setOpenIndex(open ? -1 : idx)}
                    className="nav-menu__link text-white w-100 text-start bg-transparent border-0"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    href={item.to!}
                    className="nav-menu__link text-white"
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && open && (
                  <ul className="nav-submenu bg-white tw-rounded-md tw-mt-2">
                    {item.children.map((sub) => (
                      <li key={sub.label}>
                        <Link
                          href={sub.to!}
                          className="nav-submenu__link d-block tw-p-2"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default HeaderOne;
