import React from 'react';

const info={
  title: "Hello",
  singer: "Adele",
  img: "./dz2/task1/hello.png",
  yearOfpublish: 2015,
  titleOfpublish: "MUSIC AWARDS",
  genre:"Soul",
 
songs: [
{id:1, name: "Hello"},  
{id:2, name:  "Send My Love (To Your New Lover)"},
{id:3, name:  "I Miss You"},
{id:4, name:  "When We Were Young"},
{id:5, name:  "Remedy"},
{id:6, name:  "Water Under the Bridge"},
{id:7, name:  "River Lea"},
]
};

const styles = {
  ul:{
      listStyle: "none",
      marging:0,
      padding:0,
      fontSize:20,
  }
}
const Dz2 = () => { 
  
  return (
    <center>
    <h1>My favourite music album</h1>
    <ul style={styles.ul}>
    <li> Title album - {info.title}</li>
    <li> My favourite singer - {info.singer}</li>
    <li> Album release date - {info.yearOfpublish}</li>
    <li> Publisher - {info.titleOfpublish}</li>
    <li> Genre - {info.genre}</li>
    <li> <img src={info.img}/></li>
    </ul>
    <h2>ALBUM ADELE</h2>
    
    {info.songs.map(({id,name})=>{
    return (
    <ul style={styles.ul} key={info.id}>
    <li>{id}. {name}</li>
    </ul>);
    })}
    
     
    </center>
  );
}

export default Dz2;
