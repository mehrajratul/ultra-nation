import React from 'react';
import './Country.css';

const Country = (props) => {

    const {flag, name, population, capital} = props.country;

    return (
        <div className='country'>
            <img src={flag} alt="" />
            <h2>Country name is : {name}</h2>
            <h3>country capital : {capital}</h3>
            <h4>population of {name} is : {population}</h4>
        </div>
    );
};

export default Country;