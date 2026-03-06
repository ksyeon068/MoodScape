import React, { createContext, useContext } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {

  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  // ⭐ API 날씨 → 우리가 사용할 날씨로 변환
  const getWeatherType = (apiWeather) => {

    const weatherMap = {
      Clear: "sunny",

      Clouds: "cloudy",
      "Few Clouds": "cloudy",
      Overcast: "cloudy",

      Rain: "rainy",
      Drizzle: "rainy",

      Thunderstorm: "stormy",

      Snow: "snowy",

      Mist: "misty",
      Fog: "misty",
      Haze: "misty"
    };

    return weatherMap[apiWeather] || "sunny";
  };

  return (
    <ApiContext.Provider value={{ WEATHER_API_KEY, getWeatherType }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};

export default ApiContext;