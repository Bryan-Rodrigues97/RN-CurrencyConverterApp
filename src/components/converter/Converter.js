import { View, Text, TextInput, TouchableOpacity } from "react-native";
import style from "./style";
import {Picker} from '@react-native-picker/picker';
import { useState } from "react";
import { ConvertResult } from "../convertResult/ ConvertResult";


export function Converter({currencyList}){
    const [currencyPickerList, setCurrecyPickerList] = useState([]);
    const [currency, selectedCurrency] = useState('');
    const [value, setValue] = useState('');
    const [conversionRate, setConversionRate] = useState(0)
    const [showResult, setShowResult] = useState(false);

    function handleSelectedCurrency(currency){
        setShowResult(false)
        selectedCurrency(currency)
    }

    function handleConversionResult(){
        setConversionRate(currencyList[currency].bid)
        setShowResult(true)
    }

    function pickerItem(){
        return currencyPickerList.map((value,idx)=>{
            return <Picker.Item label={value} value={value} key={idx}/>
        })
    }

    function renderPickerItem(){
        let pickerList = [];

        for (let key in currencyList) {
            pickerList.push(key);
        }

        selectedCurrency(pickerList[0])
        setCurrecyPickerList(pickerList)
    }

    useState(()=>{
        renderPickerItem();
    },[])

    return (
        <View style={style.container}>
            <View style={style.currencySelectorContainer}>
                <Text>Selecione sua moeda</Text>
                <Picker
                selectedValue={currency}
                onValueChange={(itemValue) => handleSelectedCurrency(itemValue)}>
                    {pickerItem()}
                </Picker>
            </View>
            <View style={style.valueSelectorContainer}>
                <Text>Digite um valor para converter em (R$)</Text>
                <TextInput
                style={style.valueInput}
                placeholder="Ex: 100"
                keyboardType="numeric"
                value={value}
                onChangeText={setValue}
                />
            </View>
            <TouchableOpacity activeOpacity={0.8} onPress={()=>handleConversionResult()}>
                <View style={style.buttonContainer}>
                    <Text style={style.buttonText}>
                        Converter
                    </Text>
                </View>
            </TouchableOpacity>

            {showResult && <ConvertResult currency={currency} currencyValue={value} conversionRate={conversionRate}/>}
        </View>
    )
}