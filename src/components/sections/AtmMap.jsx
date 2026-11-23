import { useEffect, useMemo, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
  useMap,
} from "react-leaflet";
import { divIcon } from "leaflet";
import { ExternalLink } from "lucide-react";

import "leaflet/dist/leaflet.css";

const DEFAULT_CENTER = [19.2183, 72.9781];

const atmMarkerIcon = divIcon({
  className: "atm-location-marker",
  html: `
    <svg width="42" height="52" viewBox="0 0 42 52"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M21 1C9.95 1 1 9.95 1 21
           C1 34 21 51 21 51
           S41 34 41 21
           C41 9.95 32.05 1 21 1Z"
        fill="#EA4335"
        stroke="#FFFFFF"
        stroke-width="2"
      />
      <circle cx="21" cy="21" r="7" fill="#FFFFFF" />
    </svg>
  `,
  iconSize: [42, 52],
  iconAnchor: [21, 51],
  popupAnchor: [0, -46],
});

function MapController({ atms }) {
  const map = useMap();

  useEffect(() => {
    if (atms.length === 1) {
      const atm = atms[0];

      map.setView([atm.latitude, atm.longitude], 16, {
        animate: true,
      });

      return;
    }

    if (atms.length > 1) {
      const bounds = atms.map((atm) => [atm.latitude, atm.longitude]);

      map.fitBounds(bounds, {
        padding: [45, 45],
        maxZoom: 13,
        animate: true,
      });

      return;
    }

    map.setView(DEFAULT_CENTER, 8);
  }, [atms, map]);

  return null;
}

function AtmMap({ atms = [], language = "en", onSelectAtm }) {
  const isMarathi = language === "mr";

  const labels = isMarathi
    ? {
        title: "एटीएम केंद्र",
        address: "पत्ता",
        openInMaps: "Google Maps मध्ये उघडा",
        noLocations: "नकाशावर दाखवण्यासाठी एटीएम उपलब्ध नाही.",
        attribution: "नकाशा OpenStreetMap योगदानकर्त्यांच्या सौजन्याने",
      }
    : {
        title: "ATM Centre",
        address: "Address",
        openInMaps: "Open in Google Maps",
        noLocations: "No ATM locations are available to display.",
        attribution: "Map data © OpenStreetMap contributors",
      };

  const locatedAtms = useMemo(
    () =>
      atms.filter(
        (atm) =>
          Number.isFinite(atm.latitude) && Number.isFinite(atm.longitude),
      ),
    [atms],
  );

  if (locatedAtms.length === 0) {
    return (
      <div className="flex min-h-[350px] items-center justify-center rounded-xl bg-[#F5F7FA] p-6 text-center text-sm text-[#596574]">
        {labels.noLocations}
      </div>
    );
  }

  return (
    <div className="relative z-0 overflow-hidden rounded-xl">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={8}
        scrollWheelZoom
        zoomControl={false}
        className="h-[350px] w-full sm:h-[430px] lg:h-[490px]"
      >
        <TileLayer
          attribution={labels.attribution}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ZoomControl position="topright" />

        <MapController atms={locatedAtms} />

        {locatedAtms.map((atm) => (
          <Marker
            key={atm.id}
            position={[atm.latitude, atm.longitude]}
            icon={atmMarkerIcon}
          >
            <Popup>
              <div className="min-w-[190px]">
                <p className="font-semibold text-[#173E70]">
                  {atm.id}. {atm.name}
                </p>

                <p className="mt-2 text-sm font-medium text-[#64788B]">
                  {labels.address}
                </p>

                <p className="mt-1 text-sm leading-6 text-[#465365]">
                  {atm.address}
                </p>

                <a
                  href={atm.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#25845d] hover:underline"
                >
                  {labels.openInMaps}
                  <ExternalLink size={13} />
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default AtmMap;
