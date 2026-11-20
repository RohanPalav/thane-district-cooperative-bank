import {
  ArrowLeftRight,
  Landmark,
  Building2,
  Contact,
  CreditCard,
  Download,
  ExternalLink,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

const IFSC_URL = "https://ifsc.bankifsccode.com/";

function AboutServices() {
  const { language, t } = useLanguage();

  const isMarathi = language === "mr";

  const services = [
    {
      title: t("aboutServicesNEFT"),
      description: (
        <>
          <strong>{t("aboutServicesTransactionTimings")}</strong>
          <br />
          {t("aboutServicesNEFTWeekdays")}
          <br />
          {t("aboutServicesNEFTSaturday")}
          <br />
          {t("aboutServicesWeeklyOff")}
        </>
      ),
      icon: ArrowLeftRight,
      showIfsc: true,
    },
    {
      title: t("aboutServicesRTGS"),
      description: (
        <>
          <strong>{t("aboutServicesTransactionTimings")}</strong>
          <br />
          {t("aboutServicesRTGSWeekdays")}
          <br />
          {t("aboutServicesRTGSSaturday")}
          <br />
          {t("aboutServicesWeeklyOff")}
        </>
      ),
      icon: Landmark,
      showIfsc: true,
    },
    {
      title: t("aboutServicesECS"),
      description: t("aboutServicesECSDescription"),
      icon: Building2,
    },
    {
      title: t("aboutServicesAadhaar"),
      description: (
        <>
          <strong>{t("aboutServicesAadhaarStepsHeading")}</strong>
          <br />
          <br />• {t("aboutServicesAadhaarStep1")}
          <br />• {t("aboutServicesAadhaarStep2")}
          <br />• {t("aboutServicesAadhaarStep3")}
          <br />
          <strong>{t("aboutServicesAadhaarExistingCustomer")}</strong>
          <br />• {t("aboutServicesAadhaarExistingStep1")}
          <br />• {t("aboutServicesAadhaarExistingStep2")}
          <br />• {t("aboutServicesAadhaarSubsidy")}
        </>
      ),
      icon: Contact,
    },
    {
      title: t("aboutServicesRuPay"),
      description: t("aboutServicesRuPayDescription"),
      icon: CreditCard,
    },
    {
      title: t("aboutServicesUPI"),
      description: t("aboutServicesUPIDescription"),
      icon: Download,
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
          linear-gradient(
            120deg,
            #fffce3 0%,
            #f7fbf4 48%,
            #edf6f2 100%
          )
        `,

        backgroundAttachment: "fixed",
      }}
    >
      {/* PAGE INTRODUCTION */}

      <section className="relative z-10">
        <div className="mx-auto max-w-[1400px] px-5 pb-12 pt-16 sm:px-8 lg:pb-14 lg:pt-20">
          <p
            className={`mb-5 text-sm font-semibold uppercase text-[#25845d] ${
              isMarathi ? "tracking-normal" : "tracking-[0.16em]"
            }`}
          >
            {t("aboutServicesEyebrow")}
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
            {t("aboutServicesTitle")}
          </h1>

          <div className="mt-5 h-1 w-20 rounded-full bg-[#25845d]" />

          <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-[#596879] sm:text-lg">
            {t("aboutServicesDescription")}
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}

      <section className="relative z-10 mx-auto max-w-[1400px] px-5 pb-20 sm:px-8">
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex h-full flex-col items-center rounded-2xl border border-[#E6ECE8] bg-white/85 px-6 py-8 text-center shadow-[0_5px_20px_rgba(23,62,112,0.045)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#D6AD55] hover:bg-white hover:shadow-[0_14px_32px_rgba(23,62,112,0.12)] sm:px-8 sm:py-9"
              >
                {/* SERVICE ICON */}

                <div className="mb-6 flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-[#EDF5F0] text-[#173E70] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#173E70] group-hover:text-white">
                  <Icon size={54} strokeWidth={1.8} />
                </div>

                {/* SERVICE TITLE */}

                <h2 className="mb-6 text-xl font-bold leading-snug text-[#173E70] sm:text-2xl">
                  {service.title}
                </h2>

                {/* SERVICE DESCRIPTION */}

                <div className="flex-1 text-sm font-medium leading-8 text-[#596879] sm:text-base">
                  {service.description}
                </div>

                {/* IFSC EXTERNAL LINK */}

                {service.showIfsc && (
                  <a
                    href={IFSC_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 text-sm font-semibold text-[#E87524] underline-offset-4 transition-colors duration-300 hover:text-[#C65316] hover:underline sm:text-base"
                  >
                    {t("aboutServicesIFSC")}
                    <ExternalLink size={15} />
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default AboutServices;
