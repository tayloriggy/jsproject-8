/*
A user must be able to add and delete a todo item, from the UI and from your storage.
-Hint: use JavaScript localStorage to store the todos.

You can store your Todos in an array, but keep in mind that localStorage can only store strings, 
so that means you'll have to convert your array of todos into a string before you can store it. 
And when you retrieve it, you have to convert it from a string back to an array. 
Those are all things you can do with JavaScript, so make sure to look those up.

Steps:

1. Create items in localStorage to be stored.
2. Create a list of todos in an array.
3. In index.html, create an input box to add a task. Create an add button at end.
4. Create a delete button to delete the task.
5. 


*/

let arrayOfTasks = []; //defining an empty array to store todo items in

function addTaskToLocalStorage () {
    let arrayOfTasks;
    if ((localStorage.getItem("todos")) === null) { //if localStorage has no todo items and is null
        arrayOfTasks = []; //set array to an empty array
    }
    else { //if localStorage is not null and has todo items 
        arrayOfTasks = JSON.parse(localStorage.getItem("todos")); //set array to the array of todo items in localStorage
    }
    
    let addedTask = document.getElementById("added").value; //getting the value of the user input and storing it in a variable
    arrayOfTasks.push(addedTask); //pushing newly added task into empty array
    localStorage.setItem("todos", JSON.stringify(arrayOfTasks)); //storing array of tasks in localStorage and converting to string using JSON.stringify

    for (i = 0; i < arrayOfTasks.length; i++) {
        addTodoToPage();  
    }
}

function addTodoToPage (addedTask) { //this function will display todos onto webpage
    let addedTodo = JSON.parse(localStorage.getItem("todos")); //getting todos from localStorage & transforming JSON string into a JS object to be displayed on webpage
    let li = document.createElement("list"); //creating a li element 
    document.getElementById("listTodos").innerHTML = addedTodo;
    }
