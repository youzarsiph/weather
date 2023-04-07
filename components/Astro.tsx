/**
 * Astronomy data
 */

import React from "react";
import { View } from "react-native";
import { List, MD3Theme } from "react-native-paper";
import { MasonryFlashList } from "@shopify/flash-list";
import Styles from "../styles";
import { Icons } from "../utils";
import { Astro as AstroType } from "../types";

const Astro = (props: { theme: MD3Theme; data: AstroType }) => {
  // Extract props
  const { theme, data } = props;

  const sunData = [
    {
      title: "Status",
      description: data.is_sun_up === 1 ? "Up" : "Down",
      icon: "weather-sunny",
    },
    {
      title: "Sunrise",
      description: data.sunrise,
      icon: "weather-sunset-up",
    },
    {
      title: "Sunset",
      description: data.sunset,
      icon: "weather-sunset-down",
    },
  ];

  const moonData = [
    {
      title: "Status",
      description: data.is_moon_up === 1 ? "Up" : "Down",
      icon: "weather-night",
    },
    {
      title: "Moonrise",
      description: data.moonrise,
      icon: "moon-new",
    },
    {
      title: "Moonset",
      description: data.moonset,
      icon: "moon-full",
    },
    {
      title: "Illumination",
      description: `${data.moon_illumination}%`,
      icon: "shield-moon-outline",
    },
  ];

  return (
    <>
      <List.Section
        title="Sun"
        style={{
          ...Styles.card,
          backgroundColor: theme.colors.elevation.level1,
        }}
      >
        <View style={{ height: 2 * 70 }}>
          <MasonryFlashList
            numColumns={2}
            data={sunData}
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

      <List.Section
        title="Moon"
        style={{
          ...Styles.card,
          backgroundColor: theme.colors.elevation.level1,
        }}
      >
        <View style={{ height: 3 * 70 }}>
          <MasonryFlashList
            numColumns={2}
            data={moonData}
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
          <List.Item
            title={"Phase"}
            description={data.moon_phase}
            left={(leftProps) => (
              <List.Icon
                icon={Icons.getMoonIcon(data.moon_phase)}
                style={{
                  ...Styles.icon,
                  ...leftProps.style,
                  backgroundColor: theme.colors.elevation.level1,
                }}
              />
            )}
          />
        </View>
      </List.Section>
    </>
  );
};

export default Astro;
