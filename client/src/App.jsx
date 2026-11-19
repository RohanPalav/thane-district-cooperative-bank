import { useLayoutEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import { LanguageProvider, useLanguage } from "./context/LanguageContext";

import Header from "./components/navigation/Header";
import ChatbotWidget from "./components/common/ChatbotWidget";
import SiteFooter from "./components/common/SiteFooter";
import SplashScreen from "./components/common/SplashScreen";

import HeroCarousel from "./components/sections/HeroCarousel";
import WelcomeSection from "./components/sections/WelcomeSection";
import QuickLinks from "./components/sections/QuickLinks";
import LeadershipSection from "./components/sections/LeadershipSection";

// Temporarily disabled. Keep this import for future restoration.
// import HomeGallery from "./components/sections/HomeGallery";

import DepositHome from "./pages/Deposits/DepositHome";
import SavingsAccount from "./pages/Deposits/SavingsAccount";
import CurrentAccount from "./pages/Deposits/CurrentAccount";
import RecurringAccount from "./pages/Deposits/RecurringAccount";
import TermDeposit from "./pages/Deposits/TermDeposit";

import LoansHome from "./pages/Loans/LoansHome";
import PersonalLoan from "./pages/Loans/PersonalLoan";
import EducationLoan from "./pages/Loans/EducationLoan";
import VehicleLoan from "./pages/Loans/VehicleLoan";
import HousingLoan from "./pages/Loans/HousingLoan";
import GoldLoan from "./pages/Loans/GoldLoan";
import InterestRates from "./pages/Loans/InterestRates";

import BranchLocator from "./pages/ReachUs/BranchLocator";

import ServicesHome from "./pages/Services/ServicesHome";
import DigitalBanking from "./pages/Services/DigitalBanking";
import EmiCalculator from "./pages/Services/EmiCalculator";
import AtmLocator from "./pages/Services/AtmLocator";
import Downloads from "./pages/Services/Downloads";
import MobileBankingPrivacyPolicy from "./pages/Services/MobileBankingPrivacyPolicy";
import PositivePay from "./pages/Services/PositivePay";

import AboutHome from "./pages/About/AboutHome";
import Board from "./pages/About/Board";
import PhotoGallery from "./pages/About/PhotoGallery";
import ImportantNotice from "./pages/CustomerCare/ImportantNotice";

/* ============================================================
   SCROLL TO TOP
============================================================ */

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}

/* ============================================================
   HOME PAGE
============================================================ */

function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroCarousel />
      <WelcomeSection />
      <QuickLinks />
      <LeadershipSection />

      {/*
        HomeGallery temporarily disabled because suitable photos
        are currently unavailable. Restore when required.

        <HomeGallery />
      */}
    </main>
  );
}

/* ============================================================
   PLACEHOLDER PAGE
============================================================ */

function PlaceholderPage({ titleKey }) {
  const { t } = useLanguage();

  return (
    <main className="mx-auto min-h-[55vh] max-w-[1200px] px-5 py-16 sm:px-8">
      <h1 className="text-3xl font-bold text-[#173E70]">{t(titleKey)}</h1>

      <p className="mt-4 text-[#596574]">{t("preparingPage")}</p>
    </main>
  );
}

/* ============================================================
   APP CONTENT
============================================================ */

function AppContent() {
  return (
    <>
      <SplashScreen />

      <ScrollToTop />

      <Header />

      <Routes>
        {/* HOME */}

        <Route path="/" element={<HomePage />} />

        {/* DOWNLOADS */}

        <Route path="/downloads" element={<Downloads />} />

        <Route
          path="/downloads/mobile-banking-privacy-policy"
          element={<MobileBankingPrivacyPolicy />}
        />

        {/* DEPOSITS */}

        <Route path="/deposit" element={<DepositHome />} />

        <Route path="/deposit/savings-account" element={<SavingsAccount />} />

        <Route path="/deposit/current-account" element={<CurrentAccount />} />

        <Route
          path="/deposit/recurring-account"
          element={<RecurringAccount />}
        />

        <Route path="/deposit/term-deposit" element={<TermDeposit />} />

        <Route
          path="/deposit/*"
          element={<PlaceholderPage titleKey="deposit" />}
        />

        {/* LOANS */}

        <Route path="/loans" element={<LoansHome />} />

        <Route path="/loans/personal-loan" element={<PersonalLoan />} />

        <Route path="/loans/education-loan" element={<EducationLoan />} />

        <Route path="/loans/vehicle-loan" element={<VehicleLoan />} />

        <Route path="/loans/housing-loan" element={<HousingLoan />} />

        <Route path="/loans/gold-loan" element={<GoldLoan />} />

        <Route path="/loans/interest-rates" element={<InterestRates />} />

        <Route path="/loans/*" element={<PlaceholderPage titleKey="loans" />} />

        {/* SERVICES */}

        <Route path="/services" element={<ServicesHome />} />

        <Route path="/services/digital-banking" element={<DigitalBanking />} />

        <Route path="/services/emi-calculator" element={<EmiCalculator />} />

        <Route path="/services/atm-locator" element={<AtmLocator />} />

        <Route
          path="/services/*"
          element={<PlaceholderPage titleKey="services" />}
        />

        {/* ABOUT US */}

        <Route path="/about" element={<AboutHome />} />

        <Route path="/about/board" element={<Board />} />

        <Route path="/about/photo-gallery" element={<PhotoGallery />} />

        <Route
          path="/about/*"
          element={<PlaceholderPage titleKey="aboutUs" />}
        />

        {/* REACH US */}

        <Route path="/reach-us/branches" element={<BranchLocator />} />

        <Route
          path="/reach-us/*"
          element={<PlaceholderPage titleKey="reachUs" />}
        />

        {/* POSITIVE PAY */}

        <Route path="/positive-pay" element={<PositivePay />} />

        {/* IMPORTANT NOTICE */}

        <Route path="/important-notice" element={<ImportantNotice />} />

        {/* OTHER PAGES */}

        <Route
          path="/marathi-notice"
          element={<PlaceholderPage titleKey="marathiNotice" />}
        />

        {/* FALLBACK */}

        <Route path="*" element={<PlaceholderPage titleKey="pageNotFound" />} />
      </Routes>

      <SiteFooter />

      <ChatbotWidget />
    </>
  );
}

/* ============================================================
   ROOT APP
============================================================ */

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
