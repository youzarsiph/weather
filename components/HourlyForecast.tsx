/**
 * Hourly forecast
 */

import React from "react";
import { StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { IconButton, List, MD3Theme, Surface, Text } from "react-native-paper";
import { Icons } from "../utils";
import { Hour, Router } from "../types";

const HourlyForecast = (props: {
  theme: MD3Theme;
  router?: Router;
  data: Hour[];
}) => {
  // Extract props
  const { theme, router, data } = props;

  // Render function
  const render = (item: Hour) => {
    const icon = Icons.getConditionIcon(item.is_day === 1, item.condition.text);

    return (
      <Surface
        elevation={0}
        style={{
          ...styles.surface,
          backgroundColor: theme.colors.elevation.level1,
        }}
      >
        <Text variant="bodySmall">{item.time.split(" ")[1]}</Text>
        <Text variant="bodyLarge" style={{ textAlign: "center" }}>
          {item.temp_c}
        </Text>
        <IconButton
          icon={icon}
          style={{
            backgroundColor: theme.colors.elevation.level1,
          }}
          onPress={() =>
            router !== undefined
              ? router.push({
                  pathname: "forecast/hourly",
                  params: { hour: JSON.stringify(item) },
                })
              : {}
          }
        />
      </Surface>
    );
  };

  return (
    <List.Section>
      <List.Subheader
        style={{
          ...styles.title,
          backgroundColor: theme.colors.elevation.level1,
        }}
      >
        Hourly Forecast
      </List.Subheader>
      <FlashList
        horizontal
        data={data}
        estimatedItemSize={156}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => render(item)}
        contentContainerStyle={styles.contentContainer}
      />
    </List.Section>
  );
};

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 8,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
  contentContainer: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
  surface: {
    rowGap: 16,
    padding: 16,
    marginRight: 16,
    borderRadius: 16,
    alignItems: "center",
  },
});

export default HourlyForecast;
