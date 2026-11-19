import {
  Download,
  ExternalLink,
  FileText,
  Search,
  ShieldCheck,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { Link } from "react-router-dom";

const documents = [
  {
    id: "annual-report-2025-2026",
    title: {
      en: "Annual Ahwal 2025–2026",
      mr: "वार्षिक अहवाल २०२५–२०२६",
    },
    file: "yearly_report2026.pdf",
  },
  {
    id: "rtgs-neft-form",
    title: {
      en: "Application Form for funds transfer through RTGS/NEFT",
      mr: "RTGS/NEFT द्वारे निधी हस्तांतरणासाठी अर्ज",
    },
    file: "fund_transfer_form.pdf",
  },
  {
    id: "annual-report-2024-2025",
    title: {
      en: "Annual Ahwal 2024–2025",
      mr: "वार्षिक अहवाल २०२४–२०२५",
    },
    file: "3_Account_Pages.pdf",
  },
  {
    id: "deaf-a-b",
    title: {
      en: "DEAF Funds Account A to B up-to 31-12-2025",
      mr: "DEAF निधी खाते A ते B (३१-१२-२०२५ पर्यंत)",
    },
    file: "DEAF-Funds-Account-1-to-9-A-to-B-up-to-31-12-2025.pdf",
  },
  {
    id: "deaf-c-f",
    title: {
      en: "DEAF Funds Account C to F up-to 31-12-2025",
      mr: "DEAF निधी खाते C ते F (३१-१२-२०२५ पर्यंत)",
    },
    file: "DEAF-Funds-Accounts-Details-C-to-F-up-to-31-12-2025.pdf",
  },
  {
    id: "deaf-g-i",
    title: {
      en: "DEAF Funds Account G to I up-to 31-12-2025",
      mr: "DEAF निधी खाते G ते I (३१-१२-२०२५ पर्यंत)",
    },
    file: "DEAF-Funds-Accounts-Details-G-to-I-up-to-31-12-2025.pdf",
  },
  {
    id: "deaf-j-k",
    title: {
      en: "DEAF Funds Account J to K up-to 31-12-2025",
      mr: "DEAF निधी खाते J ते K (३१-१२-२०२५ पर्यंत)",
    },
    file: "DEAF-Funds-Accounts-Details-J-to-K-up-to-31-12-2025.pdf",
  },
  {
    id: "deaf-l-n",
    title: {
      en: "DEAF Funds Account L to N up-to 31-12-2025",
      mr: "DEAF निधी खाते L ते N (३१-१२-२०२५ पर्यंत)",
    },
    file: "DEAF-Funds-Accounts-Details-L-to-N-up-to-31-12-2025.pdf",
  },
  {
    id: "deaf-o-q",
    title: {
      en: "DEAF Funds Account O to Q up-to 31-12-2025",
      mr: "DEAF निधी खाते O ते Q (३१-१२-२०२५ पर्यंत)",
    },
    file: "DEAF-Funds-Accounts-Details-O-to-Q-up-to-31-12-2025.pdf",
  },
  {
    id: "deaf-r-s",
    title: {
      en: "DEAF Funds Account R to S up-to 31-12-2025",
      mr: "DEAF निधी खाते R ते S (३१-१२-२०२५ पर्यंत)",
    },
    file: "DEAF-Funds-Accounts-Details-R-to-S-up-to-31-12-2025.pdf",
  },
  {
    id: "deaf-t-z",
    title: {
      en: "DEAF Funds Account T to Z up-to 31-12-2025",
      mr: "DEAF निधी खाते T ते Z (३१-१२-२०२५ पर्यंत)",
    },
    file: "DEAF-Funds-Accounts-Details-T-to-Z-up-to-31-12-2025.pdf",
  },
];

const externalResources = {
  deafSearch:
    "https://thanedcc.bank.in/wp-content/uploads/2026/09/deaf_list_search.html",
  privacyPolicy: "https://mobile.thanedccb.com/TdccPrivacyPolicy.html",
};

function Downloads() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";

  const text = {
    eyebrow: isMarathi
      ? "बँकिंग आणि ग्राहक सेवा"
      : "BANKING & CUSTOMER SERVICES",
    heading: isMarathi ? "डाउनलोड्स" : "Downloads",
    description: isMarathi
      ? "आवश्यक बँकिंग दस्तऐवज आणि अर्ज येथे सहजपणे डाउनलोड करा."
      : "Access and download important banking documents, forms and resources.",
    download: isMarathi ? "डाउनलोड करा" : "Download PDF",
    deafHeading: isMarathi ? "DEAF खाते शोध" : "DEAF Account Search",
    deafDescription: isMarathi
      ? "DEAF खाते ग्राहकांची माहिती शोधण्यासाठी खालील दुवा वापरा."
      : "Search for customers with DEAF accounts using the link below.",
    deafSearch: isMarathi
      ? "DEAF खाते ग्राहक शोधा"
      : "Search DEAF Account Customers",
    privacyHeading: isMarathi
      ? "मोबाईल बँकिंग गोपनीयता धोरण"
      : "Mobile Banking Privacy Policy",
    privacyDescription: isMarathi
      ? "मोबाईल बँकिंगशी संबंधित गोपनीयता धोरण वाचा."
      : "Read the privacy policy applicable to mobile banking services.",
    openPage: isMarathi ? "पृष्ठ उघडा" : "Open page",
    documentsHeading: isMarathi ? "उपलब्ध दस्तऐवज" : "Available Documents",
  };

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
        className="pointer-events-none absolute -left-32 top-40 -z-10 h-80 w-80 rounded-full bg-[#25845d]/[0.05] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-96 w-96 rounded-full bg-[#173E70]/[0.05] blur-3xl"
      />

      <div className="mx-auto max-w-[1200px] px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        {/* Page heading */}
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#25845d]">
            {text.eyebrow}
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
            {text.heading}
          </h1>

          <p className="mt-5 text-base font-medium leading-8 text-[#52677C] sm:text-lg">
            {text.description}
          </p>
        </div>

        {/* Available documents */}
        <section>
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E5F3EA] text-[#25845d]">
              <FileText size={22} />
            </div>

            <h2 className="text-2xl font-semibold text-[#173E70] sm:text-3xl">
              {text.documentsHeading}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {documents.map((document) => (
              <article
                key={document.id}
                className="group flex min-h-[190px] flex-col justify-between rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-[0_5px_18px_rgba(23,62,112,0.045)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#C6DCCF] hover:shadow-[0_16px_30px_rgba(23,62,112,0.10)] sm:p-7"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E5F3EA] text-[#25845d] transition-all duration-300 group-hover:bg-[#25845d] group-hover:text-white">
                    <FileText size={24} />
                  </div>

                  <h3 className="pt-1 text-base font-semibold leading-7 text-[#173E70] sm:text-lg">
                    {document.title[isMarathi ? "mr" : "en"]}
                  </h3>
                </div>

                <div className="mt-6">
                  <a
                    href={`/documents/${document.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-[#173E70] px-5 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#25845d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25845d]"
                    aria-label={`${text.download}: ${document.title[isMarathi ? "mr" : "en"]}`}
                  >
                    <Download size={17} />
                    {text.download}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Additional resources */}
        <section className="mt-14">
          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E5F3EA] text-[#25845d]">
              <ShieldCheck size={22} />
            </div>

            <h2 className="text-2xl font-semibold text-[#173E70] sm:text-3xl">
              {isMarathi ? "इतर उपयुक्त माहिती" : "Additional Resources"}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {/* DEAF search */}
            <article className="rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-[0_5px_18px_rgba(23,62,112,0.045)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C6DCCF] hover:shadow-[0_16px_30px_rgba(23,62,112,0.10)] sm:p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5F3EA] text-[#25845d]">
                <Search size={24} />
              </div>

              <h3 className="text-lg font-semibold text-[#173E70]">
                {text.deafHeading}
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-[#52677C]">
                {text.deafDescription}
              </p>

              <a
                href={externalResources.deafSearch}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#173E70] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#25845d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25845d]"
              >
                <Search size={17} />
                {text.deafSearch}
                <ExternalLink size={15} />
              </a>
            </article>

            {/* Mobile banking privacy policy */}
            <article className="rounded-2xl border border-[#E7ECE9] bg-white p-6 shadow-[0_5px_18px_rgba(23,62,112,0.045)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#C6DCCF] hover:shadow-[0_16px_30px_rgba(23,62,112,0.10)] sm:p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E5F3EA] text-[#25845d]">
                <ShieldCheck size={24} />
              </div>

              <h3 className="text-lg font-semibold text-[#173E70]">
                {text.privacyHeading}
              </h3>

              <p className="mt-3 text-sm font-medium leading-7 text-[#52677C]">
                {text.privacyDescription}
              </p>

              <Link
                to="/downloads/mobile-banking-privacy-policy"
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#173E70] px-5 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#25845d] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25845d]"
              >
                <ExternalLink size={17} />
                {text.openPage}
              </Link>
            </article>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Downloads;
