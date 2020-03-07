import React, { useState } from 'react'
import { IonList, IonLabel, IonItem, IonAlert} from '@ionic/react'


type NameListProps = {
  names: string[]
  onDelete: (at: number) => void // função q recebe um number e retorna void
}

const NameList: React.FC<NameListProps> = ({
  names, onDelete
}) => {
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [alertVisible, setAlertVisible] = useState(false)
  return(
    <>
    <IonList>
      {names.map((name, index) => {
        return (
          <IonItem 
          button
          onClick={() =>{
            setSelectedIndex(index)
            setAlertVisible(true)
          }}
          key={`NameList_${name}_${index}`}>
            <IonLabel>{name}</IonLabel>
          </IonItem>
        )
      })}
  </IonList>
  <IonAlert 
    isOpen={alertVisible}
    onDidDismiss={() => setAlertVisible(false)}
    header="Confirmar"
    message="Deseja mesmo alterar este nome?"
    buttons={[
      "Não",
      {
        text: "Sim", 
        handler: () => {
          onDelete(selectedIndex)
      }
    }
  ]}
  />
  </>
  )
}
export default NameList