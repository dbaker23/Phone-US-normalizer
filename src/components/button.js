import React from 'react';

const Button = ( {name, textVal} ) => {
    return <button type={name}>{textVal}</button>;
};

export default Button;