import { Link, useLocation } from "react-router-dom";
import { ChevronRight, MapPin, Phone, Mail, ExternalLink } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

import dicgcLogo from "../../assets/homepage/dicgc-logo.jpg";
import dicgcQrCode from "../../assets/homepage/dicgc-qr-code.jpeg";
import rupayLogo from "../../assets/homepage/rupay-logo.png";

const footerLinks = {
  en: [
    [
      { label: "Home", url: "/" },
      { label: "Board", url: "/about/board" },
      { label: "Contact Us", url: "/reach-us/contact-us" },
      { label: "Branches", url: "/reach-us/branches" },
      { label: "ATM Locator", url: "/services/atm-locator" },
    ],
    [
      { label: "About Us", url: "/about" },
      { label: "Photo Gallery", url: "/about/photo-gallery" },
      { label: "Downloads", url: "/downloads" },
      { label: "EMI Calculator", url: "/services/emi-calculator" },
    ],
  ],

  mr: [
    [
      { label: "मुख्यपृष्ठ", url: "/" },
      { label: "संचालक मंडळ", url: "/about/board" },
      { label: "संपर्क साधा", url: "/reach-us/contact-us" },
      { label: "शाखा", url: "/reach-us/branches" },
      { label: "एटीएम शोधा", url: "/services/atm-locator" },
    ],
    [
      { label: "आमच्याबद्दल", url: "/about" },
      { label: "छायाचित्र दालन", url: "/about/photo-gallery" },
      { label: "डाउनलोड", url: "/downloads" },
      { label: "ईएमआय कॅल्क्युलेटर", url: "/services/emi-calculator" },
    ],
  ],
};

function SiteFooter() {
  const { language } = useLanguage();
  const { pathname } = useLocation();

  const isMarathi = language === "mr";
  const links = footerLinks[language] || footerLinks.en;

  const content = isMarathi
    ? {
        bankName: "ठाणे जिल्हा मध्यवर्ती सहकारी बँक लिमिटेड",
        quickLinks: "महत्त्वाचे दुवे",
        contactUs: "संपर्क साधा",
        debitCard:
          "आपले डेबिट कार्ड तात्काळ ब्लॉक किंवा हॉटलिस्ट करण्यासाठी आपल्या नोंदणीकृत मोबाईल क्रमांकावरून 1800229299 या क्रमांकावर कॉल करा.",
        address: "शिवाजी पथ, पी. बी. क्रमांक १९, ठाणे (प.), ४०० ६०१",
        importantInformation: "महत्त्वाची माहिती",
        depositInsurance: "ठेवी विमा माहिती",
        rupayLink: "RuPay च्या अधिकृत संकेतस्थळाला भेट द्या",
        dicgcCaption: "ठेवीदारांसाठी ठेव विमा संरक्षण",
        scanQr: "DICGC संकेतस्थळासाठी QR कोड स्कॅन करा",
        copyright: "सर्व हक्क राखीव.",
      }
    : {
        bankName: "The Thane District Central Co-operative Bank Ltd.",
        quickLinks: "Quick Links",
        contactUs: "Contact Us",
        debitCard:
          "TO BLOCK/HOTLIST YOUR DEBIT CARD IMMEDIATELY PLEASE CALL 1800229299 FROM YOUR REGISTERED MOBILE.",
        address: "Shivaji Path, P. B. No. 19, Thane (W). 400 601",
        importantInformation: "Important Information",
        depositInsurance: "Deposit Insurance Information",
        rupayLink: "Visit the official RuPay website",
        dicgcCaption: "Deposit insurance information for depositors",
        scanQr: "Scan to visit the DICGC website",
        copyright: "All Rights Reserved",
      };

  const linkClasses =
    "group inline-flex items-center gap-2 text-sm font-bold text-[#263F5B] transition-colors duration-200 hover:text-[#173E70] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#245687]";

  function handleHomeClick() {
    if (pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  return (
    <footer className="relative isolate overflow-hidden border-t-4 border-[#315B7E] bg-gradient-to-br from-[#EAF3F8] via-[#DFECF5] to-[#EAF2F8] text-[#263D55]">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[450px] w-[450px] rounded-full border border-[#315B7E]/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-64 -left-40 -z-10 h-[500px] w-[500px] rounded-full bg-[#315B7E]/[0.045] blur-3xl"
      />

      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:px-10 lg:py-14">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.15fr_1fr_0.9fr] lg:gap-12 xl:gap-16">
          {/* COLUMN 1 - QUICK LINKS */}
          <section aria-labelledby="footer-quick-links">
            <h2
              id="footer-quick-links"
              className="border-b border-[#315B7E]/20 pb-5 text-xl font-bold uppercase tracking-wide text-[#173E70]"
            >
              {content.quickLinks}
            </h2>

            <div className="mt-7 grid grid-cols-2 gap-x-5 gap-y-4">
              {links.map((column, index) => (
                <div key={index} className="flex flex-col gap-5">
                  {column.map((item) => (
                    <Link
                      key={item.label}
                      to={item.url}
                      onClick={item.url === "/" ? handleHomeClick : undefined}
                      className={linkClasses}
                    >
                      <ChevronRight
                        size={16}
                        className="shrink-0 text-[#263F5B] transition-transform duration-200 group-hover:translate-x-1 group-hover:text-[#173E70]"
                        aria-hidden="true"
                      />
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {/* Important information */}
            <div className="mt-9 border-t border-[#315B7E]/20 pt-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-[#173E70]">
                {content.importantInformation}
              </h3>

              <a
                href="https://www.dicgc.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-3 inline-flex items-center gap-2 text-sm text-[#40566C] transition-colors duration-200 hover:text-[#245687]"
              >
                <span>{content.depositInsurance}</span>
                <ExternalLink
                  size={13}
                  className="opacity-60 transition-transform group-hover:translate-x-0.5"
                />
              </a>
            </div>
          </section>

          {/* COLUMN 2 - CONTACT US */}
          <section aria-labelledby="footer-contact">
            <h2
              id="footer-contact"
              className="border-b border-[#315B7E]/20 pb-5 text-xl font-bold uppercase tracking-wide text-[#173E70]"
            >
              {content.contactUs}
            </h2>

            <div className="mt-7 space-y-7">
              {/* Debit card blocking notice */}
              <div className="rounded-xl border border-[#315B7E]/15 bg-white/65 p-4 shadow-sm">
                <p className="text-xs font-semibold leading-6 text-[#34495E] sm:text-sm">
                  {content.debitCard}
                </p>

                <a
                  href="tel:1800229299"
                  className="mt-2 inline-flex items-center gap-2 text-lg font-bold tracking-wide text-[#245687] transition-colors hover:text-[#173E70]"
                >
                  <Phone size={17} aria-hidden="true" />
                  1800229299
                </a>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin
                  size={20}
                  className="mt-1 shrink-0 text-[#263F5B]"
                  aria-hidden="true"
                />

                <p className="text-sm font-bold leading-7 text-[#263F5B] sm:text-base">
                  {content.address}
                </p>
              </div>

              {/* Telephone */}
              <div className="flex items-center gap-3">
                <Phone
                  size={19}
                  className="shrink-0 text-[#263F5B]"
                  aria-hidden="true"
                />

                <a
                  href="tel:1800229299"
                  className="text-sm font-bold text-[#263F5B] transition-colors hover:text-[#173E70] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#245687] sm:text-base"
                >
                  1800229299
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail
                  size={19}
                  className="shrink-0 text-[#263F5B]"
                  aria-hidden="true"
                />

                <a
                  href="mailto:enquiry@thanedcc.bank.in"
                  className="break-all text-sm font-bold text-[#263F5B] transition-colors hover:text-[#173E70] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#245687] sm:text-base"
                >
                  enquiry@thanedcc.bank.in
                </a>
              </div>
            </div>
          </section>

          {/* COLUMN 3 - DICGC AND RUPAY */}
          <section aria-labelledby="footer-important-info">
            <h2
              id="footer-important-info"
              className="border-b border-[#315B7E]/20 pb-5 text-xl font-bold uppercase tracking-wide text-[#173E70]"
            >
              DICGC
            </h2>

            <p className="mt-6 text-sm font-bold leading-6 text-[#263F5B]">
              {content.dicgcCaption}
            </p>

            {/* Uniform DICGC logo and QR cards */}
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="flex h-[145px] w-full items-center justify-center rounded-xl border border-[#315B7E]/10 bg-white p-4 shadow-sm">
                <img
                  src={dicgcLogo}
                  alt="DICGC logo"
                  loading="lazy"
                  className="h-auto w-full max-w-[85px] object-contain"
                />
              </div>

              <div className="flex h-[145px] w-full flex-col items-center justify-center gap-2 rounded-xl border border-[#315B7E]/10 bg-white p-3 shadow-sm">
                <img
                  src={dicgcQrCode}
                  alt="QR code linking to the DICGC website"
                  loading="lazy"
                  className="h-auto w-full max-w-[75px] object-contain"
                />

                <span className="text-center text-[10px] font-bold leading-4 text-[#263F5B]">
                  {content.scanQr}
                </span>
              </div>
            </div>

            {/* DICGC website link */}
            <div className="mt-4 text-center">
              <a
                href="https://www.dicgc.org.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-[#263F5B] transition-colors hover:text-[#173E70]"
              >
                www.dicgc.org.in
                <ExternalLink size={12} aria-hidden="true" />
              </a>
            </div>

            {/* RuPay logo */}
            <a
              href="https://www.rupay.co.in/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={content.rupayLink}
              className="group mt-5 flex items-center justify-center gap-3 rounded-xl border border-[#315B7E]/10 bg-white px-4 py-3 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#245687]"
            >
              <img
                src={rupayLogo}
                alt="RuPay"
                loading="lazy"
                className="h-auto w-[90px] object-contain"
              />

              <span className="text-xs font-bold text-[#263F5B] transition-colors group-hover:text-[#173E70]">
                {content.rupayLink}
              </span>

              <ExternalLink
                size={13}
                className="shrink-0 text-[#263F5B]"
                aria-hidden="true"
              />
            </a>
          </section>
        </div>
      </div>

      {/* COPYRIGHT STRIP */}
      <div className="border-t border-[#315B7E]/15 bg-[#D1E2EF]/75">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-2 px-5 py-5 text-center sm:px-8 md:flex-row md:text-left lg:px-10">
          <p className="text-xs font-bold text-[#263F5B]">
            © {new Date().getFullYear()} {content.bankName}.
          </p>

          <p className="text-xs font-bold text-[#263F5B]">
            {content.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
