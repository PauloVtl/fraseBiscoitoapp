import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function App() {
  const [img, setImg] = useState(require('./src/biscoito.png'));
  const [textoFrase, setTextoFrase] = useState('');

  let frases = [
    "Levanta, sacode a poeira e dá a volta por cima.",
    "Respire fundo e fique atento às surpresas deliciosas que a vida preparou para você.",
    "Nem todos os dias são bons, mas há algo bom em cada dia.",
    "Respeite sua mente e trate seu corpo com carinho.",
    "Um passo de cada vez. Até meio passo serve. Siga firme, não há motivo para ter pressa.",
    "Suba o primeiro degrau com fé. Não é necessário ver toda a escada. Apenas dê o primeiro passo.",
    "Toda manhã você tem duas escolhas: continuar dormindo com seus sonhos ou acordar e persegui-los!",
    "O otimismo é a fé em ação. Nada se pode levar a efeito sem otimismo.",
    "Dentro de você, há uma luz muito forte! Acredite nela e deixe que ela ilumine o seu dia.",
    "Lembre-se que, quando a vida te derrubar, você pode sempre se levantar!",
    "Vamos inventar o amanhã no lugar de se preocupar com o que aconteceu ontem.",
    "As pessoas mais felizes não têm as melhores coisas. Elas sabem fazer o melhor das oportunidades que aparecem em seus caminhos.",
    "Ninguém, além de você, está no controle de sua felicidade. Portanto, ajuste as velas e corrija o rumo.",
    "Você tem que acordar cada manhã com determinação se você pretende ir para a cama com satisfação.",
    "Meta do dia: agradecer.",
    "Pensar em quem compartilha a vida com você é uma das formas mais bonitas de encontrar energia!",
    "Todos os dias são diferentes. Basta observar o que a natureza tem para te oferecer.",
    "Hoje acordei pra viver, levantar e seguir em frente. Porque a vida sempre pede um pouco mais da gente.",
    "Um homem criativo é motivado pelo desejo de alcançar, não pelo desejo de vencer os outros.",
    "Cada segundo é tempo para mudar tudo para sempre.",
    "Não importa a cor do céu, quem faz o dia lindo é você.",
    "A beleza começa quando você decide ser você mesmo(a)",
    "Se quer viver uma vida feliz, amarre-se a um objetivo, não às pessoas ou aos objetos.",
    "Um passo de cada vez e a sua vida pode mudar completamente.",
    "Sorria! Deus acaba de te dar uma nova chance de fazer coisas extraordinárias acontecerem.",
    "Nossas cabeças são redondas para que o pensamento possa mudar de direção.",
    "A primavera chegará, mesmo que ninguém mais saiba seu nome, nem acredite no calendário, nem possua jardim para recebê-la.",
    "Viver é acalentar sonhos e esperanças, fazendo da fé a nossa inspiração maior. É buscar nas pequenas coisas, um grande motivo para ser feliz!",
    "A coragem está um passo à frente do medo.",
    "Eu sei que não se pode viver só de esperança, mas sem esperança não vale a pena viver."
  ];

  function quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * frases.length)

    setTextoFrase(' " ' + frases[numeroAleatorio] + ' " ');
    setImg(require('./src/biscoitoAberto.png'));
  }

  function reiniciar() {
    setTextoFrase('');
    setImg(require('./src/biscoito.png'));
  }


  return (
    <View style={styles.container}>

      <Image
        source={img}
        style={styles.img}
      />

      <Text style={styles.textofrase}>{textoFrase}</Text>

      <TouchableOpacity style={styles.botao} onPress={quebraBiscoito}>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Quebrar biscoito</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { borderColor: '#121212', marginTop: 15 }]} onPress={reiniciar}>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, { color: '#121212' }]}>Reiniciar biscoito</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 250,
    height: 250,
  },
  textofrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 20,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
});


export default App;