import { Text, View } from "react-native";
import  NavButton from '../components/NavButton'
import {Link} from 'expo-router'
import { useState } from "react";

export default function Index() {
  return (
    //const imgLike = uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ficons%2Flike&psig=AOvVaw32NDZOfBcwBezu1fnVTvY5&ust=1725060942704000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiXmPeum4gDFQAAAAAdAAAAABAT';
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={"/index"}>
      <NavButton label={"Voltar"}/>
      </Link>
     
    </View>
  );

 
}
