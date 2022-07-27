import {DrawerScreenProps} from '@react-navigation/drawer';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles, colores} from '../theme/appTheme';

// interface IProps extends StackScreenProps<any, any> {}
interface IProps extends DrawerScreenProps<any, any> {}

const Page1Screen = ({navigation}: IProps) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{marginLeft: 10}}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" size={35} color={colores.primary} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>페이지1</Text>
      <Button
        title="page2"
        onPress={() => navigation.navigate('Page2Screen')}
      />
      <Button
        title="PersonScreen"
        onPress={() => navigation.navigate('PersonScreen')}
      />

      <Text style={{marginVertical: 20, fontSize: 20}}>Naver can argument</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity
          style={{...styles.item, backgroundColor: 'pink'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 1,
              name: 'Spear',
            })
          }>
          <Icon name="woman-outline" size={35} color="white" />
          <Text style={styles.itemText}>Spear</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.item, backgroundColor: 'blue'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {
              id: 2,
              name: 'Jin',
            })
          }>
          <Icon name="body-outline" size={35} color="white" />
          <Text style={styles.itemText}>Jin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Page1Screen;
