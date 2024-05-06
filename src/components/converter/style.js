import { StyleSheet } from "react-native"

const style = StyleSheet.create({
    container:{
        width:"85%",
    },
    currencySelectorContainer:{
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        backgroundColor:"#FFF",
        padding:10,
        borderBottomColor:"#CCC",
        borderStyle:"solid",
        borderBottomWidth:1
    },
    valueSelectorContainer:{
        backgroundColor:"#FFF",
        padding:10
    },
    valueInput:{
        fontSize:18,
        paddingVertical:10
    },
    buttonContainer:{
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F32F2F",
        height:50,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
    },
    buttonText:{
        color:"#FFF",
        fontSize:18,
        fontWeight:"900"
    }
})

export default style;