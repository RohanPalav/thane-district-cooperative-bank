import { Link } from "react-router-dom";
import {
  ArrowRight,
  Coins,
  ClipboardCheck,
  Wallet,
  TrendingUp,
  Landmark,
  Banknote,
  CalendarDays,
  CircleDollarSign,
  Calculator,
  Percent,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

const loanFacilities = [
  {
    id: "personalLoan",
    path: "/loans/personal-loan",
    image: "/images/loans/personal_loan.png",
    imageAlt: "Personal loan illustration",
    title: {
      en: "Personal Loan",
      mr: "वैयक्तिक कर्ज",
    },
    description: {
      en: "Explore financing options for personal needs and planned expenses.",
      mr: "वैयक्तिक गरजा आणि नियोजित खर्चांसाठी उपलब्ध कर्ज पर्याय जाणून घ्या.",
    },
  },
  {
    id: "educationLoan",
    path: "/loans/education-loan",
    image: "/images/loans/education_loan.png",
    imageAlt: "Education loan illustration",
    title: {
      en: "Education Loan",
      mr: "शैक्षणिक कर्ज",
    },
    description: {
      en: "Learn about financing options that can support educational goals.",
      mr: "शैक्षणिक उद्दिष्टांसाठी उपलब्ध आर्थिक सहाय्याच्या पर्यायांची माहिती घ्या.",
    },
  },
  {
    id: "vehicleLoan",
    path: "/loans/vehicle-loan",
    image: "/images/loans/vehicle_loan.png",
    imageAlt: "Vehicle loan illustration",
    title: {
      en: "Vehicle Loan",
      mr: "वाहन कर्ज",
    },
    description: {
      en: "Explore loan options for purchasing a vehicle.",
      mr: "वाहन खरेदीसाठी उपलब्ध कर्ज पर्याय जाणून घ्या.",
    },
  },
  {
    id: "housingLoan",
    path: "/loans/housing-loan",
    image: "/images/loans/housing_loan.png",
    imageAlt: "Housing loan illustration",
    title: {
      en: "Housing Loan",
      mr: "गृह कर्ज",
    },
    description: {
      en: "Discover financing options for your housing requirements.",
      mr: "घराच्या गरजांसाठी उपलब्ध आर्थिक पर्यायांची माहिती घ्या.",
    },
  },
  {
    id: "goldLoan",
    path: "/loans/gold-loan",
    image: "/images/loans/gold_loan.png",
    imageAlt: "Gold loan illustration",
    title: {
      en: "Gold Loan",
      mr: "सोने तारण कर्ज",
    },
    description: {
      en: "Find out about loan facilities available against gold security.",
      mr: "सोने तारण ठेवून उपलब्ध असलेल्या कर्ज सुविधांची माहिती घ्या.",
    },
  },
];

const quickLinks = [
  {
    title: {
      en: "Loan Interest Rates",
      mr: "कर्ज व्याजदर",
    },
    description: {
      en: "View the applicable interest rates for the bank's loan facilities.",
      mr: "बँकेच्या कर्ज सुविधांसाठी लागू असलेले व्याजदर पहा.",
    },
    link: "/loans/interest-rates",
    Icon: Percent,
    action: {
      en: "View Interest Rates",
      mr: "व्याजदर पहा",
    },
  },
  {
    title: {
      en: "EMI Calculator",
      mr: "ईएमआय कॅल्क्युलेटर",
    },
    description: {
      en: "Estimate your monthly instalment using the loan amount, interest rate and repayment period.",
      mr: "कर्जाची रक्कम, व्याजदर आणि परतफेडीचा कालावधी वापरून मासिक हप्ता अंदाजे जाणून घ्या.",
    },
    link: "/services/emi-calculator",
    Icon: Calculator,
    action: {
      en: "Calculate EMI",
      mr: "ईएमआय मोजा",
    },
  },
];

const floatingIcons = [
  {
    Icon: Coins,
    position: "left-[5%] top-[9%]",
    size: 43,
    delay: "0s",
    duration: "9s",
  },
  {
    Icon: Wallet,
    position: "right-[8%] top-[12%]",
    size: 54,
    delay: "1s",
    duration: "11s",
  },
  {
    Icon: TrendingUp,
    position: "left-[8%] top-[43%]",
    size: 46,
    delay: "2s",
    duration: "10s",
  },
  {
    Icon: Landmark,
    position: "right-[6%] top-[42%]",
    size: 48,
    delay: "0.5s",
    duration: "12s",
  },
  {
    Icon: Banknote,
    position: "left-[4%] bottom-[17%]",
    size: 52,
    delay: "1.5s",
    duration: "10s",
  },
  {
    Icon: CalendarDays,
    position: "right-[5%] bottom-[20%]",
    size: 45,
    delay: "2.5s",
    duration: "11s",
  },
  {
    Icon: CircleDollarSign,
    position: "left-[47%] top-[34%]",
    size: 38,
    delay: "3s",
    duration: "9s",
  },
];

function LoansHome() {
  const { language } = useLanguage();

  const isMarathi = language === "mr";
  const lang = isMarathi ? "mr" : "en";

  const content = {
    eyebrow: isMarathi ? "कर्जाविषयी माहिती" : "UNDERSTANDING LOANS",

    mainTitle: isMarathi ? "कर्ज" : "Loans",

    subtitle: isMarathi
      ? "तुमच्या गरजांसाठी योग्य आर्थिक पर्याय"
      : "Financing Options for Your Needs",

    introduction: isMarathi
      ? "जीवनातील विविध गरजांसाठी कर्ज हा एक महत्त्वाचा आर्थिक पर्याय असू शकतो. योग्य कर्ज सुविधा निवडताना आपल्या गरजा, परतफेडीची क्षमता, व्याजदर आणि कर्जाचा कालावधी यांचा विचार करणे महत्त्वाचे आहे."
      : "Loans can be an important financial option for meeting different needs and planned expenses. Choosing a suitable loan involves understanding your requirements, repayment capacity, applicable interest rates and the repayment period.",

    guidanceTitle: isMarathi
      ? "कर्ज घेण्यापूर्वी काय विचारात घ्यावे?"
      : "Things to Consider Before Taking a Loan",

    guidanceDescription: isMarathi
      ? "कर्जासाठी अर्ज करण्यापूर्वी खालील बाबी समजून घेणे उपयुक्त ठरते."
      : "Before applying for a loan, it is useful to understand a few important aspects of borrowing.",

    guidance: [
      {
        Icon: ClipboardCheck,
        title: isMarathi ? "पात्रता आणि कागदपत्रे" : "Eligibility & Documents",
        description: isMarathi
          ? "संबंधित कर्जासाठी आवश्यक पात्रता आणि कागदपत्रांची माहिती घ्या."
          : "Check the eligibility requirements and documents needed for the relevant loan facility.",
      },
      {
        Icon: TrendingUp,
        title: isMarathi ? "व्याजदर आणि शुल्क" : "Interest Rates & Charges",
        description: isMarathi
          ? "लागू व्याजदर, प्रक्रिया शुल्क आणि इतर अटी तपासा."
          : "Review the applicable interest rate, processing fees and other charges.",
      },
      {
        Icon: Wallet,
        title: isMarathi ? "परतफेडीची क्षमता" : "Repayment Capacity",
        description: isMarathi
          ? "आपल्या उत्पन्नानुसार आणि खर्चानुसार परवडणारा हप्ता निवडा."
          : "Choose a repayment instalment that fits your income and regular expenses.",
      },
    ],

    facilitiesEyebrow: isMarathi
      ? "उपलब्ध कर्ज पर्याय"
      : "EXPLORE OUR OFFERINGS",

    facilitiesTitle: isMarathi
      ? "बँकेच्या कर्ज सुविधा"
      : "Loan Facilities Offered by the Bank",

    facilitiesDescription: isMarathi
      ? "आपल्या गरजेनुसार योग्य कर्ज सुविधा निवडा. प्रत्येक पर्यायाबद्दल अधिक माहिती जाणून घेण्यासाठी कार्ड निवडा."
      : "Explore the loan facilities offered by the bank. Select a category below to learn more about its details and requirements.",

    shortcutsEyebrow: isMarathi ? "उपयुक्त साधने" : "USEFUL BANKING TOOLS",

    shortcutsTitle: isMarathi
      ? "कर्जाशी संबंधित जलद दुवे"
      : "Quick Access to Loan Services",

    shortcutsDescription: isMarathi
      ? "व्याजदर तपासा, मासिक हप्त्याचा अंदाज घ्या किंवा जवळची शाखा शोधा."
      : "Check interest rates, estimate your monthly instalment or find a nearby branch.",

    noteTitle: isMarathi ? "अधिक माहितीसाठी" : "Need More Information?",

    noteDescription: isMarathi
      ? "प्रत्येक कर्ज सुविधेच्या पात्रता निकष, आवश्यक कागदपत्रे, व्याजदर आणि परतफेडीच्या अटी वेगवेगळ्या असू शकतात. अर्ज करण्यापूर्वी संबंधित कर्जाच्या तपशीलांची खात्री करा किंवा बँकेच्या शाखेशी संपर्क साधा."
      : "Eligibility criteria, required documents, interest rates and repayment terms may vary between loan facilities. Review the details of the relevant facility or contact a bank branch before applying.",

    explore: isMarathi ? "कर्ज सुविधा पहा" : "Explore Facility",
  };

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
      {/* FLOATING BACKGROUND ICONS */}

      <style>
        {`
          @keyframes loansFloating {
            0%, 100% {
              transform: translateY(0px) rotate(-5deg);
            }
            50% {
              transform: translateY(-18px) rotate(5deg);
            }
          }

          .loans-floating-icon {
            animation-name: loansFloating;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .loans-floating-icon {
              animation: none !important;
            }
          }
        `}
      </style>

      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        {floatingIcons.map(
          ({ Icon, position, size, delay, duration }, index) => (
            <div
              key={index}
              className={`loans-floating-icon absolute ${position} text-[#25845d]/[0.11]`}
              style={{
                animationDuration: duration,
                animationDelay: delay,
              }}
            >
              <Icon size={size} strokeWidth={1.5} />
            </div>
          ),
        )}
      </div>

      {/* INTRODUCTION */}

      <section className="relative z-10 bg-transparent">
        <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p
              className={`mb-5 text-sm font-semibold uppercase text-[#25845d] ${
                isMarathi ? "tracking-normal" : "tracking-[0.16em]"
              }`}
            >
              {content.eyebrow}
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
              {content.mainTitle}
            </h1>

            <h2 className="mt-4 text-2xl font-semibold leading-snug text-[#294d78] sm:text-3xl">
              {content.subtitle}
            </h2>

            <p className="mt-6 text-base font-medium leading-8 text-[#465568] sm:text-lg">
              {content.introduction}
            </p>
          </div>

          {/* RESPONSIBLE BORROWING GUIDANCE */}

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {content.guidance.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="group flex gap-4 rounded-2xl border border-[#E6ECE8] bg-white/90 p-6 shadow-[0_4px_15px_rgba(23,62,112,0.035)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C9DED1] hover:shadow-[0_14px_30px_rgba(23,62,112,0.08)]"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#25845d] group-hover:text-white">
                  <Icon size={25} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#173E70]">{title}</h3>

                  <p className="mt-2 text-sm font-medium leading-6 text-[#596879]">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOAN FACILITIES */}

      <section className="relative z-10 w-full bg-transparent">
        <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p
              className={`text-sm font-semibold uppercase text-[#25845d] ${
                isMarathi ? "tracking-normal" : "tracking-[0.16em]"
              }`}
            >
              {content.facilitiesEyebrow}
            </p>

            <h2 className="mt-3 text-2xl font-bold text-[#173E70] sm:text-3xl">
              {content.facilitiesTitle}
            </h2>

            <p className="mt-4 text-base font-medium leading-7 text-[#596879]">
              {content.facilitiesDescription}
            </p>
          </div>

          {/* LOAN FACILITY CARDS */}

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {loanFacilities.map(
              ({ id, path, image, imageAlt, title, description }) => (
                <Link
                  key={id}
                  to={path}
                  className="group relative flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#E7ECE9] bg-white/90 shadow-[0_5px_18px_rgba(23,62,112,0.045)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#C6DCCF] hover:shadow-[0_16px_30px_rgba(23,62,112,0.10)]"
                >
                  {/* LOAN ILLUSTRATION */}

                  <div className="relative flex h-[190px] items-center justify-center overflow-hidden bg-white sm:h-[210px]">
                    <div className="pointer-events-none absolute h-44 w-44 rounded-full border border-white/60 transition-transform duration-700 group-hover:scale-110" />

                    <img
                      src={image}
                      alt={imageAlt}
                      loading="lazy"
                      className={`relative z-10 h-full w-full object-contain p-3 transition-transform duration-700 ease-out ${
                        id === "personalLoan"
                          ? "scale-[1.08] group-hover:scale-[1.14]"
                          : "scale-[0.88] group-hover:scale-[0.94]"
                      }`}
                    />
                  </div>

                  {/* CARD INFORMATION */}

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-lg font-bold leading-snug text-[#173E70] transition-colors duration-300 group-hover:text-[#25845d]">
                        {title[lang]}
                      </h3>

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDF5F0] text-[#25845d] transition-all duration-300 group-hover:translate-x-1 group-hover:bg-[#25845d] group-hover:text-white">
                        <ArrowRight size={18} />
                      </div>
                    </div>

                    <p className="mt-3 flex-1 text-sm font-medium leading-6 text-[#596879]">
                      {description[lang]}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#25845d]">
                      {content.explore}

                      <ArrowRight
                        size={16}
                        className="transition-transform duration-300 group-hover:translate-x-2"
                      />
                    </div>
                  </div>
                </Link>
              ),
            )}
          </div>

          {/* QUICK ACCESS SHORTCUTS */}

          <div className="mt-12">
            <div className="mb-9 text-center">
              <p
                className={`text-sm font-semibold uppercase text-[#25845d] ${
                  isMarathi ? "tracking-normal" : "tracking-[0.16em]"
                }`}
              >
                {content.shortcutsEyebrow}
              </p>

              <h2 className="mt-3 text-2xl font-bold text-[#173E70] sm:text-3xl">
                {content.shortcutsTitle}
              </h2>

              <p className="mt-4 text-base font-medium leading-7 text-[#596879]">
                {content.shortcutsDescription}
              </p>
            </div>

            <div className="mx-auto grid max-w-[900px] grid-cols-1 gap-6 md:grid-cols-2">
              {quickLinks.map(({ title, description, link, Icon, action }) => (
                <Link
                  key={link}
                  to={link}
                  className="group flex flex-col rounded-2xl border border-[#E7ECE9] bg-white/90 p-6 shadow-[0_5px_18px_rgba(23,62,112,0.045)] transition-all duration-300 hover:-translate-y-2 hover:border-[#C6DCCF] hover:shadow-[0_14px_28px_rgba(23,62,112,0.09)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d] transition-all duration-300 group-hover:bg-[#25845d] group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <ArrowRight
                      size={20}
                      className="text-[#25845d] transition-transform duration-300 group-hover:translate-x-2"
                    />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#173E70] transition-colors duration-300 group-hover:text-[#25845d]">
                    {title[lang]}
                  </h3>

                  <p className="mt-2 flex-1 text-sm font-medium leading-6 text-[#596879]">
                    {description[lang]}
                  </p>

                  <div className="mt-5 text-sm font-semibold text-[#25845d]">
                    {action[lang]}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CUSTOMER GUIDANCE BANNER */}

          <div className="relative mt-12 overflow-hidden rounded-2xl bg-gradient-to-r from-[#173E70] to-[#245687] px-6 py-8 text-white shadow-lg sm:px-10">
            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -right-4 -bottom-36 h-64 w-64 rounded-full border border-white/10" />

            <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div>
                <h3 className="text-xl font-semibold">{content.noteTitle}</h3>

                <p className="mt-2 max-w-4xl text-sm leading-6 text-white/80">
                  {content.noteDescription}
                </p>
              </div>

              <Link
                to="/reach-us/branches"
                className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-[#173E70] transition-all duration-300 hover:-translate-y-1 hover:bg-[#eaf3ed] hover:shadow-lg"
              >
                {isMarathi ? "शाखा शोधा" : "Find a Branch"}
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LoansHome;
