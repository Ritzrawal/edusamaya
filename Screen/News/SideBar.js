import React from 'react';
import {
  AppRegistry,
  Image,
  StatusBar,
  ListView,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';

import {Container, Content, Text, List, ListItem, Icon} from 'native-base';
const routes = ['Home', 'Chat', 'Profile'];

export default function SideBar({navigation}) {
  return (
    <View style={styles.sidebarStyles}>
      <View style={styles.SideTopMain}>
        <View style={styles.logoSidebar}>
          <Image
            style={styles.logoDesign}
            source={require('../../assets/images/darklogo.png')}
          />
        </View>
      </View>
      <View style={styles.bottomLineDesign} />

      <View>
        <List
          dataArray={routes}
          renderRow={(data) => {
            return (
              <View>
                <ListItem onPress={() => navigation.navigate('drawpfofile')}>
                  <Text style={{color: '#ffff'}}>{data}</Text>
                </ListItem>
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebarStyles: {
    backgroundColor: '#000',
    height: '100%',
  },
  SideTopMain: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',

    flexDirection: 'row',
    height: '10%',
  },
  logoSidebar: {
    width: '80%',
  },
  IconStyle: {
    color: '#EBE9EA',
    fontSize: 30,
    backgroundColor: 'transparent',
  },
  logoDesign: {
    fontSize: 40,
    width: '100%',
  },
  bottomLineDesign: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
});
