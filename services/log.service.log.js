import chalk from "chalk";
import dedent from "dedent-js";

const printError = (err) => {
  console.log(chalk.bgRed(`Error ${err}`));
};

const printSuccess = (msg) => {
  console.log(chalk.bgGreen("Success:") + " " + msg);
};

const printHelp = (help) => {
  console.log(dedent`${chalk.bgCyan("Help!")}
   -s [CITY] for install city
   -h for help
   -t [API_KEY] for saving Token
  `);
};

const printWeather = (res, icon) => {
  console.log(dedent`
  ${chalk.bgYellow("WEATHER")} City weather ${res.name}
  ${icon} ${res.weather[0].description}
  Temperature: ${res.main.temp} (feels like ${res.main.feels_like})
  Humidity: ${res.main.humidity}%
  Wind Speed: ${res.wind.speed}
  `);
};

export { printError, printSuccess, printHelp, printWeather };
