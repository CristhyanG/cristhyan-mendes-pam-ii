import { View, SafeAreaView, StyleSheet, Text } from "react-native";
import React from 'react';
import Formulario from '../../components/form';
import { useLocalSearchParams } from "expo-router";


const firebaseConfig = {
  apiKey: "AIzaSyBH9c1JNyktUuTwn9D58byBU1zJwFXfpqQ",
  authDomain: "ex--routerdb.firebaseapp.com",
  projectId: "ex--routerdb"

};
//const app = initializeApp(firebaseConfig);
//const db = getFirestore(app);
//const userCollectionRef = collection(db, "Usuários");
  

export default function cadastro() {
  const tipoForm = useLocalSearchParams();
  const tipoFormString = tipoForm?.tipoForm; 
  console.log("tipo: ", tipoFormString)
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
          
          <Formulario tipo={tipoFormString}/>
          
        </View>
       
        {
      /* <View>
            <ul>
              {users.map((user)=> {
                return(
                  <div key={user.id}>
                  <li>{user.usEmail}</li>
                  </div>
                );
              })}
            </ul>
      </View> código que mostra dados do banco*/
      }
      
      </SafeAreaView>
    )
  

}

const styles = StyleSheet.create({
  
});
