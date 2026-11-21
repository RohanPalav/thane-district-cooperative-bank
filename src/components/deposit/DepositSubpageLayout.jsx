import {
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

function DepositSubpageLayout({ Icon, title, sidebarNavigation, children }) {
  const { language } = useLanguage();
  const isMarathi = language === "mr";

  return (
    <main
      lang={isMarathi ? "mr" : "en"}
      className="relative min-h-screen overflow-hidden"
      style={{
        fontFamily: isMarathi
          ? '"Noto Sans Devanagari", sans-serif'
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
          @keyframes depositSubpageFloating {
            0%, 100% {
              transform: translateY(0px) rotate(-5deg);
            }
            50% {
              transform: translateY(-18px) rotate(5deg);
            }
          }

          .deposit-subpage-floating-icon {
            animation-name: depositSubpageFloating;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .deposit-subpage-floating-icon {
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
          ({ Icon: FloatingIcon, position, size, delay, duration }, index) => (
            <div
              key={index}
              className={`deposit-subpage-floating-icon absolute ${position} text-[#25845d]/[0.11]`}
              style={{
                animationDuration: duration,
                animationDelay: delay,
              }}
            >
              <FloatingIcon size={size} strokeWidth={1.5} />
            </div>
          ),
        )}
      </div>

      {/* MAIN CONTENT */}

      <section className="relative z-10 mx-auto max-w-[1440px] px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.5fr] lg:gap-12 xl:gap-16">
          {/* LEFT: ICON AND ACCOUNT NAVIGATION */}

          <aside className="flex flex-col items-center">
            {/* ACCOUNT ICON - MATCHES LOAN SUBPAGE */}

            <div className="relative flex h-[220px] w-full items-center justify-center sm:h-[260px]">
              <div className="absolute h-48 w-48 rounded-full bg-gradient-to-br from-[#E5F3EA] to-[#EDF3FA] shadow-inner sm:h-56 sm:w-56" />

              <div className="absolute h-40 w-40 rounded-full border border-[#25845d]/15 sm:h-48 sm:w-48" />

              <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-[2rem] border border-white/80 bg-white/90 text-[#25845d] shadow-[0_12px_35px_rgba(23,62,112,0.10)] transition-transform duration-500 hover:scale-105 sm:h-36 sm:w-36">
                <Icon size={76} strokeWidth={1.4} className="drop-shadow-sm" />
              </div>
            </div>

            {/* ACCOUNT TITLE */}

            <h1 className="mt-3 text-center text-3xl font-bold text-[#173E70] sm:text-4xl">
              {title}
            </h1>

            {/* ACCOUNT NAVIGATION */}

            <nav
              className="mt-8 w-full rounded-2xl border border-white/80 bg-white/90 px-5 py-5 text-center font-semibold text-[#173E70] shadow-[0_6px_22px_rgba(23,62,112,0.07)]"
              aria-label={title}
            >
              {sidebarNavigation}
            </nav>
          </aside>

          {/* RIGHT: ACCOUNT INFORMATION */}

          {children}
        </div>
      </section>
    </main>
  );
}

export default DepositSubpageLayout;
