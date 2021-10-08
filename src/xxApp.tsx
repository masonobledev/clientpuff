import React, { Component } from 'react';
import './App.css';
import Auth from './auth/Auth';

interface AppProps {
};

interface AppState {
  loggedIn: boolean,
  isClass: boolean
};

class App extends Component <AppProps, AppState>{
  constructor(props: any){
    super(props);
    this.state={
      loggedIn: false,
      isClass: false
    };
  } 
  

  render (){
    return (
      <>
      <div className="App">
        <div className="App-header">
          <h1>{this.state.isClass ? 'Welcome to the Pufferator!' : 'Nope---try again!'}</h1>
          {
            this.state.loggedIn ?
            <button style={{ padding: '1em' }} onClick={() => setLoggedIn(false)}>Logout</button>
            :
            <Auth loggedIn={loggedIn(true)} setLoggedIn={setLoggedIn(true)} setIsClass={setIsClass(true)}  />
          }
        </div>
      </div>
      </>
      )
    }

    
}
    
export default App;