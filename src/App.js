import React from 'react';
import setDefaultData from "./utils/setDefaultData";
import { Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core/";
import ShowTask from "./Components/showTask";


const App = () => {
  const listData = JSON.parse(localStorage.getItem("toDoList"));
  if (!listData || listData.length < 1) {
    setDefaultData();
  }
  const [toDoList, setToDoList] = React.useState(
    JSON.parse(localStorage.getItem("toDoList"))
  );

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>#</TableCell>
          <TableCell>Text</TableCell>
          <TableCell>Done</TableCell>
          <TableCell>Delete</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {
          toDoList.map((item, index) => {
            return <ShowTask item={item} index={index} setToDoList={setToDoList} key={item.id} />
          })
        }

      </TableBody>
    </Table>

  );
}
export default App
