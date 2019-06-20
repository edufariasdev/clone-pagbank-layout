import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Main from '~/pages/Main';
import './config/configStatusBar';

const Routes = createAppContainer(createBottomTabNavigator({
  Main: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />,
      tabBarOptions: ({
        activeTintColor: '#73b743',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 20,
        },
      }),
    },
  },

  Extrato: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: 'Extrato',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={25} color={tintColor} />,
      tabBarOptions: ({
        activeTintColor: '#73b743',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 20,
        },
      }),
    },

  },
  Vendas: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: 'Vendas',
      tabBarIcon: ({ tintColor }) => <Icon name="store" size={25} color={tintColor} />,
      tabBarOptions: ({
        activeTintColor: '#73b743',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 20,
        },
      }),
    },
  },
  Cartões: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: 'Cartões',
      tabBarIcon: ({ tintColor }) => <Icon name="credit-card" size={25} color={tintColor} />,
      tabBarOptions: ({
        activeTintColor: '#73b743',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 20,
        },
      }),
    },
  },
  Opções: {
    screen: Main,
    navigationOptions: {
      tabBarLabel: 'Opções',
      tabBarIcon: ({ tintColor }) => <Icon name="linear-scale" size={25} color={tintColor} />,
      tabBarOptions: ({
        activeTintColor: '#73b743',
        inactiveTintColor: 'gray',
        borderColor: '#FFFFFF',
        style: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
          elevation: 20,
        },
      }),
    },
  },
}));

export default Routes;
