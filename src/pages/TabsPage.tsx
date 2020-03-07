import React from 'react';
import { IonTabs, IonRouterOutlet, IonTabBar, IonTab, IonTabButton, IonTitle, IonIcon } from '@ionic/react';
import ListPage from './ListPage';
import { Route, Redirect } from 'react-router';
import Home from './Home';
import {home, list} from 'ionicons/icons'

// IonTabBar abas
const TabsPage: React.FC = () => {
    return(
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/tabs/list" component={ListPage}/>
                <Route path="/tabs/home" component={Home}/>
                <Route path="/tabs" render={() => <Redirect to="/tabs/home"/>}/>
            </IonRouterOutlet>
            <IonTabBar slot="bottom" color="dark">
                <IonTabButton tab="home" href="/tabs/home">
                    <IonTitle>Home</IonTitle>
                    <IonIcon icon={home}></IonIcon>
                </IonTabButton>
                <IonTabButton tab="list" href="/tabs/list">
                    <IonTitle>Lista</IonTitle>
                    <IonIcon icon={list}></IonIcon>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}
export default TabsPage