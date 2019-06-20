import React from 'react';
import {
  StyleSheet,
  ScrollView,
} from 'react-native';


import { Container, Body } from './styles';

import Painel from '~/Components/Painel';
import Header from '~/Components/Header';
import Menu from '~/Components/Menu';

const Main = () => (
  <Container>
    <Header />
    <ScrollView>
      <Body>
        <Painel />
        <Menu />
      </Body>
    </ScrollView>
  </Container>
);

export default Main;
