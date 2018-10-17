import React, { Component } from 'react';
import JediResults from './JediResults';
import { Form, FormGroup, Input, Col, Row } from 'reactstrap';
import styled from 'styled-components';
import JediCreate from './JediCreate';
import JediTable from './JediTable';
import JediEdit from './JediEdit';
import APIURL from '../helpers/environment';


const Padding = styled.div`
padding: 5em;
`;

const Title = styled.h3`
color: white;
text-align: center;
font-family: 'Raleway', sans-serif;
text-shadow: 1.5px 1.5px #000000
`;

class Jedi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            results: [],
            filteredResults: [],
            userJedi: [],
            updatePressed: false,
            jediToUpdate: {}
        }
    }

    componentDidMount = () => {
        this.fetchJedi();
        this.fetchUserJedi();
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    handleKeyUp = () => {
        let val = document.getElementById('searchInput').value;
        let results = this.state.results

        let filtered = results.filter(result => {
            if (result.jedi.toLowerCase().includes(val.toLowerCase())) {
                return result
            } else if (result.Name.toLowerCase().includes(val.toLowerCase()))
                return result
        })
        this.setState({ filteredResults: filtered, results: results })
    }

    fetchJedi = () => {
        fetch(`${APIURL}/jediApp/jedi,`)
            .then(response => {
                if (response.status !== 200) {
                    console.log('Error: ' + response.status);
                    return;
                }
                response.json().then(data => {
                    console.log(data)
                    const results = data;
                    this.setState({ results: results })
                })
            })
            .catch(err => {
                console.log('Fetch Error:', err)
            })
    }

    fetchUserJedi = () => {
        fetch(`${APIURL}/jediApp/userJedi`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then(res => 
            console.log(res))
            
            .then((userJediData) => {
                return this.setState({ userJedi: userJediData })
            })
    }

    jediDelete = (event) => {
        fetch(`${APIURL}/jediApp/userJedi/${event.target.id}`, {
            method: 'DELETE',
            body: JSON.stringify({ userJedi: { id: event.target.id } }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => this.fetchUserJedi())
    }

    jediUpdate = (event, userJedi) => {
        console.log(event.target.id)
        fetch(`${APIURL}/jediApp/userJedi/${userJedi.id}`, {
            method: 'PUT',
            body: JSON.stringify({ userJedi: userJedi }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => {
                this.setState({ updatePressed: false })
                this.fetchUserJedi();
            })
    }

    setUpdatedJedi = (event, userJedi) => {
        this.setState({
            jediToUpdate: userJedi,
            updatePressed: true
        })
    }

    render() {
        return (
            <div>
                <Padding>
                    <Row>
                        <Col md="5">
                            <Form onSubmit={this.handleSubmit} id="form" autoComplete="off">
                                <FormGroup>
                                    <Title> Search for a Jedi </Title>
                                    <hr />
                                    <Input onKeyUp={this.handleKeyUp} id="searchInput" className="searchBar" type="text" placeholder="Search by name" required />
                                    <JediResults results={this.state.filteredResults} />
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col md="2">
                        </Col>
                        <Col md="5">
                            <JediCreate token={this.props.token} updateJediArray={this.fetchuserJedi} />
                        </Col>
                    </Row>
                </Padding>
                <div>
                    <JediTable userJedi={this.state.results} delete={this.jediDelete} update={this.setUpdatedJedi} />
                    <Col md="12">
                        {
                            this.state.updatePressed ? <JediEdit t={this.state.updatePressed} update={this.jediUpdate} userjedi={this.state.jediToUpdate} />
                                : <div></div>
                        }
                    </Col>
                </div>
            </div>
        );
    }
}

export default Jedi;
