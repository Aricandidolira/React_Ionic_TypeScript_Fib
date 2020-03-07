import React, { useRef, useState, useReducer, useContext } from 'react';
import NameSetter, { NameSetterProps } from './NameSetter';
import { AppContext } from '../contexts/AppContext';
import { type } from 'os';

const ContextualNameSetter: React.FC<NameSetterProps> = (props: NameSetterProps) => {
    
    const [appData, dispacthAppData] = useContext( AppContext )

    return (
        <NameSetter {...props} 
        onNameSet={(name) => {
                                dispacthAppData({ 
                                    action: {type: 'add', nameToInsert: name}
                                })
                                if(props.onNameSet){
                                    props.onNameSet(name)
                                }
                             }}
        />
    )
}

export default ContextualNameSetter;