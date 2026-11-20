import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Images, Maximize2 } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

/* ============================================================
   AWARD IMAGES
============================================================ */

import award01 from "../../assets/about/awards/award-01.jpg";
import award02 from "../../assets/about/awards/award-02.jpg";
import award03 from "../../assets/about/awards/award-03.jpg";
import award04 from "../../assets/about/awards/award-04.jpg";
import award05 from "../../assets/about/awards/award-05.jpg";
import award06 from "../../assets/about/awards/award-06.jpg";
import award07 from "../../assets/about/awards/award-07.jpg";
import award08 from "../../assets/about/awards/award-08.jpg";

/* ============================================================
   AWARDS DATA
============================================================ */

const awards = [
  {
    image: award01,
    nameKey: "reachAwardsAward01",
  },
  {
    image: award02,
    nameKey: "reachAwardsAward02",
  },
  {
    image: award03,
    nameKey: "reachAwardsAward03",
  },
  {
    image: award04,
    nameKey: "reachAwardsAward04",
  },
  {
    image: award05,
    nameKey: "reachAwardsAward05",
  },
  {
    image: award06,
    nameKey: "reachAwardsAward06",
  },
  {
    image: award07,
    nameKey: "reachAwardsAward07",
  },
  {
    image: award08,
    nameKey: "reachAwardsAward08",
  },
];

/* ============================================================
   AWARDS PAGE
============================================================ */

function Awards() {
  const { language, t } = useLanguage();

  const isMarathi = language === "mr";

  const [selectedIndex, setSelectedIndex] = useState(null);

  const isLightboxOpen = selectedIndex !== null;

  /* ==========================================================
     LIGHTBOX CONTROLS
  ========================================================== */

  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? awards.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setSelectedIndex((current) =>
      current === awards.length - 1 ? 0 : current + 1,
    );
  };

  /* ==========================================================
     KEYBOARD NAVIGATION
  ========================================================== */

  useEffect(() => {
    if (!isLightboxOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === 0 ? awards.length - 1 : current - 1,
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === awards.length - 1 ? 0 : current + 1,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  /* ==========================================================
     PAGE RENDER
  ========================================================== */

  return (
    <main
      className={`relative min-h-screen overflow-hidden ${
        isMarathi
          ? '[font-family:"Nirmala_UI","Noto_Sans_Devanagari",sans-serif]'
          : "font-['Poppins']"
      }`}
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
      {/* ======================================================
          PAGE INTRODUCTION
      ====================================================== */}

      <section className="relative z-10">
        <div className="mx-auto max-w-[1200px] px-5 pb-12 pt-16 sm:px-8 lg:pb-16 lg:pt-20">
          <p
            className={`mb-5 text-sm font-semibold uppercase text-[#25845d] ${
              isMarathi ? "tracking-normal" : "tracking-[0.16em]"
            }`}
          >
            {t("reachAwardsEyebrow")}
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
            {t("reachAwardsTitle")}
          </h1>

          <div className="mt-5 h-1 w-20 rounded-full bg-[#25845d]" />

          <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-[#596879] sm:text-lg">
            {t("reachAwardsDescription")}
          </p>
        </div>
      </section>

      {/* ======================================================
          AWARDS GALLERY
      ====================================================== */}

      <section className="relative z-10 mx-auto max-w-[1400px] px-5 pb-20 sm:px-8">
        <div className="mb-9">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d]">
              <Images size={23} strokeWidth={1.8} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#173E70] sm:text-3xl">
                {t("reachAwardsGalleryHeading")}
              </h2>
            </div>
          </div>

          <p className="mt-4 max-w-[760px] text-sm font-medium leading-7 text-[#596879] sm:text-base">
            {t("reachAwardsGalleryDescription")}
          </p>
        </div>

        {/* AWARD IMAGE GRID */}

        <div className="flex flex-wrap justify-center gap-6">
          {awards.map((award, index) => (
            <button
              key={award.nameKey}
              type="button"
              onClick={() => openLightbox(index)}
              aria-label={`${t("reachAwardsView")} ${index + 1}`}
              className="group relative block w-full overflow-hidden rounded-2xl border-[0.5px] border-[#E6ECE8] bg-white p-1.5 text-left shadow-[0_5px_18px_rgba(23,62,112,0.045)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#C6DCCF] hover:shadow-[0_16px_30px_rgba(23,62,112,0.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25845d] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] xl:w-[calc((100%-4.5rem)/4)]"
            >
              {/* IMAGE */}

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#EDF2EF]">
                <img
                  src={award.image}
                  alt={`${t("reachAwardsImage")} ${index + 1}`}
                  loading="lazy"
                  className="block h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                />

                {/* HOVER OVERLAY */}

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#173E70]/0 transition-all duration-300 group-hover:bg-[#173E70]/25">
                  <div className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-white/95 text-[#25845d] opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <Maximize2 size={21} strokeWidth={2} />
                  </div>
                </div>
              </div>

              {/* AWARD NAME */}

              <div className="flex min-h-[88px] items-center justify-center px-3 py-4 text-center">
                <p className="text-sm font-semibold leading-6 text-[#173E70] transition-colors duration-200 group-hover:text-[#25845d] sm:text-[13px] lg:text-sm">
                  {t(award.nameKey)}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* ======================================================
          IMAGE LIGHTBOX
      ====================================================== */}

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#081525]/95 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={t("reachAwardsImage")}
          onClick={closeLightbox}
        >
          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={closeLightbox}
            aria-label={t("reachAwardsClose")}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:rotate-90 hover:bg-white/20 sm:right-7 sm:top-7"
          >
            <X size={23} />
          </button>

          {/* IMAGE COUNTER */}

          <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wider text-white sm:top-7 sm:text-sm">
            {selectedIndex + 1} / {awards.length}
          </div>

          {/* PREVIOUS BUTTON */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label={t("reachAwardsPrevious")}
            className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 sm:left-6 sm:h-14 sm:w-14"
          >
            <ChevronLeft size={30} />
          </button>

          {/* SELECTED IMAGE AND NAME */}

          <div
            className="flex h-full w-full flex-col items-center justify-center gap-4 px-9 pb-14 pt-16 sm:px-16"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              key={selectedIndex}
              src={awards[selectedIndex].image}
              alt={`${t("reachAwardsImage")} ${selectedIndex + 1}`}
              className="max-h-[75%] max-w-full rounded-lg object-contain shadow-[0_15px_60px_rgba(0,0,0,0.35)]"
            />

            <p className="max-w-3xl text-center text-sm font-semibold leading-6 text-white sm:text-base">
              {t(awards[selectedIndex].nameKey)}
            </p>
          </div>

          {/* NEXT BUTTON */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label={t("reachAwardsNext")}
            className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 sm:right-6 sm:h-14 sm:w-14"
          >
            <ChevronRight size={30} />
          </button>

          {/* KEYBOARD HINT */}

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-center text-[10px] font-medium tracking-wide text-white/65 sm:text-xs">
            {t("reachAwardsKeyboardHint")}
          </div>
        </div>
      )}
    </main>
  );
}

export default Awards;
