import React from 'react';
import { Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';


class JediEdit extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            id: '',
            name: '',
            race: '',
            lightsaber: '',
            vehicle: '',
            planet: '',
            rating: '',
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.userJedi.id,
            name: this.props.userJedi.name,
            race: this.props.userJedi.race,
            lightsaber: this.props.userJedi.lightsaber,
            vehicle: this.props.userJedi.vehicle,
            planet: this.props.userJedi.planet,
            rating: this.props.userJedi.rating
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log(event)
        event.preventDefault();
        this.props.update(event, this.state)
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader >Edit a Jedi</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            {/* <FormGroup>
                                <Input id="name" type="select" name="jedi" value={this.state.name} placeholder="Enter a jedi" onChange={this.handleChange}>
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
                            </FormGroup> */}
                            <FormGroup>
                                <Input type="select" name="rating" id="rating" value={this.state.rating} onChange={this.handleChange} placeholder="Type">
                                    <option>Rating</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Input>
                            </FormGroup>
                            <Button type="submit" color="secondary"> Update Rating </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default JediEdit;