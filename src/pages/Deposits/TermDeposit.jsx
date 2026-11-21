import { useState } from "react";
import { CircleArrowRight, Landmark } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import DepositSubpageLayout from "../../components/deposit/DepositSubpageLayout";

function TermDeposit() {
  const { t } = useLanguage();

  const [activeScheme, setActiveScheme] = useState("dhanvardhini");

  const schemes = [
    {
      id: "dhanvardhini",
      label: "termSchemeDhanvardhini",
      heading: "termSchemeDhanvardhiniHeading",
    },
    {
      id: "thevVrudhi",
      label: "termSchemeThevVrudhi",
      heading: "termSchemeThevVrudhiHeading",
    },
    {
      id: "specialThevVrudhi",
      label: "termSchemeSpecialThevVrudhi",
      heading: "termSchemeSpecialThevVrudhiHeading",
    },
    {
      id: "monthlyInterest",
      label: "termSchemeMonthlyInterest",
      heading: "termSchemeMonthlyInterestHeading",
    },
  ];

  const activeSchemeData = schemes.find((scheme) => scheme.id === activeScheme);

  const schemeDetails = [
    {
      label: "termWhoCanInvest",
      value: "termWhoCanInvestValue",
    },
    {
      label: "termHowToInvest",
      value: "termHowToInvestValue",
    },
    {
      label: "termPrematureWithdrawal",
      value: "termPrematureWithdrawalValue",
    },
    {
      label: "termNomination",
      value: "termNominationValue",
    },
    {
      label: "termLoanFacility",
      value: "termLoanFacilityValue",
    },
  ];

  const sidebarNavigation = (
    <div className="mt-8 flex w-full flex-col gap-2">
      {schemes.map((scheme) => (
        <button
          key={scheme.id}
          type="button"
          onClick={() => setActiveScheme(scheme.id)}
          className={`relative rounded-xl px-5 py-4 text-center font-semibold transition-all duration-300 ${
            activeScheme === scheme.id
              ? "bg-white text-[#173E70] shadow-[0_5px_18px_rgba(23,62,112,0.07)]"
              : "text-[#687585] hover:bg-white/60 hover:text-[#25845d]"
          }`}
        >
          {t(scheme.label)}

          {activeScheme === scheme.id && (
            <span className="absolute bottom-0 left-1/2 h-[3px] w-10 -translate-x-1/2 rounded-full bg-[#25845d]" />
          )}
        </button>
      ))}
    </div>
  );

  return (
    <DepositSubpageLayout
      Icon={Landmark}
      title={t("termDeposit")}
      sidebarNavigation={sidebarNavigation}
    >
      <section className="min-w-0 rounded-2xl border border-[#E7ECE9] bg-white/90 p-6 shadow-[0_5px_20px_rgba(23,62,112,0.045)] backdrop-blur-sm sm:p-8 lg:p-10">
        <div className="mb-7">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#25845d]">
            {t("termDeposit")}
          </p>

          <h2 className="mt-3 text-2xl font-bold text-[#173E70] sm:text-3xl">
            {t(activeSchemeData.heading)}
          </h2>

          <div className="mt-4 h-[3px] w-12 rounded-full bg-[#25845d]" />
        </div>

        {/* SCHEME DETAILS */}

        <ul className="space-y-6">
          {schemeDetails.map((detail) => (
            <li
              key={detail.label}
              className="group grid grid-cols-1 items-start gap-2 text-sm font-medium leading-7 text-[#465568] sm:grid-cols-[minmax(0,190px)_minmax(0,1fr)] sm:gap-x-5 sm:text-base"
            >
              <div className="flex items-start gap-3 font-semibold text-[#173E70]">
                <CircleArrowRight
                  size={19}
                  className="mt-1 shrink-0 text-[#25845d] transition-transform duration-300 group-hover:translate-x-1"
                />

                <span>{t(detail.label)}</span>
              </div>

              <span className="pl-8 sm:pl-0">: {t(detail.value)}</span>
            </li>
          ))}
        </ul>
      </section>
    </DepositSubpageLayout>
  );
}

export default TermDeposit;
