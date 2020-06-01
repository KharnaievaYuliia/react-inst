import React,{useState} from "react";
import { TableRow, TableCell, Checkbox, TextField } from "@material-ui/core/";
import changePerformanceStatus from "../utils/changePerfomanceStatus";
import changeLine from '../utils/changeLine.js';
import deleteLine from '../utils/deleteLine.js';



const ShowPerfomance = ({done,handleChange}) =>{

return (
    <Checkbox checked={done} onChange={handleChange}/>
)

}

const ShowTask = ({ item,index,setToDoList }) => {



const {id,text,done} = item;
const [line, setLine] = useState(text);

const handleChange = (event)=>{
    changePerformanceStatus(item.id,setToDoList);
}

const handleLineChange = (event) => {
    setLine(event.target.value);
}

const handleLineBlur = (event) => {
    changeLine(id, line, setToDoList);
}

const handleDelete = () => {
    deleteLine(id, setToDoList);
}
    return (
     
        <TableRow>
            <TableCell className="body">{index+1}</TableCell>

            <TableCell className="body">
                <TextField  className="textfield" defaultValue={line} onChange={handleLineChange} onBlur={handleLineBlur}/>
            </TableCell>

            <TableCell className="body">{item.text}</TableCell>
            <TableCell className="body">
                <ShowPerfomance done={item.done}
                handleChange = {handleChange}/>
            </TableCell>
            <TableCell className="body" onClick={handleDelete}>Delete</TableCell>
        </TableRow>
  
    )
}
export default ShowTask;