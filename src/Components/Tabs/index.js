import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  TabsContainer, TabItem, Header, Title,
} from './styles';

const Tabs = () => (
  <TabsContainer>
    <TabItem>
      <Header>
        <Icon name="featured-play-list" size={25} color="#00cc00" />
      </Header>
      <Title>Recarga Cartão Pré-Pago</Title>
    </TabItem>
    <TabItem>
      <Header>
        <Icon name="account-balance" size={25} color="#00cc00" />
      </Header>
      <Title>Transferência bancária</Title>
    </TabItem>
    <TabItem>
      <Header>
        <Icon name="monetization-on" size={25} color="#00cc00" />
      </Header>
      <Title>Depositar dinheiro</Title>
    </TabItem>
    <TabItem>
      <Header>
        <Icon name="filter-center-focus" size={25} color="#00cc00" />
      </Header>
      <Title>Pagar Contas</Title>
    </TabItem>
    <TabItem>
      <Header>
        <Icon name="smartphone" size={25} color="#00cc00" />
      </Header>
      <Title>Recarga Celular</Title>
    </TabItem>
    <TabItem>
      <Header>
        <Icon name="autorenew" size={25} color="#00cc00" />
      </Header>
      <Title>Transferir Para Contatos</Title>
    </TabItem>
    <TabItem>
      <Header>
        <Icon name="crop-free" size={25} color="#00cc00" />
      </Header>
      <Title>Aponte e Pag (QR Code)</Title>
    </TabItem>
    <TabItem>
      <Header>
        <Icon name="attach-money" size={25} color="#00cc00" />
      </Header>
      <Title>Portabilidade de Salário</Title>
    </TabItem>
    <TabItem>
      <Header>
        <Icon name="chat" size={25} color="#00cc00" />
      </Header>
      <Title>Atendimento via Chat</Title>
    </TabItem>
  </TabsContainer>
);

export default Tabs;
