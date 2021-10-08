import React, { Component } from 'react';
import './App.css';
import Auth from './auth/Auth';


interface IProps {
}

interface IState {
  count: number;
}

class App extends Component<IProps, IState>{

    constructor(props: any){
        super(props);
            this.state = {
                count: 0,

            };

    }
    
    render(){
        return(
            <div>{this.state.count}</div>
            
            
        )
    }
}