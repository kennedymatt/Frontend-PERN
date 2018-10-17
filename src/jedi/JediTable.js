import React from 'react';
import { Table, Button, Col, Row } from 'reactstrap';
import styled from 'styled-components';

const Title = styled.h3`
text-align: center;
font-family: 'Raleway', sans-serif;
margin-top: 1em;
`;

const JediTable = (props) => {
    return (
            <Row>
                <Col md="3">
                </Col>
                <Col md="6">
                    <Title>Jedi Log</Title>
                    <hr />
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Race</th>
                                <th>Lightsaber</th>
                                <th>Vehicle</th>
                                <th>Planet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                 props.userJedi.map((userJedi, id) => {
                                    return (
                                         <tr key={id}>
                                             <th scope="row">{userJedi.id}</th> 
                                             <td>{userJedi.Name}</td>
                                             <td>{userJedi.Race}</td>
                                             <td>{userJedi.Lightsaber}</td>
                                             <td>{userJedi.Vehicle}</td>                                   
                                             <td>{userJedi.Planet}</td>                                             
                                             <td>
                                                 <Button id={userJedi.id} onClick={props.delete} outline color="secondary">Delete</Button>
                                                 <Button id={userJedi.id} onClick={e => props.update(e, userJedi)} outline color="secondary">Update</Button>
                                             </td>
                                         </tr>
                                     )
                                })
                            }
                        </tbody>
                    </Table>
                </Col>
                <Col md="3">
                </Col>
            </Row>
    )
}

export default JediTable;