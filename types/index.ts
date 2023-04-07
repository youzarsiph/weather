/**
 * Types
 */

import React from "react";
import { Href } from "expo-router/src/link/href";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";

type Router = {
  /** Navigate to the provided href. */
  push: (href: Href) => void;
  /** Navigate to route without appending to the history. */
  replace: (href: Href) => void;
  /** Go back in the history. */
  back: () => void;
  /** Update the current route query params. */
  setParams: (params?: Record<string, string>) => void;
};

interface ScreenProps {
  loading?: boolean;
  message?: string;
  displayMessage?: boolean;
  onDismissMessage?: () => void;
  options?: NativeStackNavigationOptions;
  children: React.ReactNode | React.ReactNode[];
}

interface State {
  loading: boolean;
}

interface Measures {
  speed: "k" | "m" | string;
  temperature: "c" | "f" | string;
  pressure: "m" | "i" | string;
}

type Params = {
  alert: string;
  day: string;
  hour: string;
};

interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id?: string;
  localtime_epoch?: number;
  localtime?: string;
}

interface Condition {
  text: string;
  icon: string;
  code: number;
}

interface AirQuality {
  co?: number;
  no2?: number;
  o3?: number;
  so2?: number;
  pm2_5?: number;
  pm10?: number;
  "us-epa-index"?: number;
  "gb-defra-index"?: number;
}

// Realtime weather data
interface Current {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
  air_quality: AirQuality;
}

interface Day {
  maxtemp_c: number;
  maxtemp_f: number;
  mintemp_c: number;
  mintemp_f: number;
  avgtemp_c: number;
  avgtemp_f: number;
  maxwind_mph: number;
  maxwind_kph: number;
  totalprecip_mm: number;
  totalprecip_in: number;
  totalsnow_cm: number;
  avgvis_km: number;
  avgvis_miles: number;
  avghumidity: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  daily_will_it_snow: number;
  daily_chance_of_snow: number;
  condition: Condition;
  uv: number;
  air_quality: AirQuality;
}

interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
  moon_illumination: string;
  is_moon_up: number;
  is_sun_up: number;
}

interface Hour {
  time_epoch: number;
  time: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: Condition;
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  will_it_rain: number;
  chance_of_rain: number;
  will_it_snow: number;
  chance_of_snow: number;
  vis_km: number;
  vis_miles: number;
  gust_mph: number;
  gust_kph: number;
  uv: number;
  air_quality: AirQuality;
}

interface ForecastDay {
  date: string;
  date_epoch: number;
  day: Day;
  astro: Astro;
  hour: Hour[];
}

interface Alert {
  headline: string;
  msgtype: string;
  severity: string;
  urgency: string;
  areas: string;
  category: string;
  certainty: string;
  event: string;
  note: string;
  effective: string;
  expires: string;
  desc: string;
  instruction: string;
}

interface Data {
  location: Location;
  current: Current;
  forecast: {
    forecastday: ForecastDay[];
  };
  alerts?: { alert: Alert[] };
}

export {
  AirQuality,
  Alert,
  Astro,
  Condition,
  Current,
  Data,
  Day,
  Hour,
  ForecastDay,
  Location,
  Router,
  Params,
  ScreenProps,
  State,
  Measures,
};
