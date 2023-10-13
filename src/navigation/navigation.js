import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import ScreenTwo from '../screens/screenTwo';
import ScreenThree from '../screens/screenThree';
import Screenfour from '../screens/screenfour';
import Screenfive from'../screens/screenfive';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false, }} >
         
            {/* <Stack.Screen name="Home" component={Home} />   */}
             {/* <Stack.Screen name="ScreenTwo" component={ScreenTwo} />  */}
            {/* <Stack.Screen name="ScreenThree" component={ScreenThree}/> */}
            {/* <Stack.Screen name="Screenfour" component={Screenfour}/> */}
            <Stack.Screen name="Screenfive" component={Screenfive}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}