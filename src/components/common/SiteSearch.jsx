import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  X,
  Clock,
  ArrowRight,
  MapPin,
  Building2,
  Landmark,
  Calculator,
  FileText,
  ChevronRight,
  Trash2,
} from "lucide-react";

import {
  searchWebsite,
  getCategoryChildren,
  recommendedSearches,
} from "../../data/searchData";

const RECENT_SEARCHES_KEY = "thane-bank-recent-searches";
const MAX_RECENT_SEARCHES = 8;

const translations = {
  en: {
    placeholder: "Search branches, loans, deposits, services...",
    search: "Search",
    recent: "Recent searches",
    recommended: "Recommended searches",
    clearHistory: "Clear history",
    noResults: "No results found",
    tryDifferent: "Try another keyword or check your spelling.",
    results: "Search results",
    category: "Category",
    branches: "Branch",
    atms: "ATM",
    page: "Page",
    clear: "Clear search",
    keyboard: "Use ↑ ↓ to navigate and Enter to select",
  },
  mr: {
    placeholder: "शाखा, कर्ज, ठेवी, सेवा शोधा...",
    search: "शोधा",
    recent: "अलीकडील शोध",
    recommended: "सुचवलेले शोध",
    clearHistory: "इतिहास साफ करा",
    noResults: "कोणतेही परिणाम सापडले नाहीत",
    tryDifferent: "दुसरा शब्द वापरून पहा किंवा स्पेलिंग तपासा.",
    results: "शोध परिणाम",
    category: "विभाग",
    branches: "शाखा",
    atms: "एटीएम",
    page: "पृष्ठ",
    clear: "शोध साफ करा",
    keyboard: "पर्यायांसाठी ↑ ↓ आणि निवडण्यासाठी Enter वापरा",
  },
};

const getLocalizedValue = (value, language) => {
  if (typeof value === "string") return value;

  if (value && typeof value === "object") {
    return value[language] || value.en || "";
  }

  return "";
};

const getItemTitle = (item, language) => {
  return (
    getLocalizedValue(item.title, language) ||
    getLocalizedValue(item.label, language) ||
    item.name ||
    item.query ||
    ""
  );
};

const getItemDescription = (item, language) => {
  return (
    getLocalizedValue(item.description, language) ||
    getLocalizedValue(item.subtitle, language) ||
    ""
  );
};

const getItemIcon = (item) => {
  if (item.type === "branch") return Building2;
  if (item.type === "atm") return MapPin;
  if (item.type === "category") return Landmark;
  if (item.id?.includes("emi")) return Calculator;

  if (
    item.id?.includes("notice") ||
    item.id?.includes("download") ||
    item.id?.includes("privacy")
  ) {
    return FileText;
  }

  return ArrowRight;
};

const getRecommendedQuery = (item, language) => {
  return (
    getLocalizedValue(item.query, language) ||
    getLocalizedValue(item.searchTerm, language) ||
    getLocalizedValue(item.label, language) ||
    getLocalizedValue(item.title, language) ||
    item.name ||
    ""
  );
};

const SiteSearch = ({ open, onClose, language = "en" }) => {
  const navigate = useNavigate();

  const panelRef = useRef(null);
  const inputRef = useRef(null);
  const resultsRef = useRef(null);

  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const t = translations[language] || translations.en;

  // Load recent searches and focus the input when opened.
  useEffect(() => {
    if (!open) return;

    try {
      const saved = JSON.parse(
        localStorage.getItem(RECENT_SEARCHES_KEY) || "[]",
      );

      if (Array.isArray(saved)) {
        setRecentSearches(saved.slice(0, MAX_RECENT_SEARCHES));
      }
    } catch {
      setRecentSearches([]);
    }

    setQuery("");
    setActiveIndex(0);

    const focusTimer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    return () => window.clearTimeout(focusTimer);
  }, [open]);

  // Prevent the homepage behind the search panel from scrolling.
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    const previousOverscroll = document.body.style.overscrollBehavior;

    document.body.style.overflow = "hidden";
    document.body.style.overscrollBehavior = "none";

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.overscrollBehavior = previousOverscroll;
    };
  }, [open]);

  // Close when clicking outside the actual search area.
  useEffect(() => {
    if (!open) return;

    const handleOutsideClick = (event) => {
      if (event.target.closest("[data-site-search-toggle]")) {
        return;
      }

      if (panelRef.current && !panelRef.current.contains(event.target)) {
        onClose();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open, onClose]);

  const searchResults = useMemo(() => {
    if (!query.trim()) return [];

    return searchWebsite(query, language);
  }, [query, language]);

  // Expand categories. Category searches return only the category
  // from searchWebsite, so children cannot be duplicated.
  const displayedItems = useMemo(() => {
    if (!query.trim()) return [];

    const expandedItems = [];

    searchResults.forEach((item) => {
      if (item.type === "category") {
        const children = getCategoryChildren(item.id);

        expandedItems.push({
          ...item,
          isCategoryHeading: true,
        });

        children.forEach((child) => {
          expandedItems.push({
            ...child,
            displayType: "category-child",
          });
        });
      } else {
        expandedItems.push(item);
      }
    });

    return expandedItems;
  }, [searchResults]);

  const selectableItems = useMemo(
    () => displayedItems.filter((item) => !item.isCategoryHeading),
    [displayedItems],
  );

  useEffect(() => {
    setActiveIndex(0);

    if (resultsRef.current) {
      resultsRef.current.scrollTop = 0;
    }
  }, [query]);

  // Keep the active keyboard selection visible.
  useEffect(() => {
    if (!open || !query.trim()) return;

    const activeElement = resultsRef.current?.querySelector(
      `[data-result-index="${activeIndex}"]`,
    );

    activeElement?.scrollIntoView({
      block: "nearest",
      behavior: "auto",
    });
  }, [activeIndex, open, query]);

  // Save a search in local storage.
  const saveRecentSearch = (value) => {
    const cleaned = value.trim();

    if (!cleaned) return;

    const updated = [
      cleaned,
      ...recentSearches.filter(
        (item) => item.toLowerCase() !== cleaned.toLowerCase(),
      ),
    ].slice(0, MAX_RECENT_SEARCHES);

    setRecentSearches(updated);

    try {
      localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(updated));
    } catch {
      // Search continues to work if local storage is unavailable.
    }
  };

  // Clear recent search history.
  const clearRecentSearches = () => {
    setRecentSearches([]);

    try {
      localStorage.removeItem(RECENT_SEARCHES_KEY);
    } catch {
      // Ignore storage errors.
    }
  };

  // Navigate to a selected result.
  const navigateToItem = (item, searchTerm = query) => {
    if (!item?.path) return;

    saveRecentSearch(searchTerm);
    onClose();
    navigate(item.path);
  };

  // Submit the current search.
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query.trim()) return;

    const selectedItem = selectableItems[activeIndex];

    if (selectedItem) {
      navigateToItem(selectedItem);
    }
  };

  // Keyboard navigation.
  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();

      if (selectableItems.length) {
        setActiveIndex((current) =>
          Math.min(current + 1, selectableItems.length - 1),
        );
      }
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      if (selectableItems.length) {
        setActiveIndex((current) => Math.max(current - 1, 0));
      }
    }
  };

  // Run a recommended or recent search immediately.
  const runQuickSearch = (value) => {
    if (!value?.trim()) return;

    const results = searchWebsite(value, language);

    let selectedItem = results.find(
      (item) => item.type !== "category" && item.path,
    );

    // For a category, open its first child only for quick searches.
    if (!selectedItem) {
      const category = results.find((item) => item.type === "category");

      if (category) {
        const children = getCategoryChildren(category.id);
        selectedItem = children.find((item) => item.path);
      }
    }

    if (selectedItem) {
      saveRecentSearch(value);
      onClose();
      navigate(selectedItem.path);
      return;
    }

    setQuery(value);
    setActiveIndex(0);
    inputRef.current?.focus();
  };

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      className="w-full border-t border-white/20 bg-transparent px-4 py-4 sm:px-6 lg:px-8"
      role="search"
    >
      <div className="mx-auto max-w-[1100px]">
        {/* SEARCH BAR */}

        <form
          onSubmit={handleSubmit}
          className="flex w-full items-stretch overflow-hidden rounded-md bg-white shadow-md"
        >
          <div className="flex min-w-0 flex-1 items-center gap-3 px-4">
            <Search size={20} className="shrink-0 text-[#173E70]" />

            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={t.placeholder}
              aria-label={t.placeholder}
              autoComplete="off"
              className="min-w-0 flex-1 appearance-none bg-transparent py-3.5 text-sm text-[#263238] outline-none placeholder:text-slate-400 sm:text-base [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden"
            />

            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                aria-label={t.clear}
                className="shrink-0 rounded-full p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
              >
                <X size={17} />
              </button>
            )}
          </div>

          <button
            type="submit"
            className="flex shrink-0 items-center justify-center gap-2 bg-[#E5B94B] px-5 py-3.5 text-sm font-semibold text-[#263238] transition-colors hover:bg-[#F0CC70] sm:px-8"
          >
            <span>{t.search}</span>
            <ArrowRight size={17} />
          </button>
        </form>

        {/* INDEPENDENTLY SCROLLABLE RESULTS AREA */}

        <div
          ref={resultsRef}
          className="mt-4 max-h-[calc(100dvh-245px)] overflow-y-auto overscroll-contain pr-1"
          style={{
            scrollbarGutter: "stable",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {query.trim() ? (
            displayedItems.length > 0 ? (
              <div className="rounded-md border border-white/15 bg-white p-3 sm:p-4">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#173E70]">
                  {t.results}
                </p>

                <div className="grid grid-cols-1 gap-1 sm:grid-cols-2">
                  {displayedItems.map((item) => {
                    if (item.isCategoryHeading) {
                      return (
                        <div
                          key={`heading-${item.id}`}
                          className="col-span-full mb-1 mt-3 flex items-center gap-2 border-b border-slate-100 pb-2 first:mt-0"
                        >
                          <Landmark size={15} className="text-[#173E70]" />

                          <span className="text-xs font-bold uppercase tracking-wide text-[#173E70]">
                            {getItemTitle(item, language)}
                          </span>

                          <span className="ml-auto text-[10px] text-slate-400">
                            {t.category}
                          </span>
                        </div>
                      );
                    }

                    const Icon = getItemIcon(item);

                    const itemIndex = selectableItems.findIndex(
                      (entry) => entry.id === item.id,
                    );

                    const isActive = itemIndex === activeIndex;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        data-result-index={itemIndex}
                        onMouseEnter={() => setActiveIndex(itemIndex)}
                        onClick={() => navigateToItem(item)}
                        className={`group flex min-w-0 items-center gap-3 rounded-md px-3 py-2.5 text-left transition ${
                          isActive ? "bg-[#EAF2FB]" : "hover:bg-slate-50"
                        } ${
                          item.displayType === "category-child"
                            ? "sm:ml-2 sm:w-[calc(100%-0.5rem)]"
                            : ""
                        }`}
                      >
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#EAF2FB] text-[#173E70]">
                          <Icon size={16} />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-semibold text-slate-800">
                            {getItemTitle(item, language)}
                          </span>

                          {getItemDescription(item, language) && (
                            <span className="mt-0.5 block truncate text-xs text-slate-500">
                              {getItemDescription(item, language)}
                            </span>
                          )}
                        </span>

                        <span className="hidden shrink-0 text-[10px] font-medium uppercase text-slate-400 sm:block">
                          {item.type === "branch"
                            ? t.branches
                            : item.type === "atm"
                              ? t.atms
                              : item.displayType === "category-child"
                                ? t.page
                                : ""}
                        </span>

                        <ChevronRight
                          size={15}
                          className="shrink-0 text-slate-300 transition group-hover:text-[#173E70]"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="rounded-md bg-white px-4 py-6 text-center">
                <p className="text-sm font-semibold text-slate-700">
                  {t.noResults}
                </p>

                <p className="mt-1 text-xs text-slate-500">{t.tryDifferent}</p>
              </div>
            )
          ) : (
            <div className="rounded-md border border-white/15 bg-white p-4 sm:p-5">
              {/* RECENT SEARCHES */}

              {recentSearches.length > 0 && (
                <section className="mb-5">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-[#173E70]" />

                      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {t.recent}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={clearRecentSearches}
                      className="flex items-center gap-1 text-xs text-slate-400 transition hover:text-red-600"
                    >
                      <Trash2 size={13} />
                      {t.clearHistory}
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {recentSearches.map((item, index) => (
                      <button
                        key={`${item}-${index}`}
                        type="button"
                        onClick={() => runQuickSearch(item)}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs text-slate-600 transition hover:border-[#8bbff7] hover:bg-[#EAF2FB] hover:text-[#173E70]"
                      >
                        <Clock size={12} />
                        {item}
                      </button>
                    ))}
                  </div>
                </section>
              )}

              {/* RECOMMENDED SEARCHES */}

              <section>
                <div className="mb-3 flex items-center gap-2">
                  <Search size={14} className="text-[#173E70]" />

                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {t.recommended}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {recommendedSearches.map((item, index) => {
                    const label = getRecommendedQuery(item, language);

                    if (!label) return null;

                    return (
                      <button
                        key={item.id || `${label}-${index}`}
                        type="button"
                        onClick={() => runQuickSearch(item.query || label)}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 transition hover:border-[#8bbff7] hover:bg-[#EAF2FB] hover:text-[#173E70]"
                      >
                        <ArrowRight size={13} />
                        {label}
                      </button>
                    );
                  })}
                </div>
              </section>
            </div>
          )}
        </div>

        {/* KEYBOARD HINT */}

        <p className="mt-2 text-right text-[10px] text-white/65">
          {t.keyboard}
        </p>
      </div>
    </div>
  );
};

export default SiteSearch;
