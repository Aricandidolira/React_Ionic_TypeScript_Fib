import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import '../theme/home.css';
import NameSetter from '../components/NameSetter';
import NameList from '../components/NameList';
import { start } from 'repl';
import ListSetter from '../components/ListSetter';


const Home3: React.FC = () => {
  const [names, setNames] = useState<string[]>([])
  const addName = (name:string)=>{
    const newNames = [name, ...names]
    setNames(newNames)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="IonToolbar" color="dark">
          <IonTitle>Exercício - Aula 29.02.2020</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <ListSetter
        initialValue="Meu nome é"
        placeholder="Digite seu nome"
        buttonTitle="Definir seu nome"
        onNameSet={addName}/>

        <ListSetter
        initialValue="O nome da sua mãe é"
        placeholder="Digite o nome/mãe"
        buttonTitle="Definir o nome/mãe"
        onNameSet={addName}/>

        <ListSetter
        initialValue="O nome do seu pai é"
        placeholder="Digite o nome/pai"
        buttonTitle="Definir o nome/mãe"
        onNameSet={addName}/>
      </IonContent>
    </IonPage>
  );
};

export default Home3;
