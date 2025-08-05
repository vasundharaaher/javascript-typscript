import React from 'react';

interface GreeingProps{
    name: string;
    age?: number;
}

const Greeting: React.FC<GreeingProps> = ({ name , age }) => {
    return(
        <div>
        <h1>Hello , {name}!</h1>
        {age && <p>You are {age} year old</p>}
        </div>
    );
};

export default Greeting;


