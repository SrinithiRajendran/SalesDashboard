import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { locationSales } from "../data";
import { useMediaQuery } from "react-responsive";
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const LocationSales = () => {
  const { darkMode } = useContext(ThemeContext);
  const islarger = useMediaQuery({ minWidth: 1025 });
  const isLarge = useMediaQuery({ minWidth: 921, maxWidth: 1024 });
  const isMedium1 = useMediaQuery({ minWidth: 767, maxWidth: 920 });
  const isMedium2 = useMediaQuery({ minWidth: 530, maxWidth: 841 });
  const isSmall = useMediaQuery({ minWidth: 470, maxWidth: 529 });
  const isSmaller = useMediaQuery({ maxWidth: 469 });

  let scale = 150;

  if (isLarge) scale = 130;
  else if (islarger) scale = 155;
  else if (isMedium1) scale = 120;
  else if (isMedium2) scale = 160;
  else if (isSmall) scale = 135;
  else if (isSmaller) scale = 120;

  const mapFill = darkMode ? "#222" : "#e0e0e0";
  const strokeColor = darkMode ? "#cde612" : "#444";
  const hoverColor = darkMode ? "#0ff" : "#007bff";
  const pressedColor = darkMode ? "#fc0313" : "#ff5722";
  const markerFill = darkMode ? "#ff4500" : "#d32f2f";
  const textColor = darkMode ? "#0ff" : "#333";

  return (
    <div className="w-full">
      <h2
        className={`text-[12px] font-bold text-center mt-6  sm:mb-6 md:mt-6 md:mb-4 ${
          darkMode ? "text-[#0ff]" : "text-[#333]"
        }`}
      >
        Top 6 Countries by Sales
      </h2>

      <div className="flex justify-center items-center">
        <ComposableMap
          projectionConfig={{ scale }}
          className="w-full h-[300px] lg:h-[250px]"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={mapFill}
                  stroke={strokeColor}
                  style={{
                    default: { outline: "none", cursor: "pointer" },
                    hover: {
                      fill: hoverColor,
                      transition: "0.2s",
                      cursor: "pointer",
                    },
                    pressed: { fill: pressedColor, cursor: "pointer" },
                  }}
                />
              ))
            }
          </Geographies>

          {locationSales.map(({ country, revenue, coordinates }, index) => (
            <Marker key={country} coordinates={coordinates}>
              <circle r={8} fill={markerFill} stroke="#000" strokeWidth={1} />
              <text
                fontSize={18}
                fill={textColor}
                fontWeight="bold"
                textAnchor="start"
                dy={index % 2 === 0 ? 10 : -10}
                dx={10}
              >
                {country}: ${revenue.toLocaleString()}
              </text>
            </Marker>
          ))}
        </ComposableMap>
      </div>
    </div>
  );
};

export default LocationSales;
