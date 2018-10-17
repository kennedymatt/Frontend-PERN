
import React from 'react';
import background from '../assets/star-wars-background-1.jpg';
import styled from 'styled-components';
import Jedi from '../jedi/Jedi';

const BackgroundImage = styled.div`
background-image: url(${background});
background-repeat: no-repeat;
background-size: 100%;
display: block;
height: 55em;
margin: 0 auto;
`;


const Splash = (props) => {
    return (
        <div>            
            <div>
                <BackgroundImage >
                    <Jedi token={props.token} />
                </BackgroundImage>
            </div>
        </div>
    )
}

export default Splash;

