import * as React from 'react';
import ScrollableHeader from './ScrollableHeader';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Dimensions,
} from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import {createDrawerNavigator} from '@react-navigation/drawer';
// import {NavigationContainer} from '@react-navigation/native';
import {
  Container,
  Header,
  Title,
  Left,
  Right,
  Icon,
  Body,
  Content,
  Button,
  Text,
  Card,
  CardItem,
  Tabs,
  Tab,
} from 'native-base';
import NewsImageDisplay from './NewsImageDisplay';
import TopNewsDisplay from './TopNewsDisplay';
export default function HomeScreen({navigation}) {
  return (
    <Container>
      <Header style={styles.headerStyles}>
        <Left />
        <Body>
          <Image source={require('../../assets/images/logo.png')} />
        </Body>
        <Right>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={() => navigation.openDrawer()}>
            <Icon name="menu" style={styles.IconStyle} />
          </TouchableOpacity>
        </Right>
      </Header>
      <View style={styles.MainScrolling}>
        <ImageBackground
          source={require('../../assets/images/adv.png')}
          style={styles.backimages}>
          <ScrollView>
            <View style={styles.headerTopics}>
              <ScrollableHeader navigation={navigation} />
            </View>
            <View style={styles.contentDisplay}>
              <View style={styles.contentModifierDisplay}>
                <View style={{backgroundColor: '#fff'}}>
                  <NewsImageDisplay />
                </View>
              </View>
            </View>
            <View style={styles.contentDisplayTop}>
              <View style={styles.contentModifierDisplay}>
                <View style={{backgroundColor: '#fff'}}>
                  <NewsImageDisplay />
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>
      {/* <Content style={styles.MainCOntainer}>
        <ScrollView>
          <View style={styles.headerTopics}>
            <ScrollableHeader navigation={navigation} />
          </View>
          <View style={styles.contentDisplay}>
            <View style={styles.contentModifierDisplay}>
              <Card>
                <NewsImageDisplay />
              </Card>
            </View>
          </View>
        </ScrollView>
      </Content> */}
    </Container>
  );
}

const styles = StyleSheet.create({
  headerStyles: {
    backgroundColor: '#fff',
  },
  MainScrolling: {
    width: '100%',
    height: '100%',
  },
  backimages: {
    // flex: 1,
    // marginLeft: 10,
    width: '100%',
    // display: 'flex',

    // width: Dimensions.get('window').width, //for full screen
    // height: Dimensions.get('window').height, //for full screen
  },
  cardStyling: {
    width: Dimensions.get('window').width,
  },
  MainCOntainer: {
    width: '100%',
    // zIndex: 10,
    height: '100%',
  },
  scrollview: {
    backgroundColor: 'transparent',
  },
  // containter: {
  //   zIndex: 1,
  //   width: Dimensions.get('window').width, //for full screen
  //   height: Dimensions.get('window').height, //for full screen
  // },
  fixed: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imagebacTest: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -2,
    width: Dimensions.get('window').width, //for full screen
    height: Dimensions.get('window').height, //for full screen
  },
  IconStyle: {
    // width: '100%',
    // height: '100%',
    // flex: 1,
    // fontSize: 30,
    // height: 40,
    // width: 300,
  },
  buttonStyles: {
    // height: 40,
    // width: 90,
  },
  headerTopics: {
    width: '100%',

    height: 50,
    backgroundColor: '#000',
  },
  textStyle: {
    color: '#fff',
  },
  contentDisplay: {
    width: '100%',
    zIndex: -10,
    display: 'flex',

    marginBottom: Dimensions.get('window').height,
    backgroundColor: 'transparent',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  contentDisplayTop: {
    width: '100%',
    // zIndex: -10,
    display: 'flex',
    // marginTop: '60%',
    backgroundColor: 'transparent',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  contentModifierDisplay: {
    width: '100%',
  },
});
