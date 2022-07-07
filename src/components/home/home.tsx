import { Container, Row, Col } from 'react-bootstrap';
import { Login } from '../index';

const Home = () => {

    return (
        <div style={{ height: '100vh', backgroundColor: "#0093E9", backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)" }}>
            <Container className='h-100 w-100 d-flex justify-content-center align-items-center'>
                <Row className='h-100 w-100 justify-content-center align-items-center'>
                    <Col>
                        <h1>AGENDAMENTO DE CONSULTAS</h1>
                    </Col>
                    <Col>
                        <Login />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home;
