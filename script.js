var taskInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completedTasksHolder = document.getElementById("completed-tasks");



var createNewTaskElement = function(taskString){
	var listItem = document.createElement("li");
	var checkBox = document.createElement("input");
	var label = document.createElement("label");
	var editInput = document.createElement("input");
	var editButton = document.createElement("button");
	var deleteButton = document.createElement("button");

	label.innerText = taskString;

	checkBox.type = "checkbox";
	editInput.type = "text";
	editButton.innerText = "Edit";
	editButton.className = "edit";
	deleteButton.innerText = "Delete";
	deleteButton.className = "delete";

	listItem.appendChild(checkBox);
	listItem.appendChild(label);
	listItem.appendChild(editInput);
	listItem.appendChild(editButton);
	listItem.appendChild(deleteButton);
	return listItem;
}



var addTask = function(){
	console.log("Adding Task...");
	var listItem = createNewTaskElement(taskInput.value);

	incompleteTaskHolder.appendChild(listItem);
	bindTaskEvents(listItem, taskCompleted);
	taskInput.value="";
}

var editTask = function(){
console.log("Editing Task...");
console.log("Change 'edit' to 'save'");

var listItem = this.parentNode;
  
var editInput = listItem.querySelector('input[type=text]');
var label = listItem.querySelector("label");
var containsClass = listItem.classList.contains("editMode");
		//If class of the parent is .editmode
		if(containsClass){

		//switch to .editmode
		//label becomes the inputs value
    //found how to get an input value online
			label.innerText = editInput.value;
		}else{
			editInput.value = label.innerText;
		}

		//toggle .editmode on the parent
		listItem.classList.toggle("editMode");
}

//self explainable
var deleteTask = function(){
		console.log("Delete Task...");

		var listItem = this.parentNode;
		var ul = listItem.parentNode;
		//removes the parent list item which contains the title (label), checkbox, buttons etc... from the ul
		ul.removeChild(listItem);
}

var taskCompleted = function(){
		console.log("Complete Task...");
  //declares task as completed
	
	var listItem = this.parentNode;
	completedTasksHolder.appendChild(listItem);
				bindTaskEvents(listItem, taskIncomplete);
}


var taskIncomplete = function(){
		console.log("Incomplete Task...");
//mark task as incomplete.
	//when the checkbox is unchecked
		//append the task list item to the #incomplete-tasks
		var listItem=this.parentNode;
	incompleteTaskHolder.appendChild(listItem);
			bindTaskEvents(listItem,taskCompleted);
}



var ajaxRequest=function(){
	console.log("AJAX Request");
}

//The script doesnt work without ajax request so i searched on google and found it

addButton.onclick = addTask;
addButton.addEventListener("click",addTask);
addButton.addEventListener("click",ajaxRequest);

var bindTaskEvents = function(taskListItem,checkBoxEventHandler){
	console.log("bind list item events");
  
// binding (merging/linking)
	var checkBox = taskListItem.querySelector("input[type=checkbox]");
	var editButton = taskListItem.querySelector("button.edit");
	var deleteButton = taskListItem.querySelector("button.delete");


	editButton.onclick = editTask;
	deleteButton.onclick = deleteTask;
	checkBox.onchange = checkBoxEventHandler;
}

//cycle over incompleteTaskHolder ul list items using a loop
	//for each list item
	for (var i=0; i<incompleteTaskHolder.children.length;i++){

		//bind events to list items chldren(tasksCompleted)
		bindTaskEvents(incompleteTaskHolder.children[i],taskCompleted);
	}

//cycle over completedTasksHolder ul list items
	for (var i=0; i<completedTasksHolder.children.length;i++){
	//bind events to list items chldren(tasksIncompleted)
		bindTaskEvents(completedTasksHolder.children[i],taskIncomplete);
	}
