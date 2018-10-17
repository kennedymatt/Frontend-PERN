import React from 'react';
import { Button, Form, FormGroup, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../helpers/environment';

class JediEdit extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            race: '',
            Lightsaber: '',
            vehicle: '',
            companion: '',
            planet: ''
        };
    }

    componentWillMount() {
        this.setState({
            name: '',
            race: '',
            Lightsaber: '',
            vehicle: '',
            companion: '',
            planet: ''
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
                                <Input id="jedi" type="text" name="jedi" value={this.state.Jedi} placeholder="Enter a jedi" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="rating" id="rating" value={this.state.Rating} onChange={this.handleChange} placeholder="Type">
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