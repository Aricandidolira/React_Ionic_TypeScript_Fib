import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonButton, IonIcon } from '@ionic/react';
import ContextualNameList from '../components/ContextualNameList';
import '../theme/home.css';
import { useHistory } from 'react-router';
import {addCircle} from 'ionicons/icons';

//para adicionar os icones --> import {addCircle} from 'ionicons/icons'; --> <IonIcon icon={addCircle}/>

//IonContent o conteudo
//hooks reutilizam o estado do react
const ListPage: React.FC = () => {
    //separar os components que fazem parte da pagina do resto

    //evento de navegação
    const history = useHistory()

    //tratar e inserindo o botão click
    const handleInsert = () => {
        history.push('/insert')
    }
    
    return(
        <IonPage id="list" >
            <IonHeader>
                <IonToolbar  color="dark">
                    <IonTitle>Lista de Nomes</IonTitle>
                    <IonButtons slot="end">
                        <IonButton onClick={handleInsert}>
                            <IonIcon icon={addCircle}/>

                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <ContextualNameList></ContextualNameList>
            </IonContent>
        </IonPage>
    )
}
export default ListPage