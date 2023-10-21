import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Bar from './components/Bar'
import Interact from './components/Interact';

export default App=>{
  return(
    <SafeAreaView style={estilo.stPage}>
      <Bar estilo={estilo}></Bar>
      <Interact estilo={estilo}></Interact>
    </SafeAreaView>
  )
}

const estilo = StyleSheet.create({
  stPage:{
    justifyContent:'space-around',
    alignItems:'center'
  },
  stBar:{
    width:'100%',
    height: 60,
    backgroundColor: '#000',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  txBar:{
    color:'#fff',
    fontWeight:'bold',
    fontSize: 20
  },
  stContainer:{
    borderRadius: 15,
    shadowColor:'#000',
    shadowOpacity: 0.7,
    shadowOffset: 2,
    flexGrow:4
  },
  spAround:{
    justifyContent:'space-around'
  }
})