import * as React from 'react';

import HomeScreen from './app/screens/HomeScreen';
import Screen from "./app/components/Screen"; 
import ProfileScreen from './app/screens/ProfileScreen';

export default function App() {
 
  return (
    <Screen>
      <ProfileScreen />
    </Screen>
  );
}
 