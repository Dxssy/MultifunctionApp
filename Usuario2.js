import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import WebView from 'react-native-webview';
export default class Usuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  toggleOpen = () => {
    this.setState({open: !this.state.open});
  };


  drawerContent = () => {
    return (
      <View style={styles.animatedBox}>
        <Text>Bievenido {this.props.route.params.nombre}</Text>
        <TouchableOpacity onPress={this.toggleOpen}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
  
    return (
      <>
        <View style={styles.container}>
          <MenuDrawer
            open={this.state.open}
            position={'left'}
            drawerContent={this.drawerContent()}
            drawerPercentage={45}
            animationTime={250}
            overlay={true}
            opacity={0.4}>
            <View style={styles.body}>
              <TouchableOpacity onPress={this.toggleOpen}>
                <Text>Open</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginLeft: 0,
                backgroundColor: 'white',
                borderWidth: 0,
                marginRight: 0,
                marginTop: 12,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 28,
                  fontWeight: 'bold',
                  color: 'black',
                }}>
                Django Music
              </Text>
            </View>
            <WebView  source={{uri:'https://es.jango.com/'}}
            onLoad={console.log('youtube loaded')}>
            </WebView>
          </MenuDrawer>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    zIndex: 0,
  },
  animatedBox: {
    flex: 1,
    backgroundColor: '#38C8EC',
    padding: 10,
  },
  body: {
    width: 50,
    backgroundColor: '#F04812',
  },
});
