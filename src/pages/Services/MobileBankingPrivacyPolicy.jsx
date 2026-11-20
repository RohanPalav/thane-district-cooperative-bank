import { ExternalLink, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

function MobileBankingPrivacyPolicy() {
  const { language, t } = useLanguage();

  const isMarathi = language === "mr";

  return (
    <main
      className={`min-h-[55vh] bg-white ${
        isMarathi
          ? '[font-family:"Nirmala_UI","Noto_Sans_Devanagari",sans-serif]'
          : "font-['Poppins']"
      }`}
    >
      <article className="mx-auto max-w-[1200px] px-5 py-10 sm:px-8 sm:py-14">
        {/* PAGE HEADER */}

        <header className="mb-9 border-b border-[#E2E8F0] pb-6">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#EAF4EF] text-[#178456]">
              <ShieldCheck size={23} aria-hidden="true" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#178456]">
                {t("privacyBankName")}
              </p>

              <p className="mt-1 text-sm text-[#687584]">
                {t("privacyCustomerInformation")}
              </p>
            </div>
          </div>

          <h1 className="text-2xl font-bold text-[#173E70] sm:text-3xl">
            {t("privacyPageTitle")}
          </h1>
        </header>

        <div className="max-w-none space-y-7 text-[15px] leading-8 text-[#394554] sm:text-base">
          {/* PRIVACY POLICY */}

          <section>
            <h2 className="mb-3 text-lg font-bold text-[#173E70]">
              {t("privacyPolicyHeading")}
            </h2>

            <p>
              {t("privacyPolicyParagraph1BeforeLink")}{" "}
              <a
                href="https://www.thanedistrictbank.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 break-all font-medium text-[#087DB5] underline underline-offset-2 hover:text-[#173E70]"
              >
                www.thanedistrictbank.com
                <ExternalLink size={13} aria-hidden="true" />
              </a>
              {t("privacyPolicyParagraph1AfterLink")}
            </p>

            <p className="mt-5">{t("privacyPolicyParagraph2")}</p>

            <p className="mt-5">{t("privacyPolicyParagraph3")}</p>
          </section>

          {/* DISCLAIMER */}

          <section>
            <h2 className="mb-3 border-l-4 border-[#178456] pl-3 text-lg font-bold text-[#173E70]">
              {t("privacyDisclaimerHeading")}
            </h2>

            <p>{t("privacyDisclaimerParagraph1")}</p>

            <p className="mt-5">{t("privacyDisclaimerParagraph2")}</p>
          </section>

          {/* USE OF PERSONAL INFORMATION */}

          <section>
            <h2 className="mb-3 border-l-4 border-[#178456] pl-3 text-lg font-bold text-[#173E70]">
              {t("privacyPersonalInformationHeading")}
            </h2>

            <p>
              {t("privacyPersonalInformationIntroductionBeforeApp")}{" "}
              <em>TDCC_mBank</em>{" "}
              {t("privacyPersonalInformationIntroductionAfterApp")}
            </p>

            <ul className="mt-4 list-disc space-y-3 pl-6 marker:text-[#178456]">
              <li>
                <strong className="text-[#263D70]">
                  {t("privacyTransactionProcessing")}
                </strong>{" "}
                {t("privacyTransactionProcessingDescription")}
              </li>

              <li>
                <strong className="text-[#263D70]">
                  {t("privacyAccountManagement")}
                </strong>{" "}
                {t("privacyAccountManagementDescription")}
              </li>

              <li>
                <strong className="text-[#263D70]">
                  {t("privacyServiceImprovement")}
                </strong>{" "}
                {t("privacyServiceImprovementDescription")}
              </li>

              <li>
                <strong className="text-[#263D70]">
                  {t("privacyComplianceWithLaws")}
                </strong>{" "}
                {t("privacyComplianceWithLawsDescription")}
              </li>
            </ul>
          </section>

          {/* HYPERLINK POLICY */}

          <section>
            <h2 className="mb-3 border-l-4 border-[#178456] pl-3 text-lg font-bold text-[#173E70]">
              {t("privacyHyperlinkPolicyHeading")}
            </h2>

            <p>{t("privacyHyperlinkPolicyParagraph")}</p>
          </section>
        </div>
      </article>
    </main>
  );
}

export default MobileBankingPrivacyPolicy;
