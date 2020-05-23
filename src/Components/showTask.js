import React from "react";
import { TableRow, TableCell, Checkbox } from "@material-ui/core/";
import changePerformanceStatus from "../utils/changePerfomanceStatus";
const ShowPerfomance = ({done,handleChangePerformanceStatus}) =>{
const handleChange =()=>{
    handleChangePerformanceStatus();
}

return (
    <Checkbox checked={done} onChange={handleChange}/>
)

}

const ShowTask = ({ item,index }) => {
const handleChangePerformanceStatus = ()=>{
    changePerformanceStatus(item.id);
}
    return (
        <TableRow>
            <TableCell>{index+1}</TableCell>
            <TableCell>{item.text}</TableCell>
            <TableCell>
                <ShowPerfomance done={item.done}/>
                handleChangePerformanceStatus={handleChangePerformanceStatus}
            </TableCell>
            <TableCell>Delete</TableCell>
        </TableRow>
    )
}
export default ShowTask;