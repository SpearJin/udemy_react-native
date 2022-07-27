import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {colores, styles} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const Tab1Screen = () => {
  const {top} = useSafeAreaInsets();

  useEffect(() => {
    console.log('Tab1Screen Effect');
  }, []);

  const test = <Icon name="alarm-outline" size={30} color={colores.primary} />;
  return (
    <View style={{...styles.globalMargin, marginTop: top}}>
      <Text style={styles.title}>Tab1Screen</Text>
      <Text>
        <Icon name="alarm-outline" size={60} color={colores.primary} />
        <Icon name="airplane-outline" size={60} color={colores.primary} />
        <Icon name="bicycle-outline" size={60} color={colores.primary} />
        <Icon name="bus-outline" size={60} color={colores.primary} />
        <Icon name="chatbubble-outline" size={60} color={colores.primary} />
        <Icon name="color-palette-outline" size={60} color={colores.primary} />
        <Icon name="earth-outline" size={60} color={colores.primary} />
      </Text>
    </View>
  );
};

export default Tab1Screen;
