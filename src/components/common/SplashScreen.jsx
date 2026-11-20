import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useLanguage } from "../../context/LanguageContext";
import bankLogo from "../../assets/brand/thane-bank-logo.png";
import "./SplashScreen.css";

function SplashScreen() {
  const { t } = useLanguage();

  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  // Notify the website when the splash screen has completely disappeared.
  const notifySplashComplete = () => {
    window.dispatchEvent(new Event("tdcc-splash-complete"));
  };

  // Keep the page from scrolling while the introduction is visible.
  useEffect(() => {
    if (!isVisible) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isVisible]);

  // Start the transition after the introduction has been displayed.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const displayDuration = prefersReducedMotion ? 1600 : 3200;

    const timer = window.setTimeout(() => {
      const supportsViewTransitions =
        typeof document.startViewTransition === "function";

      if (supportsViewTransitions) {
        const transition = document.startViewTransition(() => {
          flushSync(() => {
            // Assign matching transition names to the actual header elements.
            document.documentElement.classList.add(
              "bank-header-transition-target",
            );

            setIsVisible(false);
          });
        });

        // Wait until the complete view transition has finished.
        transition.finished.then(notifySplashComplete, notifySplashComplete);
      } else {
        // Graceful fallback for browsers without View Transition support.
        setIsExiting(true);

        window.setTimeout(
          () => {
            setIsVisible(false);
            notifySplashComplete();
          },
          prefersReducedMotion ? 0 : 650,
        );
      }
    }, displayDuration);

    return () => window.clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`splash-screen ${isExiting ? "splash-screen--exiting" : ""}`}
      role="status"
      aria-label={t("bankName")}
    >
      <div className="splash-screen__content">
        <img
          src={bankLogo}
          alt="Thane District Central Co-operative Bank emblem"
          className="splash-screen__logo"
        />

        <h1 className="splash-screen__bank-name">{t("bankName")}</h1>
      </div>
    </div>
  );
}

export default SplashScreen;
