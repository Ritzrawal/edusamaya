import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Dimensions,
} from 'react-native';
import {Button, Container, Content} from 'native-base';
import Data from '../../fakedata.json';
import NewsImageDisplay from './NewsImageDisplay';
import {ScrollView} from 'react-native-gesture-handler';
import HeaderPage from './HeaderPage';
export default class AntarwartaPage extends Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <ScrollView>
          <View style={styles.headingContainer}>
            <Text style={styles.headinCustome}>अन्तवार्ता</Text>
          </View>

          {Data.NewsData.map((items) => {
            return (
              <View style={styles.interViewMain}>
                <View style={styles.InterViewOuter}>
                  <View style={styles.profileLogo}>
                    <Image
                      style={styles.makeimageRounded}
                      source={require('../../assets/images/profile.png')}
                    />
                  </View>
                  <View style={styles.profileName}>
                    <Text style={{color: '#212529', fontSize: 20}}>
                      {items.ProfileName}
                    </Text>
                    <Text style={{color: '#CC0000', fontSize: 15}}>
                      {items.ProfileName}
                    </Text>
                  </View>
                  <View style={styles.profileDesc}>
                    <Text style={{color: '#95989A'}}>{items.ProfileDes}</Text>
                  </View>
                </View>
              </View>
            );
          })}
          <View style={styles.bottomLineDesign} />
        </ScrollView>
      </View>
    );
  }
}
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// const Tab = createMaterialTopTabNavigator();

// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={AntarwartaPage} />
//       <Tab.Screen name="Settings" component={AntarwartaPage} />
//     </Tab.Navigator>
//   );
// }
const styles = StyleSheet.create({
  InterViewOuter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    width: '90%',
    height: 300,
  },
  headingContainer: {
    position: 'relative',
    left: '5%',
    width: '100%',
    justifyContent: 'center',
    height: '4%',
    // backgroundColor: 'red',
    top: 0,
  },
  headinCustome: {
    fontSize: 40,
  },
  makeimageRounded: {
    width: 110,
    height: 110,
    borderRadius: 120 / 2,
  },

  mainContainer: {
    // backgroundColor: 'transparent',
    backgroundColor: '#E6E4E4',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 'auto',
    height: '100%',
    marginBottom: 100,
    // marginBottom: Dimensions.get('window').height, //for full screen,
  },
  antabartaScroll: {},
  interViewMain: {
    marginTop: '25%',
    display: 'flex',
    width: '100%',
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
  },
  profileLogo: {
    position: 'absolute',
    top: -50,
    left: '30%',
    // zIndex: 2,
  },
  buttonStyling: {
    backgroundColor: '#CC0000',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
  },
  buttonContent: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    // width: '100%',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
    // textAlign: 'center',
  },
  profileName: {
    marginLeft: '5%',
    marginTop: '20%',
  },
  profileDesc: {
    // position: 'absolute',
    marginTop: '5%',
    marginLeft: '5%',
    color: '#95989A',
  },
  backimages: {
    flex: 1,
    // marginLeft: 10,
    width: '100%',
    // display: 'flex',
  },
});
