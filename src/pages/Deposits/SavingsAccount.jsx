import { useState } from "react";
import { CircleArrowRight, PiggyBank } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import DepositSubpageLayout from "../../components/deposit/DepositSubpageLayout";

function SavingsAccount() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("features");

  const features = [
    "savingsFeatureMobileBanking",
    "savingsFeatureSmsAlerts",
    "savingsFeatureInternetBanking",
    "savingsFeatureBankAnywhere",
    "savingsFeatureMissedCall",
    "savingsFeatureAtmCard",
    "savingsFeatureWithdrawals",
    "savingsFeatureAccountTransfer",
    "savingsFeatureNomination",
    "savingsFeatureMonthlyBalance",
    "savingsFeatureMaximumBalance",
    "savingsFeaturePassbook",
  ];

  const eligibility = [
    "savingsEligibilityGovernment",
    "savingsEligibilityWomenChildren",
    "savingsEligibilityGroups",
    "savingsEligibilityOperation",
  ];

  const information = activeTab === "features" ? features : eligibility;

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
        {t("savingsFeaturesTab")}

        {activeTab === "features" && (
          <span className="absolute bottom-0 left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-full bg-[#25845d]" />
        )}
      </button>

      <button
        type="button"
        onClick={() => setActiveTab("eligibility")}
        className={`relative rounded-xl px-5 py-4 text-center font-semibold transition-all duration-300 ${
          activeTab === "eligibility"
            ? "bg-white text-[#173E70] shadow-[0_5px_18px_rgba(23,62,112,0.07)]"
            : "text-[#687585] hover:bg-white/60 hover:text-[#25845d]"
        }`}
      >
        {t("savingsEligibilityTab")}

        {activeTab === "eligibility" && (
          <span className="absolute bottom-0 left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-full bg-[#25845d]" />
        )}
      </button>
    </div>
  );

  return (
    <DepositSubpageLayout
      Icon={PiggyBank}
      title={t("savingsAccount")}
      sidebarNavigation={sidebarNavigation}
    >
      <section className="min-w-0 rounded-2xl border border-[#E7ECE9] bg-white/90 p-6 shadow-[0_5px_20px_rgba(23,62,112,0.045)] backdrop-blur-sm sm:p-8 lg:p-10">
        {/* SECTION HEADING */}

        <div className="mb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#25845d]">
            {t("savingsAccount")}
          </p>

          <h2 className="mt-3 text-2xl font-bold text-[#173E70] sm:text-3xl">
            {activeTab === "features"
              ? t("savingsFeaturesTab")
              : t("savingsEligibilityTab")}
          </h2>

          <div className="mt-4 h-[3px] w-12 rounded-full bg-[#25845d]" />
        </div>

        {activeTab === "eligibility" && (
          <p className="mb-6 text-base font-medium leading-7 text-[#465568]">
            {t("savingsEligibilityIntroduction")}
          </p>
        )}

        {/* INFORMATION LIST */}

        <ul className="space-y-5">
          {information.map((key) => (
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

export default SavingsAccount;
