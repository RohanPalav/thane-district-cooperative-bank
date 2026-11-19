import {
  CircleArrowRight,
  Coins,
  Wallet,
  TrendingUp,
  Landmark,
  Banknote,
  CalendarDays,
  CircleDollarSign,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const floatingIcons = [
  {
    Icon: Coins,
    position: "left-[5%] top-[9%]",
    size: 43,
    delay: "0s",
    duration: "9s",
  },
  {
    Icon: Wallet,
    position: "right-[8%] top-[12%]",
    size: 54,
    delay: "1s",
    duration: "11s",
  },
  {
    Icon: TrendingUp,
    position: "left-[8%] top-[43%]",
    size: 46,
    delay: "2s",
    duration: "10s",
  },
  {
    Icon: Landmark,
    position: "right-[6%] top-[42%]",
    size: 48,
    delay: "0.5s",
    duration: "12s",
  },
  {
    Icon: Banknote,
    position: "left-[4%] bottom-[17%]",
    size: 52,
    delay: "1.5s",
    duration: "10s",
  },
  {
    Icon: CalendarDays,
    position: "right-[5%] bottom-[20%]",
    size: 45,
    delay: "2.5s",
    duration: "11s",
  },
  {
    Icon: CircleDollarSign,
    position: "left-[47%] top-[34%]",
    size: 38,
    delay: "3s",
    duration: "9s",
  },
];

function LoanSubpageLayout({ titleKey, image, imageAlt, details }) {
  const { language, t } = useLanguage();
  const isMarathi = language === "mr";

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
      {/* FLOATING BACKGROUND ICONS */}

      <style>
        {`
          @keyframes loanSubpageFloating {
            0%, 100% {
              transform: translateY(0px) rotate(-5deg);
            }
            50% {
              transform: translateY(-18px) rotate(5deg);
            }
          }

          .loan-subpage-floating-icon {
            animation-name: loanSubpageFloating;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .loan-subpage-floating-icon {
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
              className={`loan-subpage-floating-icon absolute ${position} text-[#25845d]/[0.11]`}
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

      {/* MAIN CONTENT */}

      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.5fr] lg:gap-12 xl:gap-16">
          {/* LEFT: ILLUSTRATION AND TITLE */}

          <aside className="flex flex-col items-center">
            <div className="flex h-[260px] w-full items-center justify-center sm:h-[320px]">
              <img
                src={image}
                alt={imageAlt}
                className="h-full w-full object-contain p-3"
                loading="eager"
              />
            </div>

            <h1 className="mt-3 text-center text-3xl font-bold text-[#173E70] sm:text-4xl">
              {t(titleKey)}
            </h1>

            <div className="mt-8 w-full rounded-2xl border border-white/80 bg-white/90 px-5 py-5 text-center font-semibold text-[#173E70] shadow-[0_6px_22px_rgba(23,62,112,0.07)]">
              {t("loanFeaturesTab")}

              <span className="mx-auto mt-3 block h-[3px] w-12 rounded-full bg-[#25845d]" />
            </div>
          </aside>

          {/* RIGHT: FEATURES PANEL */}

          <section className="min-w-0 rounded-2xl border border-[#E5ECE8] bg-white/90 p-6 shadow-[0_6px_25px_rgba(23,62,112,0.065)] backdrop-blur-sm sm:p-8 lg:p-10">
            <p
              className={`text-sm font-semibold uppercase text-[#25845d] ${
                isMarathi ? "tracking-normal" : "tracking-[0.14em]"
              }`}
            >
              {t(titleKey)}
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#173E70] sm:text-3xl">
              {t("loanFeaturesTab")}
            </h2>

            <span className="mt-5 block h-[3px] w-14 rounded-full bg-[#25845d]" />

            {/* FEATURE DETAILS */}

            <div className="mt-8 space-y-4">
              {details.map((detail) => (
                <div
                  key={detail.label}
                  className="group grid grid-cols-1 gap-1 text-base font-medium leading-7 text-[#465568] md:grid-cols-[minmax(150px,0.85fr)_12px_minmax(0,1.5fr)] md:gap-x-2"
                >
                  {/* LABEL */}

                  <div className="flex items-start gap-3 font-semibold text-[#173E70]">
                    <CircleArrowRight
                      size={20}
                      className="mt-[5px] shrink-0 text-[#25845d] transition-transform duration-300 ease-out group-hover:translate-x-1"
                    />

                    <span>{t(detail.label)}</span>
                  </div>

                  {/* COLON */}

                  <span className="hidden font-medium text-[#173E70] md:block">
                    :
                  </span>

                  {/* VALUE */}

                  <div className="pl-8 md:pl-0">
                    <span className="mr-2 inline md:hidden">:</span>

                    {detail.value.map((valueKey) => (
                      <p key={valueKey} className="leading-7">
                        {t(valueKey)}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* TERMS AND CONDITIONS */}

            <div className="mt-8 space-y-2 font-semibold leading-7 text-[#25845d]">
              <p className="flex items-start gap-3">
                <CircleArrowRight
                  size={20}
                  className="mt-[5px] shrink-0 transition-transform duration-300 hover:translate-x-1"
                />
                <span>{t("loanTermsApply")}</span>
              </p>

              <p className="pl-8">{t("loanContactBranchManager")}</p>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default LoanSubpageLayout;
