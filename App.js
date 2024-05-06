import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Converter } from './src/components/converter/Converter';
import { useEffect, useState } from 'react';
import api from './src/services/api';

//https://economia.awesomeapi.com.br/json/all

export default function App() {
  const [currencyList, setCurrencyList] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    async function loadCurrencyList(){
      await api.get('/json/all')
              .then((json)=>{
                setCurrencyList(json.data)
                setLoading(false)
              })
              .catch(()=>console.error("Erro na Requisição HTTP") )
              .finally(()=>console.log("Saiu"))
    }
    
    loadCurrencyList();
  },[])

  if(loading){
    return(
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator />
      </View>
    ) 
  }

  return (
    <View style={styles.container}>
      <Converter style={styles.converter} currencyList={currencyList}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#646464',
    alignItems: 'center',
    paddingTop: 80
  }  
});
