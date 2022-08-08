let taskField = document.getElementById("taskField");
let addTaskBtn = document.getElementById("addTaskBtn");
let toDoTaskContainer = document.getElementById("toDoTaskContainer");
let finishedTaskContainer = document.getElementById("finishedTaskContainer");
let errorNotification = document.getElementById("errorNotification");
let successNotification = document.getElementById("successNotification");

addTaskBtn.addEventListener("click", () => {
    let taskDescription = taskField.value.trim();
    if (taskDescription.length == 0) {
        errorNotification.classList.remove("translate-x-[100%]");
        setTimeout(()=>{
            errorNotification.classList.add("translate-x-[100%]");
        },3000)
    } else {
        addTask(taskDescription);
        successNotification.classList.remove("translate-x-[100%]");
        setTimeout(()=>{
            successNotification.classList.add("translate-x-[100%]");
        },3000)
    }
    taskField.value = "";
})

let addTask = (task) => {
    let taskItem = document.createElement("div");
    taskItem.classList.add("w-[100%]", "border-b-[2px]", "border-solid", "border-black", "flex", "pl-2");
    let iconClass = "check";
    taskItem.innerHTML = `  <div class="w-[86%] pt-3 pb-3">
                                ${task}
                            </div>
                            
                            <button class="completedBtn fa fa-${iconClass} bg-green-600 w-[7%] pt-3 pb-3 flex justify-center items-center">
                            </button>
                            
                            <button class="deleteBtn fa fa-trash-o bg-red-600 w-[7%] flex justify-center items-center pt-3 pb-3">
                            </button> `;
                                    
    let completedBtn = taskItem.querySelector(".completedBtn");
    completedBtn.addEventListener("click", (e) => {
        let taskDesc = e.target.previousElementSibling.innerText;
        let parent = e.target.parentElement;
        parent.remove();
        addToFinished(taskDesc);
    })
    let deleteBtn = taskItem.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", (e) => {
        let parent = e.target.parentElement;
        parent.remove();
    })
    toDoTaskContainer.appendChild(taskItem);
    
}

let addToFinished = (task)=>{
    let taskItem = document.createElement("div");
    taskItem.classList.add("w-[100%]", "border-b-[2px]", "border-solid", "border-black", "flex", "pl-2");
    let iconClass = "times";
    taskItem.innerHTML = `  <div class="w-[86%] pt-3 pb-3">
                                ${task}
                            </div>
                            
                            <button class="notCompletedBtn fa fa-${iconClass} bg-green-600 w-[7%] pt-3 pb-3 flex justify-center items-center" >
                            </button>
                            
                            <button class="deleteBtn fa fa-trash-o bg-red-600 w-[7%] flex justify-center items-center pt-3 pb-3">
                            </button> `
                        
    let notCompletedBtn = taskItem.querySelector(".notCompletedBtn");
    notCompletedBtn.addEventListener("click", (e) => {
        let taskDesc = e.target.previousElementSibling.innerText;
        let parent = e.target.parentElement;
        parent.remove();
        addTask(taskDesc);
    })
    let deleteBtn = taskItem.querySelector(".deleteBtn");
    deleteBtn.addEventListener("click", (e) => {
        let parent = e.target.parentElement;
        parent.remove();
    })
    finishedTaskContainer.appendChild(taskItem);
}

