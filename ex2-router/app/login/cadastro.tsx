import { View, SafeAreaView, StyleSheet } from "react-native";
import React from 'react';
import Formulario from '../../components/form';
import { useState, useEffect } from "react";
import firebase from 'firebase/app';
import{ getDocs, getFirestore, collection } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBH9c1JNyktUuTwn9D58byBU1zJwFXfpqQ",
  authDomain: "ex--routerdb.firebaseapp.com",
  projectId: "ex--routerdb"

};
//const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
//const userCollectionRef = collection(db, "Usuários");
  

export default function cadastro() {
  
  {/*useEffect(()=> {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef)
      console.log(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
    }
    getUsers();
  });*/}
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
