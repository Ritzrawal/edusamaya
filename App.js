import * as React from 'react';
import HomeScreen from './Screen/News/NewsHomepage';
import SideBar from './Screen/News/SideBar';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import {Provider} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import HorscopeIcon from './Screen/News/HorscopeIcon';

import Navigation from './Screen/News/Navigation';
// import store from './store';
// import ScrollableHeader from './Screen/News/ScrollableHeader';l0
import {NavigationContainer} from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
export default function App() {
  return (
    // <Provider store={store}>
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
    // </Provider>
  );
}

// function NewIndex() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerTitle: 'Nepal',
//       }}>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="NewData" component={HorscopeIcon} />
//     </Stack.Navigator>
//   );
// }
