import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Target,
  Coins,
  PiggyBank,
  Wallet,
  Landmark,
  Banknote,
  CalendarDays,
  CircleDollarSign,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

const depositFacilities = [
  {
    key: "savingsAccount",
    descriptionKey: "savingsCardDescription",
    path: "/deposit/savings-account",
    image: "/images/deposits/savings_account.png",
    imageAlt: "Savings account illustration",
    background: "bg-white",
    imageScale: "scale-100 group-hover:scale-105",
  },
  {
    key: "currentAccount",
    descriptionKey: "currentCardDescription",
    path: "/deposit/current-account",
    image: "/images/deposits/current_account.png",
    imageAlt: "Current account illustration",
    background: "bg-white",
    imageScale: "scale-[0.78] group-hover:scale-[0.82]",
  },
  {
    key: "recurringAccount",
    descriptionKey: "recurringCardDescription",
    path: "/deposit/recurring-account",
    image: "/images/deposits/recurring_deposit.png",
    imageAlt: "Recurring deposit illustration",
    background: "bg-white",
    imageScale: "scale-[0.78] group-hover:scale-[0.82]",
  },
  {
    key: "termDeposit",
    descriptionKey: "termCardDescription",
    path: "/deposit/term-deposit",
    image: "/images/deposits/term_deposit.png",
    imageAlt: "Term deposit illustration",
    background: "bg-white",
    imageScale: "scale-[0.78] group-hover:scale-[0.82]",
  },
];

const floatingIcons = [
  {
    Icon: Coins,
    position: "left-[5%] top-[9%]",
    size: 43,
    delay: "0s",
    duration: "9s",
  },
  {
    Icon: PiggyBank,
    position: "right-[8%] top-[12%]",
    size: 54,
    delay: "1s",
    duration: "11s",
  },
  {
    Icon: Wallet,
    position: "left-[8%] top-[43%]",
    size: 46,
    delay: "2s",
    duration: "10s",
  },
  {
    Icon: TrendingUp,
    position: "right-[6%] top-[42%]",
    size: 48,
    delay: "0.5s",
    duration: "12s",
  },
  {
    Icon: Landmark,
    position: "left-[4%] bottom-[17%]",
    size: 52,
    delay: "1.5s",
    duration: "10s",
  },
  {
    Icon: Banknote,
    position: "right-[5%] bottom-[20%]",
    size: 45,
    delay: "2.5s",
    duration: "11s",
  },
  {
    Icon: CalendarDays,
    position: "left-[47%] top-[34%]",
    size: 38,
    delay: "3s",
    duration: "9s",
  },
  {
    Icon: CircleDollarSign,
    position: "right-[29%] bottom-[8%]",
    size: 42,
    delay: "1s",
    duration: "12s",
  },
];

function DepositHome() {
  const { t, language } = useLanguage();
  const isMarathi = language === "mr";

  const benefits = [
    {
      icon: ShieldCheck,
      title: t("depositBenefitSecurity"),
      description: t("depositBenefitSecurityDescription"),
    },
    {
      icon: TrendingUp,
      title: t("depositBenefitGrowth"),
      description: t("depositBenefitGrowthDescription"),
    },
    {
      icon: Target,
      title: t("depositBenefitPlanning"),
      description: t("depositBenefitPlanningDescription"),
    },
  ];

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
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
      {/* FLOATING BACKGROUND ICONS */}

      <style>
        {`
          @keyframes depositFloat {
            0%, 100% {
              transform: translateY(0px) rotate(-5deg);
            }
            50% {
              transform: translateY(-18px) rotate(5deg);
            }
          }

          .deposit-floating-icon {
            animation-name: depositFloat;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .deposit-floating-icon {
              animation: none !important;
            }
          }
        `}
      </style>

      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {floatingIcons.map(
          ({ Icon, position, size, delay, duration }, index) => (
            <div
              key={index}
              className={`deposit-floating-icon absolute ${position} text-[#25845d]/[0.11]`}
              style={{
                animationDuration: duration,
                animationDelay: delay,
              }}
            >
              <Icon size={size} strokeWidth={1.5} />
            </div>
          ),
        )}
      </div>

      {/* INTRODUCTION */}

      <section className="relative z-10 bg-transparent">
        <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p
              className={`mb-5 text-sm font-semibold uppercase text-[#25845d] ${
                isMarathi ? "tracking-normal" : "tracking-[0.16em]"
              }`}
            >
              {t("depositEyebrow")}
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
              {t("deposit")}
            </h1>

            <h2 className="mt-4 text-2xl font-semibold leading-snug text-[#294d78] sm:text-3xl">
              {t("depositPageHeading")}
            </h2>

            <p className="mt-6 text-base font-medium leading-8 text-[#465568] sm:text-lg">
              {t("depositIntroduction")}
            </p>
          </div>

          {/* BENEFITS */}

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group flex gap-4 rounded-2xl border border-[#E6ECE8] bg-white/90 p-6 shadow-[0_4px_15px_rgba(23,62,112,0.035)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C9DED1] hover:shadow-[0_14px_30px_rgba(23,62,112,0.08)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#25845d] group-hover:text-white">
                    <Icon size={25} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#173E70]">
                      {benefit.title}
                    </h3>

                    <p className="mt-2 text-sm font-medium leading-6 text-[#596879]">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DEPOSIT FACILITIES */}

      <section className="relative z-10 w-full bg-transparent">
        <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:py-20">
          {/* SECTION HEADING */}

          <div className="mx-auto max-w-2xl text-center">
            <p
              className={`text-sm font-semibold uppercase text-[#25845d] ${
                isMarathi ? "tracking-normal" : "tracking-[0.16em]"
              }`}
            >
              {t("depositFacilitiesEyebrow")}
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#173E70] sm:text-3xl">
              {t("depositFacilitiesHeading")}
            </h2>

            <p className="mt-4 text-base font-medium leading-7 text-[#596879]">
              {t("depositFacilitiesDescription")}
            </p>
          </div>

          {/* FOUR FACILITY CARDS */}

          <div className="mx-auto mt-10 grid max-w-[1240px] grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {depositFacilities.map((facility) => (
              <Link
                key={facility.key}
                to={facility.path}
                className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E7ECE9] bg-white/90 opacity-100 shadow-[0_5px_18px_rgba(23,62,112,0.045)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#C6DCCF] hover:opacity-[0.97] hover:shadow-[0_16px_30px_rgba(23,62,112,0.10)]"
              >
                {/* ILLUSTRATION AREA */}

                <div
                  className={`relative flex h-[185px] items-center justify-center overflow-hidden sm:h-[195px] ${facility.background}`}
                >
                  <div className="pointer-events-none absolute h-36 w-36 rounded-full border border-white/60 transition-transform duration-700 group-hover:scale-110" />

                  <img
                    src={facility.image}
                    alt={facility.imageAlt}
                    className={`relative z-10 h-full w-full object-contain p-3 transition-transform duration-700 ease-out ${facility.imageScale}`}
                  />
                </div>

                {/* CARD INFORMATION */}

                <div className="flex flex-1 flex-col p-4">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-lg font-bold leading-snug text-[#173E70] transition-colors duration-300 group-hover:text-[#25845d]">
                      {t(facility.key)}
                    </h3>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDF5F0] text-[#25845d] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#25845d] group-hover:text-white">
                      <ArrowRight size={18} />
                    </div>
                  </div>

                  <p className="mt-2 flex-1 text-sm font-medium leading-6 text-[#596879]">
                    {t(facility.descriptionKey)}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-[#25845d]">
                    {t("exploreFacility")}

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* INTEREST RATES LINK */}

          <div className="relative mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-[#173E70] to-[#245687] px-6 py-8 text-white shadow-lg sm:px-10">
            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -right-4 -bottom-36 h-64 w-64 rounded-full border border-white/10" />

            <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div>
                <h3 className="text-xl font-semibold">
                  {t("depositRatesHeading")}
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/80">
                  {t("depositRatesDescription")}
                </p>
              </div>

              <a
                href="/documents/TermDeposit_InterestRate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#173E70] transition-all duration-300 hover:-translate-y-1 hover:bg-[#eaf3ed] hover:shadow-lg"
              >
                {t("viewInterestRates")}
                <ArrowRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default DepositHome;
