import React, { Component } from 'react';
import { Card } from 'antd';
import APIURL from '../helpers/environment';

type AllProps = {
	token: string;
};

export default class AllCigars extends Component<AllProps, any> {
    constructor(props: AllProps) {
        super(props);
        this.state = {
            cigars: []
        };
    }

    componentDidMount() {

        fetch(`${APIURL}/cigar/`, {
            method: 'GET',
            headers: ({
                Authorization: this.props.token
            })
        })
        .then((response) => response.json())
        .then(cigarsList => {
            this.setState({cigars: cigarsList.data});
            console.log('this.state.cigars');
            console.log(this.state.cigars);
        });
    };

    render () {
        return (
            <div>
             
            {this.state.cigars.map((cigar: any) =>
               <Card  title={cigar.brand} size = 'default' bordered = {true} style={{ width: 400 }}>
                <p><b>Origin:</b> {cigar.origin}</p>
                <p><b>Profile:</b> {cigar.profile}</p>
                <br />
              </Card>
            )}
            </div>
        );
    }
};
    
    
    



