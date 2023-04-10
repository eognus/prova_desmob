import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    img: {
        witdh: 100 ,
        height: 120 ,
        resizeMode: "stretch"
    },
    container:{
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    },
    card:{
        borderRadius: 10,
        backgroundColor: "yellow",
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        padding: 10,
        flex: 1
    },
    title:{
        fontWeight: "bold",
        fontSize: 30
    }

})

export default styles;