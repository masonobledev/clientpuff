import React from 'react'

type HeaderProps = {
    brand: string
}
// React.Component<Props, State>
export class Header extends React.Component <HeaderProps, {}> {
    render() {
        // or const { brand } = this.props for line 12 where it can just say [ brand ]
        return (
             <nav>
                 <h1> {this.props.brand} </h1>
             </nav>
        )
    }
}

