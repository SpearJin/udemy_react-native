import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import SettingScreen from '../screens/SettingScreen';
import {
  Image,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import {styles} from '../theme/appTheme';
import Tabs from './Tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const MenuSideSub = () => {
  const {width} = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerContent={props => <MenuIntro {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: width >= 768 ? 'permanent' : 'front',
      }}>
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
    </Drawer.Navigator>
  );
};

const MenuIntro = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png',
          }}
          style={styles.avatar}
        />
      </View>

      {/* Options menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={{...styles.buttonButton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('Tabs')}>
          <Icon name="compass-outline" size={20} color="black" />
          <Text style={styles.menuText}>Navigation</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.buttonButton, flexDirection: 'row'}}
          onPress={() => navigation.navigate('SettingScreen')}>
          <Icon name="cog-outline" size={20} color="black" />
          <Text style={styles.menuText}>Adjust</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};
