import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useRef, useState } from 'react';
import '../theme/home.css';
import NameSetter from '../components/NameSetter';
import NameList from '../components/NameList';
import ContextualNameSetter from '../components/ContextualNameSetter';
import ContextualNameList from '../components/ContextualNameList';

// alt + shift + o = organiza imports
// ... = pega todos valores q estão no array ou objeto em outro
const Home: React.FC = () => {
  /*const [names, setNames] = useState<string[]>([])

  const addName = (name: string) =>
  {
      const newNames = [name, ...names]
      setNames(newNames)
  }

  const inputRef = useRef<HTMLIonInputElement>(null)
  //const [inputText, setText] = useState('')
    */


 
    // coordena as animações e transições entre as paginas 
    //IonHeader cabeçalho
    //IonToolbar a bara, componentes organizaveis
    // IonContent conteudo, animação, scrollview
          /*<p>
          Psiu, click here{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
            docs
          </a>{' '}
          Make your self!
        </p>*/



      /*  <IonInput 
                  type="text" 
                  placeholder="write bb">
                    
                 // value={inputText}
                  //onIonChange={(e) =>
                  //             {
                   //             setText(e.detail.value ?? '')
                   //             }}>

            </IonInput>*/

               /*
         //initialValue="Seu nome é:"
           // placeholder="Defina seu nome:"
            buttonTitle="Envie seu nome"
            onNameSet={addName}/>
            <NameList names={names} onDelete={(at: number)=> {
              const newNames = [...names]
              //removendo array
              newNames.splice(at, 1)
              setNames(newNames)
            }}/> */
return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="dark">
          <IonTitle>AulaFib - Ionic</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">

          <ContextualNameSetter
          initialValue="Seu nome é:"
          placeholder="Defina seu nome:"
          buttonTitle="Envie seu nome" />
          
          <ContextualNameList/>
      </IonContent>
    </IonPage>
  );
};

export default Home;
