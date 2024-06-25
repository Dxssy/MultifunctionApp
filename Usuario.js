import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView,} from 'react-native';
import MenuDrawer from 'react-native-side-drawer';
import {Image} from '@rneui/base';
export default class Usuario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      search: '',
      api_key: '',
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
                backgroundColor: '',
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
                Fondos
              </Text>
            </View>
            <ScrollView>
            <View>
              <Image
                source={require('./fotos/samurai.jpg')}
                style={{width: 400, height: 400}}
              />
              <Image
                source={require('./fotos/samurai2.jpg')}
                style={{width: 400, height: 400, marginTop: 9}}
              />
              <Image
                source={require('./fotos/samurai3.jpg')}
                style={{width: 400, height: 400, marginTop: 9}}
              />
              <Image
                source={require('./fotos/azteca.jpg')}
                style={{width: 400, height: 650, marginTop: 9}}
              />
               <Image
                source={require('./fotos/azteca2.jpg')}
                style={{width: 400, height: 650, marginTop: 9}}
              />
               <Image
                source={require('./fotos/azteca3.jpg')}
                style={{width: 400, height: 400, marginTop: 9}}
              />
               <Image
                source={require('./fotos/manda.jpg')}
                style={{width: 400, height: 400, marginTop: 9}}
              />
              <Image
                source={require('./fotos/manda2.jpg')}
                style={{width: 400, height: 400, marginTop: 9}}
              />
              <Image
                source={require('./fotos/tiger.webp')}
                style={{width: 400, height: 400, marginTop: 9}}
              />
              <Image
                source={require('./fotos/tiger2.jpg')}
                style={{width: 400, height: 400, marginTop: 9}}
              />
            </View>
            </ScrollView>
          </MenuDrawer>
        </View>
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',

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

const otro = StyleSheet.create({
  usar: {
    flex: 1,
    width: 400,
    height: 800,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 32,
  },
});
