//Button to add tasks to the taskList
var add_button = document.getElementById('add-button');

//Field for the user to type in tasks
var inputField = document.getElementById('input');

//Adds task to the taskList when the add_button is clicked
add_button.addEventListener('click', add_new);

//Add tasks to task list when the enter key is pressed
inputField.addEventListener("keypress", function(event){
    if(event.which === 13){ 
        //Checks if the enter key as pressed
        add_new();
    }
})

//Object to store all the tasks added by the user
var todoItems = (localStorage.getItem('todo'))? JSON.parse(localStorage.getItem('todo')) : {
    listOfTodo:[]
}

displayData()

function storeDataLocally(){
    //JSON.stringify() converts a javascript object to JSON and stores it in local storage
    localStorage.setItem('todo', JSON.stringify(todoItems));
}

function displayData(){
    //Displays the data in local storage on the DOM
    
    //If there are no tasks, end function
    if(!todoItems.listOfTodo.length) return;
    
    //Add tasks from the uncompletedTasks array
    for(let i = 0; i < todoItems.listOfTodo.length; i++){
        let task = todoItems.listOfTodo[i];
        console.log(task)
        addItemToDOM(task);
    }
    
}

//function to add a new todo
function add_new(){
    //console.log("Button tappped")
   
    
    //get the text the user inputted into the text-input
	  var todo_text = inputField.value;
    todo_text = todo_text.trim();
    console.log(todo_text)
    
    if(todo_text){
        //The user input was valid
        todoItems.listOfTodo.push(todo_text);
        console.log(todoItems.listOfTodo)
        addItemToDOM(todo_text);
        storeDataLocally()
        inputField.value = ''
    }

	  //create a variable for the ul
	  /*var ul = document.getElementById("todo");

	  

   	  //created a new list-item
	  var li = document.createElement("li");

	  //append the todo-text to the li
	  li.appendChild(document.createTextNode(todo_text));
	  
	  //Append the li to the ul
	  ul.appendChild(li);

	  //revert the text in the text-input to ''
	  document.getElementById('input').value = '';*/
}

function addItemToDOM(task){
    
    var list_item = document.createElement('li');
    //list_item.classList.add('todo-list');
    list_item.innerHTML = task;
    
    /*var buttons = document.createElement('div');
    buttons.classList.add('buttons');*/
    
    /*var delete_btn = document.createElement('button');
    delete_btn.innerHTML = "<img src='images/delete_button.png'>";
    delete_btn.addEventListener('click', removeTodoItem);
    
    var done_btn = document.createElement('button');
    done_btn.innerHTML = "<img src='images/done_icon.png'>";
    done_btn.addEventListener('click', completeTodo);*/
    
    var taskList = document.getElementById("todo")
    
    /*if(completed  && !showCompleteLabel){
        var completedLabel = document.createElement('h4');
        completedLabel.appendChild(document.createTextNode("Completed tasks"));
        document.getElementById('todo').appendChild(completedLabel);
        
        showCompleteLabel = true;
    }*/
    
    /*buttons.appendChild(delete_btn);
    buttons.appendChild(done_btn);
    
    list_item.appendChild(buttons);*/
    
    //Adds the new list item to the top of the list
    taskList.insertBefore(list_item, taskList.childNodes[0]);
}