import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import {
  ArrowRight,
  CheckCircle2,
  X,
  Landmark,
  Network,
  Building2,
  Sprout,
  Tractor,
  Wrench,
  Milk,
  BadgePercent,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import "./WelcomeSection.css";
import bankBuilding from "../../assets/homepage/bank-building.jpg";

const welcomeContent = {
  en: {
    eyebrow: "THANE DISTRICT CENTRAL CO-OPERATIVE BANK",
    heading: "Welcome",
    introduction:
      "The Thane District Central Co-operative Bank Ltd. is registered under the Maharashtra Co-operative Societies Act, 1960. The main objectives of the Bank are as follows:",

    objectivesHeading: "Objectives of the Bank",
    objectivesDescription:
      "Guided by our commitment to cooperative banking, agricultural development and the financial well-being of our community.",

    objectives: [
      {
        title: "Co-operative Movement",
        description:
          "The Bank is a leader in the cooperative movement in the Thane district. It was established to guide and support cooperative movements in the district and fulfil their financial needs.",
        icon: Landmark,
      },
      {
        title: "Rural Financial Structure",
        description:
          "To act as the middle tier of the three-tier rural financial architecture in the State of Maharashtra.",
        icon: Network,
      },
      {
        title: "PACS Financing",
        description:
          "To finance Primary Agricultural Credit Societies (PACS) in the Thane district and generally carry on banking business.",
        icon: Building2,
      },
      {
        title: "Agricultural & Rural Loans",
        description:
          "To advance loans to farmers for crop cultivation, marketing activities of agricultural and fisheries societies, and the activities of labourers, rural artisans and others engaged in agriculture in the Thane district.",
        icon: Sprout,
      },
      {
        title: "Short-term Agricultural Finance",
        description:
          "Agricultural banking is the main objective of our Bank. Short-term finance is provided to farmer members of Primary Agricultural Credit Societies for seasonal agricultural operations through these societies, against the security of land.",
        icon: Tractor,
      },
      {
        title: "Medium-term Agricultural Loans",
        description:
          "Medium-term loans are also made available to agriculturists through the societies for the purchase of motor pump sets, construction of pump houses, repair and deepening of old wells, installation of pipelines, purchase of bullocks and bullock carts, agricultural implements, power tillers and tractors, and construction of gobar gas plants.",
        icon: Wrench,
      },
      {
        title: "Allied Agricultural Activities",
        description:
          "Finance is also provided to farmers through the societies for the purchase of milch cattle, rearing of goats and running of poultry farms, with a view to providing them with supplementary sources of income to support their agricultural activities.",
        icon: Milk,
      },
      {
        title: "Interest Reimbursement on Crop Loans",
        description:
          "For crop loans, the Bank provides interest-free loans to farmers who repay their outstanding crop loans before 31st March every year (reimbursement of interest).",
        icon: BadgePercent,
      },
    ],

    getInTouch: "Get in Touch",
    formTitle: "Get in Touch",
    formDescription:
      "Leave your details below. This demonstration form does not send or store your information.",
    nameLabel: "Your Name",
    namePlaceholder: "Enter your full name",
    mobileLabel: "Mobile Number",
    mobilePlaceholder: "Enter your 10-digit mobile number",
    submit: "Submit",
    successTitle: "Our team will get back to you",
    successDescription:
      "Thank you for your interest. This was a demonstration submission; your details have not been sent to the bank.",
    close: "Close",
  },

  mr: {
    eyebrow: "ठाणे जिल्हा मध्यवर्ती सहकारी बँक",
    heading: "स्वागत",
    introduction:
      "ठाणे जिल्हा मध्यवर्ती सहकारी बँक लिमिटेड ही महाराष्ट्र सहकारी संस्था अधिनियम, १९६० अंतर्गत नोंदणीकृत आहे. बँकेची प्रमुख उद्दिष्टे पुढीलप्रमाणे आहेत:",

    objectivesHeading: "बँकेची प्रमुख उद्दिष्टे",
    objectivesDescription:
      "सहकारी बँकिंग, कृषी विकास आणि समाजाच्या आर्थिक कल्याणासाठी आमची बांधिलकी.",

    objectives: [
      {
        title: "सहकारी चळवळ",
        description:
          "ठाणे जिल्ह्यातील सहकारी चळवळीमध्ये बँक अग्रगण्य भूमिका बजावत आहे. जिल्ह्यातील सहकारी चळवळींना मार्गदर्शन व सहकार्य करणे आणि त्यांच्या आर्थिक गरजा पूर्ण करणे या उद्देशाने बँकेची स्थापना करण्यात आली आहे.",
        icon: Landmark,
      },
      {
        title: "ग्रामीण वित्तीय व्यवस्था",
        description:
          "महाराष्ट्र राज्यातील त्रिस्तरीय ग्रामीण वित्तीय व्यवस्थेमध्ये मधला स्तर म्हणून कार्य करणे.",
        icon: Network,
      },
      {
        title: "प्राथमिक कृषी पतसंस्थांना वित्तपुरवठा",
        description:
          "ठाणे जिल्ह्यातील प्राथमिक कृषी पतसंस्थांना (PACS) वित्तपुरवठा करणे आणि सर्वसाधारणपणे बँकिंग व्यवसाय करणे.",
        icon: Building2,
      },
      {
        title: "कृषी व ग्रामीण कर्जपुरवठा",
        description:
          "ठाणे जिल्ह्यातील शेतकऱ्यांना पीक लागवड, कृषी व मत्स्यव्यवसाय सहकारी संस्थांच्या विपणनविषयक कामकाजासाठी तसेच मजूर, ग्रामीण कारागीर आणि कृषी क्षेत्राशी संबंधित इतर व्यक्तींच्या उपक्रमांसाठी कर्ज उपलब्ध करून देणे.",
        icon: Sprout,
      },
      {
        title: "अल्पमुदतीचा कृषी वित्तपुरवठा",
        description:
          "कृषी बँकिंग हे आमच्या बँकेचे प्रमुख उद्दिष्ट आहे. प्राथमिक कृषी पतसंस्थांच्या सभासद शेतकऱ्यांना हंगामी कृषी कामकाजासाठी या संस्थांमार्फत जमिनीच्या तारणावर अल्पमुदतीचा वित्तपुरवठा केला जातो.",
        icon: Tractor,
      },
      {
        title: "मध्यम मुदतीचे कृषी कर्ज",
        description:
          "शेतकऱ्यांना संस्थांमार्फत मध्यम मुदतीचे कर्जही उपलब्ध करून दिले जाते. या कर्जाचा उपयोग मोटार पंप संच खरेदी, पंप हाऊस बांधकाम, जुन्या विहिरींची दुरुस्ती व खोलीकरण, पाइपलाइन बसविणे, बैल व बैलगाड्या खरेदी, कृषी अवजारे, पॉवर टिलर व ट्रॅक्टर खरेदी तसेच गोबर गॅस संयंत्र उभारण्यासाठी केला जातो.",
        icon: Wrench,
      },
      {
        title: "पूरक कृषी व्यवसाय",
        description:
          "शेतकऱ्यांना पूरक उत्पन्नाची साधने उपलब्ध व्हावीत आणि त्यांच्या कृषी उपक्रमांना आधार मिळावा या उद्देशाने संस्थांमार्फत दुभती जनावरे खरेदी, शेळीपालन आणि कुक्कुटपालन व्यवसायासाठीही वित्तपुरवठा केला जातो.",
        icon: Milk,
      },
      {
        title: "पीक कर्जावरील व्याज परतावा",
        description:
          "पीक कर्जाच्या बाबतीत, दरवर्षी ३१ मार्चपूर्वी थकीत पीक कर्जाची परतफेड करणाऱ्या शेतकऱ्यांना बँकेकडून व्याजमुक्त कर्जाचा लाभ दिला जातो (व्याज परतावा).",
        icon: BadgePercent,
      },
    ],

    getInTouch: "संपर्क साधा",
    formTitle: "संपर्क साधा",
    formDescription:
      "कृपया खाली आपली माहिती भरा. हा प्रात्यक्षिक फॉर्म माहिती पाठवत किंवा साठवत नाही.",
    nameLabel: "आपले नाव",
    namePlaceholder: "आपले पूर्ण नाव लिहा",
    mobileLabel: "मोबाईल क्रमांक",
    mobilePlaceholder: "१० अंकी मोबाईल क्रमांक लिहा",
    submit: "सबमिट करा",
    successTitle: "आमची टीम आपल्याशी संपर्क साधेल",
    successDescription:
      "आपल्या प्रतिसादाबद्दल धन्यवाद. ही केवळ प्रात्यक्षिक नोंद आहे; आपली माहिती बँकेकडे पाठवलेली नाही.",
    close: "बंद करा",
  },
};

function WelcomeSection() {
  const { language } = useLanguage();
  const content = welcomeContent[language] || welcomeContent.en;

  const sectionRef = useRef(null);
  const objectivesRef = useRef(null);
  const nameInputRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [areObjectivesVisible, setAreObjectivesVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Reveal the welcome section and animate the background image.
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Reveal the objective cards when the card grid enters the viewport.
  useEffect(() => {
    const objectives = objectivesRef.current;

    if (!objectives) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAreObjectivesVisible(true);
          observer.unobserve(objectives);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    observer.observe(objectives);

    return () => observer.disconnect();
  }, []);

  // Automatically open the contact form 2.5 seconds after
  // the splash screen has completely finished disappearing.
  useEffect(() => {
    let popupTimer;

    const handleSplashComplete = () => {
      popupTimer = window.setTimeout(() => {
        setShowSuccess(false);
        setIsFormOpen(true);
      }, 200);
    };

    window.addEventListener("tdcc-splash-complete", handleSplashComplete, {
      once: true,
    });

    return () => {
      window.removeEventListener("tdcc-splash-complete", handleSplashComplete);

      if (popupTimer) {
        window.clearTimeout(popupTimer);
      }
    };
  }, []);

  // Listen for contact form requests from the chatbot.
  // The chatbot remains open while this form is displayed.
  useEffect(() => {
    const handleChatbotContactRequest = () => {
      setShowSuccess(false);
      setIsFormOpen(true);
    };

    window.addEventListener(
      "tdcc-open-contact-form",
      handleChatbotContactRequest,
    );

    return () => {
      window.removeEventListener(
        "tdcc-open-contact-form",
        handleChatbotContactRequest,
      );
    };
  }, []);

  // Manage modal keyboard behaviour and background scrolling.
  useEffect(() => {
    if (!isFormOpen) return;

    const previousOverflow = document.body.style.overflow;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsFormOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleEscape);

    nameInputRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isFormOpen]);

  // Automatically dismiss the confirmation message.
  useEffect(() => {
    if (!showSuccess) return;

    const timeout = window.setTimeout(() => {
      setShowSuccess(false);
    }, 6000);

    return () => window.clearTimeout(timeout);
  }, [showSuccess]);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Demonstration only: no personal information is stored or transmitted.
    setIsFormOpen(false);
    setShowSuccess(true);
  };

  const contactModal = isFormOpen
    ? createPortal(
        <div
          className="contact-modal-backdrop"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setIsFormOpen(false);
            }
          }}
        >
          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
          >
            <button
              type="button"
              className="contact-modal-close"
              onClick={() => setIsFormOpen(false)}
              aria-label={content.close}
            >
              <X size={21} />
            </button>

            <div className="contact-modal-icon" aria-hidden="true">
              ✦
            </div>

            <h2 id="contact-modal-title">{content.formTitle}</h2>

            <p className="contact-modal-description">
              {content.formDescription}
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-form-field">
                <label htmlFor="contact-name">{content.nameLabel}</label>

                <input
                  ref={nameInputRef}
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder={content.namePlaceholder}
                  autoComplete="name"
                  minLength={2}
                  maxLength={80}
                  required
                />
              </div>

              <div className="contact-form-field">
                <label htmlFor="contact-mobile">{content.mobileLabel}</label>

                <input
                  id="contact-mobile"
                  name="mobile"
                  type="tel"
                  placeholder={content.mobilePlaceholder}
                  autoComplete="tel"
                  inputMode="numeric"
                  pattern="[6-9][0-9]{9}"
                  maxLength={10}
                  title="Enter a valid 10-digit Indian mobile number."
                  required
                />
              </div>

              <button type="submit" className="contact-submit-button">
                {content.submit}
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>,
        document.body,
      )
    : null;

  const successToast = showSuccess
    ? createPortal(
        <div className="contact-success-toast" role="status" aria-live="polite">
          <CheckCircle2 size={25} aria-hidden="true" />

          <div>
            <p className="contact-success-title">{content.successTitle}</p>

            <p className="contact-success-description">
              {content.successDescription}
            </p>
          </div>

          <button
            type="button"
            className="contact-success-close"
            onClick={() => setShowSuccess(false)}
            aria-label={content.close}
          >
            <X size={18} />
          </button>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <section
        ref={sectionRef}
        aria-labelledby="welcome-heading"
        className={`welcome-section ${
          isVisible ? "welcome-section-visible" : ""
        }`}
      >
        <div className="welcome-sticky-background" aria-hidden="true">
          <img src={bankBuilding} alt="" className="welcome-background-image" />
          <div className="welcome-background-overlay" />
        </div>

        <div className="welcome-content-wrapper">
          <div className="welcome-content">
            <p className="welcome-eyebrow">{content.eyebrow}</p>

            <h1 id="welcome-heading" className="welcome-heading">
              {content.heading}
              <span className="welcome-heading-accent">.</span>
            </h1>

            <div className="welcome-introduction">{content.introduction}</div>

            <div className="welcome-objectives-heading">
              <div className="welcome-objectives-heading-copy">
                <p className="welcome-objectives-eyebrow">
                  {language === "mr"
                    ? "आमची बांधिलकी"
                    : "OUR PURPOSE & COMMITMENT"}
                </p>

                <h2>{content.objectivesHeading}</h2>

                <p className="welcome-objectives-description">
                  {content.objectivesDescription}
                </p>
              </div>

              <div className="welcome-objectives-count" aria-hidden="true">
                <span>08</span>
                <small>{language === "mr" ? "उद्दिष्टे" : "OBJECTIVES"}</small>
              </div>
            </div>

            <div
              ref={objectivesRef}
              className={`welcome-objectives-grid ${
                areObjectivesVisible ? "welcome-objectives-visible" : ""
              }`}
            >
              {content.objectives.map((objective, index) => {
                const ObjectiveIcon = objective.icon;

                return (
                  <article
                    key={index}
                    className="welcome-objective-card"
                    style={{ "--card-index": index }}
                  >
                    <div className="welcome-objective-card-top">
                      <div
                        className={`welcome-objective-icon welcome-objective-icon-${(index % 4) + 1}`}
                        aria-hidden="true"
                      >
                        <ObjectiveIcon size={23} strokeWidth={1.8} />
                      </div>

                      <span className="welcome-objective-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3>{objective.title}</h3>

                    <p>{objective.description}</p>

                    <div className="welcome-objective-card-accent" />
                  </article>
                );
              })}
            </div>

            <button
              type="button"
              className="welcome-contact-button"
              onClick={() => {
                setShowSuccess(false);
                setIsFormOpen(true);
              }}
            >
              {content.getInTouch}
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {contactModal}
      {successToast}
    </>
  );
}

export default WelcomeSection;
