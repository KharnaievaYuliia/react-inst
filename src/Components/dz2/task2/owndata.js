import React from 'react';

const Owndata = ({owndata})=> {
    
    return(

        <div>
        <h2>Information about me</h2>
        <p><b>Surname: </b>{owndata.surname}</p>
        <p><b>Name: </b>{owndata.name}</p>
        <p><b>Patronymic: </b>{owndata.patronymic}</p>
        <p><b>Telephone number: </b>{owndata.telephone}</p>
        <p><b>Email adress: </b>{owndata.email}</p>
        <p><b>City: </b>{owndata.city}</p>
        </div>
    );
}

export default Owndata;