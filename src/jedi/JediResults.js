import React from 'react';
import styled from 'styled-components';

const Results = styled.ul`
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

const JediResults = ({ results }) => {
    const resultsFormatted = results.map((result) =>
        <li key={result}>
            <div>
                <p>{result.userJedi}</p>
                <p>{result.Name}{', '}{result.Race}{' - '}{result.Lightsaber}{' # '}{result.id}</p>
            </div>
        </li>
    );
    return (
        <Results id="results">
            {resultsFormatted}
        </Results>
    );
}
export default JediResults;