import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Images, Maximize2 } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// GALLERY PHOTOGRAPHS
import gallery01 from "../../assets/about/gallery/gallery-01.jpg";
import gallery02 from "../../assets/about/gallery/gallery-02.jpg";
import gallery03 from "../../assets/about/gallery/gallery-03.jpg";
import gallery04 from "../../assets/about/gallery/gallery-04.jpg";
import gallery05 from "../../assets/about/gallery/gallery-05.jpg";
import gallery06 from "../../assets/about/gallery/gallery-06.jpg";
import gallery07 from "../../assets/about/gallery/gallery-07.jpg";
import gallery08 from "../../assets/about/gallery/gallery-08.jpg";
import gallery09 from "../../assets/about/gallery/gallery-09.jpg";
import gallery10 from "../../assets/about/gallery/gallery-10.jpg";
import gallery11 from "../../assets/about/gallery/gallery-11.jpg";
import gallery12 from "../../assets/about/gallery/gallery-12.jpg";
import gallery13 from "../../assets/about/gallery/gallery-13.jpg";
import gallery14 from "../../assets/about/gallery/gallery-14.jpg";

const galleryImages = [
  gallery01,
  gallery02,
  gallery03,
  gallery04,
  gallery05,
  gallery06,
  gallery07,
  gallery08,
  gallery09,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
];

function PhotoGallery() {
  const { language, t } = useLanguage();

  const isMarathi = language === "mr";

  const [selectedIndex, setSelectedIndex] = useState(null);

  const isLightboxOpen = selectedIndex !== null;

  // OPEN THE SELECTED IMAGE
  const openLightbox = (index) => {
    setSelectedIndex(index);
  };

  // CLOSE THE LIGHTBOX
  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  // SHOW PREVIOUS IMAGE
  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? galleryImages.length - 1 : current - 1,
    );
  };

  // SHOW NEXT IMAGE
  const showNext = () => {
    setSelectedIndex((current) =>
      current === galleryImages.length - 1 ? 0 : current + 1,
    );
  };

  // KEYBOARD NAVIGATION
  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

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
            {t("aboutGalleryEyebrow")}
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
            {t("aboutGalleryTitle")}
          </h1>

          <div className="mt-5 h-1 w-20 rounded-full bg-[#25845d]" />

          <p className="mt-6 max-w-3xl text-base font-medium leading-8 text-[#596879] sm:text-lg">
            {t("aboutGalleryDescription")}
          </p>
        </div>
      </section>

      {/* GALLERY */}

      <section className="relative z-10 mx-auto max-w-[1400px] px-5 pb-20 sm:px-8">
        <div className="mb-9">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d]">
              <Images size={23} strokeWidth={1.8} />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#173E70] sm:text-3xl">
                {t("aboutGalleryHeading")}
              </h2>
            </div>
          </div>

          <p className="mt-4 max-w-[760px] text-sm font-medium leading-7 text-[#596879] sm:text-base">
            {t("aboutGalleryGalleryDescription")}
          </p>
        </div>

        {/* UNIFORM IMAGE GRID */}

        <div className="flex flex-wrap justify-center gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              type="button"
              onClick={() => openLightbox(index)}
              aria-label={`${t("aboutGalleryView")} ${index + 1}`}
              className="group relative block w-full overflow-hidden rounded-2xl border-[0.5px] border-[#E6ECE8] bg-white p-1.5 text-left shadow-[0_5px_18px_rgba(23,62,112,0.045)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#C6DCCF] hover:shadow-[0_16px_30px_rgba(23,62,112,0.14)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25845d] sm:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] xl:w-[calc((100%-4.5rem)/4)]"
            >
              {/* FIXED IMAGE AREA */}

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#EDF2EF]">
                <img
                  src={image}
                  alt={`${t("aboutGalleryImage")} ${index + 1}`}
                  loading="lazy"
                  className="block h-full w-full object-contain transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                />

                {/* IMAGE HOVER OVERLAY */}

                <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#173E70]/0 transition-all duration-300 group-hover:bg-[#173E70]/25">
                  <div className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-white/95 text-[#25845d] opacity-0 shadow-lg transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                    <Maximize2 size={21} strokeWidth={2} />
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* IMAGE LIGHTBOX */}

      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#081525]/95 p-4 backdrop-blur-sm sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={t("aboutGalleryImage")}
          onClick={closeLightbox}
        >
          {/* CLOSE BUTTON */}

          <button
            type="button"
            onClick={closeLightbox}
            aria-label={t("aboutGalleryClose")}
            className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:rotate-90 hover:bg-white/20 sm:right-7 sm:top-7"
          >
            <X size={23} />
          </button>

          {/* IMAGE COUNTER */}

          <div className="absolute left-1/2 top-5 -translate-x-1/2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wider text-white sm:top-7 sm:text-sm">
            {selectedIndex + 1} / {galleryImages.length}
          </div>

          {/* PREVIOUS BUTTON */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label={t("aboutGalleryPrevious")}
            className="absolute left-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 sm:left-6 sm:h-14 sm:w-14"
          >
            <ChevronLeft size={30} />
          </button>

          {/* SELECTED IMAGE */}

          <div
            className="flex h-full w-full items-center justify-center px-9 pb-12 pt-16 sm:px-16"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              key={selectedIndex}
              src={galleryImages[selectedIndex]}
              alt={`${t("aboutGalleryImage")} ${selectedIndex + 1}`}
              className="max-h-full max-w-full rounded-lg object-contain shadow-[0_15px_60px_rgba(0,0,0,0.35)]"
            />
          </div>

          {/* NEXT BUTTON */}

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label={t("aboutGalleryNext")}
            className="absolute right-2 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:bg-white/20 sm:right-6 sm:h-14 sm:w-14"
          >
            <ChevronRight size={30} />
          </button>

          {/* BOTTOM KEYBOARD HINT */}

          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-medium tracking-wide text-white/65">
            {t("aboutGalleryKeyboardHint")}
          </div>
        </div>
      )}
    </main>
  );
}

export default PhotoGallery;
