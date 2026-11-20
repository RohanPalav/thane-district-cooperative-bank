import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";

import { divIcon } from "leaflet";

import "leaflet/dist/leaflet.css";

import { MapPin, Phone, Mail, Building2, ExternalLink } from "lucide-react";

import { useLanguage } from "../../context/LanguageContext";

// Precise Google Maps coordinates of the Head Office
const HEAD_OFFICE_LOCATION = [19.189793, 72.9760017];

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/The+Thane+District+Central+Co-Op.+Bank+Ltd.+Head+Office/@19.189793,72.9760017,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b926d5b437ab:0x476734ee3b866d11!8m2!3d19.189793!4d72.9760017!16s%2Fg%2F1ptxl1hh8?entry=ttu&g_ep=EgoyMDI2MTExNy4wIKXMDSoASAFQAw%3D%3D";

const headOfficeIcon = divIcon({
  className: "head-office-marker",
  html: `
    <svg
      width="42"
      height="52"
      viewBox="0 0 42 52"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 1C9.95 1 1 9.95 1 21
           C1 34 21 51 21 51
           S41 34 41 21
           C41 9.95 32.05 1 21 1Z"
        fill="#EA4335"
        stroke="#FFFFFF"
        stroke-width="2"
      />
      <circle
        cx="21"
        cy="21"
        r="7"
        fill="#FFFFFF"
      />
    </svg>
  `,
  iconSize: [42, 52],
  iconAnchor: [21, 51],
  popupAnchor: [0, -46],
});

function ContactUs() {
  const { language, t } = useLanguage();

  const isMarathi = language === "mr";

  const address = isMarathi
    ? "शिवाजी पथ, पोस्ट बॉक्स क्र. १९, ठाणे (पश्चिम), ४०० ६०१"
    : "Shivaji Path, P. B. No. 19, Thane (W), 400 601";

  const contactDetails = [
    {
      icon: MapPin,
      label: t("contactUsAddressLabel"),
      content: address,
      type: "address",
    },
    {
      icon: Phone,
      label: t("contactUsPhoneLabel"),
      content: "022-25332336 / 25333014",
      type: "phone",
    },
    {
      icon: Mail,
      label: t("contactUsEmailLabel"),
      content: "enquiry@thanedcc.bank.in",
      type: "email",
    },
  ];

  return (
    <main
      className={`relative min-h-screen overflow-hidden bg-gradient-to-br from-[#F1F8F4] via-[#F8FBF8] to-[#EDF4FA] ${
        isMarathi
          ? '[font-family:"Nirmala_UI","Noto_Sans_Devanagari",sans-serif]'
          : "font-['Poppins']"
      }`}
    >
      {/* DECORATIVE BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-40 -z-0 h-96 w-96 rounded-full bg-[#25845d]/[0.045] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[500px] -z-0 h-96 w-96 rounded-full bg-[#173E70]/[0.045] blur-3xl"
      />

      {/* PAGE HEADING */}

      <section className="relative z-10">
        <div className="mx-auto max-w-[1200px] px-5 pb-10 pt-14 sm:px-8 sm:pb-12 sm:pt-16 lg:pt-20">
          <p
            className={`mb-4 text-sm font-semibold uppercase text-[#25845d] ${
              isMarathi ? "tracking-normal" : "tracking-[0.16em]"
            }`}
          >
            {t("contactUsEyebrow")}
          </p>

          <h1 className="text-4xl font-bold leading-tight text-[#173E70] sm:text-5xl lg:text-6xl">
            {t("contactUsTitle")}
          </h1>

          <div className="mt-5 h-1 w-20 rounded-full bg-[#25845d]" />
        </div>
      </section>

      {/* CONTACT INFORMATION AND MAP */}

      <section className="relative z-10 mx-auto max-w-[1200px] px-5 pb-20 sm:px-8">
        <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-[1.3fr_0.7fr] lg:gap-9">
          {/* MAP */}

          <div className="overflow-hidden rounded-2xl border border-[#E1EAE5] bg-white p-2 shadow-[0_5px_18px_rgba(23,62,112,0.06)] sm:p-3">
            <div className="overflow-hidden rounded-xl">
              <MapContainer
                center={HEAD_OFFICE_LOCATION}
                zoom={16}
                scrollWheelZoom={true}
                zoomControl={false}
                className="h-[350px] w-full sm:h-[430px] lg:h-[490px]"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <ZoomControl position="topright" />

                <Marker position={HEAD_OFFICE_LOCATION} icon={headOfficeIcon}>
                  <Popup>
                    <div className="min-w-[190px]">
                      <p className="font-semibold text-[#173E70]">
                        The Thane District Central Co-operative Bank Ltd.
                      </p>

                      <p className="mt-2 text-sm leading-6 text-[#52677C]">
                        {t("contactUsMapPopupAddress")}
                      </p>

                      <a
                        href={GOOGLE_MAPS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#25845d] hover:underline"
                      >
                        {t("contactUsOpenInMaps")}
                        <ExternalLink size={13} />
                      </a>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 px-2 py-3">
              <div className="flex items-center gap-2 text-xs font-medium text-[#64788B]">
                <MapPin size={15} className="text-[#25845d]" />
                {t("contactUsMapHeading")}
              </div>

              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#25845d] transition-colors hover:text-[#173E70]"
              >
                {t("contactUsOpenInMaps")}
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          {/* CONTACT DETAILS */}

          <div className="flex flex-col rounded-2xl border border-[#E6ECE8] bg-white/90 p-6 shadow-[0_5px_18px_rgba(23,62,112,0.045)] backdrop-blur-sm sm:p-8 lg:p-9">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#EDF5F0] text-[#25845d]">
                <Building2 size={25} strokeWidth={1.8} />
              </div>

              <div>
                <p
                  className={`text-xs font-semibold uppercase text-[#25845d] ${
                    isMarathi ? "" : "tracking-[0.12em]"
                  }`}
                >
                  {t("contactUsEyebrow")}
                </p>

                <h2 className="mt-1 text-xl font-bold text-[#173E70] sm:text-2xl">
                  {t("contactUsHeadOffice")}
                </h2>
              </div>
            </div>

            <div className="my-7 h-px bg-[#E7ECE9]" />

            <div className="space-y-7">
              {contactDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div key={detail.type} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EDF5F0] text-[#25845d]">
                      <Icon size={19} strokeWidth={1.8} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-[#64788B]">
                        {detail.label}
                      </p>

                      {detail.type === "phone" ? (
                        <div className="mt-2 flex flex-col gap-2">
                          <a
                            href="tel:02225332336"
                            className="break-words text-sm font-semibold leading-6 text-[#173E70] transition-colors hover:text-[#25845d] sm:text-base"
                          >
                            022-25332336
                          </a>

                          <a
                            href="tel:02225333014"
                            className="break-words text-sm font-semibold leading-6 text-[#173E70] transition-colors hover:text-[#25845d] sm:text-base"
                          >
                            022-25333014
                          </a>
                        </div>
                      ) : detail.type === "email" ? (
                        <a
                          href="mailto:enquiry@thanedcc.bank.in"
                          className="mt-2 block break-all text-sm font-semibold leading-6 text-[#173E70] transition-colors hover:text-[#25845d] sm:text-base"
                        >
                          {detail.content}
                        </a>
                      ) : (
                        <p className="mt-2 text-sm font-semibold leading-7 text-[#173E70] sm:text-base">
                          {detail.content}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-auto pt-9">
              <a
                href={GOOGLE_MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#173E70] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#25845d] hover:shadow-lg"
              >
                <MapPin size={18} />
                {t("contactUsOpenInMaps")}
                <ExternalLink size={15} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;
