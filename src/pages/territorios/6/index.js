import { StatusBar } from 'expo-status-bar';
import { Text, View, Modal, Pressable, Image, FlatList, ImageBackground, ScrollView} from 'react-native';
import { useState } from "react";
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const animais = [
  {img: require('../../../../assets/Lontra botão.png'), 
    foto: require('../../../../assets/Lontra real.jpg'),
    nome: 'Lontra',
    desc: 'As lontras são mamíferos semi-aquáticos da família Mustelidae, conhecidas por seu corpo alongado, patas curtas e cauda espessa e musculosa. Possuem pelagem densa, de coloração marrom a castanho-escura, com tons mais claros na região do peito e rosto. Essa pelagem é extremamente impermeável, permitindo que se mantenham aquecidas na água. As espécies variam de 1 a 1,5 metro de comprimento e pesam entre 7 e 30 kg, dependendo da espécie. Seus dedos possuem membranas, o que as torna excelentes nadadoras.',
    habitos: 'As lontras são diurnas ou crepusculares, muito ativas e brincalhonas, conhecidas por deslizarem em barrancos e brincarem com objetos como pedras e galhos. Vivem em margens de rios, lagos, manguezais e áreas costeiras, abrigando-se em tocas próximas à água. São carnívoras, alimentando-se de peixes, crustáceos, anfíbios e pequenos répteis. Caçam de forma habilidosa e são capazes de permanecer submersas por alguns minutos.',
    reproducao: 'A reprodução das lontras varia conforme a espécie, mas geralmente os filhotes nascem em tocas cavadas nas margens dos rios. A gestação dura entre 60 e 70 dias, e a fêmea pode dar à luz de 1 a 5 filhotes. Os pequenos nascem cegos e dependentes, e permanecem na toca durante as primeiras semanas. A mãe cuida dos filhotes sozinha, ensinando-os a nadar e caçar a partir dos 2 meses de idade.',
    conservacao: 'As lontras enfrentam sérias ameaças devido à poluição dos rios, destruição de habitat, caça ilegal e pesca predatória, que reduz sua principal fonte de alimento. Algumas espécies, como a ariranha (lontra-gigante sul-americana), estão classificadas como ameaçadas de extinção. Projetos de proteção ambiental e a preservação de áreas alagadas são fundamentais para garantir a sobrevivência desses animais.',
  },

  {img: require('../../../../assets/Chimpanze botão.png'), 
    foto: require('../../../../assets/Chimpanze real.jpg'),
    nome: 'Chimpanze',
    desc: 'O chimpanzé (Pan troglodytes) é um dos parentes mais próximos do ser humano, compartilhando cerca de 98% de seu DNA conosco. Possui corpo robusto, braços longos e fortes que chegam a ultrapassar o comprimento das pernas, e pelagem escura cobrindo o corpo, exceto o rosto, orelhas, palmas das mãos e solas dos pés. Os adultos podem medir cerca de 1,2 a 1,7 metro de altura e pesar entre 30 e 60 kg, com os machos geralmente maiores que as fêmeas.',
    habitos: 'Vivem em florestas tropicais, savanas arborizadas e regiões montanhosas da África Central e Ocidental. São diurnos e passam boa parte do dia se locomovendo no chão e nas árvores. Os chimpanzés são animais altamente sociais, organizados em grupos de até 100 indivíduos, com uma complexa hierarquia dominada geralmente por um macho-alfa. Alimentam-se de frutas, folhas, sementes, insetos, mel e, ocasionalmente, de pequenos vertebrados, praticando até caça cooperativa.',
    reproducao: 'As fêmeas atingem a maturidade sexual por volta dos 10 anos e, após o acasalamento, a gestação dura cerca de 230 dias (7 meses e meio). Nasce normalmente um único filhote, que se agarra ao corpo da mãe nos primeiros meses de vida. O filhote é cuidado exclusivamente pela mãe até os 4 ou 5 anos, aprendendo a se alimentar, socializar e usar ferramentas observando os adultos do grupo.',
    conservacao: 'Os chimpanzés estão classificados como ameaçados de extinção pela IUCN, principalmente devido à destruição de habitat, caça ilegal e tráfico de filhotes. Além disso, doenças humanas, como gripes e resfriados, podem afetá-los gravemente. Diversos santuários, reservas e projetos de pesquisa atuam na proteção e conservação desses primatas.',
  },

  {img: require('../../../../assets/Orangotango botão.png'), 
    foto: require('../../../../assets/Orangotango real.jpg'),
    nome: 'Orangotango',
    desc: 'O orangotango é o maior primata arborícola do mundo e pertence ao gênero Pongo, com três espécies conhecidas: orangotango-de-bornéu, orangotango-de-sumatra e orangotango-de-tapanuli. Possuem corpo robusto, braços extremamente longos — podendo chegar a 2,2 metros de envergadura — e pelos longos e avermelhados. Os machos adultos apresentam grandes bolsas de gordura facial chamadas de flanges, além de um saco gular que ajuda na emissão de sons altos. Podem pesar entre 30 e 100 kg, dependendo do sexo e da espécie.',
    habitos: 'Os orangotangos são solitários, especialmente os machos, e passam a maior parte da vida em árvores, onde constroem ninhos para dormir. Vivem em florestas tropicais e equatoriais das ilhas de Bornéu e Sumatra. São diurnos e se deslocam calmamente pelos galhos, usando suas mãos e pés prensis. Alimentam-se principalmente de frutas, mas também consomem folhas, flores, sementes, insetos e, ocasionalmente, pequenos vertebrados. São animais muito inteligentes e capazes de usar ferramentas simples para obter alimento ou água.',
    reproducao: 'A reprodução é lenta e os orangotangos possuem um dos maiores intervalos reprodutivos entre os mamíferos, com a fêmea tendo filhotes a cada 6 a 9 anos. A gestação dura cerca de 8 a 9 meses, resultando no nascimento de um único filhote, que permanecerá sob os cuidados maternos por 6 a 8 anos, aprendendo a se alimentar, se locomover e sobreviver na floresta. Durante esse período, a mãe ensina o jovem a construir ninhos e encontrar alimentos.',
    conservacao: 'O orangotango está criticamente ameaçado de extinção, principalmente devido à destruição de seu habitat, causada por desmatamento para a plantação de óleo de palma, extração de madeira e queimadas. Além disso, sofrem com a caça ilegal e o tráfico de filhotes. Atualmente, existem projetos de conservação e centros de reabilitação em Bornéu e Sumatra que resgatam orangotangos órfãos e vítimas do tráfico.',
  },

  {img: require('../../../../assets/Primatas brasileiros botão.png'), 
    foto: require('../../../../assets/Primatas brasileiros real.jpg'),
    nome: 'Primatas brasileiros',
    desc: 'O Brasil abriga a maior diversidade de primatas do mundo, com mais de 150 espécies conhecidas, muitas delas endêmicas, ou seja, que só existem aqui. São mamíferos arborícolas, de corpo peludo, cauda longa (em várias espécies, preênsil) e membros adaptados para a vida nas árvores. Variam muito de tamanho — desde pequenos saguis de 20 cm até o muriqui, maior primata das Américas, com até 1,5 metro de comprimento (incluindo a cauda).',
    habitos: 'São diurnos, exceto algumas espécies de bugios que podem vocalizar ao amanhecer e entardecer. Vivem em florestas tropicais, manguezais, cerrados e matas ciliares, se locomovendo pelas árvores com saltos, corridas e escaladas. Alimentam-se de frutas, flores, folhas, sementes, insetos e até pequenos vertebrados. Vivem em grupos familiares ou sociais que variam de 2 a mais de 30 indivíduos, organizados de acordo com a espécie e o ambiente.',
    reproducao: 'A gestação varia de 4 a 7 meses, dependendo da espécie. A maioria dá à luz a 1 ou 2 filhotes por vez, e os filhotes permanecem agarrados à mãe ou ao pai nos primeiros meses. Algumas espécies, como os saguis e micos, têm cuidado parental compartilhado, onde outros membros do grupo também ajudam a cuidar dos filhotes. A maturidade sexual é atingida por volta dos 2 a 5 anos, conforme a espécie.',
    conservacao: 'Muitos primatas brasileiros estão ameaçados de extinção devido à destruição de habitat, caça ilegal e tráfico de animais silvestres. Espécies como o muriqui-do-norte, o mico-leão-dourado e o bugio-marrom enfrentam sérios riscos. Diversos programas de conservação, como criação de reservas, projetos de soltura e educação ambiental, ajudam na preservação desses animais.',
  },

  {img: require('../../../../assets/Muriqui do sul botão.png'), 
    foto: require('../../../../assets/Muriqui do sul real.jpg'),
    nome: 'Muriqui-do-Sul',
    desc: 'O muriqui-do-sul (Brachyteles arachnoides) é o maior primata das Américas, podendo atingir 1,5 metro de comprimento (incluindo a cauda) e pesar até 15 kg. Possui pelagem espessa de cor acinzentada a amarelada e uma longa cauda preênsil, que funciona como um "quinto membro" e é fundamental para sua locomoção nas copas das árvores. Seu rosto é predominantemente negro, diferentemente do muriqui-do-norte, que apresenta manchas rosadas.',
    habitos: 'É um animal diurno e arborícola, passando quase todo o tempo nas árvores das florestas tropicais da Mata Atlântica. Vive em grandes grupos sociais, que podem ter até 30 indivíduos, sendo conhecidos por seus comportamentos pacíficos e cooperativos, com pouca disputa agressiva. Alimenta-se principalmente de frutas, folhas, flores e sementes, exercendo papel importante na dispersão de sementes e regeneração da floresta.',
    reproducao: 'A maturidade sexual ocorre entre os 6 e 9 anos de idade. A gestação dura cerca de 7 a 8 meses, resultando no nascimento de um único filhote. O bebê permanece agarrado à mãe por aproximadamente 2 anos, sendo carregado na barriga e depois nas costas. Os cuidados são exclusivos da mãe, embora o grupo se mantenha unido e tolerante com os filhotes.',
    conservacao: 'O muriqui-do-sul está classificado como em perigo de extinção, principalmente devido à destruição da Mata Atlântica, seu habitat natural. Além disso, sofre com a caça ilegal e a fragmentação das florestas, que dificulta o deslocamento e o contato entre grupos. Programas de conservação, como o Projeto Muriqui, atuam no monitoramento, pesquisa e preservação da espécie em áreas protegidas.',
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
    <ImageBackground source={require('../../../../assets/Fundo T6.jpg')} style={styles.container}>

      <View style={styles.menu}>
        <View style={styles.botao}>
          <Pressable onPress={() => navigation.navigate('Home')} style={styles.voltarA}><Image resizeMode="contain" style={styles.voltar} source={require('../../../../assets/Voltar.png')}></Image></Pressable>
        </View>

        <View style={styles.titulo}>
          <Image resizeMode="contain" style={styles.tituloP} source={require('../../../../assets/Territorio 6 titulo.png')}/>
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
              <Image resizeMode="contain" style={styles.voltarC} source={require('../../../../assets/Voltar T6.png')}/>
            </Pressable>
          </Animatable.View>
        </View>
      </Modal>

      <StatusBar style="auto" hidden={true} />
    </ImageBackground>
  );
}