//Button to add tasks to the taskList
var add_button = document.getElementById('add-button');

//Field for the user to type in tasks
var inputField = document.getElementById('input');

//Adds task to the taskList when the add_button is clicked
add_button.addEventListener('click', add_new);

//Object to store all the tasks added by the user
var taskData = (localStorage.getItem('tasks'))? JSON.parse(localStorage.getItem('tasks')) : {
    listOfTasks:[]
}

//function to add a new todo
function add_new(){
        console.log("Button tappped")

	  //create a variable for the ul
	  var ul = document.getElementById("todo");

	  //get the text the user inputted into the text-input
	  var todo_text = document.getElementById('input').value;

   	  //created a new list-item
	  var li = document.createElement("li");

	  //append the todo-text to the li
	  li.appendChild(document.createTextNode(todo_text));
	  
	  //Append the li to the ul
	  ul.appendChild(li);

	  //revert the text in the text-input to ''
	  document.getElementById('input').value = '';
}