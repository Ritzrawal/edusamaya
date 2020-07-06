import * as React from 'react';
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {Container, Header, Title, Left, Right, Icon, Body} from 'native-base';
import Logo from '../../assets/images/menu.svg';
export default function HeaderPage({navigation}) {
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
            <Logo style={styles.IconStyle} />
          </TouchableOpacity>
        </Right>
      </Header>
    </Container>
  );
}

const styles = StyleSheet.create({
  headerStyles: {
    backgroundColor: '#fff',
    zIndex: 2,
  },
});
