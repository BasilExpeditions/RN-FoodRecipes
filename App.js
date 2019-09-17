import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

import MealsNavigator from './navigation/MealsNavigator';

//Fetching Font File Location via  * as Font from'expo-font';
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-Bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

//useState for loading fonts before main app component runs
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

//checking if !fontloaded run fetch fonts, once finished, set states fontloaded to true
  if (!fontLoaded) {
    return ( 
      <AppLoading 
        startAsync ={fetchFonts} 
        onFinish={() => setFontLoaded(true)}
      />
    );
  }
  
  return <MealsNavigator />;
}

const styles = StyleSheet.create ({
  text: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 300
  }
});