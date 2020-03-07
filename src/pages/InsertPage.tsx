import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/react';
import '../theme/home.css';
import ContextualNameSetter from '../components/ContextualNameSetter';
import { useHistory } from 'react-router';

//IonBackButton botão de voltar do IONIC
// slot="" propriedade para defenir local do botão
// history da nossa navegação
const InsertPage: React.FC = () => {
    // evento para voltar sozinho a lista ao inserir
    const history = useHistory()
    const handleBack = () =>{
        history.goBack()
    }

    return(
        <IonPage id="insert" >
            <IonHeader>
                <IonToolbar  color="dark">
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Inserir Names</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <ContextualNameSetter 
                                    initialValue="Nome da pessoa"
                                    placeholder="Insira o Nome"
                                    buttonTitle="Adicionar"
                                    onNameSet={handleBack}
                                />
            </IonContent>
        </IonPage>
    )
}

export default InsertPage