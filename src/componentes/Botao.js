import { TouchableOpacity, StyleSheet } from "react-native";

import Texto from "./Texto";

export default function Botao({ texto, onPress }) {
  return (
    <TouchableOpacity style={estilos.botao} onPress={onPress}>
      <Texto style={estilos.textoBotao}>{texto}</Texto>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  botao: {
    marginTop: 16,
    backgroundColor: "#2a9f85",
    paddingVertical: 16,
    borderRadius: 6,
  },
  textoBotao: {
    textAlign: "center",
    color: "#ffffff",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
});
