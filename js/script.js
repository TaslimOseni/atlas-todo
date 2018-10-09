//Button to add todos to the todo list
var add_button = document.getElementById('add-button');

//Input field
var inputField = document.getElementById('input');

//Adds user input to the todo list when the add_button is clicked
add_button.addEventListener('click', add_new);

//Add user input to todo list when the enter key is pressed
inputField.addEventListener("keypress", function(event){
    if(event.which === 13){ 
        //Checks if the enter key was pressed
        add_new();
    }
})


//Object to store all the todos added by the user
var todos = (localStorage.getItem('todo'))? JSON.parse(localStorage.getItem('todo')) : {
    listOfTodo:[]
}

//Displays todos that have previously been stored on the user's device
displayData()


function storeDataLocally(){
    localStorage.setItem('todo', JSON.stringify(todos));
}

//Displays the data in local storage on the DOM
function displayData(){
    
    //If there are no tasks, end function
    if(!todos.listOfTodo.length) return;
    
    for(let i = 0; i < todos.listOfTodo.length; i++){
        let task = todos.listOfTodo[i];
        addItemToDOM(task);
    }
    
}

//Adds a new todo
function add_new(){
    //Get user input
    var todo_text = inputField.value;
    todo_text = todo_text.trim();
    
    if(todo_text){
        //The user input was valid
        todos.listOfTodo.push(todo_text);
        addItemToDOM(todo_text);
        storeDataLocally()
        inputField.value = ''
    }
}

//Display's the todo list on the DOM
function addItemToDOM(todo){
    
    var list_item = document.createElement('li');
    
    //create a button
    var button = document.createElement("button");

    //adds a class and text note

    button.textContent = "Delete";
    button.classList.add("delete");
    //button.addEventListener('click', removeTodoItem);

    //appends the button to the list item
    list_item.appendChild(button)
    
    list_item.appendChild(document.createTextNode(todo));
    
    var todo_list = document.getElementById("todo")
    
    //Adds the new list item to the top of the list
    todo_list.insertBefore(list_item, todo_list.childNodes[0]);
}




//Adding an event Listener for the button
document.addEventListener("click", function(e) {
	if(e.target.classList.contains("delete")) {
        let listItemClicked = event.target.parentElement;
        let todo = listItemClicked.innerText;
        todos.listOfTodo.splice(todos.listOfTodo.indexOf(todo), 1);
        storeDataLocally();
        e.target.parentElement.remove();
	}
});


