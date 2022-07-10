import { Outlet } from "react-router-dom";
import { Form, Button, Spinner, Row, Col, Table } from 'react-bootstrap';
import { useState } from "react";
import axios from "axios";
import config from '../../config/index';
import ListPatient from "./listPatient";
import AuthHeader from "../../services/header/AuthHeader";

const Patient = () => {

    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [phoneSearch, setPhoneSearch] = useState<string>('');
    const [responseName, setResponseName] = useState<string>('');
    const [responsePhone, setResponsePhone] = useState<string>('');
    const [responseId, setResponseId] = useState<number>(0);
    const [responseSearchName, setResponseSearchName] = useState<string>('');
    const [responseSearchPhone, setResponseSearchPhone] = useState<string>('');
    const [responseSearchId, setResponseSearchId] = useState<number>(0);

    const newPatient = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const auth = AuthHeader.header();
        try {
            setLoading(true);
            const response = await axios.post(config.api.baseUrlLocal.concat(config.api.patient, 'newpatient'), {
                name,
                phone
            }, {
                headers: auth
            })
            const { data } = response.data
            console.log(response)
            setLoading(false);
            setResponseName(data.name)
            setResponsePhone(data.phone)
            setResponseId(data.id)
            return;
        } catch (e) {
            setLoading(false);
            alert('Numero de telefone já em uso')
            setPhone('')
        }
    }

    const searchByPhone = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const auth = AuthHeader.header();
        try {
            setLoading(true);
            const response = await axios.get(config.api.baseUrlLocal.concat(config.api.patient, 'patient/', phoneSearch));
            const { data } = response.data
            setLoading(false);
            setResponseSearchName(data.name)
            setResponseSearchPhone(data.phone)
            setResponseSearchId(data.id)
            return;
        } catch (e) {
            setLoading(false);
            alert('Numero de telefone não existe')
            setPhoneSearch('')
        }
    }

    return (
        <>
            <Row>
                <Col>
                    <Form className='w-75 ms-3 mt-3' onSubmit={newPatient}>
                        <Form.Label>CRIAR NOVO PACIENTE</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
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

                    <Table striped className="mt-3 ms-3 w-75">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ListPatient 
                                id={responseId}
                                name={responseName}
                                phone={responsePhone}
                            />
                        </tbody>
                    </Table>
                </Col>
                <Col>
                    <Form className='w-75 ms-3 mt-3' onSubmit={searchByPhone}>
                        <Form.Label>FILTRAR PACIENTE PELO TELEFONE</Form.Label>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="text" value={phoneSearch} onChange={(e) => setPhoneSearch(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Enviar
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
                    <Table striped className="mt-3 ms-3 w-75">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <ListPatient 
                                id={responseSearchId}
                                name={responseSearchName}
                                phone={responseSearchPhone}
                            />
                        </tbody>
                    </Table>
                </Col>
            </Row>
            <Outlet />
        </>
    )
}

export default Patient;