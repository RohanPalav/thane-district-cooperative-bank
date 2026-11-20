import { branches } from "./branchData";
import { atms } from "./atmData";

/* ============================================================
   STATIC WEBSITE SEARCH INDEX
============================================================ */

const staticSearchItems = [
  // DEPOSIT

  {
    id: "deposit",
    type: "category",
    title: { en: "Deposit", mr: "ठेवी" },
    description: {
      en: "Explore deposit accounts and interest rates.",
      mr: "ठेव खाती आणि व्याजदरांची माहिती मिळवा.",
    },
    aliases: {
      en: ["deposits", "deposit accounts", "saving schemes"],
      mr: ["ठेव", "ठेवी", "बचत योजना"],
    },
    children: [
      "savings-account",
      "current-account",
      "recurring-account",
      "term-deposit",
      "deposit-interest-rates",
    ],
  },
  {
    id: "savings-account",
    type: "page",
    title: { en: "Savings Account", mr: "बचत खाते" },
    description: {
      en: "Information about savings accounts.",
      mr: "बचत खात्याबद्दल माहिती.",
    },
    path: "/deposit/savings-account",
    aliases: {
      en: ["savings", "saving account", "saving bank account", "SB account"],
      mr: ["बचत", "बचत खाते"],
    },
  },
  {
    id: "current-account",
    type: "page",
    title: { en: "Current Account", mr: "चालू खाते" },
    description: {
      en: "Information about current accounts.",
      mr: "चालू खात्याबद्दल माहिती.",
    },
    path: "/deposit/current-account",
    aliases: {
      en: ["current", "business account", "CA account"],
      mr: ["चालू", "चालू खाते"],
    },
  },
  {
    id: "recurring-account",
    type: "page",
    title: { en: "Recurring Account", mr: "आवर्ती ठेव खाते" },
    description: {
      en: "Information about recurring deposit accounts.",
      mr: "आवर्ती ठेव खात्याबद्दल माहिती.",
    },
    path: "/deposit/recurring-account",
    aliases: {
      en: ["recurring deposit", "RD", "RD account", "monthly deposit"],
      mr: ["आवर्ती ठेव", "मासिक ठेव"],
    },
  },
  {
    id: "term-deposit",
    type: "page",
    title: { en: "Term Deposit", mr: "मुदत ठेव" },
    description: {
      en: "Information about term deposits.",
      mr: "मुदत ठेवींबद्दल माहिती.",
    },
    path: "/deposit/term-deposit",
    aliases: {
      en: [
        "fixed deposit",
        "FD",
        "FD account",
        "fixed term deposit",
        "term deposits",
      ],
      mr: ["मुदत ठेव", "मुदत ठेवी"],
    },
  },
  {
    id: "deposit-interest-rates",
    type: "page",
    title: { en: "Deposit Interest Rates", mr: "ठेवींचे व्याजदर" },
    description: {
      en: "View deposit interest rates.",
      mr: "ठेवींवरील व्याजदर पहा.",
    },
    path: "/loans/interest-rates",
    aliases: {
      en: [
        "deposit rates",
        "deposit rate",
        "savings interest",
        "FD interest",
        "fixed deposit interest",
        "RD interest",
      ],
      mr: ["ठेव व्याजदर", "ठेवींचे दर"],
    },
  },

  // LOANS

  {
    id: "loans",
    type: "category",
    title: { en: "Loans", mr: "कर्ज" },
    description: {
      en: "Explore the bank's loan facilities.",
      mr: "बँकेच्या कर्ज सुविधांची माहिती मिळवा.",
    },
    aliases: {
      en: ["loan", "credit", "loan facilities", "borrow"],
      mr: ["कर्ज", "कर्ज सुविधा", "कर्ज योजना"],
    },
    children: [
      "personal-loan",
      "education-loan",
      "vehicle-loan",
      "housing-loan",
      "gold-loan",
      "loan-interest-rates",
    ],
  },
  {
    id: "personal-loan",
    type: "page",
    title: { en: "Personal Loan", mr: "वैयक्तिक कर्ज" },
    description: {
      en: "Information about personal loans.",
      mr: "वैयक्तिक कर्जाबद्दल माहिती.",
    },
    path: "/loans/personal-loan",
    aliases: {
      en: ["personal finance", "individual loan"],
      mr: ["वैयक्तिक कर्ज"],
    },
  },
  {
    id: "education-loan",
    type: "page",
    title: { en: "Education Loan", mr: "शैक्षणिक कर्ज" },
    description: {
      en: "Information about education loans.",
      mr: "शैक्षणिक कर्जाबद्दल माहिती.",
    },
    path: "/loans/education-loan",
    aliases: {
      en: ["student loan", "study loan", "education finance"],
      mr: ["शिक्षण कर्ज", "शैक्षणिक कर्ज"],
    },
  },
  {
    id: "vehicle-loan",
    type: "page",
    title: { en: "Vehicle Loan", mr: "वाहन कर्ज" },
    description: {
      en: "Information about vehicle loans.",
      mr: "वाहन कर्जाबद्दल माहिती.",
    },
    path: "/loans/vehicle-loan",
    aliases: {
      en: [
        "car loan",
        "bike loan",
        "two wheeler loan",
        "four wheeler loan",
        "vehicle finance",
      ],
      mr: ["वाहन कर्ज", "गाडी कर्ज"],
    },
  },
  {
    id: "housing-loan",
    type: "page",
    title: { en: "Housing Loan", mr: "गृह कर्ज" },
    description: {
      en: "Information about housing loans.",
      mr: "गृह कर्जाबद्दल माहिती.",
    },
    path: "/loans/housing-loan",
    aliases: {
      en: ["home loan", "house loan", "home finance", "property loan"],
      mr: ["घर कर्ज", "गृह कर्ज"],
    },
  },
  {
    id: "gold-loan",
    type: "page",
    title: { en: "Gold Loan", mr: "सोने तारण कर्ज" },
    description: {
      en: "Information about gold loans.",
      mr: "सोने तारण कर्जाबद्दल माहिती.",
    },
    path: "/loans/gold-loan",
    aliases: {
      en: [
        "gold finance",
        "loan against gold",
        "gold jewellery loan",
        "jewellery loan",
      ],
      mr: ["सोने कर्ज", "सोन्याचे कर्ज", "सोने तारण"],
    },
  },
  {
    id: "loan-interest-rates",
    type: "page",
    title: { en: "Loan Interest Rates", mr: "कर्जाचे व्याजदर" },
    description: {
      en: "View loan interest rates and available rate information.",
      mr: "कर्जावरील व्याजदरांची माहिती पहा.",
    },
    path: "/loans/interest-rates",
    aliases: {
      en: [
        "interest rates",
        "loan rates",
        "interest",
        "loan interest",
        "tourism loan",
        "tourist loan",
        "agriculture loan",
        "agricultural loan",
        "crop loan",
        "other loan rates",
      ],
      mr: ["व्याजदर", "कर्ज दर", "कर्जाचे दर", "पर्यटन कर्ज", "शेती कर्ज"],
    },
  },

  // SERVICES

  {
    id: "services",
    type: "category",
    title: { en: "Services", mr: "सेवा" },
    description: {
      en: "Explore banking services and customer facilities.",
      mr: "बँकिंग सेवा आणि ग्राहक सुविधांची माहिती मिळवा.",
    },
    aliases: {
      en: ["banking services", "facilities", "customer services"],
      mr: ["सेवा", "बँकिंग सेवा", "ग्राहक सेवा"],
    },
    children: ["digital-banking", "emi-calculator", "atm-locator"],
  },
  {
    id: "digital-banking",
    type: "page",
    title: { en: "Digital Banking", mr: "डिजिटल बँकिंग" },
    description: {
      en: "Explore the bank's digital banking services.",
      mr: "बँकेच्या डिजिटल बँकिंग सेवांची माहिती.",
    },
    path: "/services/digital-banking",
    aliases: {
      en: [
        "online banking",
        "internet banking",
        "mobile banking",
        "net banking",
        "digital services",
      ],
      mr: ["डिजिटल बँकिंग", "ऑनलाइन बँकिंग", "मोबाईल बँकिंग"],
    },
  },
  {
    id: "emi-calculator",
    type: "page",
    title: { en: "EMI Calculator", mr: "ईएमआय कॅल्क्युलेटर" },
    description: {
      en: "Calculate your loan EMI.",
      mr: "तुमच्या कर्जाचा ईएमआय मोजा.",
    },
    path: "/services/emi-calculator",
    aliases: {
      en: [
        "EMI",
        "loan calculator",
        "monthly instalment",
        "monthly installment",
        "loan EMI calculator",
      ],
      mr: ["ईएमआय", "कर्ज हप्ता", "हप्ता कॅल्क्युलेटर"],
    },
  },
  {
    id: "atm-locator",
    type: "page",
    title: { en: "ATM Locator", mr: "एटीएम शोधा" },
    description: {
      en: "Find ATM locations and addresses.",
      mr: "एटीएमची ठिकाणे आणि पत्ते शोधा.",
    },
    path: "/services/atm-locator",
    aliases: {
      en: [
        "ATM",
        "ATM locations",
        "ATM near me",
        "cash machine",
        "ATM address",
        "ATM centre",
        "ATM center",
      ],
      mr: ["एटीएम", "एटीएम केंद्र", "एटीएम पत्ता"],
    },
  },

  // ABOUT US

  {
    id: "about-us",
    type: "category",
    title: { en: "About Us", mr: "आमच्याबद्दल" },
    description: {
      en: "Learn more about the bank.",
      mr: "बँकेबद्दल अधिक जाणून घ्या.",
    },
    aliases: {
      en: ["about bank", "bank information", "bank profile"],
      mr: ["आमच्याबद्दल", "बँकेची माहिती"],
    },
    children: ["board", "photo-gallery", "about-services"],
  },
  {
    id: "board",
    type: "page",
    title: { en: "Board of Directors", mr: "संचालक मंडळ" },
    description: {
      en: "Information about the bank's board.",
      mr: "बँकेच्या संचालक मंडळाची माहिती.",
    },
    path: "/about/board",
    aliases: {
      en: ["board", "directors", "management", "chairman", "board members"],
      mr: ["संचालक", "संचालक मंडळ", "अध्यक्ष"],
    },
  },
  {
    id: "photo-gallery",
    type: "page",
    title: { en: "Photo Gallery", mr: "छायाचित्र दालन" },
    description: {
      en: "View photographs and events.",
      mr: "छायाचित्रे आणि कार्यक्रम पहा.",
    },
    path: "/about/photo-gallery",
    aliases: {
      en: ["photos", "pictures", "gallery", "images", "events"],
      mr: ["फोटो", "छायाचित्रे", "फोटो गॅलरी"],
    },
  },
  {
    id: "about-services",
    type: "page",
    title: { en: "Our Services", mr: "आमच्या सेवा" },
    description: {
      en: "Learn about the bank's services.",
      mr: "बँकेच्या सेवांची माहिती.",
    },
    path: "/about/services",
    aliases: {
      en: ["bank services", "our services"],
      mr: ["आमच्या सेवा", "बँकेच्या सेवा"],
    },
  },

  // REACH US

  {
    id: "reach-us",
    type: "category",
    title: { en: "Reach Us", mr: "संपर्क" },
    description: {
      en: "Find branches and contact information.",
      mr: "शाखा आणि संपर्क माहिती शोधा.",
    },
    aliases: {
      en: ["contact", "contact information", "locations"],
      mr: ["संपर्क", "संपर्क माहिती"],
    },
    children: ["branch-locator", "head-office", "contact-us"],
  },
  {
    id: "branch-locator",
    type: "page",
    title: { en: "Branch Locator", mr: "शाखा शोधा" },
    description: {
      en: "Find bank branches and their contact details.",
      mr: "बँकेच्या शाखा आणि संपर्क माहिती शोधा.",
    },
    path: "/reach-us/branches",
    aliases: {
      en: [
        "branches",
        "bank branches",
        "branch location",
        "branch address",
        "branch search",
        "IFSC",
        "branch code",
      ],
      mr: ["शाखा", "शाखा शोधा", "बँक शाखा", "शाखेचा पत्ता"],
    },
  },
  {
    id: "head-office",
    type: "page",
    title: { en: "Head Office", mr: "मुख्य कार्यालय" },
    description: {
      en: "Find head office information.",
      mr: "मुख्य कार्यालयाची माहिती.",
    },
    path: "/reach-us/head-office",
    aliases: {
      en: ["headquarters", "head office address", "main office"],
      mr: ["मुख्य कार्यालय", "मुख्य शाखा"],
    },
  },
  {
    id: "contact-us",
    type: "page",
    title: { en: "Contact Us", mr: "आमच्याशी संपर्क साधा" },
    description: {
      en: "Find contact information for the bank.",
      mr: "बँकेची संपर्क माहिती मिळवा.",
    },
    path: "/reach-us/contact",
    aliases: {
      en: [
        "contact details",
        "phone number",
        "telephone",
        "email",
        "reach bank",
        "customer support",
      ],
      mr: ["संपर्क साधा", "फोन नंबर", "दूरध्वनी", "ईमेल"],
    },
  },

  // ADDITIONAL WEBSITE PAGES

  {
    id: "positive-pay",
    type: "page",
    title: { en: "Positive Pay", mr: "पॉझिटिव्ह पे" },
    description: {
      en: "Information about the Positive Pay facility.",
      mr: "पॉझिटिव्ह पे सुविधेची माहिती.",
    },
    path: "/positive-pay",
    aliases: {
      en: [
        "positive pay system",
        "cheque verification",
        "cheque confirmation",
        "cheque security",
      ],
      mr: ["पॉझिटिव्ह पे", "धनादेश पडताळणी"],
    },
  },
  {
    id: "important-notice",
    type: "page",
    title: { en: "Important Notice", mr: "महत्त्वाची सूचना" },
    description: {
      en: "Read important bank notices and announcements.",
      mr: "बँकेच्या महत्त्वाच्या सूचना आणि घोषणा वाचा.",
    },
    path: "/important-notice",
    aliases: {
      en: ["notice", "notices", "announcements", "notifications", "circulars"],
      mr: ["सूचना", "महत्त्वाच्या सूचना", "परिपत्रक"],
    },
  },
  {
    id: "downloads",
    type: "page",
    title: { en: "Downloads", mr: "डाउनलोड" },
    description: {
      en: "Access forms, documents and downloadable files.",
      mr: "फॉर्म, कागदपत्रे आणि डाउनलोड करण्यायोग्य फाइल्स मिळवा.",
    },
    path: "/downloads",
    aliases: {
      en: [
        "download",
        "forms",
        "application forms",
        "documents",
        "PDF",
        "bank forms",
      ],
      mr: ["डाउनलोड", "अर्ज", "फॉर्म", "कागदपत्रे"],
    },
  },
  {
    id: "mobile-banking-privacy",
    type: "page",
    title: {
      en: "Mobile Banking Privacy Policy",
      mr: "मोबाईल बँकिंग गोपनीयता धोरण",
    },
    description: {
      en: "Read the mobile banking privacy policy.",
      mr: "मोबाईल बँकिंगचे गोपनीयता धोरण वाचा.",
    },
    path: "/downloads/mobile-banking-privacy-policy",
    aliases: {
      en: ["privacy policy", "mobile privacy", "privacy", "data privacy"],
      mr: ["गोपनीयता धोरण", "गोपनीयता"],
    },
  },
];

/* ============================================================
   SEARCH NORMALIZATION
============================================================ */

export function normalizeSearchText(value = "") {
  return String(value)
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

/* ============================================================
   SEARCH HELPERS
============================================================ */

function getLocalizedValue(value, language) {
  if (typeof value === "string") return value;
  return value?.[language] ?? value?.en ?? "";
}

function getItemSearchPhrases(item) {
  const titles = Object.values(item.title ?? {});
  const aliases = Object.values(item.aliases ?? {}).flat();

  return [...titles, ...aliases].map(normalizeSearchText).filter(Boolean);
}

function phraseMatchesQuery(phrase, query) {
  if (!phrase || !query) return false;

  return (
    phrase === query ||
    phrase.startsWith(query) ||
    phrase.includes(query) ||
    query.split(" ").every((term) => phrase.split(" ").includes(term))
  );
}

function getItemScore(item, query) {
  const phrases = getItemSearchPhrases(item);

  if (phrases.includes(query)) return 100;

  if (phrases.some((phrase) => phrase.startsWith(query))) return 80;

  if (phrases.some((phrase) => phrase.includes(query))) return 65;

  const queryTerms = query.split(" ");

  const hasAllTerms = queryTerms.every((term) =>
    phrases.some((phrase) =>
      phrase.split(" ").some((word) => word.startsWith(term)),
    ),
  );

  return hasAllTerms ? 40 : 0;
}

/* ============================================================
   DYNAMIC BRANCH SEARCH RESULTS
============================================================ */

function createBranchSearchItem(branch) {
  return {
    id: `branch-${branch.id}`,
    type: "branch",
    title: {
      en: branch.name,
      mr: branch.name,
    },
    description: {
      en: branch.address,
      mr: branch.address,
    },
    path: `/reach-us/branches?search=${encodeURIComponent(branch.name)}`,
    searchText: normalizeSearchText(
      [
        branch.id,
        branch.name,
        branch.address,
        branch.phone,
        branch.ifsc,
        branch.branchCode,
      ]
        .filter(Boolean)
        .join(" "),
    ),
  };
}

/* ============================================================
   DYNAMIC ATM SEARCH RESULTS
============================================================ */

function createAtmSearchItem(atm) {
  return {
    id: `atm-${atm.id}`,
    type: "atm",
    title: {
      en: `${atm.name} ATM`,
      mr: `${atm.name} ATM`,
    },
    description: {
      en: atm.address,
      mr: atm.address,
    },
    path: `/services/atm-locator?search=${encodeURIComponent(atm.name)}`,
    searchText: normalizeSearchText(
      [atm.id, atm.name, atm.address].filter(Boolean).join(" "),
    ),
  };
}

/* ============================================================
   COMPLETE SEARCH INDEX
============================================================ */

export function getSearchItems() {
  return [
    ...staticSearchItems,
    ...branches.map(createBranchSearchItem),
    ...atms.map(createAtmSearchItem),
  ];
}

/* ============================================================
   CATEGORY CHILD LOOKUP
============================================================ */

export function getCategoryChildren(categoryId) {
  const category = staticSearchItems.find(
    (item) => item.id === categoryId && item.type === "category",
  );

  if (!category) return [];

  return category.children
    .map((childId) => staticSearchItems.find((item) => item.id === childId))
    .filter(Boolean);
}

/* ============================================================
   SEARCH MATCHING
============================================================ */

export function searchWebsite(query, language = "en") {
  const normalizedQuery = normalizeSearchText(query);

  if (!normalizedQuery) return [];

  const categories = staticSearchItems.filter(
    (item) => item.type === "category",
  );

  // If the query exactly matches a category title or alias,
  // return that category only. SiteSearch expands its children.
  const exactCategoryMatches = categories.filter((category) =>
    getItemSearchPhrases(category).includes(normalizedQuery),
  );

  if (exactCategoryMatches.length > 0) {
    return exactCategoryMatches.map((item) => ({
      ...item,
      title: getLocalizedValue(item.title, language),
      description: getLocalizedValue(item.description, language),
      score: 100,
    }));
  }

  const staticResults = staticSearchItems
    .filter((item) => item.type !== "category")
    .map((item) => ({
      item,
      score: getItemScore(item, normalizedQuery),
    }))
    .filter((result) => result.score > 0)
    .map(({ item, score }) => ({
      ...item,
      title: getLocalizedValue(item.title, language),
      description: getLocalizedValue(item.description, language),
      score,
    }));

  const queryTerms = normalizedQuery.split(" ");

  // Avoid returning every ATM for a generic "ATM" query.
  const isGenericAtmQuery = ["atm", "atms", "एटीएम"].includes(normalizedQuery);

  const dynamicResults = getSearchItems()
    .filter((item) => item.type === "branch" || item.type === "atm")
    .filter((item) => {
      if (item.type === "atm" && isGenericAtmQuery) return false;

      const searchableText = item.searchText || "";

      return queryTerms.every((term) => searchableText.includes(term));
    })
    .map((item) => ({
      ...item,
      title: getLocalizedValue(item.title, language),
      description: getLocalizedValue(item.description, language),
      score: 90,
    }));

  // Combine and remove any accidental duplicate IDs.
  const combinedResults = [...staticResults, ...dynamicResults];
  const uniqueResults = new Map();

  combinedResults.forEach((item) => {
    if (!uniqueResults.has(item.id)) {
      uniqueResults.set(item.id, item);
    }
  });

  return [...uniqueResults.values()].sort((a, b) => b.score - a.score);
}

/* ============================================================
   RECOMMENDED SEARCHES
============================================================ */

export const recommendedSearches = [
  {
    id: "branch-locator",
    label: {
      en: "Branch Locator",
      mr: "शाखा शोधा",
    },
    query: "Branch Locator",
  },
  {
    id: "loan-interest-rates",
    label: {
      en: "Interest Rates",
      mr: "व्याजदर",
    },
    query: "Interest Rates",
  },
  {
    id: "gold-loan",
    label: {
      en: "Gold Loan",
      mr: "सोने तारण कर्ज",
    },
    query: "Gold Loan",
  },
  {
    id: "term-deposit",
    label: {
      en: "Term Deposit",
      mr: "मुदत ठेव",
    },
    query: "Term Deposit",
  },
  {
    id: "emi-calculator",
    label: {
      en: "EMI Calculator",
      mr: "ईएमआय कॅल्क्युलेटर",
    },
    query: "EMI Calculator",
  },
];
