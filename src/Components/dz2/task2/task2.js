import React from 'react';
import Skills from './skill.js';
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
  }
}
const Dz22 = () => { 

  return (
    <div style={styles.div}>
    <h1>Personal page</h1>
    <Experience experience={personalData.experience}/>
    <Owndata owndata={personalData.owndata}/>
    <Skills skills={personalData.skills}/>
    
    </div>
  );
}

export default Dz22;