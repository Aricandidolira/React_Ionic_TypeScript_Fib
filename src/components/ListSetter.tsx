import React, { useState } from 'react'
import { IonList, IonLabel, IonItem, IonAlert} from '@ionic/react'
import NameList from '../components/NameList'
import NameSetter, {NameSetterProps} from './NameSetter'

const ListSetter: React.FC<NameSetterProps> = ({
  initialValue, placeholder, buttonTitle
}:NameSetterProps) => {
    const [names, setNames] = useState<string[]>([])
    const addName = (name: string) => {const newNames = [name, ...names]
    setNames(newNames)
}
  return(
          <>
          <NameSetter
            initialValue={initialValue}
            placeholder={placeholder}
            buttonTitle={buttonTitle}
            onNameSet={addName} />
        <NameList names={names} onDelete={(at:number) => {
            const newNames = [...names]
            newNames.splice(at,1)
            setNames(newNames)
        }} />
        </>
  )
}
export default ListSetter