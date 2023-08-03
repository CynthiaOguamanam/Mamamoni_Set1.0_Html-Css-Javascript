const UserInput = document.querySelector('.UserInput')
// const Date = document.querySelector('.Date')
const Add = document.querySelector('.Add')
const checkBox = document.querySelector('.checkBox')
const userText = document.querySelector('.userText')
// const UserDate = document.querySelector('.UserDate')
const edit = document.querySelector('.edit')
const deletes = document.querySelector('.delete')

// Add.onclick = ()=>{
// alert("Added successfully")
// }

let allTodo = [];
allTodo = JSON.parse(localStorage.getItem('allTodosInfo'))  || [];

function AddTodos(e){
    e.preventDefault();

    allTodo.push(UserInput.value);
    localStorage.setItem("AllTodoInfo", JSON.stringify(allTodo));
    window.location.reload();

}
Add.addEventListener("click", AddTodos);

function getOutput(e){
    e.preventDefault();

    allTodo.map(userText.value);
    localStorage.getItem("getAllTodod", JSON.stringify(allTodo));
    window.location.reload();
}


// allTodo.forEach((todos, index) =>{

//     const render = `
//     // <div class="Useroutput">
//     //     <div><input type="checkbox" name="CheckBox" id=${index} class="checkBox"></div>
//     //     <div> <input type="text" class="TodoText" id="TodoText${index}" value="${todos}"></div>
//     //     <div class="edit"></div>
//     //     <button class="delete" id=${index}></button>
//     // </div>

//     <section class="Useroutput">
//             <div class="TextShow">
//              <div class="output">
//                 <input type="checkbox" class="checkBox" id=${index}>
//                 <span class="userText${index}" value=${todos} >UserText</span>
//                 <!-- <p class="UserDate">22-mar-2023</p> -->
//                 <button class="edit">Edit</button>
//                 <button class="delete" id${index}>Del</button>
//              </div>
//             </div>
//         </section>
//     `
//     userText.innerHTML += render
// });

