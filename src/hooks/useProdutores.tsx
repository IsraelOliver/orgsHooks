import React from "react";
import { useState, useEffect } from "react";

import { carregaProdutores } from "../service/carregaDados";


export default function useProdutores() {
  const [titulo, setTitulo] = useState('');
  const [lista, setLista] = React.useState<any[]>([]);

  useEffect(() => {
    const retorno = carregaProdutores();
    retorno.lista.sort(
      (produtor1, produtor2) => produtor1.distancia - produtor2.distancia,
    );
    setTitulo(retorno.titulo);
    setLista(retorno.lista);
  }, []);

  return [titulo, lista]
}