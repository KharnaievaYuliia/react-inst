
const setDefaultData =()=>{

localStorage.setItem(
    "toDoList",
    JSON.stringify([
        {id:0, text: "Learn ReactJS",done: true},
        {id:1, text: "Visit IT STEP",done: false},
        {id:2, text: "Make hw #1",done: false},
        {id:3, text: "Learn TypeScript",done: true},
        {id:4, text: "Make HW2",done: false},
        {id:5, text: "Make HW",done: false},

    ])
);
};
export default setDefaultData;