const deleteLine = (id, setToDoList) => {
    const toDoList = JSON.parse(localStorage.getItem("toDoList"));
    const itemDelete = toDoList.find((item) => item.id === id);
    toDoList.splice(itemDelete,1);
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
    setToDoList(toDoList);
}

export default deleteLine;