/**
 * Header
 */

import React from "react";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Appbar, AppbarHeaderProps, Menu, useTheme } from "react-native-paper";

interface HeaderProps extends NativeStackHeaderProps {
  headerProps?: AppbarHeaderProps;
}

const Header = (props: HeaderProps) => {
  // Theme
  const theme = useTheme();

  // Display Menu
  const [visible, setVisible] = React.useState<boolean>(false);

  return (
    <Appbar.Header {...props.headerProps}>
      {props.back && (
        <Appbar.BackAction onPress={() => props.navigation.goBack()} />
      )}

      <Appbar.Content title={props.options.title || props.route.name} />

      {props.route.name === "settings" ? undefined : (
        <Menu
          visible={visible}
          contentStyle={{
            backgroundColor: theme.dark
              ? "rgb(38, 35, 41)"
              : "rgb(248, 241, 253)",
          }}
          onDismiss={() => setVisible(false)}
          anchor={
            <Appbar.Action
              icon="dots-vertical"
              onPress={() => setVisible(true)}
            />
          }
        >
          <Menu.Item
            title="Settings"
            leadingIcon={"cog"}
            onPress={() => {
              setVisible(false);
              props.navigation.navigate("settings");
            }}
          />
        </Menu>
      )}
    </Appbar.Header>
  );
};

export { HeaderProps };

export default Header;
