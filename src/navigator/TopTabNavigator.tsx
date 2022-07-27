import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ChartScreen from '../screens/ChartScreen';
import ContactsScreen from '../screens/ContactsScreen';
import AlbumsScreens from '../screens/AlbumsScreens';
import {LogBox, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

LogBox.ignoreLogs(['Sending']);

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = () => {
  const {top: paddingTop} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      style={{paddingTop}}
      screenOptions={({route}) => ({
        tabBarPressColor: colores.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colores.primary,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarIcon({color}) {
          let iconName: string = '';
          switch (route.name) {
            case 'Chart':
              iconName = 'chatbox-ellipses-outline';
              break;
            case 'Contacts':
              iconName = 'people-outline';
              break;
            case 'Albums':
              iconName = 'albums-outline';
              break;
          }
          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen name="Chart" component={ChartScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreens} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
