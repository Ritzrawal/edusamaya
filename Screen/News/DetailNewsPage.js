import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {Icon} from 'native-base';
import {ScrollView} from 'react-native-gesture-handler';

export default class DetailNewsPage extends Component {
  render() {
    return (
      <View style={styles.detailNewComponent}>
        <ScrollView>
          <View style={styles.customAddandHeader}>
            <View style={styles.addAndHeader}>
              <View style={styles.addDisplay}>
                <Image
                  style={styles.imageOfAdd}
                  source={require('../../assets/images/adv.png')}
                />
              </View>
              <View style={styles.showCategory}>
                <Text>विज्ञान प्रविधि</Text>
              </View>
              <View style={styles.headerCustomize}>
                <Text style={styles.headerTextStyling}>
                  बुटवलमा विद्यार्थीले बनाए ‘स्मार्ट सेनिटाइजर डिस्पेन्सर’
                </Text>
              </View>
              <View style={styles.logoandDate}>
                <View style={styles.dateViewCustomize}>
                  <Text style={styles.dateTextCustomize}>Jul 2,2020</Text>
                </View>
                <View style={styles.iconStyling}>
                  <Icon name="share" style={styles.logoSVgPosition} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageDisplayCustomize}
              source={require('../../assets/images/topimage.png')}
            />
          </View>
          <View style={styles.paragraphContainer}>
            <View style={styles.loweraddDisplay}>
              <Image
                style={styles.imageOfAdd}
                source={require('../../assets/images/adv.png')}
              />
            </View>
            <View style={styles.detailNews}>
              <Text style={styles.detailNewsText}>
                १० चैत, बुुटवल । कोरोना भाइरस (कोभिड-१९)को महामारीलाई राहत दिन
                बुटवलका विद्यार्थीले ‘स्मार्ट सेनिटाइजर डिस्पेन्सर निर्माण गरेका
                छन् । पाँचजना विद्यार्थीले ३ दिन लगाएर स्मार्ट सेनिटाइजर
                डिस्पेन्सरको निर्माण गरेका हुन् । यसलाई उनीहरुले कोभिड-१९ को
                महामारीलाई राहत दिन निर्मित स्वचालित परियोजना भनेका छन् । तीन
                दिनको मेहनतपछि स्मार्ट सेनिटाइजर डिस्पेन्सरको सफलतापूर्वक
                निर्माण गरिएको समूहका दिनेश वलीले बताए । उनीसँगै दिनेश बस्याल,
                विवेक पौडेल, वसन्त पौडेल, सुजन पौडेल, टेक जोन ट्रेडर्सका
                म्यानेजिङ डाइरेक्टर अनन्त न्यौपाने र ललित राहुल मगरले सेनिटाइजर
                डिस्पेन्सर बनाइका हुन् । खासगरी कोरोनाको संक्रमण हातबाट छिटो
                फैलिने हुनाले उनीहरुले सार्वजनिक स्थानमा सचेतना जगाउँदै निर्माण
                गरिएको स्मार्ट सेनिटाइजर डिस्पेन्सरलाई राख्ने समति जनाएका छन् ।
              </Text>
            </View>
            <View style={styles.hiNewsOuter}>
              <View style={styles.higlightNews}>
                <View style={styles.highlightNewsHeading}>
                  <Text style={styles.highlightText}>
                    मन्त्री पोखरेलका अनुसार विश्वविद्यालय सञ्चालनसम्बन्धी छाता
                    ऐन (उच्च स्तरीय शिक्षा ऐन) को मस्यौदा अर्थ मन्त्रालयबाट
                    स्वीकृत भएर कानुन मन्त्रालयमा गएको छ । कानुन मन्त्रालयले पनि
                    स्वीकृति दिएर मन्त्रिपरिषदमा पुगेपछि संसदमा आउनेछ ।
                  </Text>
                </View>
                <View style={styles.highlightNewsLower}>
                  <View>
                    <Image
                      style={styles.higlightNewsProfileLogo}
                      source={require('../../assets/images/profile.png')}
                    />
                  </View>
                  <View style={styles.higlightNewProfile}>
                    <Text style={styles.profileNameText}>
                      गिरिराजमणि पोखरेल
                    </Text>
                    <Text>विज्ञान तथा प्रविधिमन्त्री</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.lastTextContainer}>
              <Text style={styles.lastNewsTextContainer}>
                सडकमा आवतजावत गर्ने र भिडभाडमा कोरोना संक्रमणबाट लाग्न सक्ने
                भएकाले सेनिटाइजर डिस्पेन्सरको प्रयोग गरे यसबाट हातमा रहेका
                किटाणु मर्ने बुटवलको टेक जोन ट्रेर्डसका म्यानेजिङ डाइरेक्टर
                अनन्त न्यौपानेले बताए । कोरिया नेपाल इन्स्टिच्युट अफ
                टेक्निोलोजिमा का विद्यार्थीहरुको ग्रुपले बनाएको स्मार्ट
                सेनिटाइजर डिस्पेन्सरको सफल परीक्षणसमेत गरिएको छ । यस मेसिनमा
                भरिएको सेनिटाइजर प्रयोग भएपश्चात् सकिएमा मेसिन सञ्चालन गर्ने
                अधिकृतलाई सकिएको सूचना जान्छ र अधिकृत व्यक्तिले सेनिटाइजर
                पुनःभर्नुपर्दछ ।
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  detailNewComponent: {
    flex: 2,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  customAddandHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    width: '100%',
    // height: '100%',
  },
  addAndHeader: {
    width: '95%',
  },
  addDisplay: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    marginTop: 20,
  },
  imageOfAdd: {
    width: '95%',
    height: '100%',
  },
  showCategory: {
    width: 120,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: 'red',
  },
  headerCustomize: {
    width: '100%',
    marginTop: 10,
  },
  headerTextStyling: {
    fontSize: 25,
    color: '#333333',
  },
  logoandDate: {
    width: '100%',
    display: 'flex',
    // flex: 1,
    marginTop: 20,
    // alignSelf: 'center',
    flexDirection: 'row',
  },
  dateViewCustomize: {
    // color: '#9E9E9E',
    // fontSize: 20,
  },
  dateTextCustomize: {
    color: '#9E9E9E',
    fontSize: 18,
  },
  iconStyling: {
    position: 'absolute',
    right: '10%',
    bottom: 0,
  },
  imageContainer: {
    width: '100%',
    height: 200,
  },
  imageDisplayCustomize: {
    width: '100%',
    height: '100%',
  },
  paragraphContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '100%',
    // flex: 1,
  },
  loweraddDisplay: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    height: 80,
  },
  detailNews: {
    flex: 1,
    marginTop: 10,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '0%',
  },
  detailNewsText: {
    fontSize: 18,
    width: '95%',
    alignSelf: 'center',
  },
  hiNewsOuter: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  higlightNews: {
    width: '95%',
    display: 'flex',
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    // height: '65%',
    marginTop: 20,
    borderLeftWidth: 10,
    borderLeftColor: 'red',
  },
  higlightNewProfile: {
    width: '100%',
    marginLeft: 10,
    // backgroundColor: 'green',
  },
  higlightNewsProfileLogo: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
  },
  highlightNewsLower: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
    alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    // height: '100%',
    // backgroundColor: 'red',
  },
  highlightNewsHeading: {
    width: '95%',
    // backgroundColor: 'green',
  },
  highlightText: {
    fontSize: 18,
    color: '#1D1E1F',
    width: '100%',
  },
  lastTextContainer: {
    display: 'flex',
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  lastNewsTextContainer: {
    width: '95%',
  },
  profileNameText: {
    // color: '#0000',
    fontSize: 20,
  },
});
