import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';

const Title = styled.h3`
color: white;
text-align: center;
font-family: 'Raleway', sans-serif;
text-shadow: 1.5px 1.5px #000000
`;

const Center = styled.div`
text-align: center;
`;

class JediCreate extends Component {
    constructor() {
        super()
        this.state = {
            Name: '',
            Race: '',
            Lightsaber: '',
            Vehicle: '',
            Planet: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(this.state)
        fetch('http://localhost:3000/jediApp/userJedi', {
            method: 'POST',
            body: JSON.stringify({ userJedi: this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((userJediData) => {
                this.props.updateJediArray()
                this.setState({
                    Name: '',
                    Race: '',
                    Lightsaber: '',
                    Vehicle: '',
                    Planet: ''
                })
            })
            event.preventDefault()
    }

    render() {
        return (
            <div>
                <Title> Construct your Jedi </Title>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                    <Input type="select" name="Name" id="Name" value={this.state.Name} onChange={this.handleChange} placeholder="Type">
                            <option>Choose your Name</option>
                            <option value="Luke Skywalker">Luke Skywalker</option>
                            <option value="Kel Dor">Kel Dor</option>
                            <option value="Ithorian">Ithorian</option>
                            <option value="Twi Lek">Twi Leks</option>
                            <option value="Zabrak">Zabraks</option>
                            <option value="Nautolan">Nautolans</option>
                            </Input>                  
                    </FormGroup>
                    <Center>
                    <Button type="submit" color="secondary"> Construct </Button>
                    </Center>
                    <FormGroup>
                    <Input type="select" name="Race" id="Race" value={this.state.Race} onChange={this.handleChange} placeholder="Type">
                            <option>Choose your Race</option>
                            <option value="Human">Human</option>
                            <option value="Kel Dor">Kel Dor</option>
                            <option value="Ithorian">Ithorian</option>
                            <option value="Twi Lek">Twi Leks</option>
                            <option value="Zabrak">Zabraks</option>
                            <option value="Nautolan">Nautolans</option>
                            </Input>                            
                    </FormGroup>
                    <Center>
                    <Button type="submit" color="secondary"> Construct </Button>
                    </Center>
                    <FormGroup>
                        <Input type="select" name="Lightsaber" id="Lightsaber" value={this.state.Lightsaber} onChange={this.handleChange} placeholder="Type">
                            <option>Choose your Lightsaber</option>
                            <option value="Yellow">Yellow</option>
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                            <option value="Black">Black</option>
                            <option value="Purple">Purple</option>
                            <option value="Dual-Bladed">Dual-Bladed</option>
                            <option value="Dual-Wield">Dual-Weild</option>
                        </Input>
                    </FormGroup>
                    <Center>
                    <Button type="submit" color="secondary"> Construct </Button>
                    </Center>
                    <FormGroup>
                        <Input type="select" name="Vehicle" id="Vehicle" value={this.state.Vehicle} onChange={this.handleChange} placeholder="Type">
                            <option>Choose your Vehicle</option>
                            <option value="X-Wing">X-Wing</option>
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                            <option value="Black">Black</option>
                            <option value="Purple">Purple</option>
                            <option value="Dual-Bladed">Dual-Bladed</option>
                            <option value="Dual-Wield">Dual-Weild</option>
                        </Input>
                    </FormGroup>
                    <Center>
                    <Button type="submit" color="secondary"> Construct </Button>
                    </Center>
                    <FormGroup>
                        <Input type="select" name="Planet" id="Planet" value={this.state.Planet} onChange={this.handleChange} placeholder="Type">
                            <option>Choose your Planet</option>
                            <option value="Endor">Endor</option>
                            <option value="Red">Red</option>
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                            <option value="Black">Black</option>
                            <option value="Purple">Purple</option>
                            <option value="Dual-Bladed">Dual-Bladed</option>
                            <option value="Dual-Wield">Dual-Weild</option>
                        </Input>
                    </FormGroup>
                    <Center>
                    <Button type="submit" color="secondary"> Construct </Button>
                    </Center>
                </Form>
            </div>  
        )
    }
}

export default JediCreate;