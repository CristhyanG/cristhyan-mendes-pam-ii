import { useState, useEffect } from "react";
import firebase from 'firebase/app';
import{ getDocs, getFirestore, collection, addDoc } from 'firebase/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBH9c1JNyktUuTwn9D58byBU1zJwFXfpqQ",
    authDomain: "ex--routerdb.firebaseapp.com",
    projectId: "ex--routerdb"
  
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const userCollectionRef = collection(db, "Usuários");

  export default function Connection () {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        const getUsers = async () => {
        try {
            const data = await getDocs(userCollectionRef);
            setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        } catch (error) {
            console.error("Erro ao obter os documentos: ", error);
        }
        };

        getUsers();
    }, []); // Executa apenas uma vez ao montar o componente
  }
    
  
