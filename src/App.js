import React,{useState} from 'react';
import setDefaultData from "./utils/setDefaultData";
import { Table, TableHead, TableRow, TableCell, TableBody,makeStyles } from "@material-ui/core/";
import CssBaseline from '@material-ui/core/CssBaseline';
import ShowTask from "./Components/showTask";


const useStyles = makeStyles({
  root: {
    backgroundColor: "#DDA0DD",
    width:'1270px',
    margin:'0 auto',
    "& .title": {
        color: "white",
        fontSize: "25px",
        fontWeight: "bold",
        borderBottom:'2px solid white',
        padding:'15px'
      },
      "& .body": {
        color: "white",
        fontSize: "25px",
        fontWeight: "bold",
        borderBottom:'2px solid white',
        padding:'15px'
      },
      "& .textfield": {
        padding:'5px 15px',
        backgroundColor:'white',
      },
    },
});

const App = () => {
  const classes = useStyles();
  const listData = JSON.parse(localStorage.getItem("toDoList"));
  if (!listData || listData.length < 1) {
    setDefaultData();
  }
  const [toDoList, setToDoList] = React.useState(
    JSON.parse(localStorage.getItem("toDoList"))
  );

  return (
    <>
    <CssBaseline />
    <Table className={classes.root}>
      <TableHead>
        <TableRow>
          <TableCell className="title">#</TableCell>
          <TableCell className="title">Textfield</TableCell>
          <TableCell className="title">Text</TableCell>
          <TableCell className="title">Done</TableCell>
          <TableCell className="title">Delete</TableCell>
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
</>
  );
}
export default App
