const changePerformanceStatus = (id,setToDoLists) => {

    const toDoLists = JSON.parse(localStorage.getItem("toDoLists"));
    const itemToChange = toDoLists.find((item)=> item.id===id);
    itemToChange.done =!itemToChange.done;
    localStorage.setItem("toDoLists",JSON.stringify(toDoLists));
    setToDoLists(toDoLists);
}
export default changePerformanceStatus;