/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from './src/navigations/Navigator'

const App = () => {
  return(
    <NavigationContainer>
      <HomeStackNavigator/>
    </NavigationContainer>
  )
}

export default App;
