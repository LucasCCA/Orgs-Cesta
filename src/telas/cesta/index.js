import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Topo from "./componentes/Topo";
import Detalhes from "./componentes/Detalhes";
import Item from "./componentes/Item";
import Texto from "../../componentes/Texto";

export default function Cesta({ topo, detalhes, itens }) {
  return (
    <FlatList
      data={itens.lista}
      keyExtractor={({ nome }) => nome}
      renderItem={Item}
      ListHeaderComponent={() => (
        <>
          <Topo {...topo} />
          <View style={estilos.cesta}>
            <Detalhes {...detalhes} />
            <Texto style={estilos.titulo}>{itens.titulo}</Texto>
          </View>
        </>
      )}
    />
  );
}

const estilos = StyleSheet.create({
  titulo: {
    color: "#464646",
    fontWeight: "bold",
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
