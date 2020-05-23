import React from "react";
import { TableRow, TableCell } from "@material-ui/core/";

const ShowTask = ({ item,index }) => {

    return (
        <TableRow>
            <TableCell>{index+1}</TableCell>
            <TableCell>{item.text}</TableCell>
            <TableCell>{item.done}</TableCell>
            <TableCell>Delete</TableCell>
        </TableRow>
    )
}
export default ShowTask;