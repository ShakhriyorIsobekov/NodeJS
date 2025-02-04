import axios from "axios";
import { TOKEN_DICTIONARY, getKeyValue } from "./storage.service.js";

const getIcons = (icon) => {
  switch (icon.slice(0, -1)) {
    case "01":
      return "*";
    case "02":
      return "⛅";
    case "03":
      return "-";
    case "04":
      return "🌧";
  }
};

const getWeather = async (city) => {
  const token =
    process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));
  if (!token) {
    throw new Error(`API does not exist, -t [API_KEY] for saving token`);
  }

  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "en",
        units: "metric",
      },
    }
  );

  return response.data;
};

export { getWeather, getIcons };
