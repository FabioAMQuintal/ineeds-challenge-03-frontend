import { Outlet } from "react-router-dom";
import { Form, Button, Spinner} from 'react-bootstrap';

const Appointment = () => {

    


    return(
        <>
        <h1>consultas</h1>
        <Outlet />
        </>
    )

}

export default Appointment;

/*
<Form >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha</Form.Label>
                <Form.Control type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Entrar
            </Button>
            {
                loading &&
                <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                    className='p-2 ms-3'
                />
            }
        </Form>
        <Outlet />

*/