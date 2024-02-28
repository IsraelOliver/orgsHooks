import React from "react";
import { TouchableOpacity, Image, StyleSheet } from "react-native";

import estrela from '../assets/estrela.png'
import estrelaCinza from '../assets/estrelaCinza.png'

export default function Estrela({
    onPress, 
    desabilitada = true,
    preenchida,
    grande = false
} : any) {

  const estilos = estilosFuncao(grande);
  
  const getImagem = () => {
    if (preenchida) {
      return estrela;
    }
    return estrelaCinza
  };
  
  return (
    <TouchableOpacity
          onPress={onPress}
          disabled={desabilitada}
    >
      <Image style={estilos.estrela} source={getImagem()}/>
    </TouchableOpacity>
  )
}

const estilosFuncao = (grande: any) => StyleSheet.create({
  estrela: {
    width: grande ? 28 : 14,
    height: grande ? 28 : 14,
    marginRight: 2
  }
});