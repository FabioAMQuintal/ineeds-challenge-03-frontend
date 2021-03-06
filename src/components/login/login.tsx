import React, { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Auth } from '../../services/index';


const Login = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            setLoading(true)
            const user = await Auth.login(email, senha)
            if (user) {
                setLoading(false)
                navigate('/main')
            }
        } catch (e: any) {
            setLoading(false)
            alert(`Dados inválidos.\nErro: ${e.name}`)
        }
    }

    return (
        <Form onSubmit={handleSubmit}>
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
    )
}

export default Login;