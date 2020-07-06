import * as React from 'react';
import HomeScreen from './NewsHomepage';
import SideBar from './SideBar';
import NewsPaper from '../../assets/images/newspaper.svg';
import NewsLogo from '../../assets/images/youtube.svg';
import InterViewLogo from '../../assets/images/interview.svg';
import GalleryLogo from '../../assets/images/Gallery.svg';
import HoroscopeLogo from '../../assets/images/horoscope.svg';
import Logo from '../../assets/images/menu.svg';
import AntarwartaPagefrom from './AntarwartaPage';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HorscopeIcon from './HorscopeIcon';
import {NavigationContainer} from '@react-navigation/native';
import ScrollableHeader from './ScrollableHeader';
import {Icon, View} from 'native-base';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerType="slide"
      initialRouteName="Home"
      // drawerWidth="100%"
      drawerContent={(props) => <SideBar {...props} />}>
      {/* <Drawer.Screen name="Home" component={HomeScreen} /> */}
      <Drawer.Screen name="Home" component={HomeTabs} />
      <Tab.Screen name="drawpfofile" component={HorscopeIcon} />
      <Drawer.Screen name="NewIndex" component={NewIndex} />
    </Drawer.Navigator>
  );
}

function NewIndex() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: (props) => <ScrollableHeader {...props} />,
      }}>
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="NewData" component={HorscopeIcon} />
      <Stack.Screen name="NewsDetail" component={HorscopeIcon} />
    </Stack.Navigator>
  );
}
function HomeTabs() {
  return (
    <Tab.Navigator
      // screenOptions={({route}) => ({
      //   tabBarIcon: ({focused, color, size}) => {
      //     let iconName;

      //     if (route.name === 'Feed') {
      //       iconName = focused ? <Logo /> : <Logo />;
      //     } else if (route.name === 'Profile') {
      //       iconName = focused ? 'ios-list-box' : 'ios-list';
      //     } else if (route.name === 'Account') {
      //       iconName = focused ? 'ios-list-box' : 'ios-list';
      //     } else if (route.name === 'Data') {
      //       iconName = focused ? 'ios-list-box' : 'ios-list';
      //     }

      //     // You can return any component that you like here!
      //     // return <Logo name={iconName} size={size} color={color} />;
      //   },
      // })}
      tabBarOptions={{
        activeTintColor: '#E60000',
        inactiveTintColor: '#9E9E9E',
      }}>
      <Tab.Screen
        name="News"
        options={{
          tabBarLabel: 'News',

          tabBarIcon: ({tintColor}) => {
            return (
              <NewsPaper style={{width: 50, height: 50}} color={tintColor} />
            );
          },
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Interview"
        options={{
          tabBarLabel: 'Interview',
          tabBarIcon: ({tintColor}) => {
            return (
              <InterViewLogo
                style={{width: 50, height: 50}}
                // fill={'#000'}
                color={tintColor}
              />
            );
          },
        }}
        component={AntarwartaPagefrom}
      />
      <Tab.Screen
        name="Gallery"
        options={{
          tabBarLabel: 'Gallery',
          tabBarIcon: ({tintColor}) => (
            <View>
              {tintColor === '#9E9E9E' ? (
                <GalleryLogo style={{width: 50, height: 50}} fill="green" />
              ) : (
                <GalleryLogo
                  style={{width: 50, height: 50}}
                  color={tintColor}
                />
              )}
            </View>
          ),
          // return (
          //   <GalleryLogo style={{width: 50, height: 50}} fill={tintColor} />
          // );
        }}
        component={HorscopeIcon}
      />
      <Tab.Screen
        name="RasiFal"
        options={{
          tabBarLabel: 'RasiFal',
          tabBarIcon: ({tintColor}) => {
            return (
              <HoroscopeLogo
                style={{width: 50, height: 50}}
                color={tintColor}
              />
            );
          },
        }}
        component={HorscopeIcon}
      />
    </Tab.Navigator>
  );
}
