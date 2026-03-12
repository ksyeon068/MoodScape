import React, { createContext, useContext, useState, useEffect } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {

  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

<<<<<<< HEAD
  const [weather, setWeather] = useState("sunny");
=======
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
>>>>>>> a8baccf6f2e8b8598a9c7ba51f7bd4be435d3ddb

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

    return weatherMap[apiWeather] || null;
  };

 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {

      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((data) => {

          const apiWeather = data.weather[0].main;
          const type = getWeatherType(apiWeather);

          setWeather(type);
          setLoading(false);
        });

    });
  }, []);

  return (
    <ApiContext.Provider value={{ WEATHER_API_KEY, getWeatherType, weather, loading  }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(ApiContext);
};

export default ApiContext;
