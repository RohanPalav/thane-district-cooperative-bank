import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  FileText,
  ArrowUpRight,
  ArrowRight,
  ChevronDown,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useLanguage } from "../../context/LanguageContext";

/* ============================================================
   DEPARTMENT DIRECTORY DATA
============================================================ */

const departmentRows = [
  {
    department: "headOfficeAccount",
    head: "—",
    phoneKey: "headOfficePhone1",
    phone: "8065485132",
  },
  {
    department: "headOfficeIndividualLoan",
    head: "—",
    phoneKey: "headOfficePhone2",
    phone: "8065485133",
  },
  {
    department: "headOfficePurchase",
    head: "—",
    phoneKey: "headOfficePhone3",
    phone: "8065485134",
  },
  {
    department: "headOfficeCEO",
    head: "—",
    phoneKey: "headOfficePhone4",
    phone: "8065485135",
  },
  {
    department: "headOfficeDeputyCEO",
    head: "headOfficeAnandBhoir",
    phoneKey: "headOfficePhone5",
    phone: "8065485136",
  },
  {
    department: "headOfficeDeputyCEO",
    head: "headOfficePrabhakarMhatre",
    phoneKey: "headOfficePhone6",
    phone: "8065485137",
  },
  {
    department: "headOfficeDeputyCEO",
    head: "headOfficeNavnitPaste",
    phoneKey: "headOfficePhone7",
    phone: "8065485138",
  },
  {
    department: "headOfficeInvestment",
    head: "—",
    phoneKey: "headOfficePhone8",
    phone: "8065485139",
  },
  {
    department: "headOfficeDeputyCEO",
    head: "headOfficePramodTare",
    phoneKey: "headOfficePhone9",
    phone: "8065485140",
  },
  {
    department: "headOfficeAdmin",
    head: "—",
    phoneKey: "headOfficePhone10",
    phone: "8065485141",
  },
  {
    department: "headOfficeDeputyCEO",
    head: "headOfficeSantoshMhatre",
    phoneKey: "headOfficePhone11",
    phone: "8065485142",
  },
  {
    department: "headOfficeTreasury",
    head: "—",
    phoneKey: "headOfficePhone12",
    phone: "8065485143",
  },
  {
    department: "headOfficeViceChairman",
    head: "—",
    phoneKey: "headOfficePhone13",
    phone: "8065485144",
  },
  {
    department: "headOfficeDeputyCEO",
    head: "headOfficeRajendraBhere",
    phoneKey: "headOfficePhone14",
    phone: "8065485145",
  },
];

/* ============================================================
   PAGES PANEL DATA
============================================================ */

const pages = [
  { label: "pageHome", path: "/" },
  { label: "pageDeposits", path: "/deposit" },
  { label: "pageLoans", path: "/loans" },
  { label: "pageServices", path: "/services" },
  { label: "pageAboutUs", path: "/about" },
  { label: "pageReachUs", path: "/reach-us" },
  { label: "pageDownloads", path: "/downloads" },
  { label: "pagePositivePay", path: "/positive-pay" },
  { label: "pageImportantNotice", path: "/important-notice" },
  { label: "pageAwards", path: "/reach-us/awards" },
  {
    label: "pagePrivacyPolicy",
    path: "/downloads/mobile-banking-privacy-policy",
  },
  { label: "pageRegisterService", form: "register" },
  { label: "pageContactLayout", form: "contact" },
];

/* ============================================================
   REGISTER SERVICES OPTIONS
============================================================ */

const serviceOptions = [
  { value: "Internet Banking", labelKey: "registerServiceInternetBanking" },
  { value: "Mobile Banking", labelKey: "registerServiceMobileBanking" },
  { value: "SMS Banking", labelKey: "registerServiceSmsBanking" },
  { value: "mPassbook", labelKey: "registerServiceMPassbook" },
];

/* ============================================================
   CUSTOM SERVICE DROPDOWN
============================================================ */

function ServiceDropdown() {
  const { t, language } = useLanguage();
  const isMarathi = language === "mr";

  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const optionRefs = useRef([]);

  const selectedOption = serviceOptions.find(
    (option) => option.value === selectedService,
  );

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && activeIndex >= 0) {
      optionRefs.current[activeIndex]?.scrollIntoView({
        block: "nearest",
      });
    }
  }, [activeIndex, isOpen]);

  const openDropdown = () => {
    const selectedIndex = serviceOptions.findIndex(
      (option) => option.value === selectedService,
    );

    setActiveIndex(selectedIndex >= 0 ? selectedIndex : 0);
    setIsOpen(true);
  };

  const selectOption = (service) => {
    setSelectedService(service.value);
    setIsOpen(false);
    setActiveIndex(-1);
    triggerRef.current?.focus();
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (!isOpen) {
        openDropdown();
        return;
      }

      setActiveIndex((current) =>
        current >= serviceOptions.length - 1 ? 0 : current + 1,
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (!isOpen) {
        openDropdown();
        return;
      }

      setActiveIndex((current) =>
        current <= 0 ? serviceOptions.length - 1 : current - 1,
      );
    }

    if (event.key === "Home" && isOpen) {
      event.preventDefault();
      setActiveIndex(0);
    }

    if (event.key === "End" && isOpen) {
      event.preventDefault();
      setActiveIndex(serviceOptions.length - 1);
    }

    if ((event.key === "Enter" || event.key === " ") && isOpen) {
      event.preventDefault();

      if (activeIndex >= 0) {
        selectOption(serviceOptions[activeIndex]);
      }
    }

    if (event.key === "Escape" && isOpen) {
      event.preventDefault();
      setIsOpen(false);
      setActiveIndex(-1);
    }

    if (event.key === "Tab" && isOpen) {
      setIsOpen(false);
      setActiveIndex(-1);
    }
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      <input
        type="hidden"
        name="serviceType"
        value={selectedService}
        required
      />

      <button
        ref={triggerRef}
        id="register-service-type"
        type="button"
        role="combobox"
        aria-label={t("registerServiceType")}
        aria-expanded={isOpen}
        aria-controls="register-service-options"
        aria-haspopup="listbox"
        aria-required="true"
        aria-activedescendant={
          isOpen && activeIndex >= 0
            ? `register-service-option-${activeIndex}`
            : undefined
        }
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
            setActiveIndex(-1);
          } else {
            openDropdown();
          }
        }}
        onKeyDown={handleKeyDown}
        className={`flex min-h-[48px] w-full items-center justify-between rounded-[10px] border border-[#DCE4DF] bg-white px-[14px] py-3 text-left text-sm text-[#263238] outline-none transition-colors duration-200 hover:border-[#B8CFC1] focus:border-[#4A6A8E] focus:ring-[3px] focus:ring-[#4A6A8E]/15 ${
          isMarathi
            ? '[font-family:"Nirmala_UI","Noto_Sans_Devanagari",sans-serif]'
            : "font-['Poppins']"
        }`}
      >
        <span className={selectedOption ? "text-[#263238]" : "text-[#9AA59F]"}>
          {selectedOption
            ? t(selectedOption.labelKey)
            : t("registerServicePlaceholder")}
        </span>

        <ChevronDown
          size={18}
          className={`shrink-0 text-[#25845d] transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul
          id="register-service-options"
          role="listbox"
          aria-label={t("registerServiceType")}
          className={`absolute left-0 top-[calc(100%+6px)] z-50 max-h-[190px] w-full overflow-y-auto overscroll-contain rounded-[10px] border border-[#DCE4DF] bg-[#FFFEFA] p-1 text-sm shadow-[0_12px_30px_rgba(23,62,112,0.14)] ${
            isMarathi
              ? '[font-family:"Nirmala_UI","Noto_Sans_Devanagari",sans-serif]'
              : "font-['Poppins']"
          }`}
        >
          {serviceOptions.map((service, index) => {
            const isSelected = selectedService === service.value;
            const isActive = activeIndex === index;

            return (
              <li
                key={service.value}
                id={`register-service-option-${index}`}
                ref={(element) => {
                  optionRefs.current[index] = element;
                }}
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => selectOption(service)}
                className={`cursor-pointer rounded-md px-3 py-3 text-[#263238] transition-colors duration-150 ${
                  isActive
                    ? "bg-[#E5F3EA] text-[#25845d]"
                    : "hover:bg-[#F0F7F2]"
                } ${
                  isSelected ? "font-semibold text-[#25845d]" : "font-normal"
                }`}
              >
                {t(service.labelKey)}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
/* ============================================================
   SHARED MODAL FORM
============================================================ */

function HeadOfficeFormModal({ activeForm, onClose }) {
  const { t, language } = useLanguage();
  const isMarathi = language === "mr";

  const firstInputRef = useRef(null);
  const formRef = useRef(null);

  const isRegisterForm = activeForm === "register";

  const formTitle = isRegisterForm
    ? t("registerFormTitle")
    : t("contactLayoutFormTitle");

  const requiredLabel = (key) => `${t(key)} (${t("formRequired")})`;

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    firstInputRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Demonstration only: no information is stored or transmitted.
    formRef.current?.reset();
    onClose();
  };

  const inputClassName = `min-h-[48px] w-full rounded-[10px] border border-[#DCE4DF] bg-white px-[14px] py-3 text-sm text-[#263238] outline-none transition-colors duration-200 placeholder:text-[#9AA59F] focus:border-[#4A6A8E] focus:ring-[3px] focus:ring-[#4A6A8E]/15 ${
    isMarathi
      ? '[font-family:"Nirmala_UI","Noto_Sans_Devanagari",sans-serif]'
      : "font-['Poppins']"
  }`;

  const labelClassName = `text-[13px] font-semibold text-[#344054] ${
    isMarathi
      ? '[font-family:"Nirmala_UI","Noto_Sans_Devanagari",sans-serif]'
      : "font-['Poppins']"
  }`;

  return createPortal(
    <div
      className="fixed inset-0 z-[2147483000] flex h-dvh w-full items-start justify-center overflow-x-hidden overflow-y-auto bg-[rgba(16,34,29,0.58)] px-4 py-4 backdrop-blur-[7px] sm:items-center sm:py-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className={`relative my-auto flex max-h-[calc(100dvh-2rem)] w-full max-w-[450px] flex-col overflow-x-hidden overflow-y-auto overscroll-contain rounded-[22px] border border-[#E5F6EE] bg-[#FFFEFA] p-6 text-[#263238] shadow-[0_24px_80px_rgba(18,43,33,0.25)] sm:max-h-[calc(100dvh-3rem)] sm:p-9 ${
          isMarathi
            ? '[font-family:"Nirmala_UI","Noto_Sans_Devanagari",sans-serif]'
            : "font-['Poppins']"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="head-office-form-title"
      >
        {/* CLOSE BUTTON */}

        <button
          type="button"
          onClick={onClose}
          aria-label={t("formClose")}
          className="absolute right-[17px] top-[17px] z-10 grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full bg-[#EDF5EF] text-[#344054] transition-all duration-200 hover:rotate-90 hover:bg-[#DCEEE3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A6A8E]"
        >
          <X size={21} />
        </button>

        {/* MODAL ICON */}

        <div
          className="mb-5 grid h-12 w-12 shrink-0 place-items-center rounded-[15px] bg-[#E8EDF3] text-[#4A6A8E]"
          aria-hidden="true"
        >
          <span className="text-[25px]">✦</span>
        </div>

        {/* MODAL HEADING */}

        <h2
          id="head-office-form-title"
          className="mb-[9px] mr-8 text-[23px] font-bold leading-tight text-[#173E70] sm:text-[25px]"
        >
          {formTitle}
        </h2>

        <p className="mb-[25px] text-[13px] leading-[1.7] text-[#64716B]">
          {isRegisterForm
            ? t("registerFormDescription")
            : t("contactLayoutFormDescription")}
        </p>

        {/* FORM */}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-[19px]"
        >
          {isRegisterForm ? (
            <>
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="register-customer-number"
                  className={labelClassName}
                >
                  {requiredLabel("registerCustomerNumber")}
                </label>

                <input
                  ref={firstInputRef}
                  id="register-customer-number"
                  name="customerNumber"
                  type="text"
                  autoComplete="off"
                  maxLength={30}
                  required
                  className={inputClassName}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="register-account-number"
                  className={labelClassName}
                >
                  {requiredLabel("registerAccountNumber")}
                </label>

                <input
                  id="register-account-number"
                  name="accountNumber"
                  type="text"
                  autoComplete="off"
                  maxLength={30}
                  required
                  className={inputClassName}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="register-customer-name"
                  className={labelClassName}
                >
                  {requiredLabel("registerCustomerName")}
                </label>

                <input
                  id="register-customer-name"
                  name="customerName"
                  type="text"
                  autoComplete="name"
                  minLength={2}
                  maxLength={100}
                  required
                  className={inputClassName}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="register-service-type"
                  className={labelClassName}
                >
                  {requiredLabel("registerServiceType")}
                </label>

                <ServiceDropdown />
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col gap-2">
                <label htmlFor="contact-layout-name" className={labelClassName}>
                  {requiredLabel("contactLayoutName")}
                </label>

                <input
                  ref={firstInputRef}
                  id="contact-layout-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  minLength={2}
                  maxLength={80}
                  required
                  className={inputClassName}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-layout-email"
                  className={labelClassName}
                >
                  {requiredLabel("contactLayoutEmail")}
                </label>

                <input
                  id="contact-layout-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={254}
                  required
                  className={inputClassName}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-layout-phone"
                  className={labelClassName}
                >
                  {requiredLabel("contactLayoutContactNo")}
                </label>

                <input
                  id="contact-layout-phone"
                  name="contactNo"
                  type="tel"
                  autoComplete="tel"
                  inputMode="numeric"
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  title={t("formPhoneValidation")}
                  required
                  className={inputClassName}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="contact-layout-message"
                  className={labelClassName}
                >
                  {requiredLabel("contactLayoutMessage")}
                </label>

                <textarea
                  id="contact-layout-message"
                  name="message"
                  rows={5}
                  maxLength={2000}
                  required
                  className={`${inputClassName} min-h-[120px] resize-y`}
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className={`mt-[5px] flex min-h-[49px] w-full shrink-0 items-center justify-center gap-[10px] rounded-full border-0 bg-[#4A6A8E] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#385574] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4A6A8E] focus-visible:ring-offset-2 ${
              isMarathi
                ? '[font-family:"Nirmala_UI","Noto_Sans_Devanagari",sans-serif]'
                : "font-['Poppins']"
            }`}
          >
            {t("formSubmit")}
            <ArrowRight size={18} aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>,
    document.body,
  );
}
/* ============================================================
   HEAD OFFICE PAGE
============================================================ */

function HeadOffice() {
  const { language, t } = useLanguage();

  const isMarathi = language === "mr";
  const itPhone = "7400212495";

  const [activeForm, setActiveForm] = useState(null);

  const closeForm = useCallback(() => {
    setActiveForm(null);
  }, []);

  return (
    <main
      className={`relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F1F8F4] via-[#F8FBF8] to-[#EDF4FA] ${
        isMarathi
          ? '[font-family:"Nirmala_UI","Noto_Sans_Devanagari",sans-serif]'
          : "font-['Poppins']"
      }`}
    >
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-8 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-10">
        {/* LEFT CONTENT */}

        <div className="min-w-0">
          <section className="relative z-10">
            <div className="pb-10 pt-14 sm:pb-12 sm:pt-16 lg:pt-20">
              <p
                className={`mb-4 text-sm font-semibold uppercase text-[#25845d] ${
                  isMarathi ? "tracking-normal" : "tracking-[0.16em]"
                }`}
              >
                {t("headOfficeEyebrow")}
              </p>

              <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
                {t("headOfficeTitle")}
              </h1>

              <div className="mt-5 h-1 w-20 rounded-full bg-[#25845d]" />
            </div>
          </section>

          {/* BUILDING IMAGE */}

          <section className="relative z-10 pb-12">
            <div className="mx-auto w-fit max-w-full overflow-hidden rounded-2xl border border-[#E1EAE5] bg-white p-2 shadow-[0_5px_18px_rgba(23,62,112,0.06)]">
              <img
                src="/images/head-office.jpg"
                alt="The Thane District Central Co-operative Bank Ltd. Head Office"
                className="block h-auto max-w-full rounded-xl object-contain"
              />
            </div>
          </section>

          {/* DEPARTMENT DIRECTORY */}

          <section className="relative z-10 pb-20">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E5F3EA] text-[#25845d]">
                <Building2 size={25} strokeWidth={1.8} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#173E70] sm:text-2xl">
                  {t("headOfficeDepartmentsHeading")}
                </h2>

                <p className="mt-1 text-sm text-[#64788B]">
                  {t("headOfficeTitle")}
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#E1EAE5] bg-white shadow-[0_5px_18px_rgba(23,62,112,0.045)]">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[700px] border-collapse text-left">
                  <thead>
                    <tr className="bg-[#EAF3F8] text-sm text-[#173E70]">
                      <th className="w-[30%] px-5 py-5 font-semibold">
                        {t("headOfficeDepartment")}
                      </th>

                      <th className="w-[40%] px-5 py-5 font-semibold">
                        {t("headOfficeDepartmentHead")}
                      </th>

                      <th className="w-[30%] px-5 py-5 font-semibold">
                        {t("headOfficeContact")}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {departmentRows.map((row, index) => (
                      <tr
                        key={`${row.phoneKey}-${index}`}
                        className="border-t border-[#E8EDE9] transition-colors duration-200 hover:bg-[#F6FAF7]"
                      >
                        <td className="px-5 py-5 text-sm font-semibold text-[#173E70]">
                          {t(row.department)}
                        </td>

                        <td className="px-5 py-5 text-sm font-medium text-[#52677C]">
                          {row.head === "—" ? "—" : t(row.head)}
                        </td>

                        <td className="px-5 py-5">
                          <a
                            href={`tel:${row.phone}`}
                            className="inline-flex items-center gap-2 text-sm font-semibold text-[#25845d] transition-colors hover:text-[#173E70]"
                          >
                            <Phone size={15} className="shrink-0" />
                            {t(row.phoneKey)}
                          </a>
                        </td>
                      </tr>
                    ))}

                    {/* IT DEPARTMENT */}

                    <tr className="border-t border-[#E1EAE5] bg-[#F8FBF8]">
                      <td className="px-5 py-6 text-sm font-semibold text-[#173E70]">
                        {t("headOfficeIT")}
                      </td>

                      <td className="px-5 py-6">
                        <div className="space-y-3">
                          <p className="text-sm font-semibold text-[#173E70]">
                            {t("headOfficeSanjayPatil")}
                          </p>

                          <a
                            href="mailto:dyceo.it@thanedistrictbank.com"
                            className="flex items-start gap-2 break-all text-sm font-medium leading-6 text-[#25845d] hover:text-[#173E70] hover:underline"
                          >
                            <Mail size={16} className="mt-1 shrink-0" />
                            <span>dyceo.it@thanedistrictbank.com</span>
                          </a>

                          <div className="flex items-start gap-2 text-sm leading-6 text-[#52677C]">
                            <MapPin
                              size={16}
                              className="mt-1 shrink-0 text-[#25845d]"
                            />
                            <span>{t("headOfficeITLocation")}</span>
                          </div>

                          <p className="text-xs font-medium text-[#64788B]">
                            {t("headOfficeITDesignation")}
                          </p>
                        </div>
                      </td>

                      <td className="px-5 py-6">
                        <a
                          href={`tel:${itPhone}`}
                          className="inline-flex items-center gap-2 text-sm font-semibold text-[#25845d] transition-colors hover:text-[#173E70]"
                        >
                          <Phone size={15} className="shrink-0" />
                          {t("headOfficeITPhone")}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>

        {/* RIGHT SIDE - PAGES PANEL */}

        <aside className="relative z-10 pb-12 pt-8 lg:pb-20 lg:pt-20">
          <div className="overflow-hidden rounded-2xl border border-[#E1EAE5] bg-white shadow-[0_5px_18px_rgba(23,62,112,0.055)]">
            <div className="flex items-center gap-3 bg-[#EAF3F8] px-5 py-5">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#25845d] shadow-sm">
                <FileText size={20} strokeWidth={1.8} />
              </div>

              <h2 className="text-xl font-bold text-[#173E70]">
                {t("headOfficePages")}
              </h2>
            </div>

            <nav aria-label={t("headOfficePages")} className="px-3 py-3">
              <ul className="space-y-1">
                {pages.map((page) => (
                  <li key={page.label}>
                    {page.form ? (
                      <button
                        type="button"
                        onClick={() => setActiveForm(page.form)}
                        className="group flex w-full items-center justify-between gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium text-[#40566D] transition-all duration-200 hover:bg-[#F0F7F2] hover:pl-4 hover:text-[#25845d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25845d] focus-visible:ring-offset-2"
                      >
                        <span>{t(page.label)}</span>

                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.8}
                          className="shrink-0 text-[#9AABB8] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#25845d] group-hover:opacity-100"
                        />
                      </button>
                    ) : (
                      <Link
                        to={page.path}
                        className="group flex items-center justify-between gap-3 rounded-lg px-3 py-3 text-sm font-medium text-[#40566D] transition-all duration-200 hover:bg-[#F0F7F2] hover:pl-4 hover:text-[#25845d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25845d] focus-visible:ring-offset-2"
                      >
                        <span>{t(page.label)}</span>

                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.8}
                          className="shrink-0 text-[#9AABB8] opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#25845d] group-hover:opacity-100"
                        />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </aside>
      </div>

      {/* MODAL */}

      {activeForm && (
        <HeadOfficeFormModal activeForm={activeForm} onClose={closeForm} />
      )}
    </main>
  );
}

export default HeadOffice;
