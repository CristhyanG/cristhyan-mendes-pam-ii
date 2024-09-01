import { Text, View, SafeAreaView, StyleSheet, TextInput } from "react-native";
import  NavButton from '../../components/NavButton'
import {Link} from 'expo-router'
import { useState } from "react";
import React = require("react");

export default function cadastro() {
    const [text, setText] = React.useState('');
    const [number, onChangeNumber] = React.useState('');
  return (

      

    //const imgLike = uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ficons%2Flike&psig=AOvVaw32NDZOfBcwBezu1fnVTvY5&ust=1725060942704000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiXmPeum4gDFQAAAAAdAAAAABAT';
    <SafeAreaView style={styles.body}>
      <Text style={styles.login}>Entrar</Text> 

      <TextInput 
      style={styles.Input} 
      value={text} 
      onChangeText={setText}
      placeholder="blabla"/>
      <View>
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Link href={"../"}>
          <NavButton label={"Voltar"}/>
        </Link>
      
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
  },
  login:{
    fontSize: 40,
    justifyContent: 'center',
  },
  input:{
    backgroundColor: '#000',
  }
});
