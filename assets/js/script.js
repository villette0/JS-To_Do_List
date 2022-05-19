// Universal variables, Selectors first
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event Listeners
//variable which is get query.addeventlistener, on click, do function
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

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
        todoDiv.addEventListener("transitionend", function() {
            todoDiv.remove();
        });
    }        
    
    // if checkmark is pressed on complete button, apply completed class
    if(item.classList[0] === "complete-button") {
        const todoDiv = item.parentElement;
        // Apply the completed class to the parent element which is going to make the todo li transparent with a line through text
        todoDiv.classList.toggle('completed');
    }
}