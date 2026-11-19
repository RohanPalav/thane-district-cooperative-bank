import LoanSubpageLayout from "../../components/loans/LoanSubpageLayout";

function PersonalLoan() {
  const details = [
    {
      label: "personalLoanPurpose",
      value: ["personalLoanPurposeValue"],
    },
    {
      label: "personalLoanLimit",
      value: ["personalLoanLimitValue"],
    },
    {
      label: "personalLoanInterestRate",
      value: ["personalLoanInterestRateValue"],
    },
    {
      label: "personalLoanRepayment",
      value: ["personalLoanRepaymentValue"],
    },
  ];

  return (
    <LoanSubpageLayout
      titleKey="personalLoan"
      image="/images/loans/personal_loan.png"
      imageAlt="Personal Loan illustration"
      details={details}
    />
  );
}

export default PersonalLoan;
