import React from "react";
import ReactWeather, { useOpenWeather } from "react-open-weather";
function Weather() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: `${process.env.REACT_APP_WEATHER_API_KEY}`,
    lat: "31.508493",
    lon: "-9.759504",
    lang: "fr",
    unit: "metric",
  });
  return (
    <div className="weather">
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="fr"
        locationLabel="Essaouira"
        unitsLabels={{ temperature: "°C", windSpeed: "Km/h" }}
      />
    </div>
  );
}

export default Weather;
