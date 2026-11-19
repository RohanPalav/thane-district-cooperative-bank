import {
  Smartphone,
  BookOpen,
  Laptop,
  SmartphoneNfc,
  ArrowRight,
  Wifi,
  CreditCard,
  Monitor,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

const floatingIcons = [
  {
    Icon: Smartphone,
    position: "left-[6%] top-[12%]",
    size: 44,
    delay: "0s",
    duration: "9s",
  },
  {
    Icon: Wifi,
    position: "right-[8%] top-[16%]",
    size: 48,
    delay: "1s",
    duration: "11s",
  },
  {
    Icon: CreditCard,
    position: "left-[8%] top-[58%]",
    size: 42,
    delay: "2s",
    duration: "10s",
  },
  {
    Icon: Monitor,
    position: "right-[6%] bottom-[16%]",
    size: 48,
    delay: "0.5s",
    duration: "12s",
  },
];

function DigitalBanking() {
  const { t, language } = useLanguage();

  const isMarathi = language === "mr";

  const facilities = [
    {
      id: "mobileBanking",
      title: "digitalMobileBanking",
      description: [
        "digitalMobileBankingDescription1",
        "digitalMobileBankingDescription2",
      ],
      icon: Smartphone,
      link: {
        label: "digitalMobileBankingGuide",
        href: "/documents/TDCC-Mobile-Banking.pdf",
      },
    },
    {
      id: "mPassbook",
      title: "digitalMPassbook",
      description: [
        "digitalMPassbookDescription1",
        "digitalMPassbookDescription2",
      ],
      icon: BookOpen,
    },
    {
      id: "internetBanking",
      title: "digitalInternetBanking",
      description: [
        "digitalInternetBankingDescription1",
        "digitalInternetBankingDescription2",
      ],
      icon: Laptop,
    },
    {
      id: "upi",
      title: "digitalUPI",
      description: ["digitalUPIDescription1", "digitalUPIDescription2"],
      icon: SmartphoneNfc,
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
      {/* FLOATING BACKGROUND ICONS */}

      <style>
        {`
          @keyframes digitalBankingFloating {
            0%, 100% {
              transform: translateY(0px) rotate(-5deg);
            }
            50% {
              transform: translateY(-18px) rotate(5deg);
            }
          }

          .digital-banking-floating-icon {
            animation-name: digitalBankingFloating;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .digital-banking-floating-icon {
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
              className={`digital-banking-floating-icon absolute ${position} text-[#25845d]/[0.11]`}
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

      {/* PAGE INTRODUCTION */}

      <section className="relative z-10">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p
              className={`mb-5 text-sm font-semibold uppercase text-[#25845d] ${
                isMarathi ? "tracking-normal" : "tracking-[0.16em]"
              }`}
            >
              {t("digitalBankingEyebrow")}
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
              {t("digitalBanking")}
            </h1>

            <p className="mt-6 text-base font-medium leading-8 text-[#465568] sm:text-lg">
              {t("digitalBankingIntroduction")}
            </p>
          </div>
        </div>
      </section>

      {/* DIGITAL BANKING FACILITIES */}

      <section className="relative z-10">
        <div className="mx-auto max-w-[1200px] px-5 pb-20 sm:px-8">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-[#173E70] sm:text-3xl">
              {isMarathi
                ? "डिजिटल बँकिंग सुविधा"
                : "Our Digital Banking Facilities"}
            </h2>

            <div className="mt-3 h-1 w-16 rounded-full bg-[#25845d]" />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {facilities.map((facility) => {
              const Icon = facility.icon;

              return (
                <article
                  key={facility.id}
                  className="group flex h-full flex-col rounded-2xl border border-[#E7ECE9] bg-white/90 p-6 shadow-[0_5px_18px_rgba(23,62,112,0.045)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#C6DCCF] hover:shadow-[0_16px_30px_rgba(23,62,112,0.10)] sm:p-7"
                >
                  {/* FACILITY ICON AND TITLE */}

                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#25845d] group-hover:text-white">
                      <Icon size={27} strokeWidth={1.8} />
                    </div>

                    <h3 className="text-lg font-bold leading-snug text-[#173E70] transition-colors duration-300 group-hover:text-[#25845d] sm:text-xl">
                      {t(facility.title)}
                    </h3>
                  </div>

                  {/* FACILITY DESCRIPTION */}

                  <div className="mt-6 flex-1 space-y-3 text-sm font-medium leading-7 text-[#596879]">
                    {facility.description.map((descriptionKey) => (
                      <p key={descriptionKey}>{t(descriptionKey)}</p>
                    ))}
                  </div>

                  {/* MOBILE BANKING USER GUIDE */}

                  {facility.link && (
                    <div className="mt-6 border-t border-[#E7ECE9] pt-5">
                      <a
                        href={facility.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-[#25845d] transition-colors duration-300 hover:text-[#173E70]"
                      >
                        <BookOpen size={18} />

                        {t(facility.link.label)}

                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </a>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default DigitalBanking;
