import { StatusBar } from 'expo-status-bar';
import { Text, View, Modal, Pressable, Image, FlatList, ImageBackground, ScrollView} from 'react-native';
import { useState } from "react";
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const animais = [
  {img: require('../../../../assets/Onca pintada Botão.png'), 
    foto: require('../../../../assets/Onca real.jpg'),
    nome: 'Onça-pintada',
    desc: 'É o maior felino das Américas e o terceiro maior do mundo, com os machos sendo mais robustos que as fêmeas. Sua pelagem é amarelo-dourada com rosetas negras, que funcionam como camuflagem. A mandíbula é extremamente poderosa, capaz de esmagar cascos de tartarugas e crânios de presas. Possui pernas curtas e musculosas, adaptadas para emboscadas.',
    habitos: 'Vive solitária, marcando territórios que podem chegar a 100 km². É um predador de topo, caçando principalmente ao amanhecer e anoitecer. Sua dieta inclui capivaras, veados, jacarés e até animais maiores, como antas. Comunica-se por meio de rugidos, arranhões em árvores e marcas de cheiro.',
    reproducao: 'O acasalamento pode ocorrer em qualquer época do ano. A gestação dura cerca de 90 a 110 dias, nascendo de 1 a 4 filhotes, que são cuidados exclusivamente pela mãe. Os filhotes permanecem com ela por até 2 anos, aprendendo a caçar antes de se tornarem independentes.',
    conservacao: 'A caça por conflitos com humanos e o comércio ilegal de suas peles reduziram drasticamente suas populações no passado. Hoje, a principal ameaça é a perda de habitat devido ao desmatamento e expansão agrícola. Protegida em várias unidades de conservação, a onça-pintada é símbolo de esforços para preservação da biodiversidade.',
  },

  {img: require('../../../../assets/Onca parda Botão.png'), 
    foto: require('../../../../assets/Onca parda real.jpg'),
    nome: 'Onça-Parda',
    desc: 'É o segundo maior felino das Américas, com os machos sendo maiores que as fêmeas. Seu corpo esguio e musculoso é coberto por uma pelagem uniforme que varia do cinza-ardósia ao marrom-avermelhado. As patas traseiras são mais longas, permitindo saltos impressionantes. Diferente da onça-pintada, não possui manchas na idade adulta, exceto filhotes que apresentam listras claras.',
    habitos: 'Vive solitária, marcando grandes territórios que podem ultrapassar 100 km². É um predador oportunista, caçando principalmente ao amanhecer e anoitecer. Sua dieta inclui veados, capivaras e até animais domésticos em áreas de conflito. Comunica-se através de vocalizações que variam desde miados até gritos agudos.',
    reproducao: 'Pode reproduzir-se em qualquer época do ano. A gestação dura cerca de 90 dias, resultando em 1 a 4 filhotes que nascem com listras claras. As crias permanecem com a mãe por até 2 anos, aprendendo técnicas de caça antes de se tornarem independentes. A fêmea cuida sozinha da prole.',
    conservacao: 'A destruição de habitat e os conflitos com pecuaristas têm sido as principais ameaças à espécie. Apesar disso, adapta-se bem a diferentes ambientes, desde florestas densas até áreas semiáridas. Atualmente é considerada "Menos Preocupante" quanto ao risco de extinção, embora populações locais possam estar em declínio.',
  },

  {img: require('../../../../assets/Jacare botão.png'), 
    foto: require('../../../../assets/Jacare real.jpg'),
    nome: 'Jacaré',
    desc: 'Os jacarés são répteis semi-aquáticos, parentes próximos dos crocodilos, mas com focinho mais largo e achatado. Possuem uma armadura de escamas ósseas no dorso e uma poderosa cauda musculosa, que os impulsiona na água. Seus olhos e narinas ficam no topo da cabeça, permitindo que fiquem quase totalmente submersos enquanto observam a presa. A mordida é extremamente forte, mas os músculos para abrir a boca são fracos – um adulto pode ser contido apenas com as mãos, se souber como.',
    habitos: 'Vivem em rios, lagos, pântanos e até áreas alagadas, sendo mais ativos ao entardecer e amanhecer. São ectotérmicos (controlam a temperatura através do ambiente), por isso frequentemente são vistos tomando sol nas margens. Alimentam-se de peixes, aves, pequenos mamíferos e, quando jovens, de insetos e crustáceos. São importantes para o equilíbrio ecológico, controlando populações de outras espécies.',
    reproducao: 'Na época de acasalamento, os machos emitem roncos e vibrações na água para atrair fêmeas. Estas constroem ninhos de folhas e lama, onde depositam de 20 a 50 ovos. A temperatura da incubação define o sexo dos filhotes: mais quente = machos; mais frio = fêmeas. A mãe protege o ninho e, quando os ovos eclodem (após 80 dias), carrega os filhotes na boca até a água. Eles ficam sob seus cuidados por cerca de 1 ano.',
    conservacao: 'No passado, foram caçados intensamente por seu couro, mas hoje a maioria das espécies está estável devido a criação comercial sustentável (como no Pantanal). A destruição de habitats e a poluição de rios ainda são ameaças. No Brasil, o jacaré-do-pantanal (Caiman yacare) é um exemplo de recuperação populacional bem-sucedida.',
  },

  {img: require('../../../../assets/Elefante botão.png'), 
    foto: require('../../../../assets/Elefante real.jpg'),
    nome: 'Elefante',
    desc: 'É o maior mamífero terrestre do planeta, com os machos podendo atingir até 7 toneladas e 4 metros de altura. Suas características mais marcantes são as enormes orelhas, que ajudam na regulação térmica, e a tromba, uma fusão muscular do nariz e lábio superior, usada para respirar, cheirar, beber, arrancar vegetação e até como ferramenta. A pele é grossa e enrugada, com poucos pelos, e seus longos dentes incisivos (presas de marfim) crescem continuamente.',
    habitos: 'Vivem em grupos matriarcais, liderados pela fêmea mais velha e experiente. Machos adultos geralmente vivem solitários ou em pequenos bandos. São animais altamente sociais e inteligentes, capazes de reconhecer indivíduos, cooperar e demonstrar empatia. Consomem até 300 kg de vegetação por dia e precisam de grandes quantidades de água, tornando-os essenciais para a dispersão de sementes e manutenção de ecossistemas.',
    reproducao: 'A gestação dura cerca de 22 meses – a mais longa entre os mamíferos terrestres. Normalmente nasce apenas um filhote, que é amamentado por até 2 anos e protegido por todo o grupo. As fêmeas se reproduzem a cada *4 a 9 anos, tornando a recuperação populacional lenta.',
    conservacao: 'A caça ilegal pelo marfim foi a principal causa de seu declínio no século XX. Hoje, a perda de habitat devido à expansão agrícola e conflitos com humanos são as maiores ameaças. Protegidos em parques nacionais e reservas, os elefantes são considerados "engenheiros do ecossistema", pois sua presença beneficia várias outras espécies. Medidas como monitoramento anti-caça e corredores ecológicos são essenciais para sua sobrevivência.',
  },

  {img: require('../../../../assets/Flamingo botão.png'), 
    foto: require('../../../../assets/Flamingo real.jpg'),
    nome: 'Flamingo',
    desc: 'É uma ave inconfundível, conhecida por sua plumagem rosada e pernas longas e finas. O bico é curvado para baixo, adaptado para filtrar alimento na água. Os machos são geralmente maiores que as fêmeas, mas ambos apresentam a mesma coloração vibrante, que varia de rosa-claro a vermelho-intenso, dependendo da dieta.',
    habitos: 'Vive em grandes bandos, às vezes com milhares de indivíduos, em lagos rasos, lagoas costeiras e áreas alagadas. Alimenta-se de pequenos crustáceos, algas e moluscos, filtrando a água com seu bico especializado. Comunica-se através de vocalizações altas e movimentos sincronizados, especialmente durante o voo em formação.',
    reproducao: 'Nidifica em colônias densas, construindo montes de lama onde a fêmea põe um único ovo. Machos e fêmeas compartilham a incubação, que dura cerca de 30 dias. Os filhotes nascem com penugem branca ou cinza e só desenvolvem a coloração rosada após alguns anos, conforme se alimentam dos mesmos organismos que os adultos.',
    conservacao: 'A perda de habitat úmido e a poluição das águas são as principais ameaças à espécie. Em algumas regiões, o turismo desordenado também perturba as áreas de nidificação. Apesar disso, muitas populações estão estáveis, especialmente em áreas protegidas. Sua coloração única, derivada da alimentação, serve como indicador da saúde do ecossistema aquático.',
  },

  {img: require('../../../../assets/Leao-marinho botão.png'), 
    foto: require('../../../../assets/Leao-marinho real.jpg'),
    nome: 'Leão-Marinho',
    desc: 'Mamífero marinho de grande porte, com corpo robusto, nadadeiras longas e flexíveis, e cabeça arredondada. Os machos são bem maiores que as fêmeas e podem apresentar uma “juba” de pelos grossos. Têm uma pelagem curta e coloração marrom-escura a dourada. Possuem ouvidos visíveis, o que os diferencia das focas verdadeiras.',
    habitos: 'Vivem em colônias costeiras e são altamente sociais, formando grupos grandes em praias e costões rochosos. Passam bastante tempo na água caçando peixes, lulas e outros animais marinhos, mas também descansam e se reproduzem em terra. São nadadores ágeis e podem mergulhar a grandes profundidades por vários minutos.',
    reproducao: 'Durante a temporada reprodutiva, os machos estabelecem territórios e competem por fêmeas. O sistema é poligínico, com um macho dominando várias fêmeas. A fêmea dá à luz um único filhote após uma gestação de cerca de 11 meses. Ambos os pais cuidam do filhote por alguns meses, com a mãe amamentando até o desmame.',
    conservacao: 'Embora muitas populações estejam protegidas, os leões-marinhos ainda enfrentam ameaças como pesca acidental, poluição marinha e mudanças climáticas. Já foram intensamente caçados por pele e gordura no passado. Atualmente, várias áreas de reprodução estão sob proteção legal e são monitoradas por biólogos.',
  },

  {img: require('../../../../assets/Cagado botão.png'), 
    foto: require('../../../../assets/Cagado real.jpg'),
    nome: 'Cágado',
    desc: 'Os cágados são répteis aquáticos de água doce, com casco achatado e leve. Possuem pescoço longo e flexível, e seus pés têm membranas interdigitais que os ajudam a nadar. Diferenciam-se dos jabutis por viverem principalmente na água e das tartarugas marinhas por serem de água doce. Têm tamanho médio e coloração variada, dependendo da espécie.',
    habitos: 'Vivem em lagos, rios calmos e brejos, sendo animais diurnos que gostam de tomar sol sobre troncos ou pedras. São onívoros, alimentando-se de plantas aquáticas, insetos, pequenos peixes e outros organismos. Apesar de serem aquáticos, também passam tempo em terra firme e podem se deslocar com facilidade em ambos os ambientes.',
    reproducao: 'A reprodução ocorre em terra, onde a fêmea cava buracos para depositar de 5 a 20 ovos. Após a postura, os ovos são incubados naturalmente, e os filhotes nascem sozinhos, já aptos a sobreviver. O tempo de incubação varia conforme a temperatura do ambiente, podendo durar de dois a quatro meses.',
    conservacao: 'Os cágados sofrem com a destruição de habitats, poluição de rios e captura ilegal para o comércio de animais. Algumas espécies estão ameaçadas de extinção. Iniciativas de conservação incluem criação em cativeiro, educação ambiental e preservação de áreas úmidas.',
  },

  {img: require('../../../../assets/Pequenos felinos botão.png'), 
    foto: require('../../../../assets/Pequenos felinos real.jpg'),
    nome: 'Pequenos Felinos',
    desc: 'Os pequenos felinos pertencem à família dos felídeos, assim como os grandes felinos, mas diferenciam-se pelo porte menor e por hábitos mais discretos. Incluem espécies como o gato-do-mato, gato-maracajá, gato-palheiro, entre outros. Geralmente possuem corpo ágil, pelagem camuflada com manchas ou listras e olhos adaptados para enxergar bem no escuro.',
    habitos: 'São animais solitários, territoriais e principalmente noturnos ou crepusculares. Vivem em diferentes habitats, como florestas, savanas, áreas montanhosas e até regiões semiáridas. Alimentam-se de pequenos mamíferos, aves, répteis e insetos. Caçam em silêncio e com grande precisão, aproveitando sua audição e visão aguçadas.',
    reproducao: 'O acasalamento ocorre em determinadas épocas do ano, e a gestação dura em média de 60 a 80 dias. As fêmeas geralmente dão à luz de 1 a 4 filhotes, que nascem cegos e indefesos. A mãe cuida sozinha da cria, que começa a caçar com poucos meses de idade. A maturidade sexual é atingida entre 1 e 2 anos de idade.',
    conservacao: 'Muitas espécies de pequenos felinos estão ameaçadas por perda de habitat, caça ilegal, atropelamentos e conflitos com humanos. Como são discretos e pouco estudados, é difícil monitorar suas populações. Vários projetos de conservação buscam proteger corredores ecológicos e ampliar o conhecimento sobre essas espécies.',
  },
    
];
export default function Territorio1() {
  const [cont, setCont] = useState(0);
  const navigation = useNavigation();
  const [visivel, setVisivel] = useState(false);
  
  const Exibir = (index) => {
    setCont(index);
    setVisivel(true);
  };
  return (
    <ImageBackground source={require('../../../../assets/Fundo T1.png')} style={styles.container}>

      <View style={styles.menu}>
        <View style={styles.botao}>
          <Pressable onPress={() => navigation.navigate('Home')} style={styles.voltarA}><Image resizeMode="contain" style={styles.voltar} source={require('../../../../assets/Voltar.png')}></Image></Pressable>
          
        </View>

        <View style={styles.titulo}>
          <Image resizeMode="contain" style={styles.tituloP} source={require('../../../../assets/Territorio 1 titulo.png')}/>
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
            <Image style={styles.fotoA} source={animais[cont].foto}/>
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
              <Image resizeMode="contain" style={styles.voltarC} source={require('../../../../assets/VoltarT1.png')}/>
            </Pressable>
          </Animatable.View>
        </View>
      </Modal>

      <StatusBar style="auto" hidden={true} />
    </ImageBackground>
  );
}