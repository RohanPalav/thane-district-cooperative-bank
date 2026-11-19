import LoanSubpageLayout from "../../components/loans/LoanSubpageLayout";

function HousingLoan() {
  const details = [
    {
      label: "housingLoanPurpose",
      value: ["housingLoanPurposeValue"],
    },
    {
      label: "housingLoanEligibility",
      value: ["housingLoanEligibilityValue"],
    },
    {
      label: "housingLoanMargin",
      value: ["housingLoanMarginNew", "housingLoanMarginResale"],
    },
    {
      label: "housingLoanGuarantors",
      value: ["housingLoanGuarantorsValue"],
    },
    {
      label: "housingLoanInterestRates",
      value: ["housingLoanInterestRateValue"],
    },
    {
      label: "housingLoanLimit",
      value: ["housingLoanLimitValue"],
    },
    {
      label: "housingLoanRepayment",
      value: ["housingLoanRepaymentValue"],
    },
  ];

  return (
    <LoanSubpageLayout
      titleKey="housingLoan"
      image="/images/loans/housing_loan.png"
      imageAlt="Housing Loan illustration"
      details={details}
    />
  );
}

export default HousingLoan;
