import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import VideoStreaming from './VideoStreaming';
import Data from '../../fakedata.json';
import AntarwartaPage from './AntarwartaPage';
export default class HeadlineWithImage extends Component {
  render() {
    return (
      <View>
        {Data.NewsData.map((items) => {
          return (
            <TouchableOpacity>
              <View style={styles.newswithimage}>
                <View style={styles.imagestyle}>
                  <Image
                    style={styles.newHedlineImge}
                    source={require('../../assets/images/topimage.png')}
                  />
                </View>
                <View style={styles.newsHeadline}>
                  <View style={styles.newsheadline}>
                    <Text style={styles.newhedertext}>{items.imaheHeader}</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
        <View style={styles.bottomLineDesign} />
        <View>
          <VideoStreaming />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  newswithimage: {
    marginBottom: 20,

    display: 'flex',
    flexDirection: 'row',
  },
  imagestyle: {
    width: '30%',
    marginRight: '5%',

    height: 100,
  },
  newhedertext: {
    color: '#222',
    fontSize: 16,
  },
  newHedlineImge: {
    width: '100%',
    height: '100%',
    marginRight: '20%',
  },
  newsHeadline: {
    display: 'flex',
    width: '100%',

    justifyContent: 'center',
    // alignItems: 'center',
  },
  bottomLineDesign: {
    borderBottomColor: '#CC0000',
    borderBottomWidth: 1,
    marginBottom: 20,
    marginTop: 20,
  },
});
