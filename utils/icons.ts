/**
 * Weather condition icons
 */

const getDayConditionIcon = (condition: string) => {
  // Return an icon for current weather condition for a day

  let icon: string;

  switch (condition) {
    case "Sunny":
      icon = "weather-sunny";
      break;

    case "Partly cloudy":
      icon = "weather-partly-cloudy";
      break;

    case "Cloudy":
      icon = "weather-cloudy";
      break;

    case "Overcast":
      icon = "weather-cloudy";
      break;

    case "Mist":
      icon = "weather-cloudy";
      break;

    case "Patchy rain possible":
      icon = "weather-partly-rainy";
      break;

    case "Patchy snow possible":
      icon = "weather-partly-snowy";
      break;

    case "Patchy sleet possible":
      icon = "weather-partly-snowy";
      break;

    case "Patchy freezing drizzle possible":
      icon = "weather-partly-snowy";
      break;

    case "Thundery outbreaks possible":
      icon = "weather-partly-lightning";
      break;

    case "Blowing snow":
      icon = "weather-snowy";
      break;

    case "Blizzard":
      icon = "weather-snowy";
      break;

    case "Fog":
      icon = "weather-fog";
      break;

    case "Freezing fog":
      icon = "weather-fog";
      break;

    case "Patchy light drizzle":
      icon = "weather-lightning";
      break;

    case "Light drizzle":
      icon = "weather-lightning";
      break;

    case "Freezing drizzle":
      icon = "weather-snowy";
      break;

    case "Heavy freezing drizzle":
      icon = "weather-snowy-heavy";
      break;

    case "Patchy light rain":
      icon = "weather-lightning-rainy";
      break;

    case "Light rain":
      icon = "weather-lightning-rainy";
      break;

    case "Moderate rain at times":
      icon = "weather-partly-rainy";
      break;

    case "Moderate rain":
      icon = "weather-rainy";
      break;

    case "Heavy rain at times":
      icon = "weather-pouring";
      break;

    case "Heavy rain":
      icon = "weather-pouring";
      break;

    case "Light freezing rain":
      icon = "weather-lightning-rainy";
      break;

    case "Moderate or heavy freezing rain":
      icon = "weather-snowy-rainy";
      break;

    case "Light sleet":
      icon = "weather-snowy-rainy";
      break;

    case "Moderate or heavy sleet":
      icon = "weather-snowy-rainy";
      break;

    case "Patchy light snow":
      icon = "weather-lightning-rainy";
      break;

    case "Light snow":
      icon = "weather-lightning-rainy";
      break;

    case "Patchy moderate snow":
      icon = "weather-snowy";
      break;

    case "Moderate snow":
      icon = "weather-snowy";
      break;

    case "Patchy heavy snow":
      icon = "weather-snowy-heavy";
      break;

    case "Heavy snow":
      icon = "weather-snowy-heavy";
      break;

    case "Ice pellets":
      icon = "weather-snowy-heavy";
      break;

    case "Light rain shower":
      icon = "weather-rainy";
      break;

    case "Moderate or heavy rain shower":
      icon = "weather-pouring";
      break;

    case "Torrential rain shower":
      icon = "weather-pouring";
      break;

    case "Light sleet showers":
      icon = "weather-pouring";
      break;

    case "Moderate or heavy sleet showers":
      icon = "weather-pouring";
      break;

    case "Light snow showers":
      icon = "weather-snowy-heavy";
      break;

    case "Moderate or heavy snow showers":
      icon = "weather-snowy-heavy";
      break;

    case "Light showers of ice pellets":
      icon = "weather-snowy-heavy";
      break;

    case "Moderate or heavy showers of ice pellets":
      icon = "weather-snowy-heavy";
      break;

    case "Patchy light rain with thunder":
      icon = "weather-lightning-rainy";
      break;

    case "Moderate or heavy rain with thunder":
      icon = "weather-lightning-rainy";
      break;

    case "Patchy light snow with thunder":
      icon = "weather-lightning-rainy";
      break;

    case "Moderate or heavy snow with thunder":
      icon = "weather-lightning-rainy";
      break;

    default:
      icon = "weather-sunny";
      break;
  }

  return icon;
};

const getConditionIcon = (isDay: boolean, condition: string) => {
  // Return an icon for current condition

  let icon: string;

  if (isDay) {
    icon = getDayConditionIcon(condition);
  } else {
    switch (condition) {
      case "Clear":
        icon = "weather-night";
        break;

      case "Partly cloudy":
        icon = "weather-night-partly-cloudy";
        break;

      case "Cloudy":
        icon = "weather-cloudy";
        break;

      case "Patchy rain possible":
        icon = "weather-rainy";
        break;

      case "Patchy snow possible":
        icon = "weather-snowy";
        break;

      case "Patchy sleet possible":
        icon = "weather-snowy";
        break;

      case "Patchy freezing drizzle possible":
        icon = "weather-snowy";
        break;

      case "Patchy light drizzle":
        icon = "weather-fog";
        break;

      default:
        icon = getDayConditionIcon(condition);
        break;
    }
  }

  return icon;
};

const getMoonIcon = (moonPhase: string) => {
  // Return an icon for moon phase

  let icon: string;

  switch (moonPhase) {
    case "New Moon":
      icon = "moon-new";
      break;

    case "Full Moon":
      icon = "moon-full";
      break;

    default:
      icon = `moon-${moonPhase.toLowerCase().replace(" ", "-")}`;
      break;
  }

  return icon;
};

export { getConditionIcon, getDayConditionIcon, getMoonIcon };
