import { Download, FileText, ShieldCheck } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

import chequeBanner from "../../assets/homepage/positive-pay-cheque-banner.png";

const documents = {
  en: [
    {
      label: "Download PPS General Guidelines",
      file: "/documents/PPS_General_Guidlines.pdf",
    },
    {
      label: "Download PPS Form",
      file: "/documents/PPS-Form.pdf",
    },
  ],
  mr: [
    {
      label: "पीपीएस सामान्य मार्गदर्शक तत्त्वे डाउनलोड करा",
      file: "/documents/PPS_General_Guidlines.pdf",
    },
    {
      label: "पीपीएस अर्ज डाउनलोड करा",
      file: "/documents/PPS-Form.pdf",
    },
  ],
};

function PositivePay() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const pageDocuments = isMarathi ? documents.mr : documents.en;

  return (
    <main
      className={`relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-[#F1F8F4] via-[#F8FBF8] to-[#EDF4FA] ${
        isMarathi
          ? '[font-family:"Nirmala_UI","Noto_Sans_Devanagari",sans-serif]'
          : "font-['Poppins']"
      }`}
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 h-80 w-80 rounded-full bg-[#25845d]/[0.055] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 -z-10 h-96 w-96 rounded-full bg-[#173E70]/[0.055] blur-3xl"
      />

      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        {/* Page heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#25845d]">
            {isMarathi
              ? "बँकिंग आणि ग्राहक सेवा"
              : "BANKING & CUSTOMER SERVICES"}
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
            {isMarathi ? "पॉझिटिव्ह पे" : "Positive Pay"}
          </h1>
        </div>

        {/* Cheque banner */}
        <div className="mx-auto mt-10 max-w-[900px] overflow-hidden rounded-2xl border border-[#E7ECE9] bg-white p-3 shadow-[0_8px_28px_rgba(23,62,112,0.07)] sm:mt-12 sm:p-5">
          <img
            src={chequeBanner}
            alt={
              isMarathi
                ? "धनादेश भरत असलेली व्यक्ती"
                : "A person writing a cheque"
            }
            className="block h-auto w-full rounded-xl object-contain"
          />
        </div>

        {/* Document downloads */}
        <section className="mx-auto mt-14 max-w-[1050px] sm:mt-16">
          <div className="mb-8 text-center">
            <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5F3EA] text-[#25845d]">
              <ShieldCheck size={25} strokeWidth={1.9} />
            </div>

            <h2 className="text-2xl font-semibold text-[#173E70] sm:text-3xl">
              {isMarathi ? "संबंधित दस्तऐवज" : "Related Documents"}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
            {pageDocuments.map((document) => (
              <a
                key={document.file}
                href={document.file}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${document.label} - opens in a new tab`}
                className="group flex min-h-[210px] flex-col items-center justify-center rounded-2xl border border-[#E7ECE9] bg-white p-7 text-center shadow-[0_5px_18px_rgba(23,62,112,0.045)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#C6DCCF] hover:shadow-[0_16px_30px_rgba(23,62,112,0.10)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25845d]"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E5F3EA] text-[#25845d] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#25845d] group-hover:text-white">
                  <FileText size={31} strokeWidth={1.8} />
                </div>

                <span className="text-lg font-semibold leading-relaxed text-[#173E70] transition-colors duration-300 group-hover:text-[#25845d] sm:text-xl">
                  {document.label}
                </span>

                <span className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#173E70] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 group-hover:bg-[#25845d]">
                  <Download size={17} />
                  {isMarathi ? "डाउनलोड करा" : "Download PDF"}
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default PositivePay;
