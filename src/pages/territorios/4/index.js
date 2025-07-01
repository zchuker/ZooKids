import { StatusBar } from 'expo-status-bar';
import { Text, View, Modal, Pressable, Image, FlatList, ImageBackground, ScrollView} from 'react-native';
import { useState } from "react";
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const animais = [
  {img: require('../../../../assets/Rinoceronte botão.png'), 
    foto: require('../../../../assets/Rinoceronte real.jpg'),
    nome: 'Rinoceronte',
    desc: 'Os rinocerontes são grandes mamíferos herbívoros da ordem Perissodactyla e família Rhinocerotidae, conhecidos por suas imponentes hornes (chifres) na cabeça. Existem cinco espécies de rinocerontes: o rinoceronte-branco, o rinoceronte-negro, o rinoceronte-de-java, o rinoceronte-indiano e o rinoceronte-de-sumatra. O tamanho e a forma dos chifres variam entre as espécies, assim como a cor e o tipo de pele, que pode ser grossa e enrugada.',
    habitos: 'São animais solitários na maioria das espécies, exceto para o rinoceronte-branco, que pode formar grupos. Habitantes de savanhas e florestas tropicais, eles preferem áreas abertas ou com vegetação rasteira, onde se alimentam de gramíneas, folhas e arbustos. Embora tenham uma aparência pesada, são capazes de correr a 40 a 50 km/h por curtas distâncias. São geralmente diurnos, passando o dia em busca de comida e tomando banhos de lama para se proteger de parasitas e do sol.',
    reproducao: 'O período de gestação dos rinocerontes é muito longo, variando de 15 a 16 meses, dependendo da espécie. A fêmea geralmente dá à luz a um único filhote, que nasce com peso entre 30 a 60 kg. O filhote é totalmente dependente da mãe, que o protege e cuida até que o filhote tenha idade suficiente para se alimentar sozinho. A maturidade sexual é atingida aos 3 a 6 anos, mas a reprodução pode ocorrer mais tarde.',
    conservacao: 'Os rinocerontes estão ameaçados de extinção, principalmente devido à caça ilegal por causa de seus chifres, que são muito valiosos no mercado negro, e à perda de habitat devido ao avanço da agricultura e urbanização. O rinoceronte-negro e o rinoceronte-de-java estão classificados como criticamente ameaçados. Projetos de conservação buscam aumentar a proteção de suas populações, estabelecer áreas de preservação e combater o tráfico ilegal.',
  },

  {img: require('../../../../assets/Zebra botão.png'), 
    foto: require('../../../../assets/Zebra real.jpg'),
    nome: 'Zebra',
    desc: 'As zebras são grandes mamíferos pertencentes à família Equidae, conhecidos por sua pelagem listrada em branco e preto, que é única para cada indivíduo, assim como as impressões digitais em seres humanos. Existem três espécies principais: a zebra-da-planície, a zebra-de-grévy e a zebra-de-montanha. Elas possuem corpos musculosos, cabeças grandes, e são mais adaptadas a terrenos abertos e semiáridos. As zebras têm uma ótima visão e audição, o que as ajuda a detectar predadores à distância.',
    habitos: 'As zebras são animais sociáveis e vivem em bandos, que podem variar de algumas dezenas a centenas de indivíduos, dependendo da espécie e da estação do ano. Elas se alimentam de gramíneas e outras plantas rasteiras e passam a maior parte do dia pastando. São herbívoras diurnas e também têm hábitos migratórios, movendo-se para áreas com pasto fresco e água. Durante a noite, elas geralmente descansam e se abrigam em áreas mais seguras.',
    reproducao: 'A gestação das zebras dura cerca de 12 meses, e geralmente nasce apenas um filhote por vez. O filhote, ao nascer, pode andar e correr rapidamente, o que é importante para a sua sobrevivência, pois os predadores, como leões e hienas, podem atacar filhotes desprotegidos. A mãe cuida do filhote por vários meses, e ele começa a se alimentar de vegetação pouco tempo após o nascimento. A maturidade sexual das zebras ocorre por volta de 3 a 4 anos, e a reprodução pode ocorrer durante todo o ano.',
    conservacao: 'Embora as zebras como um todo não estejam em risco de extinção, algumas espécies, como a zebra-de-grévy, estão ameaçadas devido à perda de habitat e à caça ilegal. A zebra-da-planície tem populações mais estáveis, mas também enfrenta ameaças de desmatamento e degradação de habitat. Projetos de conservação incluem a criação de áreas protegidas, a restauração de ecossistemas e o monitoramento de suas populações.',
  },

  {img: require('../../../../assets/Girafa botão.png'), 
    foto: require('../../../../assets/Girafa real.jpg'),
    nome: 'Girafa',
    desc: 'As girafas são os maiores mamíferos terrestres e pertencem à família Giraffidae. Elas possuem um corpo esguio, pernas longas e pescoço extremamente alto, que pode atingir até 6 metros de comprimento. A pelagem é de uma cor amarelada a marrom, com manchas irregulares que ajudam na camuflagem. O padrão das manchas varia entre as subespécies, sendo mais claras ou mais escuras dependendo da região. Além disso, possuem língua longa e preta, que pode medir até 45 cm e é usada para alcançar folhas nas árvores.',
    habitos: 'As girafas são animais sociáveis, geralmente encontrando-se em grupos soltos, chamados de manadas, que podem variar de 10 a 20 indivíduos. Elas são herbívoras e se alimentam principalmente de folhas, brotos e frutas de árvores altas, especialmente da acácia. Passam a maior parte do tempo alimentando-se, usando seus pescoços altos para alcançar as partes mais altas das árvores. As girafas têm poucos predadores naturais, como leões e crocodilos, devido ao seu tamanho e capacidade de correr rapidamente a até 60 km/h por curtas distâncias.',
    reproducao: 'A reprodução das girafas é sexualmente dimórfica, com os machos competindo entre si para atrair as fêmeas, geralmente através de uma técnica chamada “necking”, onde eles se combatem com seus pescoços, que podem se tornar bastante fortes. A gestação das girafas dura cerca de 15 meses, e geralmente nasce um filhote. O filhote pode pesar cerca de 50 kg ao nascer e é capaz de ficar de pé e caminhar rapidamente pouco depois de nascer. A mãe cuida do filhote por um período de 12 meses, enquanto ele aprende a se alimentar e socializar com o grupo.',
    conservacao: 'Embora as girafas sejam amplamente distribuídas pela África, algumas subespécies, como a girafa-do-norte, estão ameaçadas devido à perda de habitat, caça ilegal e fragmentação de ecossistemas. As girafas são protegidas por várias iniciativas de conservação, que incluem reservas naturais e programas de proteção em áreas com densidade populacional mais baixa. Além disso, a caça furtiva e a expansão agrícola são grandes desafios para a conservação dessas majestosas criaturas.',
  },

  {img: require('../../../../assets/Suricata botão.png'), 
    foto: require('../../../../assets/Suricata real.jpg'),
    nome: 'Suricata',
    desc: 'As suricatas, também conhecidas como meerkats, são pequenos mamíferos pertencentes à família Herpestidae. Elas têm corpos esguios, com pelagem de cor marrom-claro a cinza, com manchas escuras nas costas e ao redor dos olhos. Seus olhos são grandes, adaptados para enxergar bem em seu ambiente aberto. As suricatas são famosas por sua postura ereta, com as patas traseiras firmemente plantadas no chão e o corpo inclinado para frente, o que as ajuda a vigiar predadores enquanto estão fora de seus buracos.',
    habitos: 'As suricatas são animais sociais e vivem em grupos organizados chamados de bandos ou clãs, que podem contar de 10 a 40 indivíduos. Elas habitam principalmente as regiões áridas e semiáridas da África, como as savanas e desertos. São diurnas e passam a maior parte do tempo procurando por alimentos, como insetos, pequenos roedores, ovos e plantas. As suricatas têm um sistema de vigilância em grupo, onde uma ou mais suricatas ficam de sentinela enquanto o restante do grupo procura comida ou se refugia. Elas são altamente organizadas e trabalham em equipe para defender o bando de predadores como cobras, raposas e aves de rapina.',
    reproducao: 'A reprodução das suricatas ocorre de forma monogâmica ou em grupos, dependendo da dinâmica do bando. A fêmea geralmente dá à luz de 2 a 4 filhotes após uma gestação de cerca de 11 semanas. Os filhotes nascem cegos e indefesos e dependem muito da mãe e de outros membros do grupo para proteção e alimentação. Quando atingem cerca de 2 meses, começam a se juntar à busca por alimentos e a aprender as habilidades de vigilância. A maturidade sexual é atingida por volta de 1 ano de idade.',
    conservacao: 'As suricatas não estão atualmente ameaçadas de extinção, mas podem ser afetadas pela perda de habitat devido à urbanização e ao turismo. Além disso, suas populações podem ser impactadas pela caça ilegal, que afeta a fauna local. Contudo, as suricatas são bem adaptadas a ambientes secos e têm uma ampla distribuição em várias regiões da África. A conservação de suas populações depende da preservação de seus habitats naturais e da proteção contra o tráfico de animais.',
  },

  {img: require('../../../../assets/Leao botão.png'), 
    foto: require('../../../../assets/Leao real.jpg'),
    nome: 'Leão',
    desc: 'Os leões são grandes mamíferos da família Felidae, conhecidos por seu porte imponente e pela juba dos machos, que é uma característica única entre os felinos. Eles possuem corpos musculosos, com pelagem dourada e uma cauda com uma ponta peluda. Os machos, com suas grandes jubah, são mais facilmente reconhecíveis, enquanto as fêmeas são menores e mais ágeis. Os leões são encontrados principalmente na África Subsariana, embora uma pequena população também viva na Índia, no Parque Nacional de Gir.',
    habitos: 'Os leões são sociáveis e vivem em grupos chamados de alcateias, que podem ser compostos por até 30 indivíduos. Essas alcateias são geralmente formadas por fêmeas relacionadas entre si, enquanto os machos entram e saem do grupo. Eles são carnívoros e caçam principalmente grandes herbívoros, como zebras, gazelas e búfalos. Embora possam caçar individualmente, as fêmeas geralmente caçam em grupo, coordenando ataques para capturar presas maiores. Os leões são mais ativos ao anoitecer e ao amanhecer (crepusculares), quando as temperaturas estão mais amenas.',
    reproducao: 'O período de gestação dos leões é de cerca de 110 dias, e a fêmea geralmente dá à luz de 1 a 4 filhotes em um local protegido, longe dos predadores. Os filhotes nascem cegos e dependem completamente da mãe. Eles começam a sair da caverna após cerca de 4 semanas, mas permanecem sob a proteção da mãe até que possam caçar e se defender por conta própria. A maturidade sexual é atingida entre 2 e 3 anos, mas as fêmeas geralmente começam a se reproduzir aos 4 anos. Os machos, no entanto, tendem a ter sua primeira reprodução apenas quando se tornam dominantes em uma alcateia.',
    conservacao: 'Os leões estão classificados como vulneráveis pela União Internacional para a Conservação da Natureza (IUCN) devido à perda de habitat, caça ilegal e conflitos com humanos. Suas populações estão diminuindo, especialmente na África, onde os leões enfrentam a ameaça da perda de território devido à expansão agrícola e ao turismo. Programas de conservação estão sendo implementados em várias áreas protegidas para evitar o declínio das populações, como o reforço na proteção de reservas e a educação de comunidades locais.',
  },

  {img: require('../../../../assets/Tigre botão.png'), 
    foto: require('../../../../assets/Tigre real.jpg'),
    nome: 'Tigre',
    desc: 'O tigre é o maior felino do mundo, pertencente à família Felidae. Sua pelagem laranja vibrante com listras negras é uma das suas características mais marcantes e é única para cada indivíduo, funcionando como uma camuflagem eficaz nas florestas e pastagens. Os tigres possuem um corpo forte e musculoso, com pernas longas e uma cauda densa e espessa. Dependendo da subespécie, eles podem atingir até 3 metros de comprimento e pesar até 300 kg. O tigre de bengala é a subespécie mais conhecida e distribuída, mas existem outras, como o tigre-de-sumatra e o tigre-de-amur.',
    habitos: 'Os tigres são solitários e territoriais. Eles preferem habitats densos, como florestas tropicais, pântanos e savanas, onde podem usar sua pelagem para se camuflar. São caçadores noturnos e dependem principalmente de sua visão e audição aguçadas para caçar. Tigres caçam principalmente grandes herbívoros, como cervos, javalis e até búfalos, e são conhecidos por seu estilo de caça furtivo e preciso. Embora sejam excelentes nadadores e possam caçar peixes ou até crocodilos, seu habitat preferido é geralmente próximo a corpos d água, como rios e lagos.',
    reproducao: 'A reprodução dos tigres é marcada por um período de gestação de cerca de 93 a 112 dias. A fêmea dá à luz de 2 a 4 filhotes, que nascem cegos e vulneráveis. Nos primeiros meses de vida, os filhotes dependem totalmente da mãe para alimentação e proteção. Ao crescerem, começam a aprender a caçar e a defender seu território. A maturidade sexual dos tigres ocorre por volta dos 3 a 4 anos, mas muitos tigres machos não começam a reproduzir até atingirem a maturidade completa, quando podem conquistar seu próprio território.',
    conservacao: 'Os tigres estão classificados como em perigo de extinção pela IUCN devido à perda de habitat, caça furtiva e conflitos com seres humanos. A destruição das florestas e a caça ilegal de tigres para o comércio de peles e outros produtos aumentaram drasticamente sua população, que agora é fragmentada em áreas pequenas. A principal ameaça é a perda de habitat e a diminuição das presas naturais. Muitos esforços de conservação estão sendo feitos em áreas protegidas e santuários, além de campanhas contra a caça ilegal e o tráfico de tigres.',
  },

  {img: require('../../../../assets/Hipopotamo botão.png'), 
    foto: require('../../../../assets/Hipopotamo real.jpg'),
    nome: 'Hipopótamo',
    desc: 'Os hipopótamos são grandes mamíferos semi-aquáticos pertencentes à família Hippopotamidae. Possuem um corpo robusto e arredondado, com pele espessa e quase sem pelos, que varia de cinza-escuro a marrom. Seu tamanho é impressionante, com peso podendo atingir até 3.500 kg, sendo um dos maiores animais terrestres. Seus olhos, ouvidos e narinas são posicionados no topo da cabeça, permitindo que eles fiquem submersos na água enquanto mantêm esses órgãos acima da superfície. Embora sua aparência sugira um animal pesado e desajeitado, os hipopótamos são extremamente ágeis e podem correr até 30 km/h por curtas distâncias.',
    habitos: 'Os hipopótamos são animais semiaquáticos e passam a maior parte do dia submersos em rios, lagos ou pântanos para se proteger do calor intenso. Eles são noturnos, saindo da água à noite para se alimentar de gramíneas, que são a base de sua dieta. Os hipopótamos são territorialistas e marcam seu território nas margens dos corpos d água com fezes e urina. Embora geralmente sejam pacíficos, podem ser extremamente agressivos, especialmente se se sentirem ameaçados, sendo responsáveis por mais mortes humanas na África do que outros grandes animais selvagens.',
    reproducao: 'A reprodução dos hipopótamos ocorre na água, onde as fêmeas dão à luz após uma gestação de 8 meses. Os filhotes nascem em águas rasas, com cerca de 40 a 50 kg de peso. O filhote é muito dependente da mãe nos primeiros meses de vida, sendo amamentado enquanto permanece perto dela. Eles começam a se alimentar de gramíneas por volta dos 4 meses, mas continuam amamentando por até 1 ano. A maturidade sexual é atingida por volta dos 5 anos de idade para fêmeas e 7 anos para machos.',
    conservacao: 'Embora os hipopótamos não sejam amplamente ameaçados de extinção, eles enfrentam algumas ameaças, principalmente devido à caça ilegal por suas presas e à perda de habitat causada pela expansão humana. Em algumas regiões, os hipopótamos são caçados por suas presas, que são altamente valorizadas no mercado negro. O conflito com as populações locais também é um problema, já que os hipopótamos frequentemente invadem terras agrícolas. A IUCN classifica os hipopótamos como vulneráveis, principalmente pela diminuição das populações em algumas áreas da África.',
  },
    
];
export default function Territorio4() {
  const [cont, setCont] = useState(0);
  const navigation = useNavigation();
  const [visivel, setVisivel] = useState(false);
  const Exibir = (index) => {
    setCont(index);
    setVisivel(true);
  };
  return (
    <ImageBackground source={require('../../../../assets/Fundo T4.png')} style={styles.container}>

      <View style={styles.menu}>
        <View style={styles.botao}>
          <Pressable onPress={() => navigation.navigate('Home')} style={styles.voltarA}><Image resizeMode="contain" style={styles.voltar} source={require('../../../../assets/Voltar.png')}></Image></Pressable>
        </View>

        <View style={styles.titulo}>
          <Image resizeMode="contain" style={styles.tituloP} source={require('../../../../assets/Territorio 4 titulo.png')}/>
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
              <Image resizeMode="contain" style={styles.voltarC} source={require('../../../../assets/VoltarT4.png')}/>
            </Pressable>
          </Animatable.View>
        </View>
      </Modal>

      <StatusBar style="auto" hidden={true}/>
    </ImageBackground>
  );
}