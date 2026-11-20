import LoanSubpageLayout from "../../components/loans/LoanSubpageLayout";

function VehicleLoan() {
  const details = [
    {
      label: "vehicleLoanPurpose",
      value: ["vehicleLoanPurposeValue"],
    },
    {
      label: "vehicleLoanEligibility",
      value: ["vehicleLoanEligibilityValue"],
    },
    {
      label: "vehicleLoanInterestRates",
      value: ["vehicleLoanPersonalRate", "vehicleLoanCommercialRate"],
    },
    {
      label: "vehicleLoanLimit",
      value: ["vehicleLoanLimitValue"],
    },
    {
      label: "vehicleLoanGuarantors",
      value: ["vehicleLoanGuarantorsValue"],
    },
    {
      label: "vehicleLoanRepayment",
      value: ["vehicleLoanRepaymentValue"],
    },
  ];

  return (
    <LoanSubpageLayout
      titleKey="vehicleLoan"
      image="/images/loans/vehicle_loan.png"
      imageAlt="Vehicle Loan illustration"
      details={details}
    />
  );
}

export default VehicleLoan;
