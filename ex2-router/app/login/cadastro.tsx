import { View, SafeAreaView, StyleSheet } from "react-native";
import React from 'react';
import Formulario from '../../components/form';


export default function cadastro() {
    return (
      <SafeAreaView>
        <View>
          <Formulario tipo="Cadastro"/>
        </View>
      </SafeAreaView>
    )
  

}

const styles = StyleSheet.create({
  
});
