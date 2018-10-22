import React from 'react';
import { Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';


class JediEdit extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            race: '',
            Lightsaber: '',
            vehicle: '',
            planet: '',
            rating: ''
        };
    }

    componentWillMount() {
        this.setState({
            id: this.props.userJedi.id,
            name:this.props.userJedi.name,
            race:this.props.userJedi.race,
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
                            <FormGroup>
                                <Input id="jedi" type="text" name="jedi" value={this.state.jedi} placeholder="Enter a jedi" onChange={this.handleChange} />
                            </FormGroup>
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
                            <Button type="submit" color="secondary"> Submit </Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}

export default JediEdit;