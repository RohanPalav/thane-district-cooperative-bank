import { Link } from "react-router-dom";
import { ArrowRight, Building2, MapPin, Phone } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

const pageIcons = [MapPin, Building2, Phone];

function ReachUsHome() {
  const { language, t } = useLanguage();

  const isMarathi = language === "mr";

  const pages = [
    {
      title: t("branches"),
      description: t("reachUsBranchesDescription"),
      link: "/reach-us/branches",
      action: t("reachUsExploreAction"),
    },
    {
      title: t("headOffice"),
      description: t("reachUsHeadOfficeDescription"),
      link: "/reach-us/head-office",
      action: t("reachUsExploreAction"),
    },
    {
      title: t("contactUs"),
      description: t("reachUsContactDescription"),
      link: "/reach-us/contact-us",
      action: t("reachUsExploreAction"),
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
      {/* PAGE INTRODUCTION */}

      <section className="relative z-10">
        <div className="mx-auto max-w-[1200px] px-5 pb-12 pt-16 sm:px-8 lg:pb-16 lg:pt-20">
          <p
            className={`mb-5 text-sm font-semibold uppercase text-[#25845d] ${
              isMarathi ? "tracking-normal" : "tracking-[0.16em]"
            }`}
          >
            {t("reachUsEyebrow")}
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
            {t("reachUsMainHeading")}
          </h1>

          <div className="mt-5 h-1 w-20 rounded-full bg-[#25845d]" />
        </div>
      </section>

      {/* INTRODUCTION */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-14 sm:px-8 lg:pb-16">
        <div className="rounded-2xl border border-[#E6ECE8] bg-white/90 p-6 shadow-[0_5px_18px_rgba(23,62,112,0.045)] backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d]">
              <Building2 size={25} strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
              <h2 className="text-xl font-bold leading-snug text-[#173E70] sm:text-2xl">
                {t("reachUsExploreHeading")}
              </h2>

              <p className="mt-4 text-sm font-medium leading-8 text-[#596879] sm:text-base">
                {t("reachUsIntroduction")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REACH US SUBPAGES */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-20 sm:px-8">
        <div className="mb-9">
          <p
            className={`text-sm font-semibold uppercase text-[#25845d] ${
              isMarathi ? "tracking-normal" : "tracking-[0.16em]"
            }`}
          >
            {t("reachUsExploreEyebrow")}
          </p>

          <h2 className="mt-3 text-2xl font-bold text-[#173E70] sm:text-3xl">
            {t("reachUsExploreHeading")}
          </h2>

          <p className="mt-3 max-w-[760px] text-sm font-medium leading-7 text-[#596879] sm:text-base">
            {t("reachUsExploreDescription")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pages.map((page, index) => {
            const Icon = pageIcons[index];

            return (
              <Link
                key={page.link}
                to={page.link}
                className="group flex min-w-0 flex-col rounded-2xl border border-[#E7ECE9] bg-white/90 p-6 shadow-[0_5px_18px_rgba(23,62,112,0.045)] transition-all duration-300 hover:-translate-y-2 hover:border-[#C6DCCF] hover:shadow-[0_16px_30px_rgba(23,62,112,0.10)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d] transition-all duration-300 group-hover:bg-[#25845d] group-hover:text-white">
                    <Icon size={24} strokeWidth={1.8} />
                  </div>

                  <ArrowRight
                    size={20}
                    className="text-[#25845d] transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#173E70] transition-colors duration-300 group-hover:text-[#25845d]">
                  {page.title}
                </h3>

                <p className="mt-3 flex-1 text-sm font-medium leading-7 text-[#596879]">
                  {page.description}
                </p>

                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#25845d]">
                  {page.action}

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default ReachUsHome;
