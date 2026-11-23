import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import housingBanner from "../../assets/homepage/housing-loan-banner.png";
import vehicleBanner from "../../assets/homepage/vehicle-loan-banner.png";
import educationBanner from "../../assets/homepage/education-loan-banner.png";
import personalBanner from "../../assets/homepage/personal-loan-banner.png";
import agricultureBanner from "../../assets/homepage/agriculture-loan-banner.png";

import housingBannerMobile from "../../assets/homepage/housing-loan-banner-mobile.png";
import vehicleBannerMobile from "../../assets/homepage/vehicle-loan-banner-mobile.png";
import educationBannerMobile from "../../assets/homepage/education-loan-banner-mobile.png";
import personalBannerMobile from "../../assets/homepage/personal-loan-banner-mobile.png";
import agricultureBannerMobile from "../../assets/homepage/agriculture-loan-banner-mobile.png";

const banners = [
  {
    src: housingBanner,
    mobileSrc: housingBannerMobile,
    alt: "Housing Loan promotion by Thane District Central Co-operative Bank",
    name: "Housing Loan",
  },
  {
    src: vehicleBanner,
    mobileSrc: vehicleBannerMobile,
    alt: "Vehicle Loan promotion by Thane District Central Co-operative Bank",
    name: "Vehicle Loan",
  },
  {
    src: educationBanner,
    mobileSrc: educationBannerMobile,
    alt: "Education Loan promotion by Thane District Central Co-operative Bank",
    name: "Education Loan",
  },
  {
    src: personalBanner,
    mobileSrc: personalBannerMobile,
    alt: "Personal Loan promotion by Thane District Central Co-operative Bank",
    name: "Personal Loan",
  },
  {
    src: agricultureBanner,
    mobileSrc: agricultureBannerMobile,
    alt: "Agriculture Loan promotion by Thane District Central Co-operative Bank",
    name: "Agriculture Loan",
  },
];

function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? banners.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % banners.length);
  };

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % banners.length);
    }, 5500);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      aria-label="Bank loan promotional banners"
      className="mt-0 w-full overflow-hidden bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      {/* Responsive banner container */}
      {/* <div className="group relative aspect-[3/1] w-full overflow-hidden bg-white max-[767px]:aspect-[4/5]"> */}
      <div className="group relative aspect-[3/1] w-full overflow-hidden bg-white max-[767px]:aspect-[6/7]">
        {banners.map((banner, index) => (
          <picture
            key={banner.src}
            className={`absolute inset-0 block h-full w-full transition-opacity duration-700 ease-in-out ${
              activeIndex === index
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          >
            {/* Mobile banner */}
            <source media="(max-width: 767px)" srcSet={banner.mobileSrc} />

            {/* Desktop banner */}
            <img
              src={banner.src}
              alt={banner.alt}
              className="h-full w-full object-contain max-[767px]:object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              fetchPriority={index === 0 ? "high" : "auto"}
              aria-hidden={activeIndex !== index}
            />
          </picture>
        ))}

        {/* Previous button */}
        <button
          type="button"
          onClick={showPrevious}
          aria-label="Previous banner"
          className="pointer-events-none absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE2E9] bg-white/85 text-[#173E70] opacity-0 shadow-md transition-all duration-300 hover:scale-105 hover:bg-white focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173E70] group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto sm:left-5 sm:h-11 sm:w-11 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-80"
        >
          <ChevronLeft size={23} />
        </button>

        {/* Next button */}
        <button
          type="button"
          onClick={showNext}
          aria-label="Next banner"
          className="pointer-events-none absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-[#DCE2E9] bg-white/85 text-[#173E70] opacity-0 shadow-md transition-all duration-300 hover:scale-105 hover:bg-white focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#173E70] group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto sm:right-5 sm:h-11 sm:w-11 [@media(hover:none)]:pointer-events-auto [@media(hover:none)]:opacity-80"
        >
          <ChevronRight size={23} />
        </button>
      </div>

      {/* Slide indicators */}
      <div className="flex items-center justify-center gap-2.5 bg-white py-3">
        {banners.map((banner, index) => (
          <button
            key={banner.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            aria-label={`Show ${banner.name} banner`}
            aria-current={activeIndex === index ? "true" : undefined}
            className={`h-2.5 rounded-full border border-[#173E70]/30 transition-all duration-300 ${
              activeIndex === index
                ? "w-7 bg-[#173E70]"
                : "w-2.5 bg-white hover:bg-[#DCE5F1]"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

export default HeroCarousel;
