// import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import Login from './Login';
// import Signup from './Signup';

// const Auth = (props) => {
//     return(
//         <Container className="auth-container">

//             <Row>
//                 <Col md="6">
//                     <Signup setToken={props.setToken} />
//                 </Col>
//                 <Col md="6" className="login-col">
//                     <Login setToken={props.setToken} />
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

// export default Auth;


import React from 'react';
import { Button, Row, Col } from 'reactstrap';
import Login from './Login';
import Signup from './Signup';
import styled from 'styled-components';
import background from '../assets/star-wars-background-1.jpg';


const BackgroundImage = styled.div`
background-image: url(${background});
background-repeat: no-repeat;
background-size: 100%
display: block;
margin: 0 auto;
z-index: 0;
   `;

const Confirm = styled.p`
margin-top: -2em;
font-size: 25px;
text-align: center;
font-family: 'Raleway', sans-serif;
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    font-size: 15px;
    margin-top: 5em;
}
`;

const LogSign = styled.div`
text-align: center
margin-top: 7em;
z-index: 2;
position: center;
`;

const YesNo = styled.div`
text-align: center;
}
`;

const Space = styled.div`
padding: 1em;
display: inline
`;

const Giphy = styled.p`
position: center;
top: 90%;
left: 37%;
margin: -25px 0px 0px -25px;
margin-top: 1em;
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    top: 43%;
    left: 0%;
}
`;

class Auth extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isChosen: false,
            isNotChosen: false
        }
    }

    isChosen = () => {
        this.setState({ isChosen: true })
    }

    isNotChosen = () => {
        this.setState({ isNotChosen: true })
    }

    jediCheck = () => {
        if (this.state.isChosen) {
            return (
                <LogSign>
                    <Giphy><iframe src="https://giphy.com/embed/mspfS3iSZDkwo" width="400" height="400" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://gph.is/1IYwr7Q"></a></p></Giphy>
                        <Row>
                            <Col md="3">
                                </Col>
                                    <Col md="3">
                                        <Signup setToken={this.props.setToken} />
                                </Col>
                                    <Col md="3" className="login-col">
                                        <Login setToken={this.props.setToken} />
                                </Col>
                            <Col md="3">
                        </Col>
                    </Row>              
                </LogSign>
                
                )
        } else if (this.state.isNotChosen) {
            return (
                <Giphy><iframe src="https://giphy.com/embed/5p2oXYSr98WUo" width="700" height="700" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://gph.to/2ye9Oyu"></a></p></Giphy>
            )
        } else {
            return (
                <div>
                    <div>
                        <Col lg="12">
                            <Confirm>Are you the chosen one?</Confirm>
                        </Col>
                        <YesNo>
                            <Col lg="12">
                                <Space>
                                    <Button outline color="secondary" size="lg" onClick={this.isChosen}>Yes</Button>
                                </Space>
                                <Space>
                                    <Button outline color="secondary" size="lg" onClick={this.isNotChosen}>No</Button>
                                </Space>
                            </Col>
                        </YesNo>
                    </div>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <BackgroundImage >
                    <background src= {background} />
                </BackgroundImage>

                {this.jediCheck()}
            </div>
        )
    }
}

export default Auth;