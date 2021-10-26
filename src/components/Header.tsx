import * as React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import "./Header.css";
// import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';

type HeaderProps = {
    brand: string
}
// React.Component<Props, State>
export class Header extends React.Component <HeaderProps, {}> {

    public render() {
        return (
            // <Navbar bg="light">
            //         {/* <Navbar.Brand>
            //             <Link to="/">The Pufferator</Link>
            //         </Navbar.Brand> */}
            //     <Container>
            //         <Navbar.Brand href="/">The Pufferator</Navbar.Brand>
            //     </Container>
            //     <Nav>
            //         <IndexLinkContainer to="../features">
            //             <NavItem>
            //                 <Link to="/Resources">Resources</Link>
            //             </NavItem>
            //         </IndexLinkContainer>
            //         <IndexLinkContainer to="../features">
            //             <NavItem>
            //                 <Link to="/Contact Us">Contact Us</Link>
            //             </NavItem>
            //         </IndexLinkContainer>
            //     </Nav>
            // </Navbar>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Container>
                    <Navbar.Brand href="/">The Pufferator</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home </Nav.Link>
                        <Nav.Link href="/">Resources </Nav.Link>
                        <Nav.Link href="/">Contact Us </Nav.Link>
                        <Nav.Link href="#home">Logout</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}


            
