import getArgs from "./helpers/args.js";
import { getIcons, getWeather } from "./services/api.service.js";
import {
  printError,
  printHelp,
  printSuccess,
  printWeather,
} from "./services/log.service.log.js";
import {
  saveKeyValue,
  getKeyValue,
  TOKEN_DICTIONARY,
} from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    printError(`Token does not exist!`);
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Token was saved");
  } catch (err) {
    printError(err.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    printError(`City does not exist!`);
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("City was saved");
  } catch (err) {
    printError(err.message);
  }
};

const getForecast = async () => {
  try {
    const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
    const response = await getWeather(city);
    printWeather(response, getIcons(response.weather[0].icon));
  } catch (err) {
    // if (err) {
    //    if (err.response) {
    //       }
    //}
    if (err?.response?.status == 404) {
      printError(`City not found`);
    } else if (err?.response?.status == 401) {
      printError(`Invalid token`);
    } else {
      printError(err.message);
    }
  }
};

const startCli = () => {
  const args = getArgs(process.argv);

  if (args.h) {
    return printHelp();
  }

  if (args.t) {
    return saveToken(args.t);
  }

  if (args.s) {
    return saveCity(args.s);
  }
  return getForecast();
};

startCli();
