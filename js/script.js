//function to add a new todo
function add_new(){

	  //create a variable for the ul
	  var ul = document.getElementById("todo");

	  //get the text the user inputted into the text-input
	  var todo_text = document.getElementById('input').value;

   	  //created a new list-item
	  var li = document.createElement("li");

	  //create a button
	  var button = document.createElement("button");

	  //adds a class and text note

	  button.textContent = "delete";
	  button.classList.add("delete");

	  //appends the button to the list item
	  li.appendChild(button)
	

	  //append the todo-text to the li
	  li.appendChild(document.createTextNode(todo_text));
	  
	  //Append the li to the ul
	  ul.appendChild(li);

	  //revert the text in the text-input to ''
	  document.getElementById('input').value = '';
}


//Adding an event Listener for the button
document.addEventListener("click", function(e) {
	if(e.target.classList.contains("delete")) {
		e.target.parentElement.remove();
	}
});