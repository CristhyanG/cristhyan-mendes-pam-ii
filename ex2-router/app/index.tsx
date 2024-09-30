import * as React from  'react';
import { Text, View, StyleSheet } from "react-native";
import  NavButton from '../components/NavButton';
import SearchBar from '../components/SearchBar';


export default function Index() {
 
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.barraPesquisa}> 
          <SearchBar/>
        </View>

        <View style={styles.buttonLink}> 
            <NavButton
              onPress={()=> {}} 
              caminho={"login/cadastro?tipoForm=NovoCadastro"} 
              label={"Cadastrar"} 
            />        
            <NavButton
            onPress={()=> {}}
            caminho={"login/cadastro?tipoForm=Login"}
            label={"Entrar"}
            />
        </View>
        <NavButton
      onPress={()=> {}}
      caminho={"login/cadastro?tipoForm=NovaVaga"}
      label={"Publicar uma nova vaga"}
        />
      </View>

    </View>
  );
 // const index = ({}) => é uma função resumida
}

const styles = StyleSheet.create 
({
  container: {
    marginTop: 20,
    flex: 1,
    justifyContent: "space-around",
    flexDirection:'row',
  },
  barraPesquisa: {

  },
  buttonLink: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
})
