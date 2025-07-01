import { StatusBar } from 'expo-status-bar';
import { Text, View, Modal, Pressable, Image, FlatList, ImageBackground, ScrollView} from 'react-native';
import { useState } from "react";
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const animais = [
  {img: require('../../../../assets/Aves mata botão.png'), 
    foto: require('../../../../assets/Aves mata real.jpg'),
    nome: 'Aves da Mata Atlântica',
    desc: 'A Mata Atlântica abriga uma impressionante diversidade de aves, com mais de 850 espécies registradas, incluindo várias endêmicas, ou seja, que só ocorrem nesse bioma. Elas variam em tamanho, cor e comportamento, desde pequenos beija-flores coloridos até grandes aves como o mutum. Suas plumagens muitas vezes são vibrantes, com tons de azul, vermelho, amarelo e verde, que ajudam na comunicação e camuflagem entre a vegetação densa.',
    habitos: 'Essas aves desempenham papéis importantes no ecossistema, como a polinização e a dispersão de sementes. Muitas espécies são diurnas, alimentando-se de frutas, insetos, néctar e pequenos vertebrados. Algumas aves, como o sabiá-laranjeira, são conhecidas por seus cantos melodiosos ao amanhecer. Cada espécie costuma ter um território definido, usado para alimentação, reprodução e vocalização.',
    reproducao: 'A maioria das aves da Mata Atlântica se reproduz durante a primavera e o verão, quando há maior disponibilidade de alimento. Os ninhos podem ser construídos em árvores, arbustos ou no chão, dependendo da espécie. O número de ovos e o tempo de incubação variam, mas geralmente os filhotes nascem indefesos e são cuidados pelos pais até estarem prontos para voar e se alimentar sozinhos.',
    conservacao: 'Apesar de sua grande diversidade, muitas aves da Mata Atlântica estão ameaçadas de extinção devido à perda de habitat, tráfico ilegal e mudanças climáticas. Espécies como o papagaio-da-cara-roxa e o soldadinho-do-araripe estão entre as mais vulneráveis. A criação de áreas protegidas, corredores ecológicos e projetos de reintrodução têm ajudado na preservação dessas aves.',
  },

  {img: require('../../../../assets/Aves caatinga botão.png'), 
    foto: require('../../../../assets/Aves caatinga real.jpg'),
    nome: 'Aves da Caatinga',
    desc: 'As aves da Caatinga se destacam por sua incrível adaptação ao clima seco e à vegetação esparsa desse bioma exclusivamente brasileiro. Com cerca de 500 espécies registradas, muitas são endêmicas, ou seja, só existem ali. As plumagens variam entre tons terrosos, amarelos e acinzentados, o que ajuda na camuflagem. Algumas aves, como o carcará e o asa-branca, são símbolos da região.',
    habitos: 'Essas aves apresentam comportamentos variados para lidar com a escassez de água e alimento. Muitas são ativas nas primeiras horas da manhã e no fim da tarde, evitando o calor intenso do meio-dia. Alimentam-se de sementes, frutos, insetos e pequenos vertebrados. Algumas espécies, como o coró-coró, realizam migrações sazonais em busca de recursos. Seus cantos são usados para comunicação territorial e reprodutiva.',
    reproducao: 'O período reprodutivo geralmente coincide com a estação das chuvas, quando há maior abundância de alimento. Os ninhos são feitos em buracos, galhos ou até no chão, dependendo da espécie. Em geral, os pais cuidam dos ovos e alimentam os filhotes até que estejam prontos para se tornarem independentes.',
    conservacao: 'A degradação ambiental, a desertificação e o avanço de atividades humanas, como desmatamento e agropecuária, ameaçam a biodiversidade da Caatinga. Ainda assim, várias aves demonstram grande resiliência. Espécies como o periquito-da-caatinga e o soldadinho-do-sertão enfrentam risco de extinção. Projetos de educação ambiental e áreas de conservação têm sido fundamentais para proteger essas espécies e seu habitat.',
  },

  {img: require('../../../../assets/Aves amazonia botão.png'), 
    foto: require('../../../../assets/Aves amazonia real.jpg'),
    nome: 'Aves da Amazônia',
    desc: 'A Amazônia abriga a maior diversidade de aves do planeta, com mais de 1.300 espécies registradas. As aves amazônicas variam muito em tamanho e aparência — desde pequenos beija-flores até imponentes araras e gaviões. Suas plumagens são geralmente coloridas e chamativas, com combinações vibrantes de azul, verde, vermelho e amarelo, o que ajuda na comunicação em meio à vegetação densa da floresta.',
    habitos: 'A maioria das aves amazônicas é diurna, com hábitos variados de alimentação. Muitas espécies são frugívoras (comem frutas), enquanto outras se alimentam de sementes, néctar, insetos, peixes ou pequenos vertebrados. Vivem em diferentes estratos da floresta: algumas no dossel (topo das árvores), outras no sub-bosque ou próximo ao solo. Seus cantos e vocalizações são usados para demarcar território, atrair parceiros e se comunicar com o grupo.',
    reproducao: 'A reprodução pode ocorrer em diferentes épocas do ano, dependendo da espécie e da oferta de alimento. Os ninhos são feitos em ocos de árvores, galhos ou cupinzeiros. Algumas espécies, como os tucanos, utilizam cavidades abandonadas por outros animais. Os filhotes nascem geralmente indefesos e são alimentados pelos pais até poderem voar e buscar alimento sozinhos.',
    conservacao: 'Apesar de sua imensa biodiversidade, as aves da Amazônia enfrentam sérias ameaças, como o desmatamento, queimadas, mineração e tráfico ilegal. Espécies como o galo-da-serra e a arara-azul estão entre as mais afetadas. A criação de unidades de conservação, a fiscalização de crimes ambientais e o incentivo à pesquisa científica são fundamentais para proteger as aves e os ecossistemas amazônicos.',
  },

  {img: require('../../../../assets/Aves pantanal botão.png'), 
    foto: require('../../../../assets/Aves pantanal real.jpg'),
    nome: 'Aves do Pantanal',
    desc: 'O Pantanal é um dos ecossistemas mais ricos em aves das Américas, com cerca de 650 espécies registradas. A abundância de água, especialmente durante a cheia, atrai aves aquáticas e terrestres de todas as cores e tamanhos. É comum ver grandes bandos e espécies emblemáticas como o tuiuiú, símbolo do Pantanal, além de colhereiros, garças, e araras. As plumagens costumam ser vistosas, facilitando a identificação mesmo a longas distâncias.',
    habitos: 'As aves pantaneiras apresentam comportamentos diversos, adaptados às variações sazonais do ambiente. Durante a cheia, muitas se alimentam de peixes e pequenos animais aquáticos; na seca, aproveitam frutos e insetos em áreas mais secas. São ativas principalmente ao amanhecer e ao entardecer. Muitas espécies são migratórias, aproveitando os períodos mais favoráveis do ano. Os cantos e voos em grupo são um espetáculo comum no céu pantaneiro.',
    reproducao: 'A época de reprodução costuma coincidir com a estação da seca, quando os ninhos ficam mais protegidos das cheias. Eles são construídos em árvores, barrancos ou ilhas. Algumas espécies, como o jaburu (tuiuiú), constroem ninhos enormes reutilizados por vários anos. Os pais cuidam dos ovos e alimentam os filhotes até que estejam prontos para voar e se alimentar sozinhos.',
    conservacao: 'Apesar de ser uma das áreas mais bem preservadas do Brasil, o Pantanal enfrenta ameaças crescentes, como queimadas, desmatamento e expansão agropecuária. Esses fatores afetam diretamente a vida das aves e de todo o ecossistema. Espécies como a arara-azul-grande, antes ameaçada, têm se recuperado graças a projetos de conservação. O turismo ecológico e a educação ambiental também têm sido aliados importantes na proteção da avifauna pantaneira.',
  },

  {img: require('../../../../assets/Serpentes botão.png'), 
    foto: require('../../../../assets/Serpentes real.jpg'),
    nome: 'Serpentes',
    desc: 'As serpentes são répteis alongados, sem membros, com o corpo coberto por escamas. Existem mais de 400 espécies no Brasil, com grande variedade de cores, tamanhos e hábitos. Algumas são venenosas, como a jararaca e a coral-verdadeira, enquanto outras, como a jiboia, matam suas presas por constrição. Seus sentidos são altamente adaptados: percebem vibrações do solo, têm boa visão em algumas espécies e usam a língua bífida para “sentir” o ambiente através do olfato.',
    habitos: 'As serpentes podem viver em diversos ambientes, desde florestas e campos até áreas urbanas. Muitas são solitárias e discretas, com hábitos diurnos ou noturnos, dependendo da espécie. Alimentam-se de roedores, aves, anfíbios, ovos e até outras serpentes. São predadoras importantes no equilíbrio dos ecossistemas, controlando populações de pequenos animais.',
    reproducao: 'A reprodução varia bastante entre as espécies. Algumas botam ovos (ovíparas), outras dão à luz filhotes já formados (vivíparas). A época reprodutiva geralmente coincide com as estações mais quentes e úmidas do ano. Os filhotes nascem independentes e já possuem as mesmas habilidades de caça e defesa dos adultos, inclusive veneno, no caso das espécies peçonhentas.',
    conservacao: 'Apesar de serem essenciais para os ecossistemas, as serpentes enfrentam perseguição por medo ou desinformação. Muitas são mortas em áreas rurais e urbanas, mesmo quando inofensivas. A perda de habitat e atropelamentos em estradas também são ameaças comuns. Projetos de educação ambiental e conservação têm ajudado a reduzir o preconceito e proteger espécies ameaçadas, como a sucuri-verde e a jararaca-ilhoa.',
  },

  {img: require('../../../../assets/Micos botão.png'), 
    foto: require('../../../../assets/Micos real.jpg'),
    nome: 'Micos',
    desc: 'Os micos são pequenos primatas do gênero Callithrix, nativos das florestas brasileiras. Possuem corpo ágil, cauda longa e peluda (não preênsil), e pesam em média de 300 a 500 gramas. Sua pelagem varia conforme a espécie, podendo ser cinza, preta, branca ou dourada. Destacam-se pelas orelhas com tufos de pelos e pelos olhos expressivos. São animais inteligentes e muito sociais.',
    habitos: 'Vivem em grupos familiares de até 15 indivíduos, mantendo forte interação entre si. Ativos durante o dia (diurnos), passam boa parte do tempo em árvores, pulando de galho em galho. Alimentam-se de frutas, insetos, flores, pequenos vertebrados e a seiva das árvores, que extraem com seus dentes afiados. Comunicando-se por vocalizações, expressões faciais e movimentos corporais, os micos têm uma vida social complexa.',
    reproducao: 'A reprodução ocorre principalmente na estação chuvosa. As fêmeas geralmente têm dois filhotes por gestação, após cerca de 140 dias de gravidez. É comum o grupo todo ajudar a cuidar dos filhotes, incluindo o macho dominante. Os pequenos são carregados nas costas pelos adultos até poderem se locomover sozinhos e aprender a encontrar alimento.',
    conservacao: 'Muitos micos estão ameaçados de extinção devido ao desmatamento, tráfico de animais silvestres e introdução de espécies exóticas. Espécies como o mico-leão-dourado, mico-leão-preto e mico-leão-da-cara-dourada são endêmicas da Mata Atlântica e extremamente vulneráveis. Projetos de conservação, como reflorestamento, criação de corredores ecológicos e reintrodução de animais em áreas protegidas, têm sido essenciais para sua sobrevivência.',
  },

  {img: require('../../../../assets/Anfibios botão.png'), 
    foto: require('../../../../assets/Anfibios real.jpg'),
    nome: 'Anfíbios',
    desc: 'Os anfíbios são vertebrados que vivem parte da vida na água e parte em terra firme. No Brasil, existem mais de 1.100 espécies conhecidas, a maioria delas sapos, rãs e pererecas, além de algumas salamandras e cecílias (sem patas). Possuem pele fina, úmida e permeável, que auxilia na respiração e na troca de substâncias com o ambiente. Muitos apresentam cores vivas e padrões chamativos, usados para defesa ou camuflagem.',
    habitos: 'São geralmente animais de hábitos noturnos e costumam viver em ambientes úmidos, como florestas, brejos e margens de rios. Alimentam-se de insetos, vermes e outros pequenos invertebrados, sendo importantes controladores de pragas. Para se protegerem, algumas espécies secretam substâncias tóxicas pela pele ou emitem sons para afastar predadores.',
    reproducao: 'A reprodução ocorre geralmente em épocas chuvosas, quando há abundância de água. A maioria das espécies realiza fecundação externa, com o macho abraçando a fêmea (amplexo) enquanto ela libera os ovos na água. Os ovos eclodem em girinos, que passam por metamorfose até se transformarem em adultos. Em algumas espécies, o cuidado parental é bem desenvolvido, com os pais protegendo ou transportando os filhotes.',
    conservacao: 'Os anfíbios estão entre os grupos mais ameaçados do planeta, devido à poluição da água, perda de habitat, mudanças climáticas, atropelamentos e doenças como a quitridiomicose. Muitas espécies brasileiras ainda nem foram descritas pela ciência. A preservação de áreas naturais, o monitoramento de populações e a educação ambiental são essenciais para garantir a sobrevivência desses animais tão sensíveis e importantes para os ecossistemas.',
  },

  {img: require('../../../../assets/Formigueiro botão.png'), 
    foto: require('../../../../assets/Formigueiro real.jpg'),
    nome: 'Formigueiro',
    desc: 'O formigueiro é a estrutura construída por formigas para abrigar a colônia. Pode variar bastante em tamanho e forma, dependendo da espécie, indo desde simples túneis no solo até complexas estruturas com câmaras internas e longos corredores. Algumas espécies constroem formigueiros em árvores ou usam folhas para criar ninhos suspensos. Um único formigueiro pode abrigar milhares ou até milhões de indivíduos, organizados de forma hierárquica.',
    habitos: 'As formigas vivem em sociedade e cada indivíduo tem uma função bem definida: rainha (reprodutora), operárias (trabalhadoras) e soldados (defesa). As operárias saem do formigueiro para buscar alimento, que pode ser folhas, sementes, pequenos insetos ou substâncias açucaradas. A comunicação entre elas é feita principalmente por feromônios, permitindo localizar fontes de alimento e alertar sobre perigos.',
    reproducao: 'A rainha é responsável por botar os ovos dentro do formigueiro. Durante o chamado “voo nupcial”, machos e fêmeas alados saem da colônia para acasalar. Após o acasalamento, a fêmea fecundada perde as asas e inicia um novo formigueiro. As larvas se desenvolvem em câmaras internas e são alimentadas e protegidas pelas operárias. A rainha pode viver por vários anos, enquanto os machos vivem pouco tempo.',
    conservacao: 'Embora formigas sejam abundantes e adaptáveis, algumas espécies enfrentam ameaças por perda de habitat e uso excessivo de agrotóxicos. Além disso, desequilíbrios ecológicos podem fazer com que certas espécies se tornem pragas. Por outro lado, formigas são fundamentais para o solo, pois ajudam na aeração, reciclagem de nutrientes e controle biológico de outros insetos. Preservar seus ambientes naturais é essencial para manter o equilíbrio ecológico.',
  },

  {img: require('../../../../assets/Invertebrados botão.png'), 
    foto: require('../../../../assets/Invertebrados real.jpg'),
    nome: 'Invertebrados',
    desc: 'Os invertebrados são animais que não possuem coluna vertebral. Representam mais de 95% de todas as espécies do reino animal e incluem grupos como insetos, aracnídeos, crustáceos, moluscos, vermes e equinodermos. Apresentam enorme diversidade de formas, tamanhos e adaptações, podendo viver em ambientes aquáticos, terrestres e até parasitar outros organismos. Alguns têm exoesqueleto rígido (como insetos), enquanto outros possuem corpo mole (como as lesmas e polvos).',
    habitos: 'Os hábitos dos invertebrados são extremamente variados. Alguns são diurnos, outros noturnos; alguns vivem isolados, enquanto outros formam colônias complexas, como abelhas e cupins. Alimentam-se de folhas, frutos, néctar, restos orgânicos, outros animais ou até sangue, no caso de parasitas. São fundamentais para os ecossistemas, atuando na polinização, decomposição da matéria orgânica e servindo de alimento para diversos vertebrados.',
    reproducao: 'A reprodução também é diversa: pode ser sexuada ou assexuada, com ou sem metamorfose. Muitos invertebrados botam ovos, e alguns passam por fases distintas de desenvolvimento, como larva, pupa e adulto. Há também espécies hermafroditas, que produzem tanto óvulos quanto espermatozoides. Em colônias sociais, como as das formigas e abelhas, apenas alguns indivíduos se reproduzem, enquanto os demais trabalham para manter a colônia.',
    conservacao: 'Apesar de serem frequentemente ignorados, os invertebrados sofrem com a perda de habitat, poluição, mudanças climáticas e uso de pesticidas. A redução de suas populações pode impactar diretamente a cadeia alimentar e o funcionamento dos ecossistemas. A preservação de ambientes naturais, o uso responsável de defensivos agrícolas e a educação ambiental são importantes para garantir a sobrevivência desses pequenos — mas indispensáveis — seres vivos.',
  },
    
];
export default function Territorio2() {
  const [cont, setCont] = useState(0);
  const navigation = useNavigation();
  const [visivel, setVisivel] = useState(false);
  const Exibir = (index) => {
    setCont(index);
    setVisivel(true);
  };
  return (
    <ImageBackground source={require('../../../../assets/Fundo T2.png')} style={styles.container}>

      <View style={styles.menu}>
        <View style={styles.botao}>
          <Pressable onPress={() => navigation.navigate('Home')} style={styles.voltarA}><Image resizeMode="contain" style={styles.voltar} source={require('../../../../assets/Voltar.png')}></Image></Pressable>
          
        </View>

        <View style={styles.titulo}>
          <Image resizeMode="contain" style={styles.tituloP} source={require('../../../../assets/Territorio 2 titulo.png')}/>
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
              <Image resizeMode="contain" style={styles.voltarC} source={require('../../../../assets/VoltarT2.png')}/>
            </Pressable>
          </Animatable.View>
        </View>
      </Modal>

      <StatusBar style="auto" hidden={true} />
    </ImageBackground>
  );
}