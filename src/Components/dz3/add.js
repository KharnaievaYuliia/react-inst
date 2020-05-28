import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';


const Add = () => {

const [login, setLogin] = useState("");
const [password, setPassrowd] = useState("");
const [email, setEmail] = useState("");
const [photo, setPhoto] = useState("");
const [text, setText] = useState("");
const [tags, setTags] = useState("");

const handleLogin = (e) => {
    setLogin(e.target.value);
}

const handlePassword = (e) => {
    setPassrowd(e.target.value);
}

const handleEmail = (e) => {
    setEmail(e.target.value);
}

const handlePhoto = (e) => {
    setPhoto(e.target.value);
}

const handleText = (e) => {
    setText(e.target.value);
}

const handleTags = (e) => {
    setTags(e.target.value);
}
return(
                <form>
                <TextField className="textfield" type="text" label="login" name="login" value={login} onChange={handleLogin}/>
                <TextField className="textfield" type="password" label="password" name="password" value={password} onChange={handlePassword}/>
                <TextField className="textfield" type="email" label="email" name="email" value={email} onChange={handleEmail}/>
                <TextField className="textfield" type="photo" label="photo" name="photo" value={photo} onChange={handlePhoto}/>
                <TextField className="textfield" type="text" label="text" name="text" value={text} onChange={handleText}/>
                <TextField className="textfield" type="tags" label="tags" name="tags" value={tags} onChange={handleTags}/>

                <button className="but" type="submit">submit</button>
            </form>
)
}

export default Add;