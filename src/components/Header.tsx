import * as React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';
// import Contact from '../features/Contact';
// import '../../node_modules/bootstrap/dist/css/bootstrap.css'
// import './css/styles.css';

type HeaderProps = {
    brand: string
}
// React.Component<Props, State>
export class Header extends React.Component <HeaderProps, {}> {

    public render() {
        // or const { brand } = this.props for line 12 where it can just say [ brand ]
        return (
            //  <nav>
            //      <h1> {this.props.brand} </h1>
            //  </nav>
            <Navbar>
                {/* <Navbar.Header> */}
                    <Navbar.Brand>
                        <Link to="/">The Pufferator</Link>
                    </Navbar.Brand>
                    {/* <Resources />
                    <Contact /> */}
                {/* </Navbar.Header> */}
                <Nav>
                    <IndexLinkContainer to="/Resources">
                        <NavItem>Resources</NavItem>
                    </IndexLinkContainer>
                    <IndexLinkContainer to="/Contact">
                        <NavItem>Contact Us</NavItem>
                    </IndexLinkContainer>
                </Nav>
            </Navbar>
        );
    }
}
            

