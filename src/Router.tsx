import * as React from 'react';
import { BrowserRouter, /*Redirect,*/ Route } from 'react-router-dom';
import AppPuff from './AppPuff';
// import FirstComponent from './components/FirstComponent';
// import { Header } from './components/Header';
// import { HeaderPuff } from './components/HeaderPuff';
// import { Footer } from './components/Footer';
// import { Resources } from './features/Resources';
// import { ContactUs } from './features/ContactUs';
// import myFooter from './components/myFooter';
// import SecondComponent from './components/SecondComponent';
import './css/styles.css';

export const AppRouter: React.FunctionComponent<{}> = () => {
    return (
        
        <BrowserRouter>
        {/* <HeaderPuff brand='' /> */}
        <div>
            {/* <main> */}
                <Route exact={true} path="/" component={AppPuff} />
                {/* <Route path="/" component={Resources} />
                <Route path="/" component={ContactUs} /> */}
                {/* <Redirect from '*' to '/' /> */}
            {/* </main>
            <Footer /> */}
        </div>
        </BrowserRouter>
    );
}
