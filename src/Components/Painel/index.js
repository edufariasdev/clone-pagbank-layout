import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container, Title, GroupDescription, Description, Foorter, FooterSub, FooterTitle, FooterDesctption,
  Header, HeaderTitle, HeaderBank, HeaderAgen,
} from './styles';


const Painel = ({ teste }) => (
  <Container>
    <Title>Saldo disponível</Title>
    <GroupDescription>
      <Description>R$ 100.000,00</Description>
      <Icon name="visibility" size={25} color="#FFF" />
    </GroupDescription>
    <Foorter>
      <FooterSub>
        <FooterTitle>Bloqueado</FooterTitle>
        <FooterDesctption>R$ 0,00</FooterDesctption>
      </FooterSub>
      <FooterSub>
        <FooterTitle>A receber</FooterTitle>
        <FooterDesctption>R$ 0,00</FooterDesctption>
      </FooterSub>
      <Icon name="error-outline" size={20} color="#fff" />
    </Foorter>

  </Container>
);
export default Painel;


/** <Header>
      <HeaderTitle>Olá, Eduardo {teste}</HeaderTitle>
      <HeaderBank>Banco 290 - PagSeguro Internet S.A.</HeaderBank>
      <HeaderAgen>Ag.0001 | Conta 021111101-1</HeaderAgen>
    </Header> */
