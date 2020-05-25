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
</div>
)
}
    
  export default DPerson;
