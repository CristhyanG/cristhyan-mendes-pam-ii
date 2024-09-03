import { Text, View, SafeAreaView, StyleSheet, TextInput } from "react-native";
import NavButton from '../../components/NavButton'
import { Link } from 'expo-router'
import { useState } from "react";
import React = require("react");

export default function cadastro() {
  const [text, setText] = React.useState(null);
  const [password, setPassword] = React.useState(null)
  const [Cpassword, setCPassword] = React.useState(null)
  const [number, setNumber] = React.useState(null);
  return (



    //const imgLike = uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ficons%2Flike&psig=AOvVaw32NDZOfBcwBezu1fnVTvY5&ust=1725060942704000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiXmPeum4gDFQAAAAAdAAAAABAT';
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <Text style={styles.cadastroTiltle}>Cadastrar</Text>
        <Text >Email</Text>
              
        <TextInput
          style={styles.login}
          placeholder="   Digite seu Email"
          onChangeText={newText => setText(newText)}
          defaultValue={text}
          keyboardType="email-address"
        />
        

        <Text>Senha</Text>
        <TextInput
          style={styles.login}
          placeholder="   Digite sua senha"
          onChangeText={newPassword => setPassword(newPassword)}
          defaultValue={password}
          keyboardType="visible-password"
          secureTextEntry={true}

        />
       <Text>Confirme sua Senha</Text>
        <TextInput
          style={styles.login}
          placeholder="   Confirme sua senha"
          onChangeCPassword={newCPassword => setCPassword(newCPassword)}
          defaultValue={Cpassword}
          keyboardType="visible-password"
          secureTextEntry={true}

        />
        
        <View style={styles.btns}>

        <Link href={'/'}>
        <NavButton label={'Cadastrar'} style={styles.btnCadastro} />
        </Link>

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
  login: {
    height:30,
    fontWeight: 'light',
    justifyContent: 'center',
    borderColor: '#023',
    borderStyle: 'solid',
    backgroundColor:'#c7c7c7',
    width: 300,
    color:'#a1a1a1',
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
  }
 
});
