import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Data from '../../fakedata.json';
import {Icon} from 'native-base';
import NewsImageDisplay from './NewsImageDisplay';
// import { block } from 'react-native-reanimated';
// import {faClock} from 'react-native-vector-icons/FontAwesome';
// const newdata = [{name: 'Rawal'}];
export default class TopNewsDisplay extends Component {
  render() {
    return (
      <View>
        {Data.NewsData.map((items) => {
          return (
            <View>
              <View>
                <View>
                  <Text style={styles.textDecorateHeding}>{items.Hedline}</Text>
                </View>
                <View style={styles.timeLogo}>
                  <View onPress={() => this.props.navigation.navigate('rawal')}>
                    <Icon name="clock" style={styles.colorDesign} />
                  </View>
                  <View>
                    <Text style={styles.timetext}>{items.time}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.imagedesign}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={require('../../assets/images/topimage.png')}
                />
              </View>
              <View>
                <View>
                  <Text style={styles.textDecorate}>{items.DesFirst}</Text>
                </View>
                <View style={styles.lowerNewsDesc}>
                  <Text style={styles.textDecorate}>{items.DesSecond}</Text>
                </View>
                <View style={styles.lowerNewsDesc}>
                  <Text style={styles.textDecorate}></Text>
                </View>
              </View>
              <View style={styles.bottomLineDesign} />
            </View>
          );
        })}
        <View>
          <NewsImageDisplay />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textDecorateHeding: {
    backgroundColor: '#fff',
    // display: 'block',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textDecorate: {
    backgroundColor: '#fff',
    // display: 'block',
    textAlign: 'center',
    fontWeight: 'bold',

    fontSize: 16,
  },
  lowerNewsDesc: {
    marginTop: 5,
  },
  bottomLineDesign: {
    borderBottomColor: '#CC0000',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  colorDesign: {
    // color: 'white',
    color: '#A5A6A7',
  },
  timeLogo: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagedesign: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
    width: '100%',
    height: 200,
    // backgroundColor: 'red',
  },
  timetext: {
    // display: 'block',
    color: '#A5A6A7',
    fontSize: 15,
    marginLeft: 15,
  },
});
