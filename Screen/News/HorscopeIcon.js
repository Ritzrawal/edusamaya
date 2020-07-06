import React, {Component} from 'react';
// import AntarwartaPage from './AntarwartaPage';
import {View, Text, Image, StyleSheet, FlatList} from 'react-native';
import AntarwartaPage from './AntarwartaPage';
const Data = [
  {
    id: '1',
    images: require('../../assets/images/horo1.png'),
    name: 'ARIES',
    date: 'Mar 21- May 22',
  },
  {
    id: '2',
    images: require('../../assets/images/horo2.png'),
    name: 'ARIES',
    date: 'Mar 21- May 22',
  },
  {
    id: '3',
    images: require('../../assets/images/horo3.png'),
    name: 'ARIES',
    date: 'Mar 21- May 22',
  },
  {
    id: '4',
    images: require('../../assets/images/horo4.png'),
    name: 'ARIES',
    date: 'Mar 21- May 22',
  },
  {
    id: '1',
    images: require('../../assets/images/horo5.png'),
    date: 'Mar 21- May 22',
    name: 'ARIES',
  },
  {
    id: '2',
    images: require('../../assets/images/horo6.png'),
    name: 'ARIES',
    date: 'Mar 21- May 22',
  },
  {
    id: '3',
    images: require('../../assets/images/horo7.png'),
    name: 'ARIES',
    date: 'Mar 21- May 22',
  },
  {
    id: '4',
    images: require('../../assets/images/horo8.png'),
    name: 'ARIES',
    date: 'Mar 21- May 22',
  },
  {
    id: '1',
    images: require('../../assets/images/horo9.png'),
    name: 'ARIES',
    date: 'Mar 21- May 22',
  },
  {
    id: '2',
    images: require('../../assets/images/horo10.png'),
    name: 'ARIES',
    date: 'Mar 21- May 22',
  },
  {
    id: '3',
    images: require('../../assets/images/horo11.png'),
    name: 'ARIES',
    date: 'Mar 21- May 22',
  },
  {
    id: '4',
    images: require('../../assets/images/horo12.png'),
    name: 'ARIES',
    date: 'Mar 21- May 22',
  },
];
export default class HorscopeIcon extends Component {
  render() {
    return (
      <View>
        <FlatList
          data={Data}
          renderItem={({item}) => (
            <View style={styles.zodicMainCOmponent}>
              <View style={styles.zodicComponent}>
                <View style={styles.imageContainer}>
                  <Image style={styles.Horoscopeimage} source={item.images} />
                </View>
                <View style={styles.zodicName}>
                  <Text style={styles.zodicNameStyle}>{item.name}</Text>
                </View>
                <View style={styles.dateDisplay}>
                  <Text>{item.date}</Text>
                </View>
              </View>
            </View>
          )}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.BottomLine} />
        <View>
          <AntarwartaPage />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  zodicMainCOmponent: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  zodicComponent: {
    // width: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: 100,
  },
  Horoscopeimage: {
    width: 100,
    height: 100,
  },
  zodicNameStyle: {
    color: '#6EA8B1',
    fontSize: 20,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  BottomLine: {
    borderBottomColor: '#CC0000',
    borderBottomWidth: 1,
    marginBottom: 20,
    marginTop: 20,
  },
});
