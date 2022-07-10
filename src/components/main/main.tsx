import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { Appointment } from '../index';
import { useNavigate, Link, Routes, Route, Outlet } from "react-router-dom";
import { Auth } from "../../services/index";

const Main = () => {

    const navigate = useNavigate()
    const currentUser = Auth.getCurrentUser()

    const logout = () => {
        Auth.logout();
        return navigate('/')
    }

    return (
        <div style={{ height: '100vh', backgroundColor: "#0093E9", backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)" }}>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Usuario: {currentUser.user}</Navbar.Brand>
                    <Nav className="d-flex text-success fw-bold m-2 p-2 fs-6 text-decoration-none ">
                        <Link to='consultas'>Consultas</Link>
                        <Link to='pacientes'>Pacientes</Link>
                        <Link to='buscar'>Buscar</Link>
                    </Nav>
                </Container>
                <Button onClick={logout} className="me-5">
                    Logout
                </Button>
            </Navbar>
            <Outlet />
        </div>
    )
}

export default Main;
