import { Text, View, SafeAreaView, StyleSheet, TextInput  } from "react-native";
import NavButton from '../../components/NavButton'
import { Link } from 'expo-router'
import { useState } from "react";
import { useForm, Controller} from 'react-hook-form';
import React from 'react';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object ({
  email: yup.string().email("email inválido").required("informe seu email"),
  senha: yup.string().required("digite sua senha")
})

export default function cadastro() {
  const {control, handleSubmit, formState: {errors} } = useForm ({ /* é possível usar o defaultValues dentro de ({}) para colocar alguumas definições de valores*/
    resolver: yupResolver(schema),
  }) 

  function handleSignIn(data){
    alert(data.senha);
  }
  
  return (


    
    //const imgLike = uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ficons%2Flike&psig=AOvVaw32NDZOfBcwBezu1fnVTvY5&ust=1725060942704000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiXmPeum4gDFQAAAAAdAAAAABAT';
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
       
        <Text style={styles.cadastroTiltle}>Cadastrar</Text>
        
        <Text >Email</Text>      
        <Controller //FAZER UM COMPONENTE CONTROLLER
          control={control} //user form => linha 9
          name="email" //nome do campo
          render={({ field: {onChange, onBlur, value} }) => ( //render = renderizar / passa também propriedaes dessa função criada
            <TextInput
            style={styles.input}
            placeholder="   Digite seu Email"
            onChangeText={onChange} //troca os use state por prop da renderização
            onBlur={onBlur} //chamado quando o text input é trocado
            defaultValue={value} //troca valor de estado por valor de propriedade
            keyboardType="email-address"
            />
          )}
        />
        {errors.email && <Text style={styles.labelErrors}> {errors.email?.message} </Text>}
        
        <Text >Senha</Text>
        <Controller
          control={control} //user form => linha 9
          name="senha" //nome do campo
          render={({ field: {onChange, onBlur, value} }) => ( //render = renderizar / passa também propriedaes dessa função criada
            <TextInput
            style={styles.input}
            placeholder="   Digite sua Senha"
            onChangeText={onChange} //troca os use state por prop da renderização
            onBlur={onBlur} //chamado quando o text input é trocado
            defaultValue={value} //troca valor de estado por valor de propriedade
            keyboardType="default"
            secureTextEntry={true}
          /> )}
        />
        {errors.senha && <Text style={styles.labelErrors}> {errors.senha?.message} </Text>}


       
       
        <View style={styles.btns}>
          
          <NavButton
            label={'Cadastrar'}
            style={styles.btnCadastro}
            onPress={handleSubmit(handleSignIn)} //invés de mudança de estado chama esta função handleSign com status handleSubmit
          />


          <Link href={'/'}>
            <NavButton label={'Voltar'}></NavButton>
          </Link>
    
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    
  },
  container:{
    flex: 1,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center'
  },
  input: {
    height:30,
    fontWeight: 'light',
    justifyContent: 'center',
    borderColor: '#023',
    borderStyle: "solid",
    backgroundColor:'#c7c7c7',
    width: 300,
    color:'#000',
    borderRadius: 10,
    marginLeft: 20,
  },
  btns:{
    padding: 50,
    flexDirection:'row',
    justifyContent: 'space-around',
    width: 480,

  },
  btnCadastro:{
    width: 30,
  },
  cadastroTiltle:{
    fontSize: 20,
  },
  labelErrors: {
    alignSelf: 'center',
    color: '#ff375b',
    margin: 8,
  }
 
});
