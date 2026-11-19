import {
  useEffect,
  useRef,
  useState,
  cloneElement,
  isValidElement,
} from "react";
import {
  MessageCircle,
  X,
  ChevronLeft,
  ChevronRight,
  Landmark,
  Bot,
  ShieldCheck,
  Sparkles,
  Wallet,
  CreditCard,
  Coins,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import "./ChatbotWidget.css";

const TYPE_SPEED = 19;
const QUESTION_DELAY = 260;
const THINKING_DELAY = 1100;

function animateAnswerNode(node) {
  if (typeof node === "string") {
    return (
      <span className="chatbot-type-text">
        {Array.from(node).map((character, index) => (
          <span
            key={index}
            className="chatbot-type-character"
            style={{ animationDelay: `${index * 8}ms` }}
          >
            {character}
          </span>
        ))}
      </span>
    );
  }

  if (Array.isArray(node)) {
    return node.map((child, index) => (
      <span key={index}>{animateAnswerNode(child)}</span>
    ));
  }

  if (isValidElement(node)) {
    return cloneElement(node, {
      children: animateAnswerNode(node.props.children),
    });
  }

  return node;
}

function ChatbotWidget() {
  const { language } = useLanguage();
  const isMarathi = language === "mr";

  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [welcomeText, setWelcomeText] = useState("");
  const [visibleQuestions, setVisibleQuestions] = useState(0);
  const [isThinking, setIsThinking] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);

  const bodyRef = useRef(null);
  const timersRef = useRef([]);

  const content = {
    en: {
      title: "TDCC Bank Assistant",
      subtitle: "Here to assist you",
      online: "Online",
      welcomeTitle: "Welcome to TDCC Bank!",
      welcomeMessage:
        "Namaste! How may we assist you today? Please select one of the following frequently asked questions to find the information you need.",
      questionsTitle: "How can I help you?",
      questionsSubtitle: "SELECT A QUESTION TO GET STARTED",

      questions: [
        {
          id: 1,
          question: "What types of accounts does the bank offer?",
          answer: (
            <>
              The Thane District Central Co-operative Bank offers different
              deposit account facilities to meet customers' banking needs,
              including:
              <ul className="my-3 list-disc space-y-1 pl-5">
                <li>Savings Account</li>
                <li>Current Account</li>
                <li>Recurring Deposit Account</li>
                <li>Term Deposit Account</li>
              </ul>
              Each account has different features and benefits depending on the
              customer's requirements.
              <p className="mt-3">
                For more information, please visit our{" "}
                <Link to="/deposit" className="chatbot-answer-link">
                  Deposit Services
                </Link>{" "}
                section or contact your nearest bank branch.
              </p>
            </>
          ),
        },
        {
          id: 2,
          question: "What loan facilities are available?",
          answer: (
            <>
              The bank provides various loan facilities to support individuals,
              farmers and other eligible borrowers.
              <p className="mt-3">Some of the available facilities include:</p>
              <ul className="my-3 list-disc space-y-1 pl-5">
                <li>Housing Loan</li>
                <li>Vehicle Loan</li>
                <li>Education Loan</li>
                <li>Gold Loan</li>
                <li>Agricultural and crop-related loans</li>
              </ul>
              Loan eligibility, limits, interest rates and repayment conditions
              vary depending on the loan scheme.
              <p className="mt-3">
                For detailed information, please visit our{" "}
                <Link to="/loans" className="chatbot-answer-link">
                  Loan Services
                </Link>{" "}
                section or contact your nearest branch.
              </p>
            </>
          ),
        },
        {
          id: 3,
          question: "How can I find my nearest bank branch?",
          answer: (
            <>
              You can easily locate your nearest Thane District Central
              Co-operative Bank branch through our Branch Locator.
              <p className="mt-3">
                Visit the Branch Locator page to explore available branches and
                view their addresses and contact details.
              </p>
              <Link
                to="/reach-us/branches"
                className="chatbot-answer-link mt-3"
              >
                Find a Bank Branch <ChevronRight size={16} />
              </Link>
            </>
          ),
        },
        {
          id: 4,
          question: "Where is my nearest ATM?",
          answer: (
            <>
              Looking for the nearest TDCC Bank ATM?
              <p className="mt-3">
                You can use our ATM Locator to explore the available ATM
                locations across the bank's service area.
              </p>
              <p className="mt-3">
                Visit the ATM Locator page to find an ATM in your preferred
                location.
              </p>
              <Link
                to="/services/atm-locator"
                className="chatbot-answer-link mt-3"
              >
                Find an ATM <ChevronRight size={16} />
              </Link>
            </>
          ),
        },
        {
          id: 5,
          question: "Where can I check the latest interest rates?",
          answer: (
            <>
              You can view the latest applicable interest rates for the bank's
              deposit schemes and loan facilities through our website.
              <p className="mt-3">
                Please visit the Interest Rates section for the available rates
                and related information.
              </p>
              <p className="mt-3">
                For confirmation of the applicable rate, eligibility and terms,
                please contact your nearest branch.
              </p>
              <Link
                to="/loans/interest-rates"
                className="chatbot-answer-link mt-3"
              >
                View Interest Rates <ChevronRight size={16} />
              </Link>
            </>
          ),
        },
      ],

      back: "Browse all questions",
      assistance: "Need further assistance?",
      getInTouch: "Get in touch with us",
      footer: "Banking assistance, made simple.",
      close: "Close chatbot",
      open: "Open chatbot",
      assistant: "TDCC Assistant",
      you: "You",
      thinking: "Thinking",
    },

    mr: {
      title: "TDCC बँक सहाय्यक",
      subtitle: "आपल्या सेवेसाठी उपलब्ध",
      online: "ऑनलाइन",
      welcomeTitle: "TDCC बँकेत आपले स्वागत आहे!",
      welcomeMessage:
        "नमस्कार! आम्ही आपली कशी मदत करू शकतो? आपल्याला आवश्यक असलेली माहिती मिळवण्यासाठी कृपया खालील वारंवार विचारले जाणारे प्रश्न निवडा.",
      questionsTitle: "आम्ही आपली कशी मदत करू शकतो?",
      questionsSubtitle: "सुरुवात करण्यासाठी प्रश्न निवडा",

      questions: [
        {
          id: 1,
          question: "बँकेत कोणत्या प्रकारची खाती उपलब्ध आहेत?",
          answer: (
            <>
              ठाणे जिल्हा मध्यवर्ती सहकारी बँक ग्राहकांच्या विविध बँकिंग गरजा
              पूर्ण करण्यासाठी खालील ठेव खाते सुविधा उपलब्ध करून देते:
              <ul className="my-3 list-disc space-y-1 pl-5">
                <li>बचत खाते</li>
                <li>चालू खाते</li>
                <li>आवर्ती ठेव खाते</li>
                <li>मुदत ठेव खाते</li>
              </ul>
              प्रत्येक खात्याची वैशिष्ट्ये आणि फायदे ग्राहकांच्या गरजेनुसार
              वेगवेगळे असतात.
              <p className="mt-3">
                अधिक माहितीसाठी आमच्या{" "}
                <Link to="/deposit" className="chatbot-answer-link">
                  ठेव सेवा
                </Link>{" "}
                विभागाला भेट द्या किंवा आपल्या जवळच्या शाखेशी संपर्क साधा.
              </p>
            </>
          ),
        },
        {
          id: 2,
          question: "बँकेत कोणत्या प्रकारच्या कर्ज सुविधा उपलब्ध आहेत?",
          answer: (
            <>
              बँक व्यक्ती, शेतकरी आणि इतर पात्र कर्जदारांसाठी विविध कर्ज सुविधा
              उपलब्ध करून देते.
              <p className="mt-3">यामध्ये काही प्रमुख सुविधांचा समावेश आहे:</p>
              <ul className="my-3 list-disc space-y-1 pl-5">
                <li>गृह कर्ज</li>
                <li>वाहन कर्ज</li>
                <li>शैक्षणिक कर्ज</li>
                <li>सोने तारण कर्ज</li>
                <li>कृषी व पीक संबंधित कर्ज</li>
              </ul>
              कर्जाची पात्रता, मर्यादा, व्याजदर आणि परतफेडीच्या अटी संबंधित कर्ज
              योजनेनुसार वेगवेगळ्या असतात.
              <p className="mt-3">
                अधिक माहितीसाठी आमच्या{" "}
                <Link to="/loans" className="chatbot-answer-link">
                  कर्ज सेवा
                </Link>{" "}
                विभागाला भेट द्या किंवा आपल्या जवळच्या शाखेशी संपर्क साधा.
              </p>
            </>
          ),
        },
        {
          id: 3,
          question: "माझ्या जवळची बँकेची शाखा कशी शोधू शकतो?",
          answer: (
            <>
              आमच्या शाखा शोधक सुविधेच्या मदतीने आपण आपल्या जवळची ठाणे जिल्हा
              मध्यवर्ती सहकारी बँकेची शाखा सहज शोधू शकता.
              <p className="mt-3">
                उपलब्ध शाखांची यादी, पत्ते आणि संपर्क तपशील पाहण्यासाठी शाखा
                शोधक पृष्ठाला भेट द्या.
              </p>
              <Link
                to="/reach-us/branches"
                className="chatbot-answer-link mt-3"
              >
                बँकेची शाखा शोधा <ChevronRight size={16} />
              </Link>
            </>
          ),
        },
        {
          id: 4,
          question: "माझ्या जवळचे एटीएम कुठे आहे?",
          answer: (
            <>
              आपल्याला जवळचे TDCC बँकेचे एटीएम शोधायचे आहे का?
              <p className="mt-3">
                आमच्या एटीएम शोधक सुविधेच्या मदतीने बँकेच्या सेवा क्षेत्रातील
                उपलब्ध एटीएमची ठिकाणे पाहू शकता.
              </p>
              <p className="mt-3">
                आपल्या पसंतीच्या ठिकाणाजवळील एटीएम शोधण्यासाठी एटीएम शोधक
                पृष्ठाला भेट द्या.
              </p>
              <Link
                to="/services/atm-locator"
                className="chatbot-answer-link mt-3"
              >
                एटीएम शोधा <ChevronRight size={16} />
              </Link>
            </>
          ),
        },
        {
          id: 5,
          question: "नवीनतम व्याजदर कुठे पाहता येतील?",
          answer: (
            <>
              बँकेच्या ठेव योजना आणि कर्ज सुविधांसाठी लागू असलेले व्याजदर आपण
              आमच्या संकेतस्थळावर पाहू शकता.
              <p className="mt-3">
                उपलब्ध व्याजदर आणि संबंधित माहितीसाठी कृपया व्याजदर विभागाला भेट
                द्या.
              </p>
              <p className="mt-3">
                लागू व्याजदर, पात्रता आणि अटींची खात्री करण्यासाठी आपल्या
                जवळच्या शाखेशी संपर्क साधा.
              </p>
              <Link
                to="/loans/interest-rates"
                className="chatbot-answer-link mt-3"
              >
                व्याजदर पहा <ChevronRight size={16} />
              </Link>
            </>
          ),
        },
      ],

      back: "सर्व प्रश्न पहा",
      assistance: "अधिक मदतीची आवश्यकता आहे?",
      getInTouch: "आमच्याशी संपर्क साधा",
      footer: "बँकिंग सेवा, आता अधिक सोप्या.",
      close: "चॅटबॉट बंद करा",
      open: "चॅटबॉट उघडा",
      assistant: "TDCC सहाय्यक",
      you: "आपण",
      thinking: "विचार करत आहे",
    },
  };

  const currentContent = isMarathi ? content.mr : content.en;

  const clearTimers = () => {
    timersRef.current.forEach((timer) => window.clearTimeout(timer));
    timersRef.current = [];
  };

  const addTimer = (callback, delay) => {
    const timer = window.setTimeout(callback, delay);
    timersRef.current.push(timer);
    return timer;
  };

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      if (bodyRef.current) {
        bodyRef.current.scrollTo({
          top: bodyRef.current.scrollHeight,
          behavior: "smooth",
        });
      }
    });
  };

  const startWelcomeSequence = () => {
    clearTimers();

    setSelectedQuestion(null);
    setWelcomeText("");
    setVisibleQuestions(0);
    setIsThinking(false);
    setShowAnswer(false);

    let characterIndex = 0;
    const message = currentContent.welcomeMessage;

    const typeNextCharacter = () => {
      characterIndex += 1;
      setWelcomeText(message.slice(0, characterIndex));

      if (characterIndex < message.length) {
        addTimer(typeNextCharacter, TYPE_SPEED);
      } else {
        currentContent.questions.forEach((_, index) => {
          addTimer(
            () => {
              setVisibleQuestions((previous) => Math.max(previous, index + 1));
              scrollToBottom();
            },
            300 + index * QUESTION_DELAY,
          );
        });
      }
    };

    addTimer(typeNextCharacter, 350);
  };

  useEffect(() => {
    if (isOpen && selectedQuestion === null) {
      startWelcomeSequence();
    }

    return () => clearTimers();
  }, [isOpen, language]);

  useEffect(() => {
    scrollToBottom();
  }, [visibleQuestions, isThinking, showAnswer, welcomeText]);

  const handleQuestionSelect = (questionId) => {
    clearTimers();
    setSelectedQuestion(questionId);
    setIsThinking(true);
    setShowAnswer(false);

    addTimer(() => {
      setIsThinking(false);
      setShowAnswer(true);
      scrollToBottom();
    }, THINKING_DELAY);
  };

  const handleBack = () => {
    clearTimers();

    setSelectedQuestion(null);
    setWelcomeText(currentContent.welcomeMessage);
    setVisibleQuestions(currentContent.questions.length);

    setIsThinking(false);
    setShowAnswer(false);
  };

  const handleClose = () => {
    clearTimers();
    setIsOpen(false);
    setSelectedQuestion(null);
    setWelcomeText("");
    setVisibleQuestions(0);
    setIsThinking(false);
    setShowAnswer(false);
  };

  const handleToggle = () => {
    if (isOpen) {
      handleClose();
    } else {
      setIsOpen(true);
    }
  };

  const handleGetInTouch = () => {
    window.dispatchEvent(new Event("tdcc-open-contact-form"));
  };

  const activeQuestion = currentContent.questions.find(
    (question) => question.id === selectedQuestion,
  );

  return (
    <div className="chatbot-widget">
      {isOpen && (
        <section aria-label={currentContent.title} className="chatbot-panel">
          {/* HEADER */}

          <div className="chatbot-header">
            <div className="chatbot-header-avatar">
              <Bot size={25} strokeWidth={1.8} />
              <span className="chatbot-avatar-sparkle">
                <Sparkles size={11} />
              </span>
            </div>

            <div className="chatbot-header-info">
              <h2>{currentContent.title}</h2>
              <div className="chatbot-status">
                <span className="chatbot-status-dot" />
                <span>{currentContent.online}</span>
                <span className="chatbot-status-separator">·</span>
                <span>{currentContent.subtitle}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleClose}
              aria-label={currentContent.close}
              className="chatbot-header-close"
            >
              <X size={20} />
            </button>
          </div>

          {/* CONVERSATION BODY */}

          <div className="chatbot-body" ref={bodyRef} aria-live="polite">
            {/* DECORATIVE BACKGROUND ICONS */}

            <div className="chatbot-background-decoration" aria-hidden="true">
              <Landmark className="chatbot-floating-icon chatbot-floating-icon-one" />
              <Wallet className="chatbot-floating-icon chatbot-floating-icon-two" />
              <CreditCard className="chatbot-floating-icon chatbot-floating-icon-three" />
              <Coins className="chatbot-floating-icon chatbot-floating-icon-four" />
              <ShieldCheck className="chatbot-floating-icon chatbot-floating-icon-five" />
            </div>

            {/* WELCOME MESSAGE */}

            <div className="chatbot-welcome-row chatbot-content-layer">
              <div className="chatbot-message-avatar">
                <Bot size={19} />
              </div>

              <div className="chatbot-welcome-content">
                <span className="chatbot-sender-label">
                  {currentContent.assistant}
                </span>

                <div className="chatbot-welcome-card">
                  <h3>{currentContent.welcomeTitle}</h3>
                  <p>
                    {welcomeText}
                    {welcomeText.length <
                      currentContent.welcomeMessage.length && (
                      <span className="chatbot-typing-cursor" />
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* QUESTION LIST */}

            {!activeQuestion && visibleQuestions > 0 && (
              <div className="chatbot-question-section chatbot-content-layer">
                <div className="chatbot-section-heading">
                  <h3>{currentContent.questionsTitle}</h3>
                  <span>{currentContent.questionsSubtitle}</span>
                </div>

                <div className="chatbot-question-list">
                  {currentContent.questions
                    .slice(0, visibleQuestions)
                    .map((question, index) => (
                      <button
                        key={question.id}
                        type="button"
                        onClick={() => handleQuestionSelect(question.id)}
                        className="chatbot-question-card chatbot-question-enter"
                        style={{ "--question-index": index }}
                      >
                        <span className="chatbot-question-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="chatbot-question-text">
                          {question.question}
                        </span>

                        <span className="chatbot-question-arrow">
                          <ChevronRight size={17} />
                        </span>
                      </button>
                    ))}
                </div>
              </div>
            )}

            {/* SELECTED QUESTION AND ANSWER */}

            {activeQuestion && (
              <div className="chatbot-conversation chatbot-content-layer">
                <div className="chatbot-user-message-row chatbot-message-enter">
                  <span className="chatbot-sender-label">
                    {currentContent.you}
                  </span>

                  <div className="chatbot-user-message">
                    {activeQuestion.question}
                  </div>
                </div>

                {isThinking && (
                  <div className="chatbot-answer-row chatbot-message-enter">
                    <div className="chatbot-message-avatar">
                      <Bot size={19} />
                    </div>

                    <div className="chatbot-answer-content">
                      <span className="chatbot-sender-label">
                        {currentContent.assistant}
                      </span>

                      <div className="chatbot-thinking-bubble">
                        <span />
                        <span />
                        <span />
                        <small>{currentContent.thinking}</small>
                      </div>
                    </div>
                  </div>
                )}

                {showAnswer && (
                  <div className="chatbot-answer-row chatbot-answer-reveal">
                    <div className="chatbot-message-avatar">
                      <Bot size={19} />
                    </div>

                    <div className="chatbot-answer-content">
                      <span className="chatbot-sender-label">
                        {currentContent.assistant}
                      </span>

                      <div className="chatbot-answer-card">
                        {animateAnswerNode(activeQuestion.answer)}
                      </div>
                    </div>
                  </div>
                )}

                {showAnswer && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="chatbot-browse-button"
                  >
                    <ChevronLeft size={17} />
                    {currentContent.back}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* FOOTER */}

          <div className="chatbot-footer">
            <div className="chatbot-footer-contact">
              <div className="chatbot-footer-icon">
                <ShieldCheck size={19} />
              </div>

              <div className="chatbot-footer-copy">
                <span>{currentContent.assistance}</span>

                <button
                  type="button"
                  onClick={handleGetInTouch}
                  className="chatbot-contact-link"
                >
                  {currentContent.getInTouch}
                  <ChevronRight size={15} />
                </button>
              </div>
            </div>

            <div className="chatbot-footer-brand">
              <Landmark size={13} />
              <span>{currentContent.footer}</span>
            </div>
          </div>
        </section>
      )}

      {/* FLOATING CHATBOT LAUNCHER */}

      <button
        type="button"
        onClick={handleToggle}
        aria-label={isOpen ? currentContent.close : currentContent.open}
        aria-expanded={isOpen}
        className={`chatbot-launcher ${isOpen ? "chatbot-launcher-open" : ""}`}
      >
        <span className="chatbot-launcher-pulse" />

        <span className="chatbot-launcher-icon">
          {isOpen ? <X size={25} /> : <MessageCircle size={25} />}
        </span>
      </button>
    </div>
  );
}

export default ChatbotWidget;
