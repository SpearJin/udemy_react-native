import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MenuSideSub} from './src/navigator/Menuside';
import Tabs from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      <MenuSideSub />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
