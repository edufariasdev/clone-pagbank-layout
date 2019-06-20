import React from 'react';


import {
  Container, HeaderMenu, Title, Description,
} from './styles';
import Tabs from '../Tabs';

const Menu = () => (
  <Container>
    <HeaderMenu>
      <Title>O que deseja fazer ?</Title>
      <Description>Veja os beneficios</Description>
    </HeaderMenu>
    <Tabs />

  </Container>
);


export default Menu;
