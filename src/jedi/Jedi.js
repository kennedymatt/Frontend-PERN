import React, { Component } from 'react';
import JediResults from './JediResults';
import {Container, Form, FormGroup, Input, Col, Row } from 'reactstrap';
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

class userJedi extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userJedi: [],
            updatePressed: false,
            jediToUpdate: {}
        }
    }

    componentDidMount = () => {
        this.fetchuserJedi();
        
    }

    // handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    // handleKeyUp = () => {
    //     let val = document.getElementById('searchInput').value;
    //     let results = this.state.results

    //     let filtered = results.filter(result => {
    //         if (result.userJedi.toLowerCase().includes(val.toLowerCase())) {
    //             return result
    //         } else if (result.Name.toLowerCase().includes(val.toLowerCase()))
    //             return result
    //     })
    //     this.setState({ filteredResults: filtered, results: results })
    // }

    // fetchJedi = () => {
    //     fetch(`${APIURL}/jediApp/Jedi`,)
    //         .then(response => {
    //             if (response.status !== 200) {
    //                 console.log('Error: ' + response.status);
    //                 return;
    //             }

            
    //             response.json().then(data => {
    //                 console.log(data)
    //                 const results = data;
    //                 this.setState({ results: results })
    //             })
    //         })
    //         .catch(err => {
    //             console.log('Fetch Error:', err)
    //         })
    // }

    fetchuserJedi = () => {
        fetch(`${APIURL}/jediApp/userJedi`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.token
            })
        })
            .then((res) => res.json())
            .then((userJediData) => {
                return this.setState({ userJedi: userJediData })
            })
            
    }

    // jediDelete = (event) => {
    //     fetch(`${APIURL}/jediApp/userJedi/${event.target.id}`, {
    //         method: 'DELETE',
    //         body: JSON.stringify({ userJedi: { id: event.target.id } }),
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': this.props.token
    //         })
    //     })
    //         .then((res) => this.fetchUserJedi())
    // }

    // jediUpdate = (event, userJedi) => {
    //     console.log(event.target.id)
    //     fetch(`${APIURL}/jediApp/userJedi/${userJedi.id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify({ userJedi: userJedi }),
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Authorization': this.props.token
    //         })
    //     })
    //         .then((res) => {
    //             this.setState({ updatePressed: false })
    //             this.fetchUserJedi();
    //         })
    // }

    // setUpdatedJedi = (event, userJedi) => {
    //     this.setState({
    //         jediToUpdate: userJedi,
    //         updatePressed: true
    //     })
    // }

    render() {
        const userJedi = this.state.userJedi.length >= 1 ?
        <JediTable userJedi={this.state.userJedi} delete={this.jediDelete} update={this.setUpdatedJedi} /> : <h2>Jedi Log</h2>
        return (
                <Container>
                    <Row>
                        <Col md="5">
                            <JediCreate token={this.props.token} updateuserJediArray={this.fetchuserJedi} />                            
                        </Col>
                        <Col md="2">
                            {userJedi}
                        </Col>       
                    </Row>
                    {}
                    <Col md="12">
                        {
                            this.state.updatePressed ? <JediEdit t={this.state.updatePressed} update={this.jediUpdate} userjedi={this.state.jediToUpdate} />
                                : <div></div>
                        }
                    </Col>
                </Container>
        )
    }
}

export default userJedi;
