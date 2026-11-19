import { useLanguage } from "../../context/LanguageContext";

import bankAward from "../../assets/homepage/bank-award.png";
import womenTraining from "../../assets/homepage/women-training.png";

function HomeGallery() {
  const { language } = useLanguage();

  const content =
    language === "mr"
      ? {
          heading: "छायाचित्र दालन",
          description: "बँकेच्या उपक्रमांची आणि कार्यक्रमांची काही क्षणचित्रे.",
          award: "बँकेचा पुरस्कार",
          training: "महिला प्रशिक्षण कार्यक्रम",
        }
      : {
          heading: "Photo Gallery",
          description: "A glimpse of the bank’s activities and events.",
          award: "Bank Award",
          training: "Women’s Training Programme",
        };

  const galleryItems = [
    {
      src: bankAward,
      alt: content.award,
      title: content.award,
    },
    {
      src: womenTraining,
      alt: content.training,
      title: content.training,
    },
  ];

  return (
    <section className="border-t border-[#E5E9EF] bg-[#F8F9FB] py-12 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-[#173E70] sm:text-3xl">
            {content.heading}
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#596574] sm:text-base">
            {content.description}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {galleryItems.map((item) => (
            <figure
              key={item.title}
              className="overflow-hidden border border-[#DCE2E9] bg-white shadow-sm"
            >
              <div className="flex min-h-[220px] items-center justify-center bg-white p-3 sm:min-h-[280px]">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="max-h-[360px] w-full object-contain"
                />
              </div>

              <figcaption className="border-t border-[#E5E9EF] px-4 py-3 font-semibold text-[#263D70]">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HomeGallery;
