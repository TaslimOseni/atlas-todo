//function to add a new todo
function add_new(){

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