/**
 * Day Forecast Screen
 */

import React from "react";
import * as SecureStore from "expo-secure-store";
import { MasonryFlashList } from "@shopify/flash-list";
import { useRouter, useSearchParams } from "expo-router";
import { List, Surface, Text, useTheme } from "react-native-paper";
import { ImageBackground, View, ScrollView, StyleSheet } from "react-native";
import Styles from "../../styles";
import { sources } from "../../constants";
import { ForecastDay, Measures, Params } from "../../types";
import { AirQuality, Astro, HourlyForecast, Screen } from "../../components";

const Daily = () => {
  // Theme
  const theme = useTheme();

  // Router
  const router = useRouter();

  // Day
  const { day } = useSearchParams<Params>();
  const data: ForecastDay = JSON.parse(day || "{}");
  const title = new Date(data.date);

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

  let speedMeasure: "km/h" | "m/h";
  let pressureMeasure: "m" | "in";
  let tempMeasure: "celsius" | "fahrenheit";

  if (measures.speed === "k") {
    speedMeasure = "km/h";
  } else {
    speedMeasure = "m/h";
  }

  if (measures.pressure === "m") {
    pressureMeasure = "m";
  } else {
    pressureMeasure = "in";
  }

  if (measures.temperature === "c") {
    tempMeasure = "celsius";
  } else {
    tempMeasure = "fahrenheit";
  }

  const currentData = [
    {
      title: "Feels like",
      description:
        tempMeasure === "celsius" ? data.day.avgtemp_c : data.day.avgtemp_f,
      icon: `temperature-${tempMeasure}`,
    },
    {
      title: "Humidity",
      description: data.day.avghumidity + "%",
      icon: "water",
    },
    {
      title: "Rain chance",
      description: data.day.daily_chance_of_rain + "%",
      icon: "weather-pouring",
    },
    {
      title: "Snow chance",
      description: data.day.daily_chance_of_rain + "%",
      icon: "snowflake",
    },
    {
      title: "Speed",
      description:
        (speedMeasure === "km/h"
          ? data.day.maxwind_kph
          : data.day.maxwind_mph) + ` ${speedMeasure}`,
      icon: "weather-windy-variant",
    },
    {
      title: "Precipitation",
      description:
        pressureMeasure === "m"
          ? data.day.totalprecip_mm + " mm"
          : data.day.totalprecip_in + " in",
      icon: "weather-windy-variant",
    },
    {
      title: "UV Index",
      description: data.day.uv,
      icon: "weather-sunny-alert",
    },
    {
      title: "Visibility",
      description:
        (speedMeasure === "km/h" ? data.day.avgvis_km : data.day.avgvis_miles) +
        ` ${speedMeasure}`,
      icon: "eye",
    },
  ];

  return (
    <ImageBackground
      blurRadius={10}
      resizeMode="cover"
      style={Styles.bg}
      source={sources.sunny}
    >
      <Screen options={{ title: title.toLocaleDateString() }}>
        <ScrollView>
          <View style={Styles.view}>
            <Surface
              elevation={0}
              style={{
                ...styles.container,
                backgroundColor: theme.colors.elevation.level1,
              }}
            >
              <View style={styles.surface}>
                <Text variant="displayLarge">
                  {tempMeasure === "celsius"
                    ? data.day.maxtemp_c
                    : data.day.maxtemp_f}
                  <List.Icon icon={`temperature-${tempMeasure}`} />
                </Text>
                <Text variant="titleLarge">{data.day.condition.text}</Text>
                <Text>
                  {tempMeasure === "celsius" ? (
                    <>
                      {data.day.maxtemp_c} / {data.day.mintemp_c}
                    </>
                  ) : (
                    <>
                      {data.day.maxtemp_f} / {data.day.mintemp_f}
                    </>
                  )}
                </Text>
              </View>
            </Surface>

            <List.Section
              style={{
                ...Styles.card,
                backgroundColor: theme.colors.elevation.level1,
              }}
            >
              <View style={{ height: (currentData.length / 2) * 70 }}>
                <MasonryFlashList
                  numColumns={2}
                  data={currentData}
                  estimatedItemSize={70}
                  renderItem={({ item }) => (
                    <List.Item
                      title={item.title}
                      description={item.description}
                      left={(leftProps) => (
                        <List.Icon
                          icon={item.icon}
                          style={{
                            ...Styles.icon,
                            ...leftProps.style,
                            backgroundColor: theme.colors.elevation.level1,
                          }}
                        />
                      )}
                    />
                  )}
                />
              </View>
            </List.Section>

            <HourlyForecast theme={theme} data={data.hour} />

            <Astro theme={theme} data={data.astro} />

            {data.day.air_quality["us-epa-index"] !== undefined ? (
              <AirQuality theme={theme} data={data?.day.air_quality} />
            ) : undefined}
          </View>
        </ScrollView>
      </Screen>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 16,
    padding: 16,
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  surface: {
    rowGap: 16,
    paddingVertical: 48,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Daily;
