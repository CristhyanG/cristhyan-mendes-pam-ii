import { Text, View } from "react-native";
import  NavButton from '../components/NavButton'
import {Link} from 'expo-router'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={"/cadastro"}>
      <NavButton label={"Cadastrar"}/>
      </Link>
     
    </View>
  );

 // const index = ({}) => é uma função resumida
}
