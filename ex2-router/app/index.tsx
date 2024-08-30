import { Text, View, StyleSheet, FlatList } from "react-native";
import  NavButton from '../components/NavButton'
import {Link} from 'expo-router'

export default function Index() {
  return (
    <View style={styles.container} >
      <View style={styles.barraPesquisa}> 
      {/* barra de pesquisa*/}
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  barraPesquisa: {

  },
  buttonLink: {

  },
})
