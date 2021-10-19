import React from 'react';
import { Carousel } from './carousel/Carousel';
import Welcome from './Welcome';
import QuickLinks from './QuickLinks';

export default class HomePage extends React.Component <{}, {}> {
    render (){
        return (
            <>
            <Carousel />
            <Welcome />
            <QuickLinks />
            </>

        )
    };
}

