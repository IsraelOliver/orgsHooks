import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";

import Produtor from "./Produtor";
// import { carregaProdutores } from "../../../service/carregaDados";
import useProdutores from "../../../hooks/useProdutores";


export default function Produtores({ topo: Topo }: any) {
  // HOOK SIMPLIFICADO
  const [titulo, lista] = useProdutores();

  // HOOK FEIO
  // const [titulo, setTitulo] = useState('');
  // const [lista, setLista] = React.useState<any[]>([]);
  
  // useEffect(() => {
  //   const retorno = carregaProdutores();
  //   setTitulo(retorno.titulo);
  //   setLista(retorno.lista);
  // }, []);

  const headerList = () => {
    return (
      <>
        <Topo />
        <Text style={estilos.titulo}>{titulo}</Text>
      </>
    )
  }

  return (
    <FlatList 
      data={lista}
      keyExtractor={({nome}) => nome}
      renderItem={({ item }) => <Produtor {...item}/>}
      ListHeaderComponent={headerList}
    />
  )
}

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 20,
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    fontWeight: 'bold',
    color: '#464646'
  }
})