import { useMemo, useState } from "react";
import {
  Calculator,
  IndianRupee,
  Info,
  RotateCcw,
  Coins,
  Wallet,
  TrendingUp,
  Landmark,
  Percent,
  CalendarDays,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

const content = {
  en: {
    eyebrow: "BANKING SERVICES",
    title: "EMI Calculator",
    description:
      "Calculate your estimated monthly instalment and understand the total cost of your loan.",
    loanAmount: "Loan Amount",
    interestRate: "Annual Interest Rate",
    loanTenure: "Loan Tenure",
    months: "Months",
    years: "Years",
    monthlyEmi: "Monthly EMI",
    principal: "Principal Amount",
    totalInterest: "Total Interest",
    totalPayment: "Total Payment",
    breakdown: "Payment Breakdown",
    yearlyBreakdown: "Yearly Repayment Breakdown",
    year: "Year",
    emiPaid: "Total EMI Paid",
    principalRepaid: "Principal Repaid",
    interestPaid: "Interest Paid",
    outstandingBalance: "Remaining Balance",
    noYearlyBreakdown: "—",
    calculateNote: "Your EMI is calculated using the reducing balance method.",
    noteTitle: "Please Note",
    note: "This calculator is intended for loans repaid through EMIs. It does not account for processing fees, insurance, taxes or other charges. Loans calculated using simple interest may have different repayment terms.",
    reset: "Reset",
    principalLabel: "Principal",
    interestLabel: "Interest",
    invalidAmount: "Please enter a loan amount greater than zero.",
    invalidRate: "Please enter a valid interest rate.",
    invalidTenure: "Please enter a valid loan tenure.",
  },
  mr: {
    eyebrow: "बँकिंग सेवा",
    title: "ईएमआय कॅल्क्युलेटर",
    description:
      "आपला अंदाजित मासिक हप्ता आणि कर्जाची एकूण परतफेड समजून घेण्यासाठी या कॅल्क्युलेटरचा वापर करा.",
    loanAmount: "कर्जाची रक्कम",
    interestRate: "वार्षिक व्याजदर",
    loanTenure: "कर्जाचा कालावधी",
    months: "महिने",
    years: "वर्षे",
    monthlyEmi: "मासिक हप्ता (EMI)",
    principal: "मूळ कर्जाची रक्कम",
    totalInterest: "एकूण व्याज",
    totalPayment: "एकूण परतफेड",
    breakdown: "परतफेडीचा तपशील",
    yearlyBreakdown: "वार्षिक परतफेडीचा तपशील",
    year: "वर्ष",
    emiPaid: "एकूण हप्ते",
    principalRepaid: "मूळ रक्कम परतफेड",
    interestPaid: "भरलेले व्याज",
    outstandingBalance: "शिल्लक कर्ज",
    noYearlyBreakdown: "—",
    calculateNote: "आपला ईएमआय कमी होत जाणाऱ्या शिल्लक पद्धतीने मोजला जातो.",
    noteTitle: "कृपया लक्षात घ्या",
    note: "हा कॅल्क्युलेटर ईएमआयद्वारे परतफेड होणाऱ्या कर्जांसाठी आहे. प्रक्रिया शुल्क, विमा, कर किंवा इतर शुल्क यांचा यात समावेश नाही. सरळ व्याज पद्धतीने मोजल्या जाणाऱ्या कर्जांच्या परतफेडीच्या अटी वेगळ्या असू शकतात.",
    reset: "पुन्हा सेट करा",
    principalLabel: "मूळ रक्कम",
    interestLabel: "व्याज",
    invalidAmount: "कृपया शून्यापेक्षा जास्त कर्जाची रक्कम भरा.",
    invalidRate: "कृपया योग्य व्याजदर भरा.",
    invalidTenure: "कृपया योग्य कर्ज कालावधी भरा.",
  },
};

const floatingIcons = [
  {
    Icon: Coins,
    position: "left-[5%] top-[10%]",
    size: 43,
    delay: "0s",
    duration: "9s",
  },
  {
    Icon: Wallet,
    position: "right-[8%] top-[15%]",
    size: 48,
    delay: "1s",
    duration: "11s",
  },
  {
    Icon: TrendingUp,
    position: "left-[7%] top-[48%]",
    size: 44,
    delay: "2s",
    duration: "10s",
  },
  {
    Icon: Landmark,
    position: "right-[6%] top-[48%]",
    size: 48,
    delay: "0.5s",
    duration: "12s",
  },
  {
    Icon: CalendarDays,
    position: "right-[12%] bottom-[12%]",
    size: 42,
    delay: "1.5s",
    duration: "10s",
  },
  {
    Icon: Percent,
    position: "left-[45%] top-[34%]",
    size: 36,
    delay: "2.5s",
    duration: "9s",
  },
];

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(value) ? value : 0);

const calculateEmi = (principal, annualRate, months) => {
  if (months <= 0 || principal <= 0) return 0;

  const monthlyRate = annualRate / 12 / 100;

  if (monthlyRate === 0) {
    return principal / months;
  }

  const factor = Math.pow(1 + monthlyRate, months);

  return (principal * monthlyRate * factor) / (factor - 1);
};

const calculateYearlyBreakdown = (principal, annualRate, months, emi) => {
  const monthlyRate = annualRate / 12 / 100;
  let outstandingBalance = principal;
  const yearlyData = [];

  for (let month = 1; month <= months; month += 1) {
    const interestForMonth = outstandingBalance * monthlyRate;
    const principalForMonth = Math.min(
      outstandingBalance,
      emi - interestForMonth,
    );

    outstandingBalance = Math.max(0, outstandingBalance - principalForMonth);

    const yearIndex = Math.ceil(month / 12) - 1;

    if (!yearlyData[yearIndex]) {
      yearlyData[yearIndex] = {
        year: yearIndex + 1,
        months: 0,
        emiPaid: 0,
        principalRepaid: 0,
        interestPaid: 0,
        outstandingBalance: principal,
      };
    }

    const currentYear = yearlyData[yearIndex];

    currentYear.months += 1;
    currentYear.emiPaid += emi;
    currentYear.principalRepaid += principalForMonth;
    currentYear.interestPaid += interestForMonth;
    currentYear.outstandingBalance = outstandingBalance;
  }

  return yearlyData;
};

export default function EmiCalculator() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";
  const t = isMarathi ? content.mr : content.en;

  const [loanAmount, setLoanAmount] = useState("500000");
  const [interestRate, setInterestRate] = useState("9");
  const [tenure, setTenure] = useState("5");
  const [tenureUnit, setTenureUnit] = useState("years");

  const tenureInMonths = Number(tenure) * (tenureUnit === "years" ? 12 : 1);

  const amount = Number(loanAmount);
  const rate = Number(interestRate);

  const isValid =
    loanAmount.trim() !== "" &&
    interestRate.trim() !== "" &&
    tenure.trim() !== "" &&
    Number.isFinite(amount) &&
    Number.isFinite(rate) &&
    Number.isFinite(tenureInMonths) &&
    amount > 0 &&
    rate >= 0 &&
    rate <= 100 &&
    tenureInMonths > 0 &&
    tenureInMonths <= 600;

  const results = useMemo(() => {
    if (!isValid) {
      return {
        emi: 0,
        totalInterest: 0,
        totalPayment: 0,
        yearlyBreakdown: [],
      };
    }

    const emi = calculateEmi(amount, rate, tenureInMonths);
    const totalPayment = emi * tenureInMonths;
    const totalInterest = totalPayment - amount;

    const yearlyBreakdown =
      tenureInMonths > 12
        ? calculateYearlyBreakdown(amount, rate, tenureInMonths, emi)
        : [];

    return {
      emi,
      totalInterest: Math.max(0, totalInterest),
      totalPayment,
      yearlyBreakdown,
    };
  }, [amount, rate, tenureInMonths, isValid]);

  const principalPercentage = isValid
    ? (amount / results.totalPayment) * 100
    : 0;

  const interestPercentage = isValid
    ? (results.totalInterest / results.totalPayment) * 100
    : 0;

  const resetCalculator = () => {
    setLoanAmount("500000");
    setInterestRate("9");
    setTenure("5");
    setTenureUnit("years");
  };

  const getErrorMessage = () => {
    if (!loanAmount.trim() || !Number.isFinite(amount) || amount <= 0) {
      return t.invalidAmount;
    }

    if (
      !interestRate.trim() ||
      !Number.isFinite(rate) ||
      rate < 0 ||
      rate > 100
    ) {
      return t.invalidRate;
    }

    if (
      !tenure.trim() ||
      !Number.isFinite(tenureInMonths) ||
      tenureInMonths <= 0 ||
      tenureInMonths > 600
    ) {
      return t.invalidTenure;
    }

    return "";
  };

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#DCE5DF] bg-white px-4 py-3 text-base font-medium text-[#465568] outline-none transition-all duration-200 placeholder:text-[#9AA6B2] hover:border-[#B9D3C3] focus:border-[#25845d] focus:ring-2 focus:ring-[#25845d]/15";

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
          @keyframes emiFloating {
            0%, 100% {
              transform: translateY(0px) rotate(-5deg);
            }
            50% {
              transform: translateY(-18px) rotate(5deg);
            }
          }

          .emi-floating-icon {
            animation-name: emiFloating;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .emi-floating-icon {
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
              className={`emi-floating-icon absolute ${position} text-[#25845d]/[0.11]`}
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

      {/* PAGE INTRODUCTION */}

      <section className="relative z-10">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p
              className={`mb-5 text-sm font-semibold uppercase text-[#25845d] ${
                isMarathi ? "tracking-normal" : "tracking-[0.16em]"
              }`}
            >
              {t.eyebrow}
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
              {t.title}
            </h1>

            <p className="mt-6 text-base font-medium leading-8 text-[#465568] sm:text-lg">
              {t.description}
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR AND RESULTS */}

      <section className="relative z-10">
        <div className="mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 lg:pb-20">
          <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            {/* CALCULATOR INPUT PANEL */}

            <section className="rounded-2xl border border-[#E7ECE9] bg-white/90 p-5 shadow-[0_5px_18px_rgba(23,62,112,0.045)] backdrop-blur-sm transition-shadow duration-300 hover:shadow-[0_12px_28px_rgba(23,62,112,0.07)] sm:p-7">
              <div className="flex items-center gap-4 border-b border-[#E7ECE9] pb-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d]">
                  <Calculator size={25} />
                </div>

                <div>
                  <h2 className="text-lg font-bold text-[#173E70]">
                    {t.title}
                  </h2>

                  <p className="mt-1 text-sm font-medium leading-6 text-[#596879]">
                    {t.description}
                  </p>
                </div>
              </div>

              <div className="mt-7 space-y-6">
                {/* LOAN AMOUNT */}

                <div>
                  <label
                    htmlFor="loan-amount"
                    className="block text-sm font-semibold text-[#173E70]"
                  >
                    {t.loanAmount}
                  </label>

                  <div className="relative">
                    <IndianRupee
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#25845d]"
                      aria-hidden="true"
                    />

                    <input
                      id="loan-amount"
                      type="number"
                      min="1"
                      step="1000"
                      value={loanAmount}
                      onChange={(event) => setLoanAmount(event.target.value)}
                      className={`${inputClass} pl-11`}
                      placeholder="Enter loan amount"
                    />
                  </div>
                </div>

                {/* INTEREST RATE */}

                <div>
                  <label
                    htmlFor="interest-rate"
                    className="block text-sm font-semibold text-[#173E70]"
                  >
                    {t.interestRate}
                  </label>

                  <div className="relative">
                    <input
                      id="interest-rate"
                      type="number"
                      min="0"
                      max="100"
                      step="0.01"
                      value={interestRate}
                      onChange={(event) => setInterestRate(event.target.value)}
                      className={`${inputClass} pr-11`}
                      placeholder="Enter annual interest rate"
                    />

                    <span className="absolute right-4 top-1/2 -translate-y-1/2 font-semibold text-[#25845d]">
                      %
                    </span>
                  </div>
                </div>

                {/* LOAN TENURE */}

                <div>
                  <label
                    htmlFor="loan-tenure"
                    className="block text-sm font-semibold text-[#173E70]"
                  >
                    {t.loanTenure}
                  </label>

                  <div className="grid grid-cols-[1fr_auto] gap-3">
                    <input
                      id="loan-tenure"
                      type="number"
                      min="1"
                      max={tenureUnit === "years" ? "50" : "600"}
                      step="1"
                      value={tenure}
                      onChange={(event) => setTenure(event.target.value)}
                      className={inputClass}
                      placeholder="Enter loan tenure"
                    />

                    <div className="mt-2 flex overflow-hidden rounded-xl border border-[#DCE5DF]">
                      <button
                        type="button"
                        onClick={() => setTenureUnit("months")}
                        aria-pressed={tenureUnit === "months"}
                        className={`px-3 text-sm font-semibold transition-all duration-200 sm:px-4 ${
                          tenureUnit === "months"
                            ? "bg-[#25845d] text-white"
                            : "bg-white text-[#596879] hover:bg-[#EDF5F0]"
                        }`}
                      >
                        {t.months}
                      </button>

                      <button
                        type="button"
                        onClick={() => setTenureUnit("years")}
                        aria-pressed={tenureUnit === "years"}
                        className={`px-3 text-sm font-semibold transition-all duration-200 sm:px-4 ${
                          tenureUnit === "years"
                            ? "bg-[#25845d] text-white"
                            : "bg-white text-[#596879] hover:bg-[#EDF5F0]"
                        }`}
                      >
                        {t.years}
                      </button>
                    </div>
                  </div>
                </div>

                {/* VALIDATION MESSAGE */}

                {!isValid && (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                  >
                    {getErrorMessage()}
                  </p>
                )}

                {/* RESET BUTTON */}

                <div className="flex justify-end border-t border-[#E7ECE9] pt-5">
                  <button
                    type="button"
                    onClick={resetCalculator}
                    className="inline-flex items-center gap-2 rounded-xl border border-[#25845d] px-5 py-2.5 text-sm font-semibold text-[#25845d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#25845d] hover:text-white hover:shadow-md"
                  >
                    <RotateCcw size={16} aria-hidden="true" />
                    {t.reset}
                  </button>
                </div>
              </div>
            </section>

            {/* EMI RESULTS PANEL */}

            <section className="rounded-2xl border border-[#E7ECE9] bg-white/90 p-5 shadow-[0_5px_18px_rgba(23,62,112,0.045)] backdrop-blur-sm sm:p-7">
              {/* MONTHLY EMI */}

              <div className="rounded-xl bg-gradient-to-r from-[#173E70] to-[#245687] p-6 text-white">
                <p className="text-sm font-semibold text-white/80">
                  {t.monthlyEmi}
                </p>

                <p className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  {isValid ? formatCurrency(results.emi) : "—"}
                </p>

                <div className="mt-4 h-1 w-14 rounded-full bg-[#70A77E]" />
              </div>

              {/* PAYMENT SUMMARY */}

              <div className="mt-7 space-y-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-[#596879]">
                    {t.principal}
                  </span>

                  <strong className="text-right text-sm font-semibold text-[#173E70]">
                    {isValid ? formatCurrency(amount) : "—"}
                  </strong>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-[#596879]">
                    {t.totalInterest}
                  </span>

                  <strong className="text-right text-sm font-semibold text-[#173E70]">
                    {isValid ? formatCurrency(results.totalInterest) : "—"}
                  </strong>
                </div>

                <div className="flex items-center justify-between gap-4 border-t border-[#E7ECE9] pt-5">
                  <span className="font-semibold text-[#173E70]">
                    {t.totalPayment}
                  </span>

                  <strong className="text-right text-lg font-bold text-[#25845d]">
                    {isValid ? formatCurrency(results.totalPayment) : "—"}
                  </strong>
                </div>
              </div>

              {/* PAYMENT BREAKDOWN */}

              <div className="mt-8 border-t border-[#E7ECE9] pt-6">
                <h3 className="font-bold text-[#173E70]">{t.breakdown}</h3>

                <div
                  className="mt-4 flex h-3 w-full overflow-hidden rounded-full bg-[#EDF1EE]"
                  role="img"
                  aria-label={
                    isValid
                      ? `${t.principalLabel}: ${principalPercentage.toFixed(1)}%, ${t.interestLabel}: ${interestPercentage.toFixed(1)}%`
                      : t.breakdown
                  }
                >
                  <div
                    className="bg-[#173E70] transition-all duration-500"
                    style={{ width: `${principalPercentage}%` }}
                  />

                  <div
                    className="bg-[#70A77E] transition-all duration-500"
                    style={{ width: `${interestPercentage}%` }}
                  />
                </div>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-[#596879]">
                      <span className="h-3 w-3 rounded-sm bg-[#173E70]" />
                      {t.principalLabel}
                    </div>

                    <strong className="text-sm text-[#173E70]">
                      {isValid ? `${principalPercentage.toFixed(1)}%` : "—"}
                    </strong>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-[#596879]">
                      <span className="h-3 w-3 rounded-sm bg-[#70A77E]" />
                      {t.interestLabel}
                    </div>

                    <strong className="text-sm text-[#173E70]">
                      {isValid ? `${interestPercentage.toFixed(1)}%` : "—"}
                    </strong>
                  </div>
                </div>
              </div>

              {/* CALCULATION NOTE */}

              <div className="mt-7 flex gap-3 rounded-xl border border-[#D9E4EF] bg-[#EDF3F9] p-4">
                <Info
                  size={19}
                  className="mt-0.5 shrink-0 text-[#173E70]"
                  aria-hidden="true"
                />

                <p className="text-sm font-medium leading-6 text-[#596879]">
                  {t.calculateNote}
                </p>
              </div>
            </section>
          </div>

          {/* YEARLY REPAYMENT TABLE */}

          <section className="mt-8 overflow-hidden rounded-2xl border border-[#E7ECE9] bg-white/90 shadow-[0_5px_18px_rgba(23,62,112,0.045)]">
            <div className="border-b border-[#E7ECE9] px-5 py-5 sm:px-7">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d]">
                  <CalendarDays size={21} />
                </div>

                <h2 className="text-lg font-bold text-[#173E70]">
                  {t.yearlyBreakdown}
                </h2>
              </div>
            </div>

            {isValid && tenureInMonths > 12 ? (
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] border-collapse text-left">
                  <thead>
                    <tr className="bg-[#173E70] text-white">
                      <th className="px-5 py-4 text-sm font-semibold">
                        {t.year}
                      </th>

                      <th className="px-5 py-4 text-sm font-semibold">
                        {t.emiPaid}
                      </th>

                      <th className="px-5 py-4 text-sm font-semibold">
                        {t.principalRepaid}
                      </th>

                      <th className="px-5 py-4 text-sm font-semibold">
                        {t.interestPaid}
                      </th>

                      <th className="px-5 py-4 text-sm font-semibold">
                        {t.outstandingBalance}
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {results.yearlyBreakdown.map((year, index) => (
                      <tr
                        key={year.year}
                        className={`border-b border-[#E7ECE9] last:border-b-0 transition-colors hover:bg-[#EDF5F0]/60 ${
                          index % 2 === 0 ? "bg-white" : "bg-[#F8FAF9]"
                        }`}
                      >
                        <th className="px-5 py-4 text-sm font-semibold text-[#173E70]">
                          {t.year} {year.year}
                        </th>

                        <td className="px-5 py-4 text-sm text-[#596879]">
                          {formatCurrency(year.emiPaid)}
                        </td>

                        <td className="px-5 py-4 text-sm text-[#596879]">
                          {formatCurrency(year.principalRepaid)}
                        </td>

                        <td className="px-5 py-4 text-sm text-[#596879]">
                          {formatCurrency(year.interestPaid)}
                        </td>

                        <td className="px-5 py-4 text-sm font-semibold text-[#173E70]">
                          {formatCurrency(year.outstandingBalance)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <p className="px-5 py-8 text-center text-sm font-medium text-[#596879]">
                {t.noYearlyBreakdown}
              </p>
            )}
          </section>

          {/* IMPORTANT INFORMATION */}

          <aside className="mt-8 rounded-2xl border border-[#E7ECE9] bg-white/90 p-5 shadow-[0_5px_18px_rgba(23,62,112,0.035)] sm:p-6">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d]">
                <Info size={21} />
              </div>

              <div>
                <h2 className="font-bold text-[#173E70]">{t.noteTitle}</h2>

                <p className="mt-2 text-sm font-medium leading-7 text-[#596879]">
                  {t.note}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
