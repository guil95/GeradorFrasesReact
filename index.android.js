//Import
import React from 'react';
import {Text, AppRegistry, View, Image, TouchableOpacity, Alert} from 'react-native';

//Formatações
const Estilos = {
    principal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    botao: {
      backgroundColor: '#538530',
      paddingVertical: 5,
      paddingHorizontal: 10,
      marginTop: 20
    },
    textoBotao: {
      color: '#FFF',
      fontSize: 16,
      fontWeight: '200'
    }
};

const gerarFrase = () => {
    var numeroAleatorio = Math.random();

    numeroAleatorio = Math.floor(numeroAleatorio * 5);

    var frases = [];
    frases[0] = "O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.";
    frases[1] = "Sorria quando constatar que o dia é triste. Certamente o mundo voltará a ser alegre com o seu sorriso.";
    frases[2] = "Apenas seja feliz, e, se você não conseguir ficar feliz, faça coisas que o deixem feliz. Ou fique sem fazer nada com as pessoas que te fazem feliz.";
    frases[3] = "Não deixe que as pessoas te façam desistir daquilo que você mais quer na vida. Acredite. Lute. Conquiste. E acima de tudo, seja feliz!";
    frases[4] = "Se a sua vida for a melhor coisa que já te aconteceu, acredite, você tem mais sorte do que pode imaginar.";

    fraseSorteada = frases[numeroAleatorio];
    Alert.alert('',fraseSorteada)
}

//Criar componente
const App = () => {

  const {principal, botao, textoBotao} = Estilos;

  return(
    <View style={principal}>
        <Image 
          source={
            require('./imgs/logo.png')
          }
         />
         <TouchableOpacity 
         style={botao}
         onPress = {gerarFrase}

         >
            <Text style={textoBotao}>Gerar Nova Frase</Text>
         </TouchableOpacity >
    </View>
    );
};

//Renderizar para o dispositivo

AppRegistry.registerComponent('frases', () => App);