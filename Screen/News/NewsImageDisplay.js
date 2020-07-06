import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// import AntarwartaPage from './AntarwartaPage';
import HeadlineWithImage from './HeadlineWIthImage';
import {Icon} from 'native-base';
import Data from '../../fakedata.json';
import {ScrollView} from 'react-native-gesture-handler';
// import NewHeaderImages from './NewsImageDisplay';
// import {faClock} from 'react-native-vector-icons/FontAwesome';
// import AntarwartaPage from './AntarwartaPage';
export default class NewsImageDisplay extends Component {
  render() {
    return (
      <View>
        <View style={styles.galleryImagesSection}>
          {Data.NewsData.map((items) => {
            return (
              <View style={styles.imagedesign}>
                <TouchableOpacity>
                  <ImageBackground
                    style={styles.backgroundImagesDisplay}
                    source={require('../../assets/images/topimage.png')}>
                    <View style={styles.imageHeader}>
                      <View>
                        <Text style={styles.timetext}>{items.imaheHeader}</Text>
                      </View>

                      <View style={styles.timeDisplay}>
                        <View>
                          <Text style={styles.timetext}>{items.time}</Text>
                        </View>
                        <View styles={styles.photoCountStyling}>
                          <Text style={styles.timetext}>5 photos</Text>
                        </View>
                      </View>
                    </View>
                  </ImageBackground>
                </TouchableOpacity>
              </View>
            );
          })}
          {/* <View>
          <HeadlineWithImage />
        </View> */}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  galleryImagesSection: {
    height: '100%',
    width: '100%',
    marginBottom: 100,
    backgroundColor: '#fff',
    display: 'flex',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  timetext: {
    // zIndex: 2,
    // marginLeft: 10,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  photoCountStyling: {
    marginLeft: 20,
  },
  colorDesign: {
    // borderBottomColor: 'red',
    color: '#fff',
    marginRight: 10,
  },

  imagedesign: {
    backgroundColor: '#fff',
    marginTop: 40,
    // marginBottom: 20,
    width: '90%',
    // position: 'absolute',
    // zIndex: 0,
  },
  backgroundImagesDisplay: {
    width: '100%',
    // marginBottom: 20,
    height: 200,
  },
  timeDisplay: {
    display: 'flex',
    flexDirection: 'row',
  },
  imageHeader: {
    position: 'absolute',
    left: 10,
    bottom: 0,
  },
});
