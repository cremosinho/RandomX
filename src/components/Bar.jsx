import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

export default props=>{
    return(
        <View style={props.estilo.stBar}>
            <Text style={props.estilo.txBar}>Hello World</Text>
        </View>
    )
}