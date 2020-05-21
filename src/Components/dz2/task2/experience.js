import React from 'react';

const Experience = ({experience})=> {
    return(
        <div>
            <img src={experience.img}/>
            <h2>Position</h2>
            <p> {experience.experience}</p>
           
        </div>
    );
}

export default Experience;