import { Text, View } from "react-native";
import  NavButton from '../components/NavButton'

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <NavButton label={"Botão que te redireciona"} onPress={alert( "giovanni viadão")}/>
        
     
    </View>
  );

 // const index = ({}) => é uma função resumida
}
