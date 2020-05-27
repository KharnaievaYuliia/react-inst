import React from 'react';

const Skills = ({skills})=> {
    return(
        <div>
        <h2>Profession skills</h2>
        <p><b>Education: </b>{skills[0]}</p>
        <p><b>Experience with working with people: </b>{skills[1]}</p>
        <p><b>Logistic: </b>{skills[2]}</p>
        <p><b>Languages: </b>{skills[3]}</p>
        <p><b>PC skills: </b>{skills[4]}</p>
        <p><b>Management: </b>{skills[5]}</p>
        </div>
    );
}

export default Skills;