import { useLanguage } from "../../context/LanguageContext";
import "./LeadershipSection.css";

import chairmanImage from "../../assets/homepage/leadership/chairman.jpeg";
import viceChairmanImage from "../../assets/homepage/leadership/vice-chairman.jpeg";
import ceoImage from "../../assets/homepage/leadership/ceo.jpeg";

const leadershipContent = {
  en: {
    eyebrow: "BOARD & MANAGEMENT",
    heading: "Our Leadership",
    description:
      "Our people are integral to the success of the Bank. Our leadership brings together experience, dedication and a shared commitment to serving our community.",
    officials: [
      {
        name: "Mr. Arun Balu Patil",
        designation: "Chairman",
        image: chairmanImage,
      },
      {
        name: "Mrs. Bhagyashree Nilesh Bhoir",
        designation: "Vice Chairman",
        image: viceChairmanImage,
      },
      {
        name: "Shrikant Patare",
        designation: "Chief Executive Officer",
        image: ceoImage,
      },
    ],
  },

  mr: {
    eyebrow: "संचालक मंडळ आणि व्यवस्थापन",
    heading: "आमचे नेतृत्व",
    description:
      "बँकेच्या यशामध्ये आमच्या नेतृत्वाची महत्त्वपूर्ण भूमिका आहे. अनुभव, समर्पण आणि समाजसेवेची बांधिलकी या मूल्यांच्या आधारावर आमचे नेतृत्व कार्यरत आहे.",
    officials: [
      {
        name: "Mr. Arun Balu Patil",
        designation: "अध्यक्ष",
        image: chairmanImage,
      },
      {
        name: "Mrs. Bhagyashree Nilesh Bhoir",
        designation: "उपाध्यक्ष",
        image: viceChairmanImage,
      },
      {
        name: "Shrikant Patare",
        designation: "मुख्य कार्यकारी अधिकारी",
        image: ceoImage,
      },
    ],
  },
};

function LeadershipSection() {
  const { language } = useLanguage();

  const content = leadershipContent[language] || leadershipContent.en;

  return (
    <section
      className="leadership-section"
      aria-labelledby="leadership-heading"
    >
      <div className="leadership-background-decoration" aria-hidden="true">
        <span className="leadership-decoration-circle leadership-circle-one" />
        <span className="leadership-decoration-circle leadership-circle-two" />
      </div>

      <div className="leadership-container">
        <div className="leadership-intro">
          <p className="leadership-eyebrow">{content.eyebrow}</p>

          <h2 id="leadership-heading" className="leadership-heading">
            {content.heading}
            <span className="leadership-heading-accent">.</span>
          </h2>

          <p className="leadership-description">{content.description}</p>
        </div>

        <div className="leadership-grid">
          {content.officials.map((official, index) => (
            <article
              className={`leadership-card leadership-card-${index + 1}`}
              key={official.designation}
            >
              <div className="leadership-portrait-area">
                <div className="leadership-portrait">
                  <img
                    src={official.image}
                    alt={official.name}
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="leadership-profile-details">
                <h3 className="leadership-name">{official.name}</h3>
                <p className="leadership-designation">{official.designation}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="leadership-bottom-line" aria-hidden="true">
          <span className="leadership-bottom-line-accent" />
          <span className="leadership-bottom-line-rest" />
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection;
