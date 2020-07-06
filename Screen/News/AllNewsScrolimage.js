import React, {Component} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
} from 'react-native';
import ShareLogo from '../../assets/images/share.svg';
import Data from '../../fakedata.json';
import {Icon} from 'native-base';
// import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
export default class AllNewsScrolimage extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.galleryandNews}>
          <View style={styles.AllNewsMainContainer}>
            <ScrollView horizontal={true}>
              <View style={styles.scroableheader}>
                {Data.NewsData.map((items) => {
                  return (
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('NewIndex', {
                          screen: 'NewData',
                        })
                      }>
                      <View style={styles.backImageContainer}>
                        <ImageBackground
                          style={styles.backgroundImagesDisplay}
                          source={require('../../assets/images/topimage.png')}>
                          <View style={styles.imageHeadingContainer}>
                            <View style={styles.buttonStyling}>
                              <Text style={styles.buttonText}>
                                बिग्यान परबिधि
                              </Text>
                            </View>
                            <View>
                              <Text style={styles.timetext}>
                                {items.imaheHeader}
                              </Text>
                            </View>

                            <View style={styles.timeDisplayLogo}>
                              <View>
                                <Text style={styles.timetext}>
                                  {items.time}
                                </Text>
                              </View>
                              <View styles={styles.sghareLogo}>
                                <Icon
                                  name="share"
                                  style={styles.logoSVgPosition}
                                />
                                {/* <ShareLogo
                              style={styles.logoSVgPosition}
                              size={300}
                            /> */}
                              </View>
                            </View>
                          </View>
                        </ImageBackground>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </ScrollView>
          </View>
          <View style={styles.AllNewsLOwerCOntainer}>
            <View style={styles.LowerImgeNews}>
              <View style={styles.headerLowerImage}>
                <View>
                  <Text style={styles.lowerHeader}>
                    शिक्षा, विज्ञान तथा प्रविधिमन्त्री गिरिराजमणि पोखरेलले
                    आइतबार शिक्षा तथा
                  </Text>
                </View>
                <View style={styles.headingWithLogo}>
                  <View>
                    <Text style={styles.dateStyling}>june 4,2020</Text>
                  </View>
                  <View>
                    <Icon name="share" style={styles.logoSVgPositionLower} />
                  </View>
                </View>
              </View>
              <View style={styles.ImageSizingSylng}>
                <Image
                  style={styles.backgroundImagesDisplay}
                  source={require('../../assets/images/topimage.png')}></Image>
              </View>
              <View style={styles.detailNewsWithImages}>
                <Text style={styles.textSTylingLowerImage}>
                  ११ असार, बुटवल । पाल्पामा बिहीबार थप ३१ जनामा कोरोना भाइरस
                  संक्रमण पुष्टि भएको छ । प्रदेश जनस्वास्थ्य प्रयोगशाला भैरहवामा
                  गरिएको परीक्षणमा ३१ जना संक्रमित थपिएका हुन् । यसअघि भरतपुर
                  अस्पताल चितवनको प्रयोगशालामा गरिएको परीक्षणमा पाल्पाको निस्दी
                  गाउँपालिकाका ९३ जनामा कोरोना पुष्टिको थियो ।
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  galleryandNews: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  scroableheader: {
    backgroundColor: '#fff',
    // backgroundColor: 'transparent',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  lowerHeader: {
    fontSize: 22,
  },
  LowerImgeNews: {
    display: 'flex',
    width: '100%',
    height: '40%',
    // backgroundColor: 'transparent',
    // justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: Dimensions.get('window').height,
  },
  detailNewsWithImages: {
    display: 'flex',
    justifyContent: 'center',
    width: '95%',
    marginTop: 10,

    color: '#9E9E9E',
  },
  textSTylingLowerImage: {
    color: '#9E9E9E',
    fontSize: 18,
  },
  AllNewsLOwerCOntainer: {
    // backgroundColor: '#fff',
    // flex: 1,
    width: '100%',
    // height: '100%',
    height: Dimensions.get('window').height,
    marginTop: 40,
  },
  ImageOuterCOntainer: {
    width: '100%',
    height: '100%',
  },
  ImageSizingSylng: {
    width: '100%',
    marginTop: '10%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonStyling: {
    backgroundColor: 'red',
    width: '30%',
    height: '25%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  timeDisplayLogo: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
  },
  sghareLogo: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: 'green',
    justifyContent: 'space-between',
    // left: 300,
  },
  logoSVgPosition: {
    display: 'flex',
    marginStart: 200,
    color: '#fff',
    // fontSize: 40,
    // width: 200,
    // height: 200,
  },
  logoSVgPositionLower: {
    display: 'flex',
    marginStart: 220,
    color: '#7C7C7C',
    // fontSize: 40,
    // width: 200,
    // height: 200,
  },
  dateStyling: {
    fontSize: 18,
    color: '#9E9E9E',
  },
  headerLowerImage: {
    display: 'flex',
    justifyContent: 'center',
    width: '95%',
    // backgroundColor: 'red',
  },
  backImageContainer: {
    // position: 'relative',
    // backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    // margin: 20,
    height: '100%',
  },
  AllNewsMainContainer: {
    marginTop: '10%',
    height: 300,
  },
  headertext: {
    // flex: 1,
    color: '#fff',
    fontSize: 18,
  },
  timetext: {
    color: '#fff',
    fontSize: 20,

    // bottom: 0,
  },
  backgroundImagesDisplay: {
    // position: 'relative',
    width: '95%',
    // margin: 20,
    // borderRadius: 50,
    height: '100%',
  },
  headerTopics: {
    // width: 100,
    height: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },

  headingWithLogo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageHeadingContainer: {
    width: '95%',
    display: 'flex',
    justifyContent: 'flex-end',
    // backgroundColor: 'red',
    marginTop: 'auto',
    // position: 'absolute',
    marginLeft: 10,
    // bottom: 0,
    // top: 0,
  },
});
