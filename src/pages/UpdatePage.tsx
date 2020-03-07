import React, { useContext } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from '@ionic/react';
import '../theme/home.css';
import ContextualNameSetter from '../components/ContextualNameSetter';
import { useHistory, useParams } from 'react-router';
import { AppContext } from '../contexts/AppContext';
import { ActionSheetOptionStyle } from '@capacitor/core';
import NameSetter from '../components/NameSetter'


type UpdateParams = {
    idx?: string
}


//IonBackButton botão de voltar do IONIC
// slot="" propriedade para defenir local do botão
// history da nossa navegação
const UpdatePage: React.FC = () => {

    const params: UpdateParams = useParams()
    if(params.idx === undefined){
        throw new Error('Cade o indice')
    }
    

    const idx = parseInt(params.idx)

    const [appData, dispatchAppData] = useContext(AppContext)
    const initialName = appData.names[idx]

    // evento para voltar sozinho a lista ao inserir
    const history = useHistory()
    const handleBack = () =>{
        history.goBack()
    }

    return(
        <IonPage id="update" >
            <IonHeader>
                <IonToolbar  color="dark">
                    <IonButtons slot="start">
                        <IonBackButton></IonBackButton>
                    </IonButtons>
                    <IonTitle>Update Names</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <NameSetter 
                                    initialValue={initialName}
                                    placeholder="Mude Nome"
                                    buttonTitle="Atualizar"
                                    onNameSet={(name) => { dispatchAppData({
                                        action:{ type: 'update',
                                        at: idx, to: name
                                    }
                                     
                                    })
                                    handleBack()
                                }}
                                />
            </IonContent>
        </IonPage>
    )
}

export default UpdatePage