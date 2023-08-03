window.addEventListener("load", () =>{
    const form  = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");

    // console.log(form);
    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const task = input.value;

        if(!task){
            alert("please fill out a task");
            return;
        }else{
            console.log("success");
            alert("success");
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add(content);
    })
})

