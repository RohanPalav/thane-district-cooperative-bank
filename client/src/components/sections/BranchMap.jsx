import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  ZoomControl,
  useMap,
} from "react-leaflet";
import { useEffect } from "react";

import "leaflet/dist/leaflet.css";

const DEFAULT_CENTER = [19.2183, 72.9781];

function MapBounds({ branches }) {
  const map = useMap();

  useEffect(() => {
    const locatedBranches = branches.filter(
      (branch) =>
        Number.isFinite(branch.latitude) && Number.isFinite(branch.longitude),
    );

    if (locatedBranches.length === 1) {
      map.setView(
        [locatedBranches[0].latitude, locatedBranches[0].longitude],
        14,
      );
    } else if (locatedBranches.length > 1) {
      const bounds = locatedBranches.map((branch) => [
        branch.latitude,
        branch.longitude,
      ]);

      map.fitBounds(bounds, { padding: [35, 35], maxZoom: 12 });
    }
  }, [branches, map]);

  return null;
}

function BranchMap({ branches, language, onSelectBranch }) {
  const locatedBranches = branches.filter(
    (branch) =>
      Number.isFinite(branch.latitude) && Number.isFinite(branch.longitude),
  );

  const labels =
    language === "mr"
      ? {
          approximate: "अंदाजे स्थान — कृपया पत्ता तपासा",
          viewOnMap: "नकाशावर पहा",
          mapAttribution: "नकाशा OpenStreetMap योगदानकर्त्यांच्या सौजन्याने",
          noLocations: "सध्या नकाशावर दाखवण्यासाठी स्थान उपलब्ध नाही.",
        }
      : {
          approximate: "Approximate location — please verify the address",
          viewOnMap: "View on map",
          mapAttribution: "Map data © OpenStreetMap contributors",
          noLocations: "No branch coordinates are available to display yet.",
        };

  if (locatedBranches.length === 0) {
    return (
      <div className="flex min-h-[300px] items-center justify-center border border-[#DCE2E9] bg-[#F5F7FA] p-6 text-center text-sm text-[#596574]">
        {labels.noLocations}
      </div>
    );
  }

  return (
    <div className="relative z-0 overflow-hidden border border-[#DCE2E9]">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={8}
        scrollWheelZoom
        zoomControl={false}
        className="h-[360px] w-full sm:h-[460px] lg:h-[520px]"
      >
        <TileLayer
          attribution={labels.mapAttribution}
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ZoomControl position="topright" />
        <MapBounds branches={locatedBranches} />

        {locatedBranches.map((branch) => (
          <CircleMarker
            key={branch.id}
            center={[branch.latitude, branch.longitude]}
            radius={8}
            pathOptions={{
              color: "#FFFFFF",
              weight: 2,
              fillColor: "#173E70",
              fillOpacity: 0.95,
            }}
            eventHandlers={{
              click: () => onSelectBranch(branch.id),
            }}
          >
            <Popup>
              <div className="min-w-[190px]">
                <p className="font-semibold text-[#173E70]">
                  {branch.id}. {branch.name}
                </p>

                <p className="mt-1 text-sm leading-5 text-[#465365]">
                  {branch.address}
                </p>

                <p className="mt-2 text-xs font-medium text-[#A16207]">
                  {labels.approximate}
                </p>

                <a
                  href={`https://www.openstreetmap.org/?mlat=${branch.latitude}&mlon=${branch.longitude}#map=17/${branch.latitude}/${branch.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-[#173E70] underline"
                >
                  {labels.viewOnMap}
                </a>
              </div>
            </Popup>
          </CircleMarker>
        ))}
      </MapContainer>

      <div className="border-t border-[#DCE2E9] bg-[#FFF9E8] px-3 py-2 text-xs text-[#795B20]">
        {labels.approximate}
      </div>
    </div>
  );
}

export default BranchMap;
