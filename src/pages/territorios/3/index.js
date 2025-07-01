import { StatusBar } from 'expo-status-bar';
import { Text, View, Modal, Pressable, Image, FlatList, ImageBackground, ScrollView} from 'react-native';
import { useState } from "react";
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const animais = [
  {img: require('../../../../assets/Mamiferos botão.png'), 
    foto: require('../../../../assets/Mamiferos real.jpg'),
    nome: 'Mamíferos do Cerrado',
    desc: 'O Cerrado abriga uma grande diversidade de mamíferos adaptados ao clima seco e às savanas abertas. Estima-se que mais de 250 espécies vivam nesse bioma, desde pequenos roedores até grandes carnívoros. Muitos têm hábitos noturnos e cores discretas para se camuflarem. Espécies emblemáticas incluem o lobo-guará, a anta, o tamanduá-bandeira e o tatu-canastra, todos bem adaptados às planícies e matas do Cerrado.',
    habitos: 'Os mamíferos do Cerrado apresentam hábitos variados. Algumas espécies são solitárias, como o lobo-guará, enquanto outras vivem em grupos, como os macacos-prego. Para enfrentar o calor e a seca, muitos são ativos no início da manhã ou à noite. Alimentam-se de frutos, raízes, insetos, pequenos animais ou carniça, dependendo da espécie. Muitos são importantes dispersores de sementes, ajudando na regeneração da vegetação.',
    reproducao: 'A reprodução geralmente ocorre nas épocas mais chuvosas, quando há maior disponibilidade de alimento e abrigo. A gestação varia conforme a espécie, e os filhotes nascem em tocas, ninhos ou em áreas abrigadas. Em muitos casos, as fêmeas cuidam sozinhas dos filhotes até que se tornem independentes. Espécies como a anta e o tatu possuem um número pequeno de crias por vez, o que torna sua recuperação mais lenta em caso de declínio populacional.',
    conservacao: 'A destruição do Cerrado, causada pelo avanço da agropecuária, queimadas e fragmentação de habitats, ameaça muitas espécies de mamíferos. O lobo-guará e o tamanduá-bandeira, por exemplo, estão classificados como "quase ameaçados". A criação de reservas naturais, corredores ecológicos e ações de educação ambiental são medidas essenciais para conservar a fauna do Cerrado e garantir o equilíbrio do bioma.',
  },

  {img: require('../../../../assets/Urso oculos botão.png'), 
    foto: require('../../../../assets/Urso oculos real.jpg'),
    nome: 'Urso-de-Óculos',
    desc: 'O urso-de-óculos (Tremarctos ornatus), também conhecido como urso-andino, é o único urso nativo da América do Sul. Possui pelagem espessa, geralmente preta ou marrom-escura, com manchas claras ao redor dos olhos que lembram óculos — daí seu nome. Essas manchas são únicas em cada indivíduo. É de porte médio entre os ursos, com machos maiores que fêmeas, podendo pesar até 175 kg.',
    habitos: 'É uma espécie solitária e de hábitos predominantemente diurnos. Vive em florestas úmidas e regiões montanhosas dos Andes, em países como Venezuela, Colômbia, Equador, Peru e Bolívia. Apesar de ser classificado como carnívoro, tem dieta majoritariamente herbívora, alimentando-se de frutos, folhas, brotos, bromélias, e ocasionalmente de pequenos animais. Escala árvores com facilidade, onde busca alimento e abrigo.',
    reproducao: 'A reprodução pode ocorrer em diferentes épocas do ano, dependendo da região. Após um período de gestação de cerca de 6 a 8 meses, nascem de um a três filhotes, geralmente em cavernas ou ocos de árvores. A mãe cuida sozinha dos filhotes, que permanecem com ela por até dois anos antes de se tornarem independentes.',
    conservacao: 'O urso-de-óculos está classificado como "Vulnerável" pela IUCN. A principal ameaça é a destruição e fragmentação de seu habitat devido à agricultura, mineração e expansão urbana. Também sofre com a caça ilegal. Por ser uma espécie-chave nos ecossistemas andinos, sua proteção beneficia todo o ambiente onde vive. Diversos programas de conservação vêm sendo realizados, incluindo criação de áreas protegidas e ações de educação ambiental com as comunidades locais.',
  },

  {img: require('../../../../assets/Dinossauros botão.png'), 
    foto: require('../../../../assets/Dinossauros real.jpg'),
    nome: 'Dinossauros',
    desc: 'Os dinossauros foram um grupo de répteis que dominaram a Terra por mais de 160 milhões de anos, do período Triássico ao fim do Cretáceo. Variavam enormemente em tamanho, forma e hábitos: desde pequenos carnívoros ágeis até os gigantes herbívoros como o Argentinosaurus. Embora extintos, seus parentes vivos mais próximos são as aves atuais. Seus esqueletos eram adaptados para diferentes modos de locomoção — bípedes ou quadrúpedes — e muitos tinham escamas, penas ou cristas.',
    habitos: 'Os hábitos dos dinossauros variavam de acordo com a espécie. Alguns eram predadores, como o famoso Tyrannosaurus rex, enquanto outros eram pacíficos herbívoros que viviam em bandos, como o Triceratops. Eles ocupavam diversos ambientes, desde florestas tropicais até planícies abertas. Alguns podiam correr, nadar ou até planejar voos curtos. Pesquisas indicam que muitos tinham comportamentos sociais complexos e cuidavam de seus ninhos e filhotes.',
    reproducao: 'Todos os dinossauros botavam ovos, geralmente em ninhos escavados no solo. Alguns deixavam os ovos para incubar naturalmente, mas há evidências de que certos grupos, como os terópodes, protegiam os ninhos e até alimentavam os filhotes. Os ovos variavam em tamanho e forma, dependendo da espécie. A presença de ninhos fossilizados com embriões contribuiu muito para o entendimento da reprodução desses animais.',
    conservacao: 'Apesar de extintos há cerca de 66 milhões de anos, provavelmente por uma combinação de mudanças climáticas e o impacto de um asteroide, os dinossauros ainda despertam enorme interesse científico e cultural. A paleontologia estuda seus fósseis para entender a evolução da vida na Terra. Museus, livros, filmes e jogos mantêm viva a memória desses seres impressionantes, enquanto novas descobertas continuam a revelar mais sobre sua diversidade e comportamento.',
  },
    
];
export default function Territorio3() {
  const [cont, setCont] = useState(0);
  const navigation = useNavigation();
  const [visivel, setVisivel] = useState(false);
  const Exibir = (index) => {
    setCont(index);
    setVisivel(true);
  };
  return (
    <ImageBackground source={require('../../../../assets/Fundo T3.png')} style={styles.container}>

      <View style={styles.menu}>
        <View style={styles.botao}>
          <Pressable onPress={() => navigation.navigate('Home')} style={styles.voltarA}><Image resizeMode="contain" style={styles.voltar} source={require('../../../../assets/Voltar.png')}></Image></Pressable>
        </View>

        <View style={styles.titulo}>
          <Image resizeMode="contain" style={styles.tituloP} source={require('../../../../assets/Territorio 3 titulo.png')}/>
        </View>

        <View style={styles.botao}>
          
        </View>
      </View>

      

      <FlatList style={styles.botoes} data={animais} renderItem={({ item, index}) => (

        <Animatable.View duration={1000} animation='fadeInUpBig' style={styles.alinhamentoA}>
          <Pressable style={styles.botaoP} onPress={() => Exibir(index)}>
            <Image style={styles.botaoA} resizeMode="contain" source={item.img}/>
          </Pressable>
        </Animatable.View>

      )}
      keyExtractor={(item) => item.nome}/>
      

      <Modal visible={visivel} animationType='slide'>
        <View style={styles.modal}>
          <View style={styles.fotoB}>
            <Image resizeMode="contain" style={styles.fotoA} source={animais[cont].foto}/>
          </View>
          
          <ScrollView contentContainerStyle={{ alignItems: 'center', paddingBottom: 30 }} style={styles.textos}>
            <Text style={styles.tituloMoN}>{animais[cont].nome}</Text>
            <Text style={styles.texto}>{animais[cont].desc}</Text>
            <Text style={styles.tituloMo}>Habitos</Text>
            <Text style={styles.texto}>{animais[cont].habitos}</Text>
            <Text style={styles.tituloMo}>Reprodução</Text>
            <Text style={styles.texto}>{animais[cont].reproducao}</Text>
            <Text style={styles.tituloMo}>Conservação</Text>
            <Text style={styles.texto}>{animais[cont].conservacao}</Text>
          </ScrollView>

          <Animatable.View style={styles.voltarB}>
            <Pressable style={styles.voltarT} onPress={() => setVisivel(false)}>
              <Image resizeMode="contain" style={styles.voltarC} source={require('../../../../assets/VoltarT3.png')}/>
            </Pressable>
          </Animatable.View>
        </View>
      </Modal>

      <StatusBar style="auto" hidden={true}/>
    </ImageBackground>
  );
}