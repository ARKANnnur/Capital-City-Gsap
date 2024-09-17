/* eslint-disable react/jsx-key */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import {
  TiWeatherCloudy,
  TiWeatherPartlySunny,
  TiWeatherSunny,
  TiWeatherShower,
  TiWeatherStormy,
} from "react-icons/ti";

function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], <TiWeatherSunny />],
    [[1], <TiWeatherPartlySunny />],
    [[2], <TiWeatherPartlySunny />],
    [[3], <TiWeatherCloudy />],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], <TiWeatherShower />],
    [[71, 73, 75, 77, 85, 86], <TiWeatherShower />],
    [[95], <TiWeatherStormy />],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "NOT FOUND";
  return icons.get(arr);
}

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}

export default function Weather({ location }) {
  const [isLoading, setIsLoading] = useState("");
  const [weather, setWeather] = useState({});
  const [error, setError] = useState("");

  const {
    temperature_2m_max: max,
    temperature_2m_min: min,
    time: date,
    weathercode: code,
  } = weather;

  useEffect(() => {
    const controller = new AbortController();
    async function fetchWeather() {
      try {
        setIsLoading(true);
        setError("");

        // 1) Getting location (geocoding)
        const geoRes = await fetch(
          `https://geocoding-api.open-meteo.com/v1/search?name=${location}`,
          { signal: controller.signal },
        );
        const geoData = await geoRes.json();

        if (!geoData.results) throw new Error("Location not found");

        const { latitude, longitude, timezone } = geoData.results.at(0);

        // 2) Getting actual weather
        const weatherRes = await fetch(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min&hourly=&forecast_days=1`,
          { signal: controller.signal },
        );
        const weatherData = await weatherRes.json();
        if (!weatherData.daily) return setWeather("something error");
        setWeather(weatherData.daily);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchWeather();
    return () => controller.abort();
  }, []);

  return (
    <div className="flex items-center gap-2">
      {isLoading && <p className="text-base">Loading...</p>}
      {error && <p className="text-base">{error}</p>}
      {weather.weathercode && !error && !isLoading && (
        <>
          <span className="border-white text-2xl text-white">
            {getWeatherIcon(code[0])}
          </span>
          <p>{formatDay(date[0])}</p>
          <p>
            {Math.floor(min[0])}&deg; &mdash; {Math.ceil(max[0])}&deg;
          </p>
        </>
      )}
    </div>
  );
}
