import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  FileText,
  Globe,
  MapPin,
  Landmark,
  Wallet,
  CreditCard,
  Link2,
  PiggyBank,
  Coins,
  Calculator,
  ShieldCheck,
  Building2,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import "./QuickLinks.css";

const quickLinkGroups = {
  en: [
    {
      heading: "Banking & Customer Services",
      icon: Globe,
      links: [
        {
          label: "eKYC for Account Holders",
          url: "https://ekyc.thanedcc.bank.in/",
          type: "external",
        },
        {
          label: "Positive Pay System Form",
          url: "/positive-pay",
          type: "internal",
        },
        {
          label: "ATM Locator",
          url: "/services/atm-locator",
          type: "internal",
        },
        {
          label: "Branch Locator",
          url: "/reach-us/branches",
          type: "internal",
        },
        {
          label: "EMI Calculator",
          url: "/services/emi-calculator",
          type: "internal",
        },
        {
          label: "Interest Rates",
          url: "/loans/interest-rates",
          type: "internal",
        },
        {
          label: "Search IFSC Code",
          url: "https://ifsc.bankifsccode.com/",
          type: "external",
        },
      ],
    },
    {
      heading: "Notices & Downloads",
      icon: FileText,
      links: [
        {
          label: "Important Notice",
          url: "/important-notice",
          type: "internal",
        },
        {
          label: "Downloads",
          url: "/downloads",
          type: "internal",
        },
        {
          label: "Valuer Appointment Notice",
          url: "/documents/valuar_circular.pdf",
          type: "pdf",
        },
        {
          label: "Saraf Appointment Notice",
          url: "/documents/saraf.pdf",
          type: "pdf",
        },
        {
          label: "Legal Firm Appointment Notice",
          url: "/documents/Legal_firm.pdf",
          type: "pdf",
        },
        {
          label: "RBI Cyber Security Advisory",
          url: "/documents/CyberSecurityAwarness.pdf",
          type: "pdf",
        },
        {
          label: "Privacy Policy",
          url: "https://mobile.thanedccb.com/TdccPrivacyPolicy.html",
          type: "external",
        },
        {
          label: "Terms and Conditions",
          url: "https://mobile.thanedccb.com/terms.html",
          type: "external",
        },
      ],
    },
  ],

  mr: [
    {
      heading: "बँकिंग आणि ग्राहक सेवा",
      icon: Globe,
      links: [
        {
          label: "खातेदारांसाठी ई-केवायसी",
          url: "https://ekyc.thanedcc.bank.in/",
          type: "external",
        },
        {
          label: "पॉझिटिव्ह पे प्रणाली अर्ज",
          url: "/positive-pay",
          type: "internal",
        },
        {
          label: "एटीएम शोधा",
          url: "/services/atm-locator",
          type: "internal",
        },
        {
          label: "शाखा शोधा",
          url: "/reach-us/branches",
          type: "internal",
        },
        {
          label: "ईएमआय कॅल्क्युलेटर",
          url: "/services/emi-calculator",
          type: "internal",
        },
        {
          label: "व्याजदर",
          url: "/loans/interest-rates",
          type: "internal",
        },
        {
          label: "आयएफएससी कोड शोधा",
          url: "https://ifsc.bankifsccode.com/",
          type: "external",
        },
      ],
    },
    {
      heading: "सूचना आणि डाउनलोड",
      icon: FileText,
      links: [
        {
          label: "महत्त्वाची सूचना",
          url: "/important-notice",
          type: "internal",
        },
        {
          label: "डाउनलोड",
          url: "/downloads",
          type: "internal",
        },
        {
          label: "मूल्यनिर्धारक नियुक्ती सूचना",
          url: "/documents/valuar_circular.pdf",
          type: "pdf",
        },
        {
          label: "सराफ नियुक्ती सूचना",
          url: "/documents/saraf.pdf",
          type: "pdf",
        },
        {
          label: "विधी संस्थेच्या नियुक्तीची सूचना",
          url: "/documents/Legal_firm.pdf",
          type: "pdf",
        },
        {
          label: "आरबीआय सायबर सुरक्षा सूचना",
          url: "/documents/CyberSecurityAwarness.pdf",
          type: "pdf",
        },
        {
          label: "गोपनीयता धोरण",
          url: "https://mobile.thanedccb.com/TdccPrivacyPolicy.html",
          type: "external",
        },
        {
          label: "अटी आणि शर्ती",
          url: "https://mobile.thanedccb.com/terms.html",
          type: "external",
        },
      ],
    },
  ],
};

const sectionContent = {
  en: {
    eyebrow: "EXPLORE OUR SERVICES",
    title: "How can we help you today?",
    description:
      "Access the banking services, useful tools and important information you need, all in one convenient place.",
    pdfLabel: "PDF document",
    externalLabel: "Opens in a new tab",
  },

  mr: {
    eyebrow: "आमच्या सेवा जाणून घ्या",
    title: "आज आम्ही आपली कशी मदत करू शकतो?",
    description:
      "बँकिंग सेवा, उपयुक्त साधने आणि महत्त्वाची माहिती एकाच ठिकाणी सहज उपलब्ध करून घ्या.",
    pdfLabel: "पीडीएफ दस्तऐवज",
    externalLabel: "नवीन टॅबमध्ये उघडेल",
  },
};

function QuickLinks() {
  const { language } = useLanguage();

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const groups = quickLinkGroups[language] || quickLinkGroups.en;
  const content = sectionContent[language] || sectionContent.en;

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
        rootMargin: "0px 0px -30px 0px",
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="quick-links-heading"
      className={`quick-links-section ${
        isVisible ? "quick-links-visible" : ""
      }`}
    >
      {/* Decorative floating banking icons */}
      <div className="quick-links-decoration" aria-hidden="true">
        {[
          { Icon: Landmark, top: "9%", left: "8%", size: 42 },
          { Icon: Wallet, top: "18%", left: "43%", size: 34 },
          { Icon: CreditCard, top: "12%", left: "78%", size: 46 },
          { Icon: Link2, top: "39%", left: "94%", size: 35 },
          { Icon: PiggyBank, top: "68%", left: "5%", size: 43 },
          { Icon: Coins, top: "83%", left: "34%", size: 38 },
          { Icon: Calculator, top: "73%", left: "87%", size: 42 },
          { Icon: ShieldCheck, top: "46%", left: "58%", size: 32 },
          { Icon: Building2, top: "91%", left: "68%", size: 39 },
          { Icon: FileText, top: "30%", left: "23%", size: 34 },
        ].map(({ Icon, top, left, size }, index) => (
          <Icon
            key={index}
            className="floating-bank-icon"
            size={size}
            style={{
              top,
              left,
              "--float-delay": `${index * -0.8}s`,
              "--float-duration": `${7 + (index % 4)}s`,
            }}
          />
        ))}
      </div>

      <div className="quick-links-container">
        <div className="quick-links-heading">
          <p className="quick-links-eyebrow">{content.eyebrow}</p>

          <h2 id="quick-links-heading">{content.title}</h2>

          <p className="quick-links-description">{content.description}</p>
        </div>

        <div className="quick-links-groups">
          {groups.map((group, groupIndex) => {
            const GroupIcon = group.icon;

            return (
              <div
                key={group.heading}
                className="quick-links-group"
                style={{ "--group-index": groupIndex }}
              >
                <h3 className="quick-links-group-heading">
                  <GroupIcon
                    size={20}
                    className="quick-links-group-icon"
                    aria-hidden="true"
                  />
                  {group.heading}
                </h3>

                <div className="quick-links-grid">
                  {group.links.map((link, linkIndex) => {
                    const isInternal = link.type === "internal";
                    const isPdf = link.type === "pdf";

                    const LinkIcon = isInternal
                      ? MapPin
                      : isPdf
                        ? FileText
                        : ExternalLink;

                    const linkContent = (
                      <>
                        <span className="quick-links-card-label">
                          {link.label}
                        </span>

                        <LinkIcon
                          size={17}
                          className="quick-links-card-icon"
                          aria-hidden="true"
                        />
                      </>
                    );

                    const commonClasses = "quick-links-card";

                    const animationStyle = {
                      "--card-index": linkIndex,
                    };

                    return isInternal ? (
                      <Link
                        key={link.label}
                        to={link.url}
                        className={commonClasses}
                        style={animationStyle}
                      >
                        {linkContent}
                      </Link>
                    ) : (
                      <a
                        key={link.label}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${link.label} - ${
                          isPdf ? content.pdfLabel : content.externalLabel
                        }`}
                        className={commonClasses}
                        style={animationStyle}
                      >
                        {linkContent}
                      </a>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default QuickLinks;
