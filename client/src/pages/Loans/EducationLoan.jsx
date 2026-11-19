import LoanSubpageLayout from "../../components/loans/LoanSubpageLayout";

function EducationLoan() {
  const details = [
    {
      label: "educationLoanPurpose",
      value: ["educationLoanPurposeValue"],
    },
    {
      label: "educationLoanEligibility",
      value: ["educationLoanEligibilityValue"],
    },
    {
      label: "educationLoanMargin",
      value: [
        "educationLoanMarginMaximum",
        "educationLoanMarginIndia",
        "educationLoanMarginAbroad",
      ],
    },
    {
      label: "educationLoanInterestRates",
      value: ["educationLoanInterestRatesValue"],
    },
  ];

  return (
    <LoanSubpageLayout
      titleKey="educationLoan"
      image="/images/loans/education_loan.png"
      imageAlt="Education Loan illustration"
      details={details}
    />
  );
}

export default EducationLoan;
