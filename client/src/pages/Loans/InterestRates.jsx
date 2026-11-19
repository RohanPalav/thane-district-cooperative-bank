import { useMemo, useState } from "react";
import {
  Search,
  Percent,
  Info,
  Coins,
  Wallet,
  PiggyBank,
  TrendingUp,
  CalendarDays,
} from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const loanRates = [
  {
    id: 1,
    name: "Vehicle Loan (Motor Cycle)",
    mr: "दुचाकी वाहन कर्ज",
    rate: "10%",
    method: "E.M.I.",
  },
  {
    id: 2,
    name: "Non Form Sector Loan",
    mr: "असंघटित क्षेत्र कर्ज",
    rate: "11%",
    method: "Simple Interest",
  },
  {
    id: 3,
    name: "Personal Loan",
    mr: "वैयक्तिक कर्ज",
    rate: "13%",
    method: "Simple Interest",
  },
  {
    id: 4,
    name: "Mortgage Loan",
    mr: "तारण कर्ज",
    rate: "12%",
    method: "E.M.I.",
  },
  {
    id: 5,
    name: "Vehicle Loan (Private Use)",
    mr: "खासगी वापरासाठी वाहन कर्ज",
    rate: "9.75%",
    method: "E.M.I.",
  },
  {
    id: 6,
    name: "Vehicle Loan (Commercial Use)",
    mr: "व्यावसायिक वापरासाठी वाहन कर्ज",
    rate: "11%",
    method: "E.M.I.",
  },
  {
    id: 7,
    name: "Housing Loan",
    mr: "गृह कर्ज",
    rate: "8.75%",
    method: "E.M.I.",
  },
  {
    id: 8,
    name: "Business Loan",
    mr: "व्यवसाय कर्ज",
    rate: "9.75%",
    method: "E.M.I.",
  },
  {
    id: 9,
    name: "Business Development Loan",
    mr: "व्यवसाय विकास कर्ज",
    rate: "12%",
    method: "Simple Interest",
  },
  {
    id: 10,
    name: "Business Clean Cash Credit Loan",
    mr: "व्यवसाय क्लीन कॅश क्रेडिट कर्ज",
    rate: "12%",
    method: "Simple Interest",
  },
  {
    id: 11,
    name: "Tourism Loan",
    mr: "पर्यटन कर्ज",
    rate: "12%",
    method: "E.M.I.",
  },
  {
    id: 12,
    name: "Teacher’s Salary Over Draft Loan",
    mr: "शिक्षक वेतन ओव्हरड्राफ्ट कर्ज",
    rate: "12%",
    method: "Simple Interest",
  },
  {
    id: 13,
    name: "Gold Loan",
    mr: "सोने तारण कर्ज",
    rate: "11.50%",
    method: "Simple Interest",
  },
  {
    id: 14,
    name: "Gold Loan (For Farmers)",
    mr: "शेतकऱ्यांसाठी सोने तारण कर्ज",
    rate: "10.50%",
    method: "Simple Interest",
  },
  {
    id: 15,
    name: "Society",
    mr: "संस्था कर्ज",
    rate: "7.75%",
    method: "Simple Interest",
  },
  {
    id: 16,
    name: "Article Loan",
    mr: "वस्तू तारण कर्ज",
    rate: "12%",
    method: "Simple Interest",
  },
  {
    id: 17,
    name: "Salary Loan",
    mr: "वेतन कर्ज",
    rate: "11%",
    method: "E.M.I.",
  },
  {
    id: 18,
    name: "Education Loan (For Male)",
    mr: "पुरुषांसाठी शैक्षणिक कर्ज",
    rate: "9.50%",
    method: "Simple Interest",
  },
  {
    id: 19,
    name: "Education Loan (For Female)",
    mr: "महिलांसाठी शैक्षणिक कर्ज",
    rate: "9%",
    method: "Simple Interest",
  },
  {
    id: 20,
    name: "Salary Increment Loan",
    mr: "वेतनवाढ कर्ज",
    rate: "11%",
    method: "E.M.I.",
  },
  {
    id: 21,
    name: "New Laptop Purchase Loan",
    mr: "नवीन लॅपटॉप खरेदी कर्ज",
    rate: "10%",
    method: "Simple Interest",
  },
  {
    id: 22,
    name: "Small Business Loan",
    mr: "लघु व्यवसाय कर्ज",
    rate: "11%",
    method: "Simple Interest",
  },
];

const content = {
  en: {
    eyebrow: "LOAN INFORMATION",
    title: "Loan Interest Rates",
    description:
      "Explore the interest rates applicable to various loan products offered by The Thane District Central Co-operative Bank Ltd.",
    searchPlaceholder: "Search loan type...",
    loanType: "Type of Loan",
    interestRate: "Rate of Interest",
    calculation: "Interest Calculation",
    noResults: "No matching loan categories found.",
    noteTitle: "Important Information",
    note: "The interest rates displayed above are provided for general information. Please contact the Bank or your nearest branch for further details about loan eligibility, terms and conditions.",
    simple: "Simple Interest",
    emi: "E.M.I.",
    categories: "loan categories",
    showing: "Showing",
    of: "of",
  },
  mr: {
    eyebrow: "कर्जाची माहिती",
    title: "कर्जावरील व्याजदर",
    description:
      "ठाणे जिल्हा मध्यवर्ती सहकारी बँक लिमिटेडच्या विविध कर्ज योजनांवरील लागू व्याजदर.",
    searchPlaceholder: "कर्जाचा प्रकार शोधा...",
    loanType: "कर्जाचा प्रकार",
    interestRate: "व्याजदर",
    calculation: "व्याज गणना पद्धत",
    noResults: "जुळणारे कर्ज प्रकार आढळले नाहीत.",
    noteTitle: "महत्त्वाची माहिती",
    note: "वरील व्याजदर सामान्य माहितीसाठी दिले आहेत. कर्ज पात्रता, अटी व शर्ती याबाबत अधिक माहितीसाठी कृपया बँकेशी किंवा आपल्या जवळच्या शाखेशी संपर्क साधावा.",
    simple: "सरळ व्याज",
    emi: "मासिक हप्ता (E.M.I.)",
    categories: "कर्ज प्रकार",
    showing: "दर्शवित आहे",
    of: "पैकी",
  },
};

function InterestRates() {
  const { language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");

  const isMarathi = language === "mr";
  const t = isMarathi ? content.mr : content.en;

  const filteredRates = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) return loanRates;

    return loanRates.filter((loan) =>
      `${loan.name} ${loan.mr} ${loan.rate} ${loan.method}`
        .toLowerCase()
        .includes(query),
    );
  }, [searchTerm]);

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
      {/* FLOATING BACKGROUND ICONS */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <Coins
          className="absolute left-[5%] top-[13%] rotate-[-18deg] text-[#25845d]/10"
          size={42}
        />

        <Wallet
          className="absolute right-[7%] top-[25%] rotate-[12deg] text-[#25845d]/10"
          size={45}
        />

        <PiggyBank
          className="absolute bottom-[24%] left-[8%] text-[#25845d]/10"
          size={48}
        />

        <TrendingUp
          className="absolute bottom-[12%] right-[8%] rotate-[-10deg] text-[#25845d]/10"
          size={44}
        />

        <CalendarDays
          className="absolute right-[35%] top-[7%] text-[#25845d]/10"
          size={34}
        />
      </div>

      {/* PAGE INTRODUCTION */}

      <section className="relative z-10">
        <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-16 sm:px-8 lg:pb-12 lg:pt-20">
          <div className="max-w-[950px]">
            <p className="mb-3 text-sm font-bold tracking-[0.16em] text-[#25845d]">
              {t.eyebrow}
            </p>

            <h1 className="text-4xl font-extrabold tracking-tight text-[#173E70] sm:text-5xl">
              {t.title}
            </h1>

            <p className="mt-5 max-w-[850px] text-base font-medium leading-8 text-[#59697d] sm:text-lg">
              {t.description}
            </p>
          </div>
        </div>
      </section>

      {/* INTEREST RATE TABLE */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:pb-20">
        <div className="overflow-hidden rounded-2xl border border-[#E3EBE6] bg-white/95 shadow-[0_12px_35px_rgba(23,62,112,0.07)] backdrop-blur-sm sm:rounded-3xl">
          {/* TABLE HEADER */}

          <div className="flex flex-col gap-5 border-b border-[#E8EEE9] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EAF4EE] text-[#25845d]">
                <Percent size={23} />
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#173E70]">{t.title}</h2>

                <p className="mt-1 text-sm font-medium text-[#718096]">
                  {loanRates.length} {t.categories}
                </p>
              </div>
            </div>

            {/* SEARCH */}

            <label className="relative block w-full sm:max-w-[340px]">
              <span className="sr-only">{t.searchPlaceholder}</span>

              <Search
                size={19}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#829184]"
              />

              <input
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder={t.searchPlaceholder}
                className="w-full rounded-xl border border-[#DCE7DF] bg-[#FAFCFA] py-3 pl-11 pr-4 text-sm font-medium text-[#465568] outline-none transition duration-200 placeholder:text-[#9AA69D] focus:border-[#25845d] focus:bg-white focus:ring-4 focus:ring-[#25845d]/10"
              />
            </label>
          </div>

          {/* RESULT COUNT */}

          <div className="border-b border-[#E8EEE9] px-5 py-3 sm:px-7">
            <p className="text-xs font-medium text-[#718096]">
              {t.showing} {filteredRates.length} {t.of} {loanRates.length}{" "}
              {t.categories}
            </p>
          </div>

          {/* RESPONSIVE TABLE */}

          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] border-collapse text-left">
              <thead>
                <tr className="bg-[#F1F7F3]">
                  <th
                    scope="col"
                    className="w-16 px-5 py-4 text-center text-xs font-bold uppercase tracking-wide text-[#25845d] sm:px-7"
                  >
                    #
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-4 text-sm font-bold text-[#173E70] sm:px-7"
                  >
                    {t.loanType}
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-4 text-sm font-bold text-[#173E70] sm:px-7"
                  >
                    {t.interestRate}
                  </th>

                  <th
                    scope="col"
                    className="px-5 py-4 text-sm font-bold text-[#173E70] sm:px-7"
                  >
                    {t.calculation}
                  </th>
                </tr>
              </thead>

              <tbody>
                {filteredRates.map((loan) => (
                  <tr
                    key={loan.id}
                    className="border-b border-[#EDF1ED] transition-colors duration-200 last:border-b-0 hover:bg-[#F4F9F5]"
                  >
                    <td className="px-5 py-4 text-center text-sm font-medium tabular-nums text-[#87948B] sm:px-7">
                      {loan.id}
                    </td>

                    <th
                      scope="row"
                      className="px-5 py-4 text-sm font-semibold text-[#465568] sm:px-7"
                    >
                      {isMarathi ? loan.mr : loan.name}
                    </th>

                    <td className="px-5 py-4 sm:px-7">
                      <span className="inline-flex items-center rounded-lg bg-[#EAF4EE] px-3 py-1.5 text-sm font-bold tabular-nums text-[#25845d]">
                        {loan.rate}
                      </span>
                    </td>

                    <td className="px-5 py-4 text-sm font-medium text-[#59697d] sm:px-7">
                      {isMarathi
                        ? loan.method === "E.M.I."
                          ? t.emi
                          : t.simple
                        : loan.method}
                    </td>
                  </tr>
                ))}

                {filteredRates.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-5 py-16 text-center text-sm font-medium text-[#718096]"
                    >
                      <Search
                        size={28}
                        className="mx-auto mb-3 text-[#AAB8AE]"
                      />
                      {t.noResults}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* IMPORTANT INFORMATION */}

        <aside className="mt-7 flex gap-4 rounded-2xl border border-[#DCEBE1] bg-[#EDF5F0] p-5 shadow-sm sm:p-6">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#25845d] shadow-sm">
            <Info size={21} />
          </div>

          <div>
            <h2 className="font-bold text-[#173E70]">{t.noteTitle}</h2>

            <p className="mt-2 text-sm font-medium leading-7 text-[#59697d]">
              {t.note}
            </p>
          </div>
        </aside>
      </section>
    </main>
  );
}

export default InterestRates;
