import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React, {Component} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import USUARIO from './Usuario';
import USUARIO1 from './Usuario1';
import USUARIO2 from './Usuario2';

export default class ManejoTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const Tab = createMaterialBottomTabNavigator();

    return (
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#3e2465"
        barStyle={{backgroundColor: 'tomato'}}>
        <Tab.Screen
          name="Imagenes"
          component={USUARIO}
          initialParams={{varnombre: this.props.route.params.nombre}}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="image" color={'red'} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Video"
          component={USUARIO1}
          initialParams={{varnombre: this.props.route.params.nombre}}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="video" color={'red'} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Audio"
          component={USUARIO2}
          initialParams={{varnombre: this.props.route.params.nombre}}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="music" color={'red'} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }
}
