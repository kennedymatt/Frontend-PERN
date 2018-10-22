import React from 'react';
import styled from 'styled-components';


const JediResults = styled.ul`
overflow: scroll;
height: 30em;
width: 18.56em;
color: white;
font-size: 17px;
font-family: 'Raleway', sans-serif;
::-webkit-scrollbar { 
    display: none; 
}
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
    height: 20em;
}
@media only screen and (min-width : 321px) {
    height: 23em;
    }
`;

const userJedi = ({ results }) => {
    const JediResults = userJedi.map((result) =>
        <li key={result}>
            <div>
                <p>{result.id}</p>
                <p>{result.name}</p>
                <p>{result.race}</p>
                <p>{result.lightsaber}</p>
                <p>{result.vehicle}</p>
                <p>{result.planet}</p>
                <p>{result.rating}</p>
            </div>
        </li>
    );
    return (
        <JediResults id="results">
            {JediResults}
        </JediResults>
    );
}
export default JediResults;