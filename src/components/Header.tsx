import * as React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';

type HeaderProps = {
    brand: string
}
// React.Component<Props, State>
export class Header extends React.Component <HeaderProps, {}> {

    public render() {
        return (
            <Navbar>
                    <Navbar.Brand>
                        <Link to="/">The Pufferator</Link>
                    </Navbar.Brand>
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
            

