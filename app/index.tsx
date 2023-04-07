/**
 * Home Screen
 */

import React from "react";
import { useRouter } from "expo-router";
import * as Location from "expo-location";
import { useTheme } from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import {
  ImageBackground,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";
import key from "../api.key";
import Styles from "../styles";
import { Data, Measures } from "../types";
import weatherData from "../current";
import { sources } from "../constants";
import {
  AirQuality,
  Alerts,
  Astro,
  Current,
  DailyForecast,
  HourlyForecast,
  Screen,
} from "../components";

const Home = () => {
  // Theme
  const theme = useTheme();

  // Router
  const router = useRouter();

  // Message
  const [message, setMessage] = React.useState<string>("");
  const [displayMessage, setDisplayMessage] = React.useState<boolean>(false);
  const showMessage = (message: string) => {
    setMessage(message);
    setDisplayMessage(true);
  };

  // Location
  const [location, setLocation] = React.useState<Location.LocationObject>();

  // Data
  const [data, setData] = React.useState<Data>(weatherData);
  const [refreshing, setRefreshing] = React.useState<boolean>(false);
  const onRefresh = React.useCallback(() => setRefreshing(true), []);

  // Settings
  const [measures, setMeasures] = React.useState<Measures>({
    speed: "k",
    temperature: "c",
    pressure: "m",
  });

  // Load settings
  React.useEffect(() => {
    (async () => {
      const speed = await SecureStore.getItemAsync("speed");
      const temperature = await SecureStore.getItemAsync("temperature");
      const pressure = await SecureStore.getItemAsync("pressure");

      setMeasures({
        speed: speed || "k",
        temperature: temperature || "c",
        pressure: pressure || "m",
      });
    })();
  }, []);

  // Get user's location
  React.useEffect(() => {
    (async () => {
      let location = await Location.getCurrentPositionAsync({});

      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      setLocation(location);
    })();
  }, []);

  // Request data
  React.useEffect(() => {
    if (location !== undefined) {
      (async () => {
        await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location.coords.latitude},${location.coords.longitude}&days=7&aqi=yes&alerts=yes`
        )
          .then((response) => response.json())
          .then((jsonResponse) => {
            setData(jsonResponse);

            // console.log(jsonResponse);
          })
          .catch((e) => {
            // Display message
            showMessage(e.message);

            console.log(e);
          });

        // Disable refreshing
        setRefreshing(false);
      })();
    }
  }, [refreshing]);

  return (
    <ImageBackground
      blurRadius={10}
      resizeMode="cover"
      style={Styles.bg}
      source={sources.sunny}
    >
      <Screen
        loading={false}
        message={message}
        displayMessage={displayMessage}
        options={{ title: data.location.name }}
        onDismissMessage={() => setDisplayMessage(false)}
      >
        <ScrollView
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={onRefresh}
              colors={[theme.colors.primary]}
              progressBackgroundColor={
                theme.dark ? "rgb(38, 35, 41)" : "rgb(248, 241, 253)"
              }
            />
          }
        >
          <View style={Styles.view}>
            <Current
              theme={theme}
              measures={measures}
              data={{
                current: data?.current,
                today: data?.forecast.forecastday[0],
              }}
            />

            <HourlyForecast
              theme={theme}
              router={router}
              data={data?.forecast.forecastday[0].hour}
            />

            <Astro theme={theme} data={data?.forecast.forecastday[0].astro} />

            <DailyForecast
              theme={theme}
              router={router}
              measures={measures}
              data={data?.forecast.forecastday}
            />

            <AirQuality
              theme={theme}
              data={data?.forecast.forecastday[0].day.air_quality}
            />

            <Alerts theme={theme} router={router} data={data.alerts?.alert} />
          </View>
        </ScrollView>
      </Screen>
    </ImageBackground>
  );
};

export default Home;
