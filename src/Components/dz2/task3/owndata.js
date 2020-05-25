import React, { useState } from 'react';
import OwndataInput from './owndatainput.js';


const styles = {
    button:{
        marginTop:"10px",
        padding:"5px 85px",
        fontSize:"20px",
    }
  }

const Owndata = ({owndata})=> {
    
    const [surname, setSurname] = useState(owndata.surname);
    const [name, setName] = useState(owndata.name);
    const [patronymic, setPatronymic] = useState(owndata.patronymic);
    const [telephone, setTelephone] = useState(owndata.telephone);
    const [email, setEmail] = useState(owndata.email);
    const [city, setCity] = useState(owndata.city);
   

    const onReturn = () => {
        setSurname(owndata.surname);
        setName(owndata.name);
        setPatronymic(owndata.patronymic);
        setTelephone(owndata.telephone);
        setEmail(owndata.email);
        setCity(owndata.city);
    }
    const onSurnameChanged = (e) => {
        setSurname(e.target.value);
    }
    const onNameChanged = (e) => {
        setName(e.target.value);
    }

    const onPatronymicChanged = (e) => {
        setPatronymic(e.target.value);
    }

    const onTelephoneChanged = (e) => {
        setTelephone(e.target.value);
    }

    const onEmailChanged = (e) => {
        setEmail(e.target.value);
    }

    const onCityChanged = (e) => {
        setCity(e.target.value);
    }

  
    return (
        <div>
            <OwndataInput title="Surname:" text={surname} change={onSurnameChanged}/>
            <OwndataInput title="Name:" text={name} change={onNameChanged}/>
            <OwndataInput title="Patronymic:" text={patronymic} change={onPatronymicChanged}/>
            <OwndataInput title="Telephone:" text={telephone} change={onTelephoneChanged}/>
            <OwndataInput title="Email:" text={email} change={onEmailChanged}/>
            <OwndataInput title="City:" text={city} change={onCityChanged}/>
            <p><input style={styles.button} type="button" value="Return" onClick={onReturn}/></p>
        </div>
    );
}

export default Owndata;