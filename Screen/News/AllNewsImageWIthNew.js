import React, {Component} from 'react';
import {Icon} from 'native-base';

import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Data from '../../fakedata.json';
import AllNewsScrolimage from './AllNewsScrolimage';

export default class AllNewsimageWithNew extends Component {
  render() {
    return (
      <View style={styles.mainoutercontainer}>
        <View style={styles.videMainContainer}>
          {Data.NewsData.map((item, index) => {
            return (
              <View style={{flex: 1}}>
                {index === 3 ? (
                  <View style={styles.addcontainerImage}>
                    <Image
                      style={styles.assimageStyling}
                      source={require('../../assets/images/ncelladd.png')}
                    />
                  </View>
                ) : (
                  <TouchableOpacity>
                    <View style={styles.videTextContent}>
                      <View style={styles.videContent}>
                        <ImageBackground
                          style={styles.backgroundImagesDisplay}
                          source={require('../../assets/images/topimage.png')}>
                          {/* <View>
                          <Icon name="play-circle" style={styles.colorDesign} />
                        </View> */}
                        </ImageBackground>
                      </View>
                      <View style={styles.textViewCOntent}>
                        <Text style={styles.textStyling}>
                          {item.imaheHeader}
                        </Text>
                        <Text style={styles.timingStyling}>4 hour ago </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            );
          })}
        </View>
        <View style={styles.BottomLine} />
        {/* <View>
          <AllNewsScrolimage />
        </View> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  backgroundImagesDisplay: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainoutercontainer: {
    flex: 1,
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  timingStyling: {
    color: '#9E9E9E',
  },
  textViewCOntent: {
    flex: 1,
    fontSize: 30,
    // fontFamily: 'bold',
    width: '100%',
    marginLeft: '5%',
  },
  textStyling: {
    color: '#1D1E1F',
    fontSize: 20,
  },
  videContent: {
    width: '40%',
    height: 100,

    // height: '100%',
  },
  videMainContainer: {
    // flex: 1,
    color: '#fff',
    width: '90%',
    // height: '100%',
    // backgroundColor: '#fff',
  },
  videTextContent: {
    flex: 1,
    display: 'flex',
    marginTop: 20,
    // height: '100%',
    flexDirection: 'row',
  },
  colorDesign: {
    color: '#fff',
    fontSize: 40,
  },
  videoDisplaying: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BottomLine: {
    borderBottomColor: '#CC0000',
    borderBottomWidth: 1,
    marginBottom: 20,
    marginTop: 20,
  },
  addcontainerImage: {
    width: '100%',
    height: '100%',
    // backgroundColor: 'red',
    marginTop: 20,
  },
  assimageStyling: {
    width: '100%',
    height: 200,
  },
});
