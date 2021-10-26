import React, { Component } from 'react';
import { Card } from 'antd';
import APIURL from '../helpers/environment';

type AllState = {
    brand: string,
    profile: string,
    shape: string,
    wrapper: string,
    origin: string,
};

type AllProps = {
	token: string;
	closeCreate(): void;
};

export default class AllCigars extends Component<AllProps, AllState> {
    constructor(props: AllProps) {
        super(props);
        this.state = {
            brand: '',
            profile: '',
            shape: '',
            wrapper: '',
            origin: '',
        };
    }

    handleSubmit = async (e: any) => {

        fetch(`${APIURL}/cigar/`, {
            method: 'GET',
            body: JSON.stringify({
                product: {
                    brand: this.state.brand,
                    profile: this.state.profile,
                    shape: this.state.shape,
                    wrapper: this.state.wrapper,
                    origin: this.state.origin,
				}
            }),
            headers: ({
                Authorization: this.props.token
            })

        })
            .then((response) => {
                console.log(response.body)
                return response.json()
            })

            .then((data) => {
                console.log(data)
            })
    };
    
    render () {
        return (
            <Card>
                <p>Card content</p>
                <p>Card content</p>
                <p>Card content</p>
            </Card>
        );
    }
};
    



