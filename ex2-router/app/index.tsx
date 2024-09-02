import * as react from  'react';
import { Text, View, StyleSheet } from "react-native";
import  NavButton from '../components/NavButton';
import SearchBar from '../components/SearchBar';
import {Link} from 'expo-router'

export default function Index() {
 
  return (
    <View style={styles.container}>
      
      <View style={styles.barraPesquisa}> 
        <SearchBar/>
      </View>

      <View style={styles.buttonLink}> 
        <Link href={"login/cadastro"}>
          <NavButton label={"Cadastrar"}/>
        </Link>
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

  },
})
