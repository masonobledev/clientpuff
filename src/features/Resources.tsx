import * as React from 'react';

export class Resources extends React.Component <{}, {}> {
    render (){
        return (
            <span>
                <section>
                <p>
                Wanna know where you can buy your favorite premium cigars?
                </p>
                <ul>
                    <li><img src='www.cigarsinternational.com' target='_blank'>Cigars International</img></li>
                    <li><img src='www.cigarbid.com' target='_blank'>CigarBid</img></li>
                </ul>
                </section>
                <section>
                <p>
                    Don't know cigar etiquette? Take a look at the following 
                </p>
                </section>

            </span>

        )
    };
}
