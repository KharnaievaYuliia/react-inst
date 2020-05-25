import React from 'react';
import DPerson from './person.js';

const personalData = {

  experience: {
    img: "./dz2/task2/profile.jpg",
    experience: "Director",
},

owndata: {
    surname: "Streys",
    name: "Olga",
    patronymic: "Ivanovna",
    telephone: "0931234567",
    email: "zzzolga@ukr.net",
    city: "Odessa",
  }
,

skills: [
"Higher economic education",
"HR skills",
"Thorough knowledge of logistics and supply",
"English - Upper Intermediate",
"Excellent PC knowledge",
"Experience in managing large projects - 5 years,sales experience - 4 years "
],

}

const styles = {
  div:{
      padding:"20px",
      fontSize:"22px",
  }
}
const Dz23 = () => { 
 const [person,setPerson]=React.useState(personalData);
  return (
    <div style={styles.div}>
    <h1>Personal page</h1>
    <DPerson person={person} setPerson={setPerson}/>
    </div>
  );
}

export default Dz23;