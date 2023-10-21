import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';

export default props=>{

    const[qte, setQte] = useState(0)
    const[nums, setNums] = useState([])

    const gerarLista = () => {
        let lista = []
        for(let i = 0; i < qte; i++){
            lista.push(verificar())
        }

        setNums(lista)  
    }

    const verificar = (a) =>{
        let rand = Math.floor(Math.random() * 60) + 1
        if(rand in nums){
            return verificar()
        }else{
            return rand
        }
    }

    estilo = StyleSheet.create({
        container:{
            justifyContent: 'center'
        },

        flex: {
            flexDirection: "row",
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            width: 300,
            marginTop: 50
        },
        myText : {
            margin: 10, 
            fontWeight: 'bold',
            width: 40,
            height: 40,
            borderRadius: 20,
            textAlign: 'center',
            justifyContent:'center',
            backgroundColor: "#d4d4d4"
        }
    })

    return(
        <View style={[props.estilo.stContainer, props.estilo.spAround]}>
            <Text>Informe a quantidade de números:</Text>
            <TextInput value={`${qte}`} onChangeText={e => setQte(e)} keyboardType='numeric'></TextInput>
            <Button title='gerar números' onPress={gerarLista}></Button>
            <View style={estilo.flex}>
                {
                    nums.map((item, index)=>{return<Text style={estilo.myText} key={index}>{item}</Text>})
                }
            </View>
        </View>
    )
}