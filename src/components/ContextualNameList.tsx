import React, { useRef, useState, useReducer, useContext } from 'react';
import NameList from '../components/NameList';
import {AppContext} from '../contexts/AppContext';
import { useHistory } from 'react-router';

const ContextualNameList: React.FC = () => {
    // pega contexto do ap o dispactch compartilhado
    const [appData, dispacthAppData] = useContext( AppContext )
    const history = useHistory()

    return (
            <NameList 
                    names={appData.names}
                    onDelete={(at) => {
                       
                  //  dispacthAppData({
                     //       action:{
                      //          type: 'delete', indexToDelete: at
                   //         }
                        //})
                    history.push(`/update/${at}`)
               }}
            />
   )
}

export default ContextualNameList;