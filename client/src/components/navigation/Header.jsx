import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, Search } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";

import SiteSearch from "../common/SiteSearch";

import bankLogo from "../../assets/brand/thane-bank-logo.png";
import dicgcLogo from "../../assets/brand/dicgc-logo.png";

const TOLL_FREE_NUMBER = "1800229299";

const navigationItems = [
  {
    key: "deposit",
    path: "/deposit",
    children: [
      { key: "savingsAccount", path: "/deposit/savings-account" },
      { key: "currentAccount", path: "/deposit/current-account" },
      { key: "recurringAccount", path: "/deposit/recurring-account" },
      { key: "termDeposit", path: "/deposit/term-deposit" },
      { key: "interestRates", path: "/documents/TermDeposit_InterestRate.pdf" },
    ],
  },
  {
    key: "loans",
    path: "/loans",
    children: [
      { key: "personalLoan", path: "/loans/personal-loan" },
      { key: "educationLoan", path: "/loans/education-loan" },
      { key: "vehicleLoan", path: "/loans/vehicle-loan" },
      { key: "housingLoan", path: "/loans/housing-loan" },
      { key: "goldLoan", path: "/loans/gold-loan" },
      { key: "interestRates", path: "/loans/interest-rates" },
    ],
  },
  {
    key: "services",
    path: "/services",
    children: [
      { key: "digitalBanking", path: "/services/digital-banking" },
      { key: "emiCalculator", path: "/services/emi-calculator" },
      {
        key: "atmLocator",
        label: {
          en: "ATM Locator",
          mr: "एटीएम शोधा",
        },
        path: "/services/atm-locator",
      },
    ],
  },
  {
    key: "aboutUs",
    path: "/about",
    children: [
      { key: "board", path: "/about/board" },
      { key: "photoGallery", path: "/about/photo-gallery" },
      { key: "aboutServices", path: "/about/services" },
    ],
  },
  {
    key: "reachUs",
    path: "/reach-us",
    children: [
      { key: "branches", path: "/reach-us/branches" },
      { key: "headOffice", path: "/reach-us/head-office" },
      { key: "contactUs", path: "/reach-us/contact" },
    ],
  },
];

// Temporary announcements for the demonstration.
// Replace these with approved bank announcements later.
const announcements = {
  en: [
    {
      message: "Welcome to The Thane District Central Co-Operative Bank Ltd.",
      type: "normal",
    },
    {
      message: "Your trusted banking partner for a better tomorrow.",
      type: "normal",
    },
    {
      message: "Explore our banking services and loan facilities.",
      type: "normal",
    },
    {
      message:
        "SECURITY ALERT: The Bank never asks for your OTP, ATM PIN, CVV or password over phone calls, SMS or email. Never share these details with anyone.",
      type: "security",
    },
  ],

  mr: [
    {
      message: "ठाणे जिल्हा मध्यवर्ती सहकारी बँकेत आपले स्वागत आहे.",
      type: "normal",
    },
    {
      message: "उत्तम भविष्यासाठी आपली विश्वासू बँकिंग भागीदार.",
      type: "normal",
    },
    {
      message: "आमच्या बँकिंग सेवा आणि कर्ज सुविधांची माहिती जाणून घ्या.",
      type: "normal",
    },
    {
      message:
        "सुरक्षा सूचना: बँक कधीही फोन, एसएमएस किंवा ईमेलद्वारे आपला ओटीपी, एटीएम पिन, सीव्हीव्ही किंवा पासवर्ड विचारत नाही. ही माहिती कोणालाही देऊ नका.",
      type: "security",
    },
  ],
};

function Header() {
  const { language, changeLanguage, t } = useLanguage();

  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Controlled desktop dropdown state.
  const [desktopDropdown, setDesktopDropdown] = useState(null);
  const dropdownCloseTimer = useRef(null);

  // Website-wide search state.
  const [searchOpen, setSearchOpen] = useState(false);

  // Announcement hover state.
  const [isAnnouncementPaused, setIsAnnouncementPaused] = useState(false);

  const currentAnnouncements = announcements[language] ?? announcements.en;

  // Cancel any pending desktop dropdown closing.
  const cancelDropdownClose = () => {
    if (dropdownCloseTimer.current) {
      window.clearTimeout(dropdownCloseTimer.current);
      dropdownCloseTimer.current = null;
    }
  };

  // Delay dropdown closing to allow movement into the submenu.
  const scheduleDropdownClose = () => {
    cancelDropdownClose();

    dropdownCloseTimer.current = window.setTimeout(() => {
      setDesktopDropdown(null);
      dropdownCloseTimer.current = null;
    }, 220);
  };

  // Open the selected desktop dropdown.
  const openDesktopDropdown = (key) => {
    cancelDropdownClose();
    setDesktopDropdown(key);
  };

  // Clear any pending dropdown timer when the component unmounts.
  useEffect(() => {
    return () => {
      if (dropdownCloseTimer.current) {
        window.clearTimeout(dropdownCloseTimer.current);
      }
    };
  }, []);

  // Close menus and dropdowns whenever the route changes.
  useEffect(() => {
    cancelDropdownClose();
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setDesktopDropdown(null);
    setSearchOpen(false);
  }, [location.pathname]);

  // Close all navigation menus.
  const closeMenus = () => {
    cancelDropdownClose();
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setDesktopDropdown(null);
    setSearchOpen(false);
  };

  // Toggle English and Marathi.
  const toggleLanguage = () => {
    changeLanguage(language === "en" ? "mr" : "en");
  };

  // Get translated navigation labels.
  const getChildLabel = (child) => {
    if (child.label) {
      return child.label[language] ?? child.label.en;
    }

    return t(child.key);
  };

  return (
    <header className="sticky top-0 z-50 isolate w-full">
      {/* NOTICE TICKER ANIMATIONS */}

      <style>{`
        @keyframes noticeMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @keyframes securityPulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.35;
            transform: scale(0.75);
          }
        }

        .notice-marquee-track {
          display: flex;
          width: max-content;
          animation: noticeMarquee 45s linear infinite;
          will-change: transform;
        }

        .notice-security-dot {
          display: inline-block;
          width: 9px;
          height: 9px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #ff5555;
          box-shadow: 0 0 8px rgba(255, 85, 85, 0.7);
          animation: securityPulse 1.2s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .notice-marquee-track {
            animation: none;
            transform: none;
          }

          .notice-security-dot {
            animation: none;
          }
        }
      `}</style>

      {/* UPPER HEADER */}

      <div
        className="relative z-[60] overflow-visible border-b border-[#DCE9DF]/70 backdrop-blur-xl"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse 210px 65px at 75% 0%,
              rgba(139, 191, 247, 0.20) 0%,
              transparent 100%
            ),
            linear-gradient(
              90deg,
              rgba(229, 246, 238, 0.75) 0%,
              rgba(255, 252, 227, 0.75) 100%
            )
          `,
        }}
      >
        <div className="mx-auto grid min-h-[104px] max-w-[1600px] grid-cols-1 items-center gap-x-4 gap-y-2 px-4 py-3 sm:px-6 lg:px-8 xl:grid-cols-[minmax(250px,1fr)_minmax(420px,1.5fr)_auto] xl:gap-4 xl:py-2">
          {/* COLUMN 1: BANK IDENTITY */}

          <Link
            to="/"
            onClick={closeMenus}
            aria-label={t("bankName")}
            className="flex min-w-0 items-center justify-center gap-2 sm:justify-start sm:gap-3 xl:justify-start"
          >
            <div className="relative h-[62px] w-[76px] shrink-0 sm:h-[72px] sm:w-[92px] xl:h-[76px] xl:w-[100px]">
              <img
                src={bankLogo}
                alt="Thane District Central Co-operative Bank logo"
                className="absolute left-1/2 top-1/2 h-[76px] w-[114px] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain sm:h-[88px] sm:w-[132px] xl:h-[96px] xl:w-[144px] 2xl:h-[108px] 2xl:w-[162px]"
              />
            </div>

            <h1 className="max-w-[390px] min-w-0 text-xs font-bold leading-tight tracking-wide text-[#263D70] sm:text-sm lg:text-base xl:text-lg">
              {t("bankName")}
            </h1>
          </Link>

          {/* COLUMN 2: MAIN NAVIGATION */}

          <nav
            aria-label="Main navigation"
            className="hidden min-w-0 xl:block xl:translate-x-10"
            onMouseEnter={cancelDropdownClose}
            onMouseLeave={scheduleDropdownClose}
          >
            <div className="mx-auto grid w-full max-w-[620px] grid-cols-5 items-center">
              {navigationItems.map((item) => (
                <div
                  key={item.key}
                  className="group relative flex justify-center"
                  onMouseEnter={() => openDesktopDropdown(item.key)}
                  onFocus={() => openDesktopDropdown(item.key)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) {
                      scheduleDropdownClose();
                    }
                  }}
                >
                  <Link
                    to={item.path}
                    onClick={closeMenus}
                    className="flex items-center justify-center whitespace-nowrap px-0.5 py-3 text-sm font-semibold text-[#263238] transition-all duration-200 hover:scale-[1.05] hover:text-[#15965A] focus-visible:scale-[1.05] focus-visible:text-[#15965A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#15965A] group-hover:scale-[1.05] group-hover:text-[#15965A]"
                  >
                    {t(item.key)}
                  </Link>

                  {/* CONTROLLED DESKTOP DROPDOWN */}

                  <div
                    onMouseEnter={() => openDesktopDropdown(item.key)}
                    className={`absolute left-1/2 top-full z-[100] min-w-[235px] -translate-x-1/2 border border-[#E5E7EB] bg-white py-2 text-[#263238] shadow-xl transition-all duration-150 ${
                      desktopDropdown === item.key
                        ? "visible pointer-events-auto translate-y-0 opacity-100"
                        : "invisible pointer-events-none translate-y-1 opacity-0"
                    }`}
                  >
                    {item.children.map((child) => {
                      const className =
                        "block px-5 py-3 text-sm transition-colors hover:bg-[#F0F7F3] hover:text-[#15965A] focus-visible:bg-[#F0F7F3] focus-visible:text-[#15965A] focus-visible:outline-none";

                      return child.path.endsWith(".pdf") ? (
                        <a
                          key={child.path}
                          href={child.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMenus}
                          className={className}
                        >
                          {getChildLabel(child)}
                        </a>
                      ) : (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={closeMenus}
                          className={className}
                        >
                          {getChildLabel(child)}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </nav>

          {/* COLUMN 3: TOLL-FREE NUMBER AND DICGC */}

          <div className="flex min-w-0 items-center justify-center gap-4 sm:justify-start xl:justify-end sm:gap-5">
            <div className="flex flex-col items-end">
              <span className="whitespace-nowrap text-[10px] font-medium text-[#596574] sm:text-xs">
                {t("tollFreeLabel")}
              </span>

              <a
                href="/documents/Grahak_Takrar_Nivaran_officer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 whitespace-nowrap text-sm font-bold text-[#C62828] hover:underline sm:text-base"
                aria-label={`${t("tollFreeLabel")} ${TOLL_FREE_NUMBER}`}
              >
                {TOLL_FREE_NUMBER}
              </a>
            </div>

            <div className="h-12 w-px bg-[#A9A9A9]/70" />

            <img
              src={dicgcLogo}
              alt="Deposit Insurance and Credit Guarantee Corporation"
              className="h-12 w-auto object-contain sm:h-[64px]"
            />
          </div>
        </div>
      </div>

      {/* BLUE STRIP: NEWS / NOTICE TICKER */}

      <nav
        aria-label="News and utility navigation"
        className="relative z-10 bg-[#173E70]/75 text-white shadow-sm backdrop-blur-xl"
      >
        <div className="mx-auto flex min-h-[50px] max-w-[1600px] items-center gap-3 px-4 sm:gap-5 sm:px-6 lg:px-8">
          {/* NEWS / NOTICE LABEL */}

          <div className="flex shrink-0 items-center gap-2 border-r border-white/30 pr-3 sm:pr-5">
            <span className="text-[10px] font-bold tracking-wider text-[#FF8A80] sm:text-xs">
              {language === "en" ? "NEWS / NOTICE" : "बातम्या / सूचना"}
            </span>
          </div>

          {/* CONTINUOUS RIGHT-TO-LEFT NOTICE TICKER */}

          <div
            className="min-w-0 flex-1 overflow-hidden"
            onMouseEnter={() => setIsAnnouncementPaused(true)}
            onMouseLeave={() => setIsAnnouncementPaused(false)}
            onFocusCapture={() => setIsAnnouncementPaused(true)}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsAnnouncementPaused(false);
              }
            }}
            aria-label="Bank announcements and security notices"
            role="region"
          >
            <div
              className="notice-marquee-track"
              style={{
                animationPlayState: isAnnouncementPaused ? "paused" : "running",
              }}
            >
              {/* FIRST SET OF ANNOUNCEMENTS */}

              <div className="flex shrink-0 items-center">
                {currentAnnouncements.map((announcement, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex shrink-0 items-center gap-3 px-20"
                  >
                    {announcement.type === "security" && (
                      <span
                        className="notice-security-dot"
                        aria-hidden="true"
                      />
                    )}

                    <span
                      className={`whitespace-nowrap text-xs font-medium tracking-wide text-[#FF8A80] sm:text-sm ${
                        announcement.type === "security" ? "font-bold" : ""
                      }`}
                    >
                      {announcement.message}
                    </span>
                  </div>
                ))}
              </div>

              {/* DUPLICATE SET FOR SEAMLESS LOOPING */}

              <div className="flex shrink-0 items-center" aria-hidden="true">
                {currentAnnouncements.map((announcement, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex shrink-0 items-center gap-3 px-20"
                  >
                    {announcement.type === "security" && (
                      <span className="notice-security-dot" />
                    )}

                    <span
                      className={`whitespace-nowrap text-xs font-medium tracking-wide text-[#FF8A80] sm:text-sm ${
                        announcement.type === "security" ? "font-bold" : ""
                      }`}
                    >
                      {announcement.message}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT-SIDE CONTROLS */}

          <div className="ml-auto flex shrink-0 items-center justify-end gap-2 sm:gap-3">
            {/* SEARCH TOGGLE */}

            <button
              type="button"
              data-site-search-toggle
              onClick={() => {
                setSearchOpen((open) => !open);
                setMobileMenuOpen(false);
                setActiveDropdown(null);
                setDesktopDropdown(null);
              }}
              aria-label={t("search")}
              aria-expanded={searchOpen}
              aria-controls="site-search-panel"
              className="rounded-sm p-2 transition-colors hover:bg-white/10"
            >
              <Search size={19} />
            </button>

            {/* LANGUAGE TOGGLE */}

            <button
              type="button"
              onClick={toggleLanguage}
              className="border-l border-white/30 pl-3 text-sm font-semibold hover:text-[#DDE8FF] sm:pl-4"
              aria-label={t("changeLanguage")}
            >
              {language === "en" ? "मराठी" : "English"}
            </button>

            {/* MOBILE MENU TOGGLE */}

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen((open) => !open);
                setSearchOpen(false);
                setActiveDropdown(null);
              }}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? t("closeMenu") : t("openMenu")}
              className="rounded-sm p-2 transition-colors hover:bg-white/10 xl:hidden"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-white/20 px-4 py-2 xl:hidden"
          >
            {navigationItems.map((item) => (
              <div key={item.key} className="border-b border-white/10">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.path}
                    onClick={closeMenus}
                    className="flex-1 px-3 py-3 text-sm font-semibold"
                  >
                    {t(item.key)}
                  </Link>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === item.key ? null : item.key,
                      )
                    }
                    aria-expanded={activeDropdown === item.key}
                    aria-label={`${t("showSubmenu")}: ${t(item.key)}`}
                    className="px-4 py-3"
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        activeDropdown === item.key ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {activeDropdown === item.key && (
                  <div className="bg-[#12345E] py-1">
                    {item.children.map((child) => {
                      const className =
                        "block px-7 py-3 text-sm text-white/90 transition-colors hover:bg-white/10";

                      return child.path.endsWith(".pdf") ? (
                        <a
                          key={child.path}
                          href={child.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={closeMenus}
                          className={className}
                        >
                          {getChildLabel(child)}
                        </a>
                      ) : (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={closeMenus}
                          className={className}
                        >
                          {getChildLabel(child)}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* WEBSITE-WIDE SEARCH */}

        <div id="site-search-panel">
          <SiteSearch
            open={searchOpen}
            onClose={() => setSearchOpen(false)}
            language={language}
          />
        </div>
      </nav>
    </header>
  );
}

export default Header;
