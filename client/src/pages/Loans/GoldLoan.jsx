import LoanSubpageLayout from "../../components/loans/LoanSubpageLayout";

function GoldLoan() {
  const details = [
    {
      label: "goldLoanEligibility",
      value: ["goldLoanEligibilityValue"],
    },
    {
      label: "goldLoanLimit",
      value: ["goldLoanLimitNeedBased", "goldLoanLimitValuation"],
    },
    {
      label: "goldLoanInterestRates",
      value: ["goldLoanIndividualRate", "goldLoanFarmerRate"],
    },
    {
      label: "goldLoanGuarantors",
      value: ["goldLoanGuarantorsValue"],
    },
    {
      label: "goldLoanSecurity",
      value: ["goldLoanSecurityValue"],
    },
  ];

  return (
    <LoanSubpageLayout
      titleKey="goldLoan"
      image="/images/loans/gold_loan.png"
      imageAlt="Gold Loan illustration"
      details={details}
    />
  );
}

export default GoldLoan;
