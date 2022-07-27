import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

const Page2Screen = () => {
  const navigator = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text>페이지1</Text>
      <Button title="page3" onPress={() => navigator.navigate('Page3Screen')} />
    </View>
  );
};

export default Page2Screen;
