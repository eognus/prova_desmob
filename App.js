import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Jogo from './src/jogo/jogo';
import styles from './src/jogo/style';

export default function App() {
  return (
    <View style={styles.container}>
      <Jogo nome="faca" descricao="poder de ataque: 50
      durabilidade: 50" link="https://www.invictus.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/E/x/Explorer_Black_1_1.jpg"/>
      <Jogo nome="arco" descricao="poder de ataque: 20
      durabilidade: 20" link="https://img.freepik.com/vetores-premium/arco-com-flechas-para-fotografar_110233-2236.jpg?w=2000"/>
      <Jogo nome="espada" descricao="poder de ataque: 70
      durabilidade: 40" link="https://images-na.ssl-images-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/51043rDOX7L._AC_UL210_SR210,210_.jpg"/>
      <StatusBar style="auto" />
    </View>
  );
}

