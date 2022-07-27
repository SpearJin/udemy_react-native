import React from 'react';
import Page1Screen from '../screens/Page1Screen';
import Page2Screen from '../screens/Page2Screen';
import Page3Screen from '../screens/Page3Screen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '../screens/SettingScreen';
import PersonScreen from '../screens/PersonScreen';

export type RootStackParams = {
  Page1Screen: undefined;
  Page2Screen: undefined;
  Page3Screen: undefined;
  PersonScreen: {id: number; name: string};
};

const Stack = createNativeStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Page1Screen" component={Page1Screen} />
      <Stack.Screen name="Page2Screen" component={Page2Screen} />
      <Stack.Screen name="Page3Screen" component={Page3Screen} />
      <Stack.Screen
        name="PersonScreen"
        options={{title: 'PersonScreen'}}
        component={PersonScreen}
      />
      <Stack.Screen name="SettingsScreen" component={SettingScreen} />
    </Stack.Navigator>
  );
};
