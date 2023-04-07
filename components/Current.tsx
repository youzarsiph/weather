/**
 * Today's weather
 */

import React from "react";
import { StyleSheet, View } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";
import { List, MD3Theme, Surface, Text } from "react-native-paper";
import Styles from "../styles";
import { Current as CurrentType, ForecastDay, Measures } from "../types";

const Current = (props: {
  theme: MD3Theme;
  measures: Measures;
  data: { current: CurrentType; today: ForecastDay };
}) => {
  // Extract props
  const { theme, measures, data } = props;

  // Current weather condition
  const current = data.current;
  const lastUpdated = new Date(current.last_updated);

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
        tempMeasure === "celsius" ? current.feelslike_c : current.feelslike_f,
      icon: `temperature-${tempMeasure}`,
    },
    {
      title: "Humidity",
      description: current.humidity + "%",
      icon: "water",
    },
    {
      title: "Clouds",
      description: current.cloud + "%",
      icon: "cloud",
    },
    {
      title: "Direction",
      description: current.wind_dir,
      icon: "weather-windy",
    },
    {
      title: "Degrees",
      description: current.wind_degree + " degrees",
      icon: "weather-windy",
    },
    {
      title: "Speed",
      description:
        (speedMeasure === "km/h" ? current.wind_kph : current.wind_mph) +
        ` ${speedMeasure}`,
      icon: "weather-windy-variant",
    },
    {
      title: "Pressure",
      description:
        pressureMeasure === "m"
          ? current.pressure_mb + " mb"
          : current.pressure_in + " in",
      icon: "weather-windy-variant",
    },
    {
      title: "Precipitation",
      description:
        pressureMeasure === "m"
          ? current.precip_mm + " mm"
          : current.precip_in + " in",
      icon: "weather-windy-variant",
    },
    {
      title: "UV Index",
      description: current.uv,
      icon: "weather-sunny-alert",
    },
    {
      title: "Gust",
      description:
        (speedMeasure === "km/h" ? current.gust_kph : current.gust_mph) +
        ` ${speedMeasure}`,
      icon: "weather-windy",
    },
  ];

  return (
    <>
      <Surface
        elevation={0}
        style={{
          ...styles.container,
          backgroundColor: theme.colors.elevation.level1,
        }}
      >
        <View style={styles.surface}>
          <Text variant="displayLarge">
            {tempMeasure === "celsius" ? current.temp_c : current.temp_f}
            <List.Icon icon={`temperature-${tempMeasure}`} />
          </Text>
          <Text variant="titleLarge">{current.condition.text}</Text>
          <Text>
            {tempMeasure === "celsius" ? (
              <>
                {data.today.day.maxtemp_c} / {data.today.day.mintemp_c}
              </>
            ) : (
              <>
                {data.today.day.maxtemp_f} / {data.today.day.mintemp_f}
              </>
            )}
          </Text>
        </View>
        <Text variant="bodySmall">
          Last updated: {lastUpdated.toLocaleString()}
        </Text>
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
    </>
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

export default Current;
