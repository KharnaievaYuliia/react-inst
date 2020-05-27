import React from 'react';
import Owndata from './owndata.js';
import Experience from './experience.js';

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

}

const styles = {
  div:{
      padding:"20px",
      fontSize:"22px",
  }
}
const Dz23 = () => { 
  return (
    <div style={styles.div}>
    <h1>Personal page</h1>
    <Experience experience={personalData.experience}/>
    <Owndata owndata={personalData.owndata}/>
    </div>
  );
}

export default Dz23;