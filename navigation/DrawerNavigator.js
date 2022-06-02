import React, { Component } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import SwitchNavigation from './SwitchNavigator';
import ProfileScreen from '../Screens/ProfileScreen';
import HomeScreen from '../Screens/HomeScreen';
import LogoutScreen from '../Screens/LogoutScreen';

import CustomSidebarMenu from "../Screens/CustomSidebBarMenu";

const Drawer = createDrawerNavigator();

export default class DrawerNavigator extends Component {

  render() {
    let props = this.props;
    return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          inactiveTintColor: "white",
          itemStyle: { marginVertical: 5 }
        }}
        drawerContent={props => <CustomSidebarMenu {...props} />}
      >
        <Drawer.Screen
          name="Home"
          component={SwitchNavigation}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ unmountOnBlur: true }}
        />
        <Drawer.Screen
          name="Logout"
          component={LogoutScreen}
          options={{ unmountOnBlur: true }}
        />
      </Drawer.Navigator>
    );
  }
}
