import { useEffect, useMemo, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  Search,
  MapPin,
  Building2,
  Phone,
  MapPinned,
  Navigation,
} from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";
import { demoBranches } from "../../data/locatorDemoData";
import BranchMap from "../../components/sections/BranchMap";

function BranchLocator() {
  const { language } = useLanguage();
  const [searchParams, setSearchParams] = useSearchParams();

  const urlSearchQuery = searchParams.get("search") || "";

  const [searchQuery, setSearchQuery] = useState(urlSearchQuery);
  const [selectedBranchId, setSelectedBranchId] = useState(null);

  // Tracks whether selection came from the directory or global search.
  const selectionSourceRef = useRef("search");

  const isMarathi = language === "mr";

  const content = isMarathi
    ? {
        eyebrow: "ठाणे जिल्हा मध्यवर्ती सहकारी बँक",
        heading: "शाखा शोधा",
        subtitle: "बँकेच्या निवडक शाखांची माहिती शोधा.",
        searchLabel: "शाखा शोधा",
        searchPlaceholder:
          "शाखेचे नाव, पत्ता, फोन, IFSC किंवा शाखा कोड शोधा...",
        directory: "शाखा निर्देशिका",
        showing: "दर्शवित आहे",
        of: "एकूण",
        branch: "शाखा",
        address: "पत्ता",
        phone: "फोन नंबर",
        ifsc: "IFSC कोड",
        branchCode: "शाखा कोड",
        number: "अ. क्र.",
        viewMap: "नकाशावर पहा",
        noResults: "आपल्या शोधाशी जुळणारी कोणतीही शाखा सापडली नाही.",
        allBranches: "सर्व शाखा दाखवा",
        matched: "निवडलेली शाखा",
        mapHeading: "शाखांचे स्थान",
        mapDescription: "नकाशावर स्थान पाहण्यासाठी निर्देशिकेतील शाखा निवडा.",
        demoNote: "प्रात्यक्षिकासाठी निवडलेल्या शाखा",
      }
    : {
        eyebrow: "THANE DISTRICT CENTRAL CO-OPERATIVE BANK",
        heading: "Branch Locator",
        subtitle: "Find information about selected branches of the bank.",
        searchLabel: "Find a branch",
        searchPlaceholder:
          "Search by branch name, address, phone, IFSC or branch code...",
        directory: "Branch Directory",
        showing: "Showing",
        of: "of",
        branch: "branches",
        address: "Address",
        phone: "Phone Number",
        ifsc: "IFSC Code",
        branchCode: "Branch Code",
        number: "Sr. No.",
        viewMap: "View on map",
        noResults: "No branches match your search.",
        allBranches: "Show all branches",
        matched: "Selected branch",
        mapHeading: "Branch Locations",
        mapDescription:
          "Select a branch from the directory to view its location on the map.",
        demoNote: "Selected branches for demonstration",
      };

  const filteredBranches = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) return demoBranches;

    return demoBranches.filter((branch) =>
      [
        branch.id,
        branch.name,
        branch.address,
        branch.phone,
        branch.ifsc,
        branch.branchCode,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [searchQuery]);

  const selectedBranch = useMemo(
    () => demoBranches.find((branch) => branch.id === selectedBranchId) || null,
    [selectedBranchId],
  );

  const mapBranches = useMemo(() => {
    if (selectedBranchId === null) return filteredBranches;

    return filteredBranches.filter((branch) => branch.id === selectedBranchId);
  }, [filteredBranches, selectedBranchId]);

  // Handle searches coming from the website's global search.
  useEffect(() => {
    const query = urlSearchQuery.trim();

    setSearchQuery(query);

    if (!query) {
      selectionSourceRef.current = "search";
      setSelectedBranchId(null);
      return;
    }

    const normalizedQuery = query.toLowerCase();

    const matchingBranch = demoBranches.find((branch) =>
      [
        branch.id,
        branch.name,
        branch.address,
        branch.phone,
        branch.ifsc,
        branch.branchCode,
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );

    selectionSourceRef.current = "search";
    setSelectedBranchId(matchingBranch?.id ?? null);
  }, [urlSearchQuery]);

  // Only global-search selections scroll to the matching directory row.
  // Directory button selections scroll to the map instead.
  useEffect(() => {
    if (selectedBranchId === null) return;

    if (selectionSourceRef.current === "map") {
      selectionSourceRef.current = "search";
      return;
    }

    document.getElementById(`branch-${selectedBranchId}`)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [selectedBranchId]);

  const handleSelectBranch = (branchId) => {
    selectionSourceRef.current = "map";
    setSelectedBranchId(branchId);

    document.getElementById("branch-map-section")?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleClearSelection = () => {
    selectionSourceRef.current = "search";
    setSelectedBranchId(null);
    setSearchQuery("");
    setSearchParams({}, { replace: true });
  };

  return (
    <main
      className={`relative isolate min-h-screen overflow-hidden bg-gradient-to-br from-[#F1F8F4] via-[#F8FBF8] to-[#EDF4FA] ${
        isMarathi
          ? '[font-family:"Noto_Sans_Devanagari",sans-serif]'
          : "font-['Poppins']"
      }`}
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 -z-10 h-96 w-96 rounded-full bg-[#25845d]/[0.045] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[650px] -z-10 h-96 w-96 rounded-full bg-[#173E70]/[0.045] blur-3xl"
      />

      {/* Page heading */}
      <section className="relative">
        <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-14 sm:px-8 sm:pb-12 sm:pt-16 lg:pt-20">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#25845d]">
              {content.eyebrow}
            </p>

            <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
              {content.heading}
            </h1>

            <p className="mt-5 max-w-2xl text-base font-medium leading-8 text-[#52677C] sm:text-lg">
              {content.subtitle}
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[#DCE9E1] bg-white/80 px-5 py-3 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E9F4ED] text-[#25845d]">
                <Building2 size={21} />
              </div>

              <div>
                <p className="text-xl font-bold leading-none text-[#173E70]">
                  {demoBranches.length}
                </p>
                <p className="mt-1 text-xs font-medium text-[#667085]">
                  {content.demoNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-5 pb-16 sm:px-8 sm:pb-20">
        {/* Search panel */}
        <div className="rounded-2xl border border-[#E7ECE9] bg-white p-5 shadow-[0_5px_18px_rgba(23,62,112,0.045)] sm:p-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="w-full sm:max-w-[650px]">
              <label
                htmlFor="branch-search"
                className="mb-3 block text-sm font-semibold text-[#173E70]"
              >
                {content.searchLabel}
              </label>

              <div className="flex items-center gap-3 rounded-xl border border-[#D8E2E8] bg-[#F8FAFB] px-4 py-3.5 transition-all duration-200 focus-within:border-[#25845d] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#25845d]/15">
                <Search
                  size={20}
                  className="shrink-0 text-[#25845d]"
                  aria-hidden="true"
                />

                <input
                  id="branch-search"
                  type="search"
                  value={searchQuery}
                  onChange={(event) => {
                    setSearchQuery(event.target.value);
                    selectionSourceRef.current = "search";
                    setSelectedBranchId(null);
                  }}
                  placeholder={content.searchPlaceholder}
                  className="w-full bg-transparent text-sm font-medium text-[#263D55] outline-none placeholder:font-normal placeholder:text-[#8997A5] sm:text-base"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#EAF3F8] px-4 py-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-[#173E70]">
                <Building2 size={21} />
              </div>

              <div>
                <p className="text-xs font-medium text-[#52677C]">
                  {content.showing}
                </p>
                <p className="text-lg font-bold text-[#173E70]">
                  {filteredBranches.length}
                  <span className="ml-1 text-sm font-medium text-[#52677C]">
                    {content.of} {demoBranches.length}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Map section */}
        <div
          id="branch-map-section"
          className="mt-10 scroll-mt-24 overflow-hidden rounded-2xl border border-[#E1EAE5] bg-white p-2 shadow-[0_5px_18px_rgba(23,62,112,0.06)] sm:p-3"
        >
          <div className="mb-5 flex flex-col gap-3 px-2 pt-2 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E5F3EA] text-[#25845d]">
                <MapPinned size={22} />
              </div>

              <div>
                <h2 className="text-xl font-semibold text-[#173E70] sm:text-2xl">
                  {content.mapHeading}
                </h2>

                <p className="mt-1 text-sm text-[#64788B]">
                  {selectedBranch
                    ? `${content.matched}: ${selectedBranch.name}`
                    : content.mapDescription}
                </p>
              </div>
            </div>

            {selectedBranch && (
              <button
                type="button"
                onClick={handleClearSelection}
                className="inline-flex w-fit items-center gap-2 rounded-lg border border-[#D8E8DE] bg-white px-4 py-2.5 text-sm font-semibold text-[#25845d] transition-all duration-200 hover:border-[#25845d] hover:bg-[#EAF5EE]"
              >
                <MapPinned size={16} />
                {content.allBranches}
              </button>
            )}
          </div>

          <BranchMap branches={mapBranches} language={language} />
        </div>

        {/* Directory heading */}
        <div className="mb-5 mt-12 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E5F3EA] text-[#25845d]">
              <Building2 size={22} />
            </div>

            <div>
              <h2 className="text-xl font-semibold text-[#173E70] sm:text-2xl">
                {content.directory}
              </h2>
              <p className="mt-1 text-sm text-[#64788B]">
                {content.showing} {filteredBranches.length} {content.branch}
              </p>
            </div>
          </div>

          {selectedBranch && (
            <button
              type="button"
              onClick={handleClearSelection}
              className="inline-flex items-center gap-2 rounded-lg border border-[#D8E8DE] bg-white px-4 py-2.5 text-sm font-semibold text-[#25845d] transition-all duration-200 hover:border-[#25845d] hover:bg-[#EAF5EE]"
            >
              <Building2 size={16} />
              {content.allBranches}
            </button>
          )}
        </div>

        {/* Selected branch indicator */}
        {selectedBranch && (
          <div className="mb-5 flex items-center gap-3 rounded-xl border border-[#C6DCCF] bg-[#EAF5EE] px-4 py-3.5 text-sm text-[#205E43]">
            <MapPin size={19} className="shrink-0" />

            <span>
              {content.matched}: <strong>{selectedBranch.name}</strong>
            </span>
          </div>
        )}

        {/* Branch results */}
        {filteredBranches.length === 0 ? (
          <div className="rounded-2xl border border-[#E7ECE9] bg-white px-5 py-16 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#F0F4F6] text-[#52677C]">
              <Search size={25} />
            </div>

            <p className="text-base font-semibold text-[#173E70]">
              {content.noResults}
            </p>

            <button
              type="button"
              onClick={handleClearSelection}
              className="mt-4 text-sm font-semibold text-[#25845d] underline underline-offset-4"
            >
              {content.allBranches}
            </button>
          </div>
        ) : (
          <div className="overflow-hidden rounded-2xl border border-[#E1EAE5] bg-white shadow-[0_5px_18px_rgba(23,62,112,0.045)]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[1150px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#EAF3F8] text-sm text-[#173E70]">
                    <th className="w-[75px] px-4 py-5 font-semibold">
                      {content.number}
                    </th>

                    <th className="min-w-[170px] px-4 py-5 font-semibold">
                      {content.branch}
                    </th>

                    <th className="min-w-[300px] px-4 py-5 font-semibold">
                      {content.address}
                    </th>

                    <th className="min-w-[155px] px-4 py-5 font-semibold">
                      {content.phone}
                    </th>

                    <th className="min-w-[175px] px-4 py-5 font-semibold">
                      {content.ifsc}
                    </th>

                    <th className="min-w-[110px] px-4 py-5 font-semibold">
                      {content.branchCode}
                    </th>

                    <th className="min-w-[150px] px-4 py-5 font-semibold">
                      {content.viewMap}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {filteredBranches.map((branch) => {
                    const isSelected = selectedBranchId === branch.id;

                    return (
                      <tr
                        key={branch.id}
                        id={`branch-${branch.id}`}
                        aria-current={isSelected ? "location" : undefined}
                        className={`border-t align-top transition-all duration-300 ${
                          isSelected
                            ? "border-[#C6DCCF] bg-[#EAF5EE] shadow-[inset_0_0_0_2px_rgba(37,132,93,0.25)]"
                            : "border-[#E8EDE9] bg-white hover:bg-[#F6FAF7]"
                        }`}
                      >
                        <td className="px-4 py-5 text-sm font-semibold text-[#52677C]">
                          {branch.id}
                        </td>

                        <td className="px-4 py-5 text-sm font-semibold text-[#173E70]">
                          {branch.name}

                          {isSelected && (
                            <span className="ml-2 inline-block rounded-full bg-[#25845d]/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#25845d]">
                              {content.matched}
                            </span>
                          )}
                        </td>

                        <td className="px-4 py-5 text-sm leading-6 text-[#52677C]">
                          {branch.address}
                        </td>

                        <td className="px-4 py-5 text-sm font-medium text-[#52677C]">
                          <a
                            href={`tel:${branch.phone}`}
                            className="inline-flex items-center gap-2 transition-colors hover:text-[#25845d]"
                          >
                            <Phone
                              size={14}
                              className="shrink-0 text-[#25845d]"
                            />
                            {branch.phone}
                          </a>
                        </td>

                        <td className="px-4 py-5 text-sm font-medium text-[#52677C]">
                          {branch.ifsc}
                        </td>

                        <td className="px-4 py-5 text-sm font-medium text-[#52677C]">
                          {branch.branchCode}
                        </td>

                        <td className="px-4 py-5">
                          <button
                            type="button"
                            onClick={() => handleSelectBranch(branch.id)}
                            aria-label={`${content.viewMap}: ${branch.name}`}
                            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#25845d] transition-colors hover:text-[#173E70] hover:underline"
                          >
                            <Navigation size={15} />
                            {content.viewMap}
                            <MapPin size={14} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="flex flex-col gap-2 border-t border-[#E8EDE9] bg-[#FAFCFB] px-5 py-4 text-xs text-[#84908A] sm:flex-row sm:items-center sm:justify-between">
              <span>
                {content.showing} {filteredBranches.length} {content.of}{" "}
                {demoBranches.length} {content.branch}
              </span>

              <span className="inline-flex items-center gap-1.5">
                <Building2 size={14} />
                {content.eyebrow}
              </span>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default BranchLocator;
