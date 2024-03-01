import {Button, Container, Nav, Navbar as NavbarBs} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {AdminPanel} from "../pages";

export function Navbar() {
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3 ">
            <Container>

                <Nav className='me-auto'>
                    <Nav.Link to="/" as={NavLink}>Estimate</Nav.Link>
                    <Nav.Link to="/history" as={NavLink}>History</Nav.Link>
                    <Nav.Link to="/reports" as={NavLink}>Reports</Nav.Link>
                    <Nav.Link to="/admin" as={NavLink}>Settings</Nav.Link>
                </Nav>

                <Button
                    variant="outline-primary"
                    style={{width: "3rem", height: "3rem", position: "relative"}}
                    className="rounded-circle"
                >
                    admin
                </Button>
                {/*<AdminPanel/>*/}

            </Container>
        </NavbarBs>
    )
}
