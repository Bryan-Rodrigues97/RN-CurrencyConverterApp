import { View, Text, ScrollView } from "react-native";
import styles from "./style";
import { useEffect } from "react";
import { showCurrencyBRL } from "../utils/currencyFormat";

export function ConvertResult({currency,currencyValue,conversionRate}){

    useEffect(()=>{
    },[currencyValue])
    
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Text style={styles.currencyValue}>
                    {showCurrencyBRL(Number(currencyValue),currency)}
                </Text>
            </ScrollView>
            <Text style = {styles.currencyText}>Corresponde a</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Text style={styles.currencyValue}>
                    {showCurrencyBRL(conversionRate * currencyValue,'BRL')}
                </Text>
            </ScrollView>
        </View>
    )
}