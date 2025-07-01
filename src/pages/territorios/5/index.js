import { StatusBar } from 'expo-status-bar';
import { Text, View, Modal, Pressable, Image, FlatList, ImageBackground, ScrollView} from 'react-native';
import { useState } from "react";
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const animais = [
  {img: require('../../../../assets/Aguias botão.png'), 
    foto: require('../../../../assets/Aguias real.jpg'),
    nome: 'Aguias',
    desc: 'As águias são aves de rapina de grande porte, pertencentes à família Accipitridae. Possuem um corpo robusto, asas largas e longas, garras afiadas e um bico forte e curvado, adaptado para rasgar a carne de suas presas. A visão das águias é extremamente aguçada — cerca de 4 a 8 vezes mais precisa do que a dos humanos, permitindo identificar presas a grandes distâncias. A coloração da plumagem varia conforme a espécie, indo de tons marrons, dourados e pretos até brancos, como na famosa águia-careca.',
    habitos: 'As águias são predadoras solitárias, exceto durante a época de reprodução. São animais diurnos, com picos de atividade durante as primeiras horas da manhã e o fim da tarde. Vivem em áreas montanhosas, florestas, campos abertos e próximos a lagos ou rios, dependendo da espécie. Caçam principalmente pequenos mamíferos, aves, peixes e répteis. Utilizam suas poderosas garras para capturar presas rapidamente e podem carregá-las em voo. Algumas espécies, como a águia-pescadora, são especialistas em caçar peixes, enquanto outras, como a águia-real, preferem pequenos cervos e lebres.',
    reproducao: 'As águias formam casais monogâmicos, que geralmente permanecem juntos por toda a vida. Constroem ninhos enormes, chamados de poleiros ou ninhos, no alto de árvores ou em penhascos, usando galhos e folhas. A fêmea põe de 1 a 3 ovos, que são incubados por cerca de 35 a 45 dias, dependendo da espécie. Os filhotes nascem indefesos e são alimentados pelos pais até estarem prontos para voar, o que acontece após cerca de 10 a 12 semanas. Normalmente, apenas o filhote mais forte sobrevive se o alimento for escasso.',
    conservacao: 'Embora algumas espécies de águias sejam abundantes, outras estão ameaçadas de extinção devido à perda de habitat, envenenamento por pesticidas e caça ilegal. Espécies como a águia-real e a águia-pescadora estão protegidas por leis ambientais e projetos de conservação que visam preservar seus territórios e garantir sua reprodução. A poluição dos rios e lagos também afeta algumas espécies aquáticas, dificultando a oferta de alimento.',
  },

  {img: require('../../../../assets/Coruja botão.png'), 
    foto: require('../../../../assets/Coruja real.jpg'),
    nome: 'Corujas',
    desc: 'As corujas são aves de rapina noturnas pertencentes à ordem Strigiformes, conhecidas por suas cabeças grandes e arredondadas, olhos frontais fixos e visão extremamente aguçada no escuro. Suas penas são macias e adaptadas para voos silenciosos, com uma coloração que varia de tons acastanhados e cinzentos a brancos, servindo de camuflagem. Possuem bicos curvos e fortes, além de garras afiadas. Os olhos grandes e fixos não se movimentam, mas as corujas conseguem girar o pescoço em até 270° para compensar esse detalhe.',
    habitos: 'As corujas são solitárias e têm hábitos predominantemente noturnos, sendo mais ativas durante a noite e o crepúsculo. Vivem em florestas, campos abertos, regiões montanhosas e áreas urbanas, dependendo da espécie. Alimentam-se de pequenos mamíferos, aves, répteis, insetos e, em algumas espécies, peixes. Caçam de forma discreta, graças a seu voo silencioso e à sua audição apurada, sendo capazes de localizar presas apenas pelo som. Durante o dia, costumam permanecer abrigadas em ocos de árvores, cavernas ou estruturas abandonadas.',
    reproducao: 'As corujas formam casais na época de reprodução e, dependendo da espécie, podem reutilizar ninhos antigos ou pôr ovos diretamente em ocos, buracos ou no solo. A fêmea geralmente põe de 2 a 6 ovos, que são incubados por 25 a 35 dias. Os filhotes nascem cobertos por penugem branca ou cinzenta e são alimentados pelos pais até aprenderem a caçar. Algumas espécies permanecem sob os cuidados dos pais por vários meses após deixarem o ninho.',
    conservacao: 'Embora muitas espécies de corujas ainda sejam comuns, várias estão ameaçadas devido à destruição de habitat, envenenamento por pesticidas, colisões com veículos e crenças populares negativas, que em algumas regiões levam à perseguição desses animais. A educação ambiental e a proteção de áreas naturais são importantes para garantir a preservação dessas aves. Algumas espécies são protegidas por leis ambientais e vivem em áreas de conservação.',
  },

  {img: require('../../../../assets/Gavioes botão.png'), 
    foto: require('../../../../assets/Gavioes real.jpg'),
    nome: 'Gavioes',
    desc: 'Os gaviões são aves de rapina diurnas pertencentes à família Accipitridae, a mesma de águias e falcões. Possuem corpo médio a grande, asas largas e arredondadas e um bico curvado e afiado, ideal para rasgar a carne das presas. A plumagem varia entre tons de marrom, cinza e branco, com padrões diferentes conforme a espécie. Os olhos são grandes e a visão extremamente aguçada, permitindo identificar presas a grandes distâncias durante o dia.',
    habitos: 'Os gaviões são solitários ou vivem em casais, sendo muito territoriais. Habitantes de florestas, campos abertos, áreas montanhosas e até zonas urbanas, essas aves são diurnas e passam a maior parte do tempo sobrevoando ou pousadas em pontos altos, como galhos e postes, de onde observam o ambiente. Caçam pequenos mamíferos, aves, répteis e insetos, capturando-os com suas garras fortes e afiadas. Algumas espécies, como o gavião-carijó, são bastante comuns em áreas urbanizadas.',
    reproducao: 'Durante o período reprodutivo, os gaviões constroem ninhos em árvores altas ou em penhascos, utilizando galhos e folhas. A fêmea põe de 1 a 4 ovos, que são incubados por cerca de 28 a 40 dias, dependendo da espécie. Os filhotes nascem indefesos e são alimentados pelos pais até estarem prontos para voar, o que ocorre após 40 a 50 dias. Normalmente, o filhote mais forte recebe maior quantidade de alimento, e em tempos de escassez, os mais fracos podem não sobreviver.',
    conservacao: 'Muitas espécies de gaviões não estão ameaçadas, mas algumas enfrentam riscos devido à destruição de habitat, caça ilegal e envenenamento por pesticidas usados na agricultura, que afetam suas presas. Além disso, são vítimas de colisões com veículos e linhas de transmissão elétrica. A preservação de áreas verdes e a educação ambiental são importantes para a proteção desses animais.',
  },

  {img: require('../../../../assets/Harpia botão.png'), 
    foto: require('../../../../assets/Harpia real.jpg'),
    nome: 'Harpia',
    desc: 'A harpia (Harpia harpyja) é considerada a maior e mais poderosa ave de rapina das Américas. Possui um corpo robusto, plumagem cinza-escura no dorso, peito claro e uma característica crista de penas eretas na cabeça. Suas garras são extremamente fortes e podem chegar a 13 cm de comprimento, maiores que as de qualquer outro falcão ou águia. Os olhos são grandes e a visão é muito apurada, ideal para caçar em meio à vegetação densa. Os machos pesam cerca de 5 a 7 kg, enquanto as fêmeas podem atingir 9 a 10 kg.',
    habitos: 'A harpia vive em florestas tropicais, principalmente na Amazônia e em regiões de mata fechada da América Central e do Sul. É uma ave solitária e territorial, passando a maior parte do tempo empoleirada em árvores altas, observando o ambiente. Caça principalmente durante o dia e se alimenta de mamíferos arborícolas, como preguiças, macacos, quatis e tamanduás-mirins, além de algumas aves de médio porte. Utiliza sua camuflagem e voo silencioso para se aproximar das presas antes do ataque.',
    reproducao: 'As harpias são monogâmicas e formam casais que permanecem juntos por toda a vida. Constroem enormes ninhos, com cerca de 1,5 metro de diâmetro, nos galhos de árvores muito altas, como a castanheira ou a samaumeira. A fêmea põe 1 ou 2 ovos, mas normalmente apenas um filhote sobrevive. A incubação dura cerca de 53 a 58 dias, e o filhote permanece no ninho por até 6 meses, sendo alimentado pelos pais. Mesmo após sair do ninho, o jovem pode continuar sendo cuidado por até 2 anos, o que faz com que o casal se reproduza apenas a cada 2 ou 3 anos.',
    conservacao: 'A harpia está classificada como vulnerável na lista da IUCN, principalmente devido à destruição das florestas tropicais, à caça ilegal e ao conflito com humanos, pois muitas vezes é abatida por medo ou por acreditar-se que ataca animais domésticos. Sua baixa taxa reprodutiva também dificulta a recuperação populacional. Atualmente, há projetos de proteção e reprodução em cativeiro, além de áreas de conservação para garantir a sobrevivência da espécie.',
  },

  {img: require('../../../../assets/Condor botão.png'), 
    foto: require('../../../../assets/Condor real.jpg'),
    nome: 'Condor',
    desc: 'O condor é uma das maiores aves voadoras do mundo, pertencente à família Cathartidae. Existem duas espécies principais: o condor-dos-andes (Vultur gryphus) e o condor-da-califórnia (Gymnogyps californianus). Possuem corpo robusto, plumagem preta com detalhes brancos nas asas (no caso do condor-dos-andes) e uma cabeça sem penas, de coloração rosada ou acinzentada. A envergadura pode ultrapassar 3 metros, e o peso pode chegar a 15 kg, tornando-os excelentes planadores.',
    habitos: 'Os condores são aves carcereiras, alimentando-se principalmente de carcaças de animais mortos, ajudando a manter o equilíbrio ecológico. São diurnos e preferem habitats montanhosos, áreas rochosas e regiões abertas, como as cordilheiras dos Andes e regiões desérticas ou costeiras. São aves solitárias ou que se reúnem em grupos para se alimentar. Utilizam as correntes térmicas ascendentes para voar grandes distâncias sem esforço, permanecendo horas no ar sem bater as asas.',
    reproducao: 'Os condores formam casais monogâmicos e podem viver até 70 anos, sendo uma das aves mais longevas. Constroem ninhos em locais altos e isolados, como penhascos e cavernas nas montanhas. A fêmea põe apenas um ovo a cada 2 anos, que é incubado por cerca de 55 a 60 dias. O filhote demora cerca de 6 meses para voar e permanece sob os cuidados dos pais por até 1 ano, o que contribui para a baixa taxa reprodutiva da espécie.',
    conservacao: 'O condor-da-califórnia esteve praticamente extinto na década de 1980, mas programas de reprodução em cativeiro ajudaram a aumentar a população. Já o condor-dos-andes é considerado quase ameaçado, devido à perda de habitat, caça ilegal e envenenamento, muitas vezes acidental, ao se alimentar de carcaças contaminadas. A proteção de áreas naturais e ações educativas são fundamentais para a conservação dessas aves.',
  },

  {img: require('../../../../assets/Urubu rei botão.png'), 
    foto: require('../../../../assets/Urubu rei real.jpg'),
    nome: 'Urubu-Rei',
    desc: 'O urubu-rei (Sarcoramphus papa) é uma das aves de rapina necrófagas mais imponentes da América Latina. De porte grande, chega a medir 70 a 85 cm de comprimento e possui uma envergadura de até 2 metros. Sua plumagem é predominantemente branca, com asas e cauda negras. A cabeça é nua, com pele de coloração vibrante, que mistura tons de laranja, vermelho, roxo e amarelo, além de uma característica carúncula (prega de pele) no bico. Essa aparência exótica o diferencia de outras espécies de urubus.',
    habitos: 'O urubu-rei vive em florestas tropicais, cerrados e pantanais, sendo encontrado desde o México até o norte da Argentina, incluindo grande parte do Brasil. É diurno e costuma voar alto, aproveitando as correntes de ar quente. Alimenta-se de carcaças de animais mortos, sendo um dos primeiros a localizar os cadáveres graças à sua excelente visão e olfato, apesar de menos apurado que o do urubu-comum. Frequentemente, afasta outros urubus menores para se alimentar primeiro.',
    reproducao: 'O urubu-rei é monogâmico e se reproduz em cavidades de árvores ou em locais protegidos no chão, especialmente em áreas de floresta densa. A fêmea põe um único ovo, que é incubado por cerca de 53 a 58 dias. O filhote nasce coberto de penugem branca e leva aproximadamente 3 meses para realizar os primeiros voos. Ambos os pais participam da alimentação e proteção do filhote durante esse período.',
    conservacao: 'Embora o urubu-rei não esteja atualmente classificado como ameaçado de extinção, suas populações podem sofrer impactos com a destruição de habitat, a caça ilegal e o envenenamento indireto por carcaças contaminadas. Ainda assim, é uma espécie de ampla distribuição e, em muitas regiões, é considerado relativamente comum. Programas de conservação e educação ambiental ajudam a valorizar seu papel ecológico.',
  },
    
];
export default function Territorio5() {
  const [cont, setCont] = useState(0);
  const navigation = useNavigation();
  const [visivel, setVisivel] = useState(false);
  const Exibir = (index) => {
    setCont(index);
    setVisivel(true);
  };
  return (
    <ImageBackground source={require('../../../../assets/Fundo T5.jpg')} style={styles.container}>

      <View style={styles.menu}>
        <View style={styles.botao}>
          <Pressable onPress={() => navigation.navigate('Home')} style={styles.voltarA}><Image resizeMode="contain" style={styles.voltar} source={require('../../../../assets/Voltar.png')}></Image></Pressable>
        </View>

        <View style={styles.titulo}>
          <Image resizeMode="contain" style={styles.tituloP} source={require('../../../../assets/Territorio 5 titulo.png')}/>
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
              <Image resizeMode="contain" style={styles.voltarC} source={require('../../../../assets/Voltar T5.png')}/>
            </Pressable>
          </Animatable.View>
        </View>
      </Modal>

      <StatusBar style="auto" hidden={true}/>
    </ImageBackground>
  );
}