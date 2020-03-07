import React, { useReducer, useEffect } from 'react';
import { Plugins } from '@capacitor/core'

const {Storage} = Plugins

export interface AppData
{
    names: string[]
}

const DEFAULT_APPDATA: AppData = {
    names: []
}

export interface AppDataAction
{
    // strings para fazer determinada action
    //type: 'add' | 'delete'
    //nameToInsert?: string
    //indexToDelete?: number
    
    action: ( {type: 'add', nameToInsert: string} ) | ( {type: 'delete', indexToDelete: number} ) |
   ( {type: 'initialize', state: AppData} ) | ( { type: 'update', at: number, to: string} )
}

//criar contexto e obj para ser compartilhado do tipo data - estado inicial
export const AppContext = React.createContext<[AppData, React.Dispatch<AppDataAction>]>([DEFAULT_APPDATA, () => {}])

//provider responsavel para injetar valor context aonde for necessario

export const AppContextProvider: React.FC<React.PropsWithChildren<{}>> = ({children}: React.PropsWithChildren<{}>) => {
    //reducer -> estado inicial --> função de redução.
    const reducer = useReducer(
        (state: AppData, { action }: AppDataAction): AppData => {

            switch (action.type)
            {
                case 'add': {
                                const newState = {
                                    ...state,
                                    names: [action.nameToInsert,...state.names]
                                }//setand
                                Storage.set({
                                    key: 'appContext',
                                    value: JSON.stringify(newState)
                                })
                                    .catch(() => {})
                                return newState
                             }   

                case 'delete': {
                                    const newNames = [...state.names]
                                    newNames.splice( action.indexToDelete, 1 )

                                    const newState = { ...state, names: newNames}

                                    Storage.set({
                                        key: 'appContext',
                                        value: JSON.stringify(newState)
                                    })
                                    return newState
                               } 
                                  
                case 'initialize':
                    return action.state

                case 'update': { 
                    const newNames = [...state.names]
                    newNames[action.at] = action.to
                    const newState = {
                        ...state, names: newNames
                    }
                    Storage.set({
                        key: 'appContext',
                        value: JSON.stringify(state)
                    })
                    return newState
                }    
            }  
        },
        DEFAULT_APPDATA
    )
    
    useEffect(() => {
        Storage.get({ key: 'appContext'})
            .then((value) => {
                if(!value.value){
                    return
                }
                const state: AppData = JSON.parse(value.value)
                reducer[1]({
                    action: {type: 'initialize', state:state}
                })

            })
            .catch(() => {})
    }, [])

    
    return(
        // vai chamar funçao de redução e vai redezenha a tela | passando o estado para os componentes do provider
        <AppContext.Provider value={reducer}>
            {children} 
        </AppContext.Provider>
    )
}