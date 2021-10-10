import * as React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import AppPuff from './AppPuff';
// import FirstComponent from './components/FirstComponent';
import { Header } from './components/Header';
// import SecondComponent from './components/SecondComponent';
import './css/styles.css';

export const AppRouter: React.FunctionComponent<{}> = () => {
    return (

        <BrowserRouter>
        <div>
            <Header brand='The Pufferator' />
            <main>
                <Route exact={true} path="/" component={AppPuff} />
                {/* <Route path="/FirstComponent" component={FirstComponent} />
                <Route path="/SecondComponent" component={SecondComponent} /> */}
                {/* <Redirect from '*' to '/' /> */}
            </main>
        </div>
        </BrowserRouter>
    );
}
