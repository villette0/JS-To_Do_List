// Universal variables, Selectors first
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
//variable which is get query.addeventlistener, on click, do function
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterToDo);

// Functions

// When filling out text in the form and hitting the submit button
function addTodo(event) {
    // Prevent form from reloading page upon submit
    event.preventDefault();
    // Create To do li, which will house the p text, button to delete, and button to checkmark complete
    //variable for creation
    const todoLi = document.createElement("li");
    //add class to it
    todoLi.classList.add("todo-li");
    // next create p where we will write text
    const todoP = document.createElement("p");
    // add class to p so we can customize it
    todoP.classList.add("todo-list-item");
    //add text to p
    //****Important: add ".value" to the query selector variable here to grab the text value that is taken from the input
    todoP.innerText = todoInput.value;
    // if it does not equal nothing, append an item as we don't want empty items
    if (todoInput.value !== "") {
        todoLi.appendChild(todoP); //attached to todo li
    // Check mark button 
    const completedButton = document.createElement("button");
    // put a checkmark icon on the button
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-button");
    todoLi.appendChild(completedButton); //attached to todo li
    //Trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-button");
    todoLi.appendChild(trashButton); //attached to todo li
    //now finally append the new todo li to the unordered list on html
    //variable already made up top from getting document 
    todoList.appendChild(todoLi);
    // clear to do input form value after adding to list
    }
    todoInput.value="";
}


// When hitting each button on li item. First button is trash which we get by class, then second if statement is for checkmark
function deleteCheck(event) {
    const item = event.target;
    // Delete Todo list item
    if (item.classList[0]=== "trash-button") {
        // remove parent item of trash button, which is the todo li specific to that pressed button, not just any todo li. 
        const todoLi = item.parentElement;
        // Animation
        todoLi.classList.add("fall");
        // Delete todoLi when animation is over. Meaning after its class has transitioned from one class to another. so instead of on "click" it's on "transitionend"
        todoLi.addEventListener("transitionend", function() {
            todoLi.remove();
        });
    }        
    
    // if checkmark is pressed on complete button, apply completed class
    if(item.classList[0] === "complete-button") {
        const todoLi = item.parentElement;
        // Apply the completed class to the parent element which is going to make the todo li transparent with a line through text
        todoLi.classList.toggle('completed');
    }
}



//When filtering in the select dropdown click to see all, completed, or uncompleted todos 
function filterToDo(event) {
    const todos = todoList.childNodes;
    //I named this child todoItem right now. It is not a variable from earlier. I am naming the child node basically
    todos.forEach(function(todoItem) {
        //on the "all" value, on the "completed" value etc in html under select>todos
        switch (event.target.value) {
            case "all":
                // Did display flex because this is what we have in our css
                todoItem.style.display = "flex";
                break; //always put a break at end of case switches otherwise it messes up, freezes etc
            case "completed":
                // if the item contains a completed class
                if(todoItem.classList.contains("completed")) {
                    todoItem.style.display = "flex";
                }
                // make the others without the completed class not display
                else {
                    todoItem.style.display = "none";
                } 
                break;
            case "uncompleted":
                // ! means doesn't. so the item, which is the child of the ul list aka the divs, does not have a "completed" class assigned
                if(!todoItem.classList.contains("completed")) {
                    todoItem.style.display = "flex";
                }
                else {
                    todoItem.style.display = "none";
                } 
                break;
        } 
    }); 
}

// Saving to local storage so it doesn't all disappear
/*
function saveLocalTodos(todoItem) {
    //Check if already have info in there
    let todos;
    //if there are no todos in storage then make an empty array
    if (localStorage.getItem('todos') === null) {
        todos = []; //an empty array
    }
    else {
        //else i'm going to parse the item back into an array
        todos = JSON.parse(localStorage.getItem('todos'));
    }
}
*/