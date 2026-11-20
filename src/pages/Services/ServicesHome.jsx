import { Link } from "react-router-dom";
import {
  Smartphone,
  Calculator,
  MapPin,
  ArrowRight,
  ShieldCheck,
  Clock3,
  Headphones,
  Landmark,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

function ServicesHome() {
  const { t, language } = useLanguage();

  const isMarathi = language === "mr";

  const services = [
    {
      key: "digitalBanking",
      title: "servicesDigitalBanking",
      description: "servicesDigitalBankingDescription",
      path: "/services/digital-banking",
      icon: Smartphone,
    },
    {
      key: "emiCalculator",
      title: "servicesEmiCalculator",
      description: "servicesEmiCalculatorDescription",
      path: "/services/emi-calculator",
      icon: Calculator,
    },
    {
      key: "atmLocator",
      title: "servicesAtmLocator",
      description: "servicesAtmLocatorDescription",
      path: "/services/atm-locator",
      icon: MapPin,
    },
  ];

  const benefits = [
    {
      icon: Clock3,
      title: "servicesBenefitConvenience",
      description: "servicesBenefitConvenienceDescription",
    },
    {
      icon: ShieldCheck,
      title: "servicesBenefitAccessibility",
      description: "servicesBenefitAccessibilityDescription",
    },
    {
      icon: Headphones,
      title: "servicesBenefitAssistance",
      description: "servicesBenefitAssistanceDescription",
    },
  ];

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        fontFamily: isMarathi
          ? '"Nirmala UI", "Noto Sans Devanagari", sans-serif'
          : '"Poppins", sans-serif',
        background: `
      radial-gradient(
        ellipse at 8% 10%,
        rgba(229, 246, 238, 0.95) 0%,
        rgba(229, 246, 238, 0) 48%
      ),
      radial-gradient(
        ellipse at 92% 90%,
        rgba(139, 191, 247, 0.13) 0%,
        rgba(139, 191, 247, 0) 45%
      ),
      linear-gradient(120deg, #fffce3 0%, #f7fbf4 48%, #edf6f2 100%)
    `,
        backgroundAttachment: "fixed",
      }}
    >
      {/* SOFT BACKGROUND COLOUR WASH */}

      <div
        className="pointer-events-none absolute left-[-18%] top-[3%] h-[650px] w-[85%] opacity-80 blur-[65px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,132,93,0.085) 0%, rgba(37,132,93,0.045) 38%, rgba(37,132,93,0.015) 60%, transparent 78%)",
        }}
        aria-hidden="true"
      />

      {/* FLOATING BACKGROUND DECORATIONS */}

      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <Smartphone
          size={42}
          strokeWidth={1.5}
          className="absolute left-[6%] top-[24%] rotate-12 text-[#dcece5]"
        />

        <Calculator
          size={38}
          strokeWidth={1.5}
          className="absolute right-[7%] top-[38%] -rotate-12 text-[#dcece5]"
        />

        <MapPin
          size={40}
          strokeWidth={1.5}
          className="absolute bottom-[17%] left-[8%] rotate-12 text-[#e2eee8]"
        />

        <Landmark
          size={46}
          strokeWidth={1.5}
          className="absolute bottom-[12%] right-[8%] -rotate-6 text-[#e2eee8]"
        />
      </div>

      {/* INTRODUCTION */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-14 pt-16 sm:px-8 lg:pb-20 lg:pt-20">
        <div className="max-w-3xl">
          <p
            className={`mb-5 text-sm font-semibold uppercase text-[#25845d] ${
              isMarathi ? "tracking-normal" : "tracking-[0.16em]"
            }`}
          >
            {t("servicesEyebrow")}
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
            {t("services")}
          </h1>

          <h2 className="mt-4 text-2xl font-semibold leading-snug text-[#294d78] sm:text-3xl">
            {t("servicesMainHeading")}
          </h2>

          <p className="mt-6 text-base font-medium leading-8 text-[#465568] sm:text-lg">
            {t("servicesIntroduction")}
          </p>
        </div>
      </section>

      {/* BENEFITS SECTION */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-16 sm:px-8">
        <div className="mb-9">
          <h2 className="text-2xl font-bold text-[#173E70] sm:text-3xl">
            {t("servicesWhyUse")}
          </h2>

          <p className="mt-3 max-w-[760px] text-base font-medium leading-7 text-[#596879]">
            {t("servicesWhyUseDescription")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group flex gap-4 rounded-2xl border border-[#E6ECE8] bg-white/90 p-6 shadow-[0_4px_15px_rgba(23,62,112,0.035)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C9DED1] hover:shadow-[0_14px_30px_rgba(23,62,112,0.08)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#25845d] group-hover:text-white">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#173E70]">
                    {t(benefit.title)}
                  </h3>

                  <p className="mt-2 text-sm font-medium leading-6 text-[#596879]">
                    {t(benefit.description)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SERVICES CARDS */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-20 sm:px-8">
        <div className="mb-10 text-center">
          <p
            className={`text-sm font-semibold uppercase text-[#25845d] ${
              isMarathi ? "tracking-normal" : "tracking-[0.16em]"
            }`}
          >
            {t("servicesAvailableEyebrow")}
          </p>

          <h2 className="mt-3 text-2xl font-bold text-[#173E70] sm:text-3xl">
            {t("servicesAvailableHeading")}
          </h2>

          <p className="mx-auto mt-4 max-w-[760px] text-base font-medium leading-7 text-[#596879]">
            {t("servicesAvailableDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.key}
                to={service.path}
                className="group flex min-w-0 flex-col rounded-2xl border border-[#E7ECE9] bg-white/90 p-6 shadow-[0_5px_18px_rgba(23,62,112,0.045)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#C6DCCF] hover:shadow-[0_16px_30px_rgba(23,62,112,0.10)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d] transition-all duration-300 group-hover:bg-[#25845d] group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-[#25845d] transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold leading-snug text-[#173E70] transition-colors duration-300 group-hover:text-[#25845d]">
                  {t(service.title)}
                </h3>

                <p className="mt-2 flex-1 text-sm font-medium leading-6 text-[#596879]">
                  {t(service.description)}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#25845d]">
                  {t("servicesExplore")}

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* BRANCH LOCATOR INFORMATION PANEL */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-20 sm:px-8">
        <div className="relative mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-[#173E70] to-[#245687] px-6 py-8 text-white shadow-lg sm:px-10">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />

          <div className="pointer-events-none absolute -right-4 -bottom-36 h-64 w-64 rounded-full border border-white/10" />

          <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h3 className="text-xl font-semibold">
                {t("servicesNeedAssistance")}
              </h3>

              <p className="mt-2 max-w-4xl text-sm leading-6 text-white/80">
                {t("servicesNeedAssistanceDescription")}
              </p>
            </div>

            <Link
              to="/reach-us/branches"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#173E70] transition-all duration-300 hover:-translate-y-1 hover:bg-[#eaf3ed] hover:shadow-lg"
            >
              {t("servicesFindBranch")}
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServicesHome;
