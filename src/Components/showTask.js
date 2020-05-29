import React from "react";
import { TableRow, TableCell, Checkbox } from "@material-ui/core/";
import changePerformanceStatus from "../utils/changePerfomanceStatus";

const ShowPerfomance = ({done,handleChange}) =>{


return (
    <Checkbox checked={done} onChange={handleChange}/>
)

}

const ShowTask = ({ item,index,setToDoList }) => {
const handleChange = (event)=>{
    changePerformanceStatus(item.id,setToDoList);
}
    return (
        <TableRow>
            <TableCell>{index+1}</TableCell>
            <TableCell>{item.text}</TableCell>
            <TableCell>
                <ShowPerfomance done={item.done}
                handleChange = {handleChange}/>
            </TableCell>
            <TableCell>Delete</TableCell>
        </TableRow>
    )
}
export default ShowTask;