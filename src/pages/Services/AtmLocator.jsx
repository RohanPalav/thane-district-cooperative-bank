import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Search,
  MapPin,
  ExternalLink,
  Building2,
  MapPinned,
  Navigation,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { atms } from "../../data/atmData";
import geocodedAtms from "../../data/geocodedAtms.json";
import AtmMap from "../../components/sections/AtmMap";

function AtmLocator() {
  const { language, t } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  const urlSearchQuery = searchParams.get("search") || "";

  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);
  const [selectedAtmId, setSelectedAtmId] = useState(null);

  const isMarathi = language === "mr";

  const fontClass = isMarathi
    ? '[font-family:"Nirmala_UI","Noto_Sans_Devanagari",sans-serif]'
    : "font-[Poppins]";

  // Merge source ATM records with their available coordinates.
  // Preserve original English values for searching.
  // Display translated names and addresses when Marathi is selected.
  const atmRecords = useMemo(() => {
    const geocodedById = new Map(geocodedAtms.map((atm) => [atm.id, atm]));

    return atms.map((atm) => {
      const translatedName = t(`atmName${atm.id}`);

      return {
        ...atm,
        ...(geocodedById.get(atm.id) || {}),

        // Preserve original English values for searching.
        originalName: atm.name,
        originalAddress: atm.address,

        // Display the translated ATM name.
        name: translatedName === `atmName${atm.id}` ? atm.name : translatedName,

        // Display the Marathi address when Marathi is selected.
        address:
          language === "mr"
            ? t("atmAddresses")[atm.id - 1] || atm.address
            : atm.address,
      };
    });
  }, [language, t]);

  // Search using both original English and translated Marathi data.
  // This allows users to search regardless of the selected language.
  const filteredAtms = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return atmRecords;

    return atmRecords.filter((atm) =>
      [atm.id, atm.name, atm.originalName, atm.address, atm.originalAddress]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [atmRecords, searchQuery]);

  // Handle search queries passed from the main website.
  useEffect(() => {
    const query = urlSearchQuery.trim();

    setSearchQuery(query);

    if (!query) {
      setSelectedAtmId(null);
      return;
    }

    const normalizedQuery = query.toLowerCase();

    const matchingAtm = atmRecords.find((atm) =>
      [atm.id, atm.name, atm.originalName, atm.address, atm.originalAddress]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );

    setSelectedAtmId(matchingAtm?.id ?? null);
  }, [urlSearchQuery, atmRecords]);

  // Scroll to the selected ATM after its row is rendered.
  useEffect(() => {
    if (selectedAtmId === null) return;

    const atmExists = filteredAtms.some((atm) => atm.id === selectedAtmId);

    if (!atmExists) return;

    document.getElementById(`atm-${selectedAtmId}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [selectedAtmId, filteredAtms]);

  const handleSelectAtm = (atmId) => {
    setSelectedAtmId(atmId);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setSelectedAtmId(null);
    setSearchParams({}, { replace: true });
  };

  const handleMapClick = (atm) => {
    if (Number.isFinite(atm.latitude) && Number.isFinite(atm.longitude)) {
      window.open(
        `https://www.openstreetmap.org/?mlat=${atm.latitude}&mlon=${atm.longitude}#map=17/${atm.latitude}/${atm.longitude}`,
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  return (
    <main
      className={`relative min-h-screen overflow-hidden ${fontClass}`}
      style={{
        background: `
          radial-gradient(
            ellipse at 8% 10%,
            rgba(229, 246, 238, 0.95) 0%,
            rgba(229, 246, 238, 0) 48%
          ),
          radial-gradient(
            ellipse at 92% 90%,
            rgba(139, 191, 247, 0.13) 0%,
            rgba(139, 191, 247, 0) 45%
          ),
          linear-gradient(120deg, #fffce3 0%, #f7fbf4 48%, #edf6f2 100%)
        `,
        backgroundAttachment: "fixed",
      }}
    >
      {/* PAGE INTRODUCTION */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-[#25845d]/[0.06] blur-3xl" />

        <div className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-[#173E70]/[0.05] blur-3xl" />

        <div className="relative mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#25845d]">
              {t("atmLocatorEyebrow")}
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
              {t("atmLocatorHeading")}
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-[#596574] sm:text-lg">
              {t("atmLocatorSubtitle")}
            </p>

            {/* ATM COUNT */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[#DCE9E1] bg-white/80 px-5 py-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E9F4ED] text-[#25845d]">
                <Building2 size={21} />
              </div>

              <div>
                <p className="text-xl font-bold leading-none text-[#173E70]">
                  {atmRecords.length}
                </p>

                <p className="mt-1 text-xs font-medium text-[#667085]">
                  {t("atmLocatorAvailable")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ATM DIRECTORY */}
      <section className="mx-auto max-w-[1200px] px-5 py-12 sm:px-8 lg:py-16">
        {/* SEARCH PANEL */}
        <div className="mb-8 rounded-2xl border border-[#E7ECE9] bg-white p-5 shadow-[0_5px_18px_rgba(23,62,112,0.045)] sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="w-full sm:max-w-[620px]">
              <label
                htmlFor="atm-search"
                className="mb-3 block text-sm font-semibold text-[#173E70]"
              >
                {t("atmLocatorSearchLabel")}
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-[#DCE4E0] bg-[#FAFCFB] px-4 py-3.5 transition-all duration-200 focus-within:border-[#25845d] focus-within:bg-white focus-within:ring-4 focus-within:ring-[#25845d]/10">
                <Search size={20} className="shrink-0 text-[#25845d]" />

                <input
                  id="atm-search"
                  type="search"
                  value={searchQuery}
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                    setSelectedAtmId(null);
                  }}
                  placeholder={t("atmLocatorSearchPlaceholder")}
                  className="w-full bg-transparent text-sm font-medium text-[#263238] outline-none placeholder:font-normal placeholder:text-[#98A2B3]"
                />
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-[#667085] sm:pb-3">
              <Building2 size={17} className="shrink-0 text-[#25845d]" />

              <span>
                {t("atmLocatorShowing")}{" "}
                <strong className="font-bold text-[#173E70]">
                  {filteredAtms.length}
                </strong>{" "}
                {t("atmLocatorOf")} {atmRecords.length} {t("atmLocatorAtms")}
              </span>
            </div>
          </div>
        </div>

        {/* MAP SECTION */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-[#E7ECE9] bg-white shadow-[0_5px_18px_rgba(23,62,112,0.045)]">
          <div className="flex flex-col gap-3 border-b border-[#E9EEEB] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E9F4ED] text-[#25845d]">
                <MapPinned size={22} />
              </div>

              <div>
                <h2 className="text-lg font-semibold text-[#173E70] sm:text-xl">
                  {t("atmLocatorMapHeading")}
                </h2>

                <p className="mt-1 text-xs text-[#84908A]">
                  {t("atmLocatorDirectory")}
                </p>
              </div>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F0F6F2] px-3 py-1.5 text-xs font-semibold text-[#25845d]">
              <span className="h-2 w-2 rounded-full bg-[#25845d]" />
              {t("atmLocatorLocationPending")}
            </span>
          </div>

          <div className="p-3 sm:p-5">
            <AtmMap
              atms={filteredAtms}
              language={language}
              onSelectAtm={handleSelectAtm}
            />
          </div>
        </div>

        {/* DIRECTORY HEADING */}
        <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#25845d]">
              {t("atmLocatorEyebrow")}
            </p>

            <h2 className="text-2xl font-semibold text-[#173E70] sm:text-3xl">
              {t("atmLocatorDirectory")}
            </h2>
          </div>

          <button
            type="button"
            onClick={handleClearSearch}
            className="inline-flex items-center gap-2 rounded-lg border border-[#DCE9E1] bg-white px-4 py-2.5 text-sm font-semibold text-[#173E70] shadow-sm transition-all duration-200 hover:border-[#25845d] hover:bg-[#F0F6F2] hover:text-[#25845d]"
          >
            <Building2 size={16} />
            {t("atmLocatorAllAtms")}
          </button>
        </div>

        {/* MATCHING ATM INDICATOR */}
        {selectedAtmId !== null && (
          <div className="mb-5 flex items-start gap-3 rounded-xl border border-[#E8D8A8] bg-[#FFF9E8] px-4 py-4 text-sm text-[#795B20] sm:items-center">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#F8EDCB]">
              <MapPin size={18} />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#94732D]">
                {t("atmLocatorMatched")}
              </p>

              <p className="mt-1 font-semibold text-[#795B20]">
                {atmRecords.find((atm) => atm.id === selectedAtmId)?.name}
              </p>
            </div>
          </div>
        )}

        {/* ATM RESULTS */}
        {filteredAtms.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-[#D7E2DB] bg-white px-5 py-16 text-center shadow-sm">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F0F6F2] text-[#25845d]">
              <Search size={25} />
            </div>

            <p className="mt-5 text-base font-semibold text-[#173E70]">
              {t("atmLocatorNoResults")}
            </p>

            <button
              type="button"
              onClick={handleClearSearch}
              className="mt-4 text-sm font-semibold text-[#25845d] transition-colors hover:text-[#173E70]"
            >
              {t("atmLocatorAllAtms")}
            </button>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-[#E7ECE9] bg-white shadow-[0_5px_18px_rgba(23,62,112,0.045)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#F2F7F4] text-xs font-semibold uppercase tracking-wide text-[#52645A]">
                    <th className="w-[90px] px-5 py-5">
                      {t("atmLocatorNumber")}
                    </th>

                    <th className="px-5 py-5">{t("atmLocatorAtms")}</th>

                    <th className="px-5 py-5">{t("atmLocatorAddress")}</th>

                    <th className="w-[170px] px-5 py-5">
                      {t("atmLocatorViewMap")}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredAtms.map((atm) => {
                    const hasCoordinates =
                      Number.isFinite(atm.latitude) &&
                      Number.isFinite(atm.longitude);

                    const isSelected = selectedAtmId === atm.id;

                    return (
                      <tr
                        key={atm.id}
                        id={`atm-${atm.id}`}
                        aria-current={isSelected ? "location" : undefined}
                        className={`border-t align-top transition-all duration-200 ${
                          isSelected
                            ? "border-[#D6A43A] bg-[#FFF8E8] shadow-[inset_0_0_0_2px_rgba(214,164,58,0.35)]"
                            : "border-[#E9EEEB] bg-white hover:bg-[#F8FBF9]"
                        }`}
                      >
                        <td className="px-5 py-5 text-sm font-semibold text-[#84908A]">
                          {atm.id}
                        </td>

                        <td className="px-5 py-5">
                          <div className="flex items-start gap-3">
                            <div
                              className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                                isSelected
                                  ? "bg-[#F8EDCB] text-[#94732D]"
                                  : "bg-[#E9F4ED] text-[#25845d]"
                              }`}
                            >
                              <Building2 size={17} />
                            </div>

                            <div>
                              <p className="text-sm font-semibold leading-6 text-[#173E70]">
                                {atm.name}
                              </p>

                              {isSelected && (
                                <span className="mt-1 inline-block rounded-full bg-[#F8EDCB] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[#795B20]">
                                  {t("atmLocatorMatched")}
                                </span>
                              )}
                            </div>
                          </div>
                        </td>

                        <td className="px-5 py-5">
                          <div className="flex items-start gap-2">
                            <MapPin
                              size={16}
                              className="mt-0.5 shrink-0 text-[#25845d]"
                            />

                            <p className="text-sm leading-7 text-[#596574]">
                              {atm.address}
                            </p>
                          </div>
                        </td>

                        <td className="px-5 py-5">
                          {hasCoordinates ? (
                            <button
                              type="button"
                              onClick={() => handleMapClick(atm)}
                              className="inline-flex items-center gap-2 rounded-lg bg-[#EDF5F0] px-3 py-2 text-xs font-semibold text-[#25845d] transition-all duration-200 hover:bg-[#25845d] hover:text-white"
                            >
                              <Navigation size={14} />
                              {t("atmLocatorViewMap")}
                              <ExternalLink size={12} />
                            </button>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium leading-5 text-[#9A7835]">
                              <MapPin size={14} className="shrink-0" />
                              {t("atmLocatorLocationPending")}
                            </span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            {/* TABLE FOOTER */}
            <div className="flex flex-col gap-2 border-t border-[#E9EEEB] bg-[#FAFCFB] px-5 py-4 text-xs text-[#84908A] sm:flex-row sm:items-center sm:justify-between">
              <span>
                {t("atmLocatorShowing")} {filteredAtms.length}{" "}
                {t("atmLocatorOf")} {atmRecords.length} {t("atmLocatorAtms")}
              </span>

              <span className="inline-flex items-center gap-1.5">
                <Building2 size={14} />
                {t("atmLocatorEyebrow")}
              </span>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default AtmLocator;
