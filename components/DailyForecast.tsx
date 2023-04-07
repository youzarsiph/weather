/**
 * Daily forecast
 */

import React from "react";
import { View } from "react-native";
import { FlashList } from "@shopify/flash-list";
import { List, MD3Theme, Text } from "react-native-paper";
import Styles from "../styles";
import { Icons } from "../utils";
import { ForecastDay, Measures, Router } from "../types";

const DailyForecast = (props: {
  theme: MD3Theme;
  router?: Router;
  measures: Measures;
  data: ForecastDay[];
}) => {
  // Extract props
  const { theme, data, measures, router } = props;

  // Render function
  const render = (item: ForecastDay) => {
    const date = new Date(item.date);
    let icon: string = Icons.getDayConditionIcon(item.day.condition.text);

    return (
      <List.Item
        title={date.toLocaleDateString()}
        description={item.day.condition.text}
        onPress={
          router
            ? () =>
                router.push({
                  pathname: "forecast/daily",
                  params: { day: JSON.stringify(item) },
                })
            : undefined
        }
        left={(leftProps) => (
          <List.Icon
            icon={icon}
            style={{
              ...Styles.icon,
              ...leftProps.style,
              backgroundColor: theme.colors.elevation.level1,
            }}
          />
        )}
        right={(rightProps) => (
          <Text
            variant="bodySmall"
            style={{
              ...Styles.icon,
              padding: 8,
              ...rightProps.style,
              backgroundColor: theme.colors.elevation.level1,
            }}
          >
            {measures.temperature === "c" ? (
              <>
                {item.day.maxtemp_c} / {item.day.mintemp_c}
              </>
            ) : (
              <>
                {item.day.maxtemp_f} / {item.day.mintemp_f}
              </>
            )}
          </Text>
        )}
      />
    );
  };

  return (
    <List.Section
      title={`${data.length}-day forecast`}
      style={{
        ...Styles.card,
        backgroundColor: theme.colors.elevation.level1,
      }}
    >
      <View style={{ height: data.length * 70 }}>
        <FlashList
          data={data}
          estimatedItemSize={70}
          renderItem={({ item }) => render(item)}
        />
      </View>
    </List.Section>
  );
};

export default DailyForecast;
