import React from "react";
import ClubInfo from "./info";
import Achievement from "./achievement";
import Player from "./player";

const Cw2 = ( {clubData} )=>{
   const {info,achievements,players} = clubData;
return(
    <>
    <h2>Club Info</h2>
    <ClubInfo info={info} />
    <h2>Achivements</h2>
   {
   achievements.map( (item,index)=>{
   return <Achievement key={index} achievement={item} />
   })
}
<table>
<tbody>
{
   players.map((item,index)=>{
      return <Player playerInfo={item} key={index} />
   })
}
</tbody>
</table>
</>
);
};
export default Cw2