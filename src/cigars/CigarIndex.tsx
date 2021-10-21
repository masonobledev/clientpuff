import React from 'react';
import NewCigar from './NewCigar';
import Rating from '../rating/Rating';

export default class CigarIndex extends React.Component <{}, {}> {
    render () {
        return (
            <span>
                <NewCigar />
                <Rating />
            </span>
        )
    };
}

           