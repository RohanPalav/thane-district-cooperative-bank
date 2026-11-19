import { useState } from "react";
import {
  CircleArrowRight,
  Coins,
  PiggyBank,
  Wallet,
  TrendingUp,
  Landmark,
  Banknote,
  CalendarDays,
  CircleDollarSign,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import DepositIllustration from "../../components/deposit/DepositIllustration";

const floatingIcons = [
  {
    Icon: Coins,
    position: "left-[5%] top-[10%]",
    size: 43,
    delay: "0s",
    duration: "9s",
  },
  {
    Icon: PiggyBank,
    position: "right-[8%] top-[13%]",
    size: 52,
    delay: "1s",
    duration: "11s",
  },
  {
    Icon: Wallet,
    position: "left-[7%] top-[48%]",
    size: 45,
    delay: "2s",
    duration: "10s",
  },
  {
    Icon: TrendingUp,
    position: "right-[6%] top-[45%]",
    size: 48,
    delay: "0.5s",
    duration: "12s",
  },
  {
    Icon: Landmark,
    position: "left-[4%] bottom-[15%]",
    size: 50,
    delay: "1.5s",
    duration: "10s",
  },
  {
    Icon: Banknote,
    position: "right-[5%] bottom-[18%]",
    size: 44,
    delay: "2.5s",
    duration: "11s",
  },
  {
    Icon: CalendarDays,
    position: "left-[47%] top-[35%]",
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

function RecurringAccount() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("features");

  const features = [
    "recurringFeatureBranches",
    "recurringFeatureMaximumAmount",
    "recurringFeaturePenalty",
    "recurringFeaturePassbook",
    "recurringFeatureTransfer",
    "recurringFeatureInterest",
    "recurringFeatureMissedInstallments",
    "recurringFeatureMaturityInstructions",
    "recurringFeatureNomination",
  ];

  const terms = [
    "recurringTermPrematureClosure",
    "recurringTermTds",
    "recurringTermForm15",
  ];

  const content = activeTab === "features" ? features : terms;

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
          @keyframes recurringAccountFloat {
            0%, 100% {
              transform: translateY(0px) rotate(-5deg);
            }
            50% {
              transform: translateY(-18px) rotate(5deg);
            }
          }

          .recurring-account-floating-icon {
            animation-name: recurringAccountFloat;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .recurring-account-floating-icon {
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
              className={`recurring-account-floating-icon absolute ${position} text-[#25845d]/[0.11]`}
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

      {/* ACCOUNT CONTENT */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 py-12 sm:px-8 lg:py-16">
        <div className="grid items-start gap-10 lg:grid-cols-[380px_1fr] lg:gap-12">
          {/* LEFT ACCOUNT SECTION */}

          <aside className="flex flex-col items-center">
            <div className="w-full text-center">
              <div className="flex min-h-[280px] items-center justify-center sm:min-h-[310px]">
                <DepositIllustration
                  image="/images/deposits/recurring_deposit.png"
                  imageAlt="Recurring deposit illustration"
                  className="h-[270px] w-full object-contain sm:h-[300px]"
                />
              </div>

              <h1 className="mt-4 text-2xl font-bold text-[#173E70] sm:text-3xl">
                {t("recurringAccount")}
              </h1>
            </div>

            {/* NAVIGATION TABS */}

            <div className="mt-8 flex w-full flex-col gap-2">
              <button
                type="button"
                onClick={() => setActiveTab("features")}
                className={`relative rounded-xl px-5 py-4 text-center font-semibold transition-all duration-300 ${
                  activeTab === "features"
                    ? "bg-white text-[#173E70] shadow-[0_5px_18px_rgba(23,62,112,0.07)]"
                    : "text-[#687585] hover:bg-white/60 hover:text-[#25845d]"
                }`}
              >
                {t("recurringFeaturesTab")}

                {activeTab === "features" && (
                  <span className="absolute bottom-0 left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-full bg-[#25845d]" />
                )}
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("terms")}
                className={`relative rounded-xl px-5 py-4 text-center font-semibold transition-all duration-300 ${
                  activeTab === "terms"
                    ? "bg-white text-[#173E70] shadow-[0_5px_18px_rgba(23,62,112,0.07)]"
                    : "text-[#687585] hover:bg-white/60 hover:text-[#25845d]"
                }`}
              >
                {t("recurringTermsTab")}

                {activeTab === "terms" && (
                  <span className="absolute bottom-0 left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-full bg-[#25845d]" />
                )}
              </button>
            </div>
          </aside>

          {/* RIGHT INFORMATION PANEL */}

          <section className="min-w-0 rounded-2xl border border-[#E7ECE9] bg-white/90 p-6 shadow-[0_5px_20px_rgba(23,62,112,0.045)] backdrop-blur-sm sm:p-8 lg:p-10">
            {/* ACCOUNT DESCRIPTION */}

            <p className="mb-8 text-base font-medium leading-8 text-[#465568]">
              {t("recurringIntroduction")}
            </p>

            {/* SECTION HEADING */}

            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#25845d]">
                {t("recurringAccount")}
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#173E70] sm:text-3xl">
                {activeTab === "features"
                  ? t("recurringFeaturesTab")
                  : t("recurringTermsTab")}
              </h2>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#25845d]" />
            </div>

            {/* INFORMATION LIST */}

            <ul
              className={`grid gap-x-8 gap-y-5 ${
                activeTab === "features" ? "md:grid-cols-2" : "grid-cols-1"
              }`}
            >
              {content.map((key) => (
                <li
                  key={key}
                  className="group flex items-start gap-3 text-sm font-medium leading-7 text-[#465568] sm:text-base"
                >
                  <CircleArrowRight
                    size={19}
                    className="mt-1 shrink-0 text-[#25845d] transition-transform duration-300 group-hover:translate-x-1"
                  />

                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}

export default RecurringAccount;
