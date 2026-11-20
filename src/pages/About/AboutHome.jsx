
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Building2,
  Images,
  Landmark,
  Users,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

const pageIcons = [Users, Images, Landmark];

function AboutHome() {
  const { language, t } = useLanguage();

  const isMarathi = language === "mr";

  const achievements = [
    t("aboutHomeAchievement1"),
    t("aboutHomeAchievement2"),
    t("aboutHomeAchievement3"),
  ];

  const pages = [
    {
      title: t("board"),
      description: t("aboutHomeBoardDescription"),
      link: "/about/board",
      action: t("aboutHomeBoardAction"),
    },
    {
      title: t("photoGallery"),
      description: t("aboutHomeGalleryDescription"),
      link: "/about/photo-gallery",
      action: t("aboutHomeGalleryAction"),
    },
    {
      title: t("aboutServices"),
      description: t("aboutHomeServicesDescription"),
      link: "/about/services",
      action: t("aboutHomeServicesAction"),
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
            {t("aboutHomeEyebrow")}
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
            {t("aboutHomeTitle")}
          </h1>

          <div className="mt-5 h-1 w-20 rounded-full bg-[#25845d]" />
        </div>
      </section>

      {/* BANK INTRODUCTION */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-14 sm:px-8 lg:pb-16">
        <div className="rounded-2xl border border-[#E6ECE8] bg-white/90 p-6 shadow-[0_5px_18px_rgba(23,62,112,0.045)] backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d]">
              <Building2 size={25} strokeWidth={1.8} />
            </div>

            <div className="min-w-0">
              <h2 className="text-xl font-bold leading-snug text-[#173E70] sm:text-2xl">
                {t("aboutHomeIntroductionHeading")}
              </h2>

              <p className="mt-5 text-sm font-medium leading-8 text-[#596879] sm:text-base">
                {t("aboutHomeIntroduction")}
              </p>

              <div className="mt-6 rounded-xl border border-[#DCE9E1] bg-[#F4F8F5] p-5">
                <p className="text-xs font-semibold leading-6 text-[#25845d] sm:text-sm">
                  {t("aboutHomeFinancialNote")}
                </p>

                <p className="mt-2 text-sm font-medium leading-7 text-[#596879] sm:text-base">
                  {t("aboutHomeFinancialDetails")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AWARDS AND ACHIEVEMENTS */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:pb-20">
        <div className="mb-8">
          <p
            className={`text-sm font-semibold uppercase text-[#25845d] ${
              isMarathi ? "tracking-normal" : "tracking-[0.16em]"
            }`}
          >
            {t("aboutHomeRecognitionEyebrow")}
          </p>

          <h2 className="mt-3 text-2xl font-bold text-[#173E70] sm:text-3xl">
            {t("aboutHomeAchievementsHeading")}
          </h2>

          <p className="mt-3 max-w-[760px] text-sm font-medium leading-7 text-[#596879] sm:text-base">
            {t("aboutHomeAchievementsDescription")}
          </p>
        </div>

        <div className="space-y-4">
          {achievements.map((achievement, index) => (
            <article
              key={index}
              className="group flex items-start gap-4 rounded-xl border border-[#E6ECE8] bg-white/90 p-5 shadow-[0_4px_14px_rgba(23,62,112,0.035)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#D6AD55] hover:shadow-[0_12px_30px_rgba(184,134,11,0.32)] sm:p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#25845d] group-hover:text-white group-hover:shadow-[0_0_20px_rgba(37,132,93,0.55)]">
                <Award size={21} strokeWidth={1.8} />
              </div>

              <p className="pt-1 text-sm font-medium leading-7 text-[#465568] sm:text-base">
                {achievement}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT US SUBPAGES */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-20 sm:px-8">
        <div className="mb-9">
          <p
            className={`text-sm font-semibold uppercase text-[#25845d] ${
              isMarathi ? "tracking-normal" : "tracking-[0.16em]"
            }`}
          >
            {t("aboutHomeExploreEyebrow")}
          </p>

          <h2 className="mt-3 text-2xl font-bold text-[#173E70] sm:text-3xl">
            {t("aboutHomeExploreHeading")}
          </h2>

          <p className="mt-3 max-w-[760px] text-sm font-medium leading-7 text-[#596879] sm:text-base">
            {t("aboutHomeExploreDescription")}
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

export default AboutHome;
