import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  BookOpen,
  Building2,
  Images,
  Landmark,
  Users,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

const pageContent = {
  en: {
    eyebrow: "ABOUT THE BANK",
    title: "About Us",
    introductionHeading: "A Legacy of Trust and Banking Excellence",
    introduction:
      "The Thane District Central Co-op. Bank Ltd., Thane is the Bank registered under Maharashtra Co-op. Societies Act 1960 and licensed to carry on the Banking business from Reserve Bank of India. From 7 branches in 1958, we have grown to a network of 91 branches all over Thane District and a customer base of more than 1 million. We serve the customers with all the Banking facilities like Demand Deposits, Time Deposits, Loans and Advances for various sectors and purposes.",
    financialNote:
      "The following financial figures are historical figures reported as on 31st March 2012.",
    financialDetails:
      "As on 31st March 2012, our deposits were Rs. 3464.57 Crores and our loans were Rs. 1662.08 Crores. With a profit of Rs. 29.10 Crores and working capital of Rs. 4082.69 Crores, we were marching ahead along with our esteemed customers.",
    achievementsHeading: "Awards & Achievements",
    achievementsDescription:
      "Some of the recognitions and achievements highlighted by the Bank.",
    achievements: [
      "“Late. Vaikunthabhai Mehta best District Co-op. Bank” award in Maharashtra State for the last six years in a row (2008, 2009, 2010, 2011, 2012).",
      "Best performance award for work of Self Help Group (100% Linkage) by NABARD for the last six years in a row.",
      "“Dr. Dilip Sathe Financial Health award” by Mumbai Marathi Newspaper Author Sangh, Mumbai for the year 2008.",
    ],
    exploreEyebrow: "EXPLORE MORE",
    exploreHeading: "Discover More About Our Bank",
    exploreDescription:
      "Learn about the people, moments and banking services that form an important part of our institution.",
    pages: [
      {
        title: "Board",
        description:
          "Explore information about the Board and the leadership of the Bank.",
        link: "/about/board",
        action: "View Board",
      },
      {
        title: "Photo Gallery",
        description:
          "Take a look at photographs and important moments associated with the Bank.",
        link: "/about/photo-gallery",
        action: "View Gallery",
      },
      {
        title: "Services",
        description:
          "Discover the various banking and net banking services offered by the Bank.",
        link: "/about/services",
        action: "Explore Services",
      },
    ],
  },

  mr: {
    eyebrow: "बँकेविषयी",
    title: "आमच्याविषयी",
    introductionHeading: "विश्वास आणि बँकिंग सेवेचा वारसा",
    introduction:
      "ठाणे जिल्हा मध्यवर्ती सहकारी बँक लिमिटेड, ठाणे ही महाराष्ट्र सहकारी संस्था अधिनियम १९६० अंतर्गत नोंदणीकृत असून भारतीय रिझर्व्ह बँकेकडून बँकिंग व्यवसाय करण्यासाठी परवानाधारक आहे. १९५८ मध्ये ७ शाखांपासून सुरू झालेला बँकेचा प्रवास आज संपूर्ण ठाणे जिल्ह्यातील ९१ शाखांच्या जाळ्यापर्यंत आणि १० लाखांहून अधिक ग्राहकांपर्यंत पोहोचला आहे. बँक आपल्या ग्राहकांना मागणी ठेवी, मुदत ठेवी, विविध क्षेत्रांसाठी कर्जे आणि आगाऊ रक्कम यांसारख्या बँकिंग सुविधा पुरवते.",
    financialNote:
      "खालील आर्थिक आकडेवारी ३१ मार्च २०१२ रोजी नोंदवलेल्या ऐतिहासिक आकडेवारीवर आधारित आहे.",
    financialDetails:
      "३१ मार्च २०१२ रोजी बँकेच्या ठेवी रु. ३४६४.५७ कोटी आणि कर्जे रु. १६६२.०८ कोटी होती. रु. २९.१० कोटी नफा आणि रु. ४०८२.६९ कोटी खेळते भांडवलासह बँकेने आपल्या ग्राहकांच्या सहकार्याने प्रगती केली.",
    achievementsHeading: "पुरस्कार आणि उपलब्धी",
    achievementsDescription:
      "बँकेने नमूद केलेले काही महत्त्वाचे पुरस्कार आणि सन्मान.",
    achievements: [
      "महाराष्ट्र राज्यात सलग सहा वर्षे (२००८, २००९, २०१०, २०११, २०१२) “कै. वैकुंठभाई मेहता उत्कृष्ट जिल्हा सहकारी बँक” पुरस्कार.",
      "नाबार्डतर्फे स्वयं-सहायता गटांच्या (१००% लिंकेज) कार्यासाठी सलग सहा वर्षे उत्कृष्ट कामगिरी पुरस्कार.",
      "मुंबई मराठी वृत्तपत्र लेखक संघ, मुंबई यांच्यातर्फे २००८ सालासाठी “डॉ. दिलीप साठे फायनान्शियल हेल्थ पुरस्कार”.",
    ],
    exploreEyebrow: "अधिक माहिती",
    exploreHeading: "आमच्या बँकेविषयी अधिक जाणून घ्या",
    exploreDescription:
      "बँकेचे संचालक मंडळ, छायाचित्रे आणि बँकिंग सेवांविषयी अधिक माहिती जाणून घ्या.",
    pages: [
      {
        title: "संचालक मंडळ",
        description: "बँकेचे संचालक मंडळ आणि नेतृत्व यांची माहिती जाणून घ्या.",
        link: "/about/board",
        action: "मंडळ पहा",
      },
      {
        title: "छायाचित्र दालन",
        description: "बँकेशी संबंधित छायाचित्रे आणि महत्त्वाचे क्षण पाहा.",
        link: "/about/photo-gallery",
        action: "छायाचित्रे पहा",
      },
      {
        title: "सेवा",
        description:
          "बँकेच्या विविध बँकिंग आणि नेट बँकिंग सेवांची माहिती घ्या.",
        link: "/about/services",
        action: "सेवा पहा",
      },
    ],
  },
};

const pageIcons = [Users, Images, Landmark];

function AboutHome() {
  const { language } = useLanguage();

  const isMarathi = language === "mr";
  const content = pageContent[isMarathi ? "mr" : "en"];

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
            {content.eyebrow}
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
            {content.title}
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
                {content.introductionHeading}
              </h2>

              <p className="mt-5 text-sm font-medium leading-8 text-[#596879] sm:text-base">
                {content.introduction}
              </p>

              <div className="mt-6 rounded-xl border border-[#DCE9E1] bg-[#F4F8F5] p-5">
                <p className="text-xs font-semibold leading-6 text-[#25845d] sm:text-sm">
                  {content.financialNote}
                </p>

                <p className="mt-2 text-sm font-medium leading-7 text-[#596879] sm:text-base">
                  {content.financialDetails}
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
            {isMarathi ? "आमचे यश" : "OUR RECOGNITION"}
          </p>

          <h2 className="mt-3 text-2xl font-bold text-[#173E70] sm:text-3xl">
            {content.achievementsHeading}
          </h2>

          <p className="mt-3 max-w-[760px] text-sm font-medium leading-7 text-[#596879] sm:text-base">
            {content.achievementsDescription}
          </p>
        </div>

        <div className="space-y-4">
          {content.achievements.map((achievement, index) => (
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
            {content.exploreEyebrow}
          </p>

          <h2 className="mt-3 text-2xl font-bold text-[#173E70] sm:text-3xl">
            {content.exploreHeading}
          </h2>

          <p className="mt-3 max-w-[760px] text-sm font-medium leading-7 text-[#596879] sm:text-base">
            {content.exploreDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {content.pages.map((page, index) => {
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
