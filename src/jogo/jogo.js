import { Button, View, Text, Image } from "react-native";
import styles from "./style";


function Jogo(props){

    return(
        <View style={styles.card}>
                <Text style={styles.title}> Nome: {props.nome} </Text>
                <Text> {props.descricao} </Text>
                <Button title="Trocar Item"/>
                <Image source={ props.link} style={styles.img}/>
        </View>
    );
}

export default Jogo;