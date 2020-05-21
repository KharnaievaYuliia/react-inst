import React from "react";
import Skills from "./skill.js";
import Owndata from "./owndata.js";
import Experience from "./experience.js";

const DPerson = ({person}) => { 
const {experience,owndata,skills}=person;
return (
<div>
<Experience experience={experience} />
<Owndata owndata={owndata} />
<h2>Skills</h2>
{skills.map( (item,index)=>{
return <Skills key={index} skills={item} />
})
}
</div>
)
}
    
  export default DPerson;
