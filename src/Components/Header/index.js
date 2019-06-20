import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Top, Logo, Icone,
} from './styles';

export default class index extends Component {
  state = {
    name: 'keyboard-arrow-down',
  }

  HandlesonPress = () => {
    if (this.state.name === 'keyboard-arrow-down') {
      this.setState({ name: 'keyboard-arrow-up' });
    } else {
      this.setState({ name: 'keyboard-arrow-down' });
    }
  }

  render() {
    return (
      <Container>
        <Top>
          <Logo>pagBank</Logo>
          <Icone>
            <Icon name={this.state.name} size={26} color="#fff" onPress={this.HandlesonPress} />
          </Icone>
          <Icon style={styles.Icone} name="notifications-none" size={30} color="#fff" />
        </Top>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Icone: {
    marginTop: 10,
    marginRight: 15,
  },
});
