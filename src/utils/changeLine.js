const changeLine = (id, newText, setToDoList) => {
    const toDoList = JSON.parse(localStorage.getItem("toDoList"));
    const itemChange = toDoList.find((item) => item.id === id);
    itemChange.text = newText;
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
    setToDoList(toDoList);
}

export default changeLine;