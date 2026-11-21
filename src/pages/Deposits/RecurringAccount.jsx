import { useState } from "react";
import { CircleArrowRight, CalendarDays } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import DepositSubpageLayout from "../../components/deposit/DepositSubpageLayout";

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

  const sidebarNavigation = (
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
  );

  return (
    <DepositSubpageLayout
      Icon={CalendarDays}
      title={t("recurringAccount")}
      sidebarNavigation={sidebarNavigation}
    >
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
    </DepositSubpageLayout>
  );
}

export default RecurringAccount;
