import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Data from '../../fakedata.json';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
export default class ScrollableHeader extends Component {
  render() {
    return (
      <View style={{width: '100%', height: 300}}>
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
                  <View style={styles.headerTopics}>
                    <Text style={styles.headertext}>{items.TopHeade}</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scroableheader: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headertext: {
    color: '#fff',
    fontSize: 18,
  },
  headerTopics: {
    width: 100,
    height: '100%',
    justifyContent: 'center',
    display: 'flex',
    alignItems: 'center',
  },
});
