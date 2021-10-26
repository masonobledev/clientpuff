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
                    {/* <li><a href='https://www.cigarsinternational.com/account/login/?returnUrl=%2f' target='_blank'>Cigars International</a></li> */}
                    {/* <li><a href='https://www.cigarbid.com/account/login/?returnUrl=%252f' target='_blank'>CigarBid</a></li> */}
                    <li>test three</li>
                    <li>test four</li>
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


