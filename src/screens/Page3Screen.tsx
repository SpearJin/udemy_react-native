import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface IProps extends StackScreenProps<any, any> {}

const Page3Screen = ({navigation}: IProps) => {
  return (
    <View style={styles.globalMargin}>
      <Text>페이지3</Text>
      <Button title="page2" onPress={() => navigation.pop()} />
      <Button title="page1" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Page3Screen;
