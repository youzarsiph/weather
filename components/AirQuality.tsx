/**
 * Air Quality
 */

import React from "react";
import { StyleSheet, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { List, MD3Theme, Text } from "react-native-paper";
import Styles from "../styles";
import { epa } from "../constants";
import { AirQuality as AirQualityType } from "../types";

const AirQuality = (props: { theme: MD3Theme; data: AirQualityType }) => {
  const epaIndex =
    props.data["us-epa-index"] !== undefined
      ? props.data["us-epa-index"] - 1
      : 0;

  const airQualityData = [
    {
      title: "CO",
      description: `Carbon Monoxide: ${props.data.co?.toPrecision(4)}`,
      icon: "molecule-co",
    },
    {
      title: "O3",
      description: `Ozone: ${props.data.o3?.toPrecision(4)}`,
      icon: "molecule",
    },
    {
      title: "NO2",
      description: `Nitrogen dioxide: ${props.data.no2?.toPrecision(4)}`,
      icon: "molecule",
    },
    {
      title: "SO2",
      description: `Sulphur dioxide: ${props.data.so2?.toPrecision(4)}`,
      icon: "molecule",
    },
    {
      title: "PM2.5",
      description: `${props.data.pm2_5?.toPrecision(4)}`,
      icon: "molecule",
    },
    {
      title: "PM10",
      description: `${props.data.pm10?.toPrecision(4)}`,
      icon: "molecule",
    },
  ];

  return (
    <List.Section
      title="Air Quality"
      style={{
        ...Styles.card,
        backgroundColor: props.theme.colors.elevation.level1,
      }}
    >
      <View style={styles.container}>
        <Text variant="displayLarge">{props.data["us-epa-index"]}</Text>
        <Text variant="displaySmall">{epa[epaIndex]}</Text>
      </View>

      <View style={{ height: airQualityData.length * 70 }}>
        <FlashList
          data={airQualityData}
          estimatedItemSize={70}
          renderItem={({ item }) => (
            <List.Item
              title={item.title}
              description={item.description + " μg/m3"}
              left={(leftProps) => (
                <List.Icon
                  icon={item.icon}
                  style={{
                    ...Styles.icon,
                    ...leftProps.style,
                    backgroundColor: props.theme.colors.elevation.level1,
                  }}
                />
              )}
            />
          )}
        />
      </View>
    </List.Section>
  );
};

const styles = StyleSheet.create({
  container: {
    rowGap: 16,
    paddingHorizontal: 16,
  },
});

export default AirQuality;
