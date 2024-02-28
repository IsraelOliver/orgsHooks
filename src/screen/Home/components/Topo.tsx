import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import logo from '../../../assets/logo.png'

import { carregaTopo } from '../../../service/carregaDados';

class Topo extends React.Component {
  state = {
    topo: {
      boasVindas: '',
      legenda: '',
    }
  }

  atualizaTopo() {
    const retorno = carregaTopo();
    this.setState({ topo: retorno })
  }

  componentDidMount() {
    this.atualizaTopo();
  }

  render() {
    return (
      <View style={styles.topo}>
        <Image source={logo} style={styles.image}/>
        <Text style={styles.boasVindas}>{ this.state.topo.boasVindas }</Text>
        <Text style={styles.legenda}>{ this.state.topo.legenda }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  topo: {
    backgroundColor: '#efefef',
    padding: 16,
  },

  image: {
    width: 70,
    height: 28,
  },

  boasVindas: {
    marginTop: 24,
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: '#464646'
  },

  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: '#a3a3a3'
  }
})

export default Topo;