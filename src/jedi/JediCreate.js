import React, { Component } from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';
import styled from 'styled-components';
import APIURL from '../helpers/environment';

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
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            race: '',
            lightsaber: '',
            vehicle: '',
            planet: '',
            rating: ''
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        fetch(`${APIURL}/jediApp/userJedi`, {
            method: 'POST',
            body: JSON.stringify({ userJedi :this.state }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((userJediData) => {
                this.props.updateuserJediArray()
                this.setState({
                    name: '',
                    race: '',
                    lightsaber: '',
                    vehicle: '',
                    planet: '',
                    rating: ''
                })
            })
    }

    render() {
        return (
            <div>
                <Title> Construct your Jedi </Title>
                <hr />
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup>
                    <Input type="select" name="name" id="name" value={this.state.name} onChange={this.handleChange} placeholder="Type">
                            <option>Choose your Name</option>
                            <option value="Luke Skywalker">Luke Skywalker</option>
                            <option value="Aalya Secura">Aalya Secura</option>
                            <option value="Kit Fisto">Kit Fisto</option>
                            <option value="Plo Koon">Plo Koon</option>
                            <option value="Mace Windu">Mace Windu</option>
                            <option value="Anakin Skywalker">Anakin Skywalker</option>
                            <option value="Obi-Wan Kenobi">Obi-Wan Kenobi</option>
                            <option value="Yoda">Yoda</option>
                            <option value="Quinlan Vos">Quinlan Vos</option>
                            <option value="Ki-Adi-Mundi">Ki-Adi-Mundi</option>
                            <option value="Oppo Rancisis">Oppo Rancisis</option>
                            </Input>                  
                    </FormGroup>
                    <Center>
                    <Button type="submit" color="secondary"> Construct </Button>
                    </Center>
                    <FormGroup>
                    <Input type="select" name="race" id="race" value={this.state.race} onChange={this.handleChange} placeholder="Type">
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
                        <Input type="select" name="lightsaber" id="lightsaber" value={this.state.lightsaber} onChange={this.handleChange} placeholder="Type">
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
                        <Input type="select" name="vehicle" id="vehicle" value={this.state.vehicle} onChange={this.handleChange} placeholder="Type">
                            <option>Choose your Vehicle</option>
                            <option value="X-Wing">X-Wing</option>
                            <option value="Y-Wing">Y-Wing</option>
                            <option value="A-Wing">A-Wing</option>
                            <option value="B-Wing">B-Wing</option>
                            <option value="Tie Fighter">Tie Fighter</option>
                            <option value="Jedi-T6">Jedi-T6</option>
                            <option value="Geonosian Fighter">Geonosian Fighter</option>
                            <option value="Naboo N-1 Starfighter">Naboo N-1 Starfighter</option>
                        </Input>
                    </FormGroup>
                    <Center>
                    <Button type="submit" color="secondary"> Construct </Button>
                    </Center>
                    <FormGroup>
                        <Input type="select" name="planet" id="planet" value={this.state.planet} onChange={this.handleChange} placeholder="Type">
                            <option>Choose your Planet</option>
                            <option value="Endor">Endor</option>
                            <option value="Naboo">Naboo</option>
                            <option value="Tatooine">Tatooine</option>
                            <option value="Alderaan">Alderaan</option>
                            <option value="Hoth">Hoth</option>
                            <option value="Yavin">Yavin</option>
                            <option value="Bespin">Bespin</option>
                            <option value="Kashyyyk">Kashyyyk</option>
                            <option value="Dagobah">Dagobah</option>
                            <option value="Geonosis">Geonosis</option>
                            <option value="Jakku">Jakku</option>
                            <option value="Coruscant">Coruscant</option>
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