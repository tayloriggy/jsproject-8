/*
A user must be able to add and delete a todo item, from the UI and from your storage.
-Hint: use JavaScript localStorage to store the todos.

You can store your Todos in an array, but keep in mind that localStorage can only store strings, 
so that means you'll have to convert your array of todos into a string before you can store it. 
And when you retrieve it, you have to convert it from a string back to an array. 
Those are all things you can do with JavaScript, so make sure to look those up.

** Hint: To convert an array into the string representation, you'll need JSON stringify. 
To convert it back to an array, you'll need JSON parse.

Steps:

1. Create items in localStorage to be stored.
2. Create a list of todos in an array.
3. In index.html, create an input box to add a task. Create an add button at end.
4. Create a delete button to delete the task.
5. 


*/

function addTaskToLocalStorage () {
    let arrayOfTasks; //defining an array to store the todos in
    if ((localStorage.getItem("todos")) === null) { //if localStorage has no todo items and is null
        arrayOfTasks = []; //set array to an empty array
    }
    else { //if localStorage is not null and has todo items
        arrayOfTasks = JSON.parse(localStorage.getItem("todos")); //set arrayOfTasks to the array of todo items in localStorage, 
        //use JSON parse to convert it to back to an array since this is necessary when retrieving items from localStorage
        addLocalStorageTodosToPage();
    }

    let addedTask = document.getElementById("added").value; //getting the value of the user input and storing it in variable called addedTask
    arrayOfTasks.push(addedTask); //pushing newly added task into arrayOfTasks
    localStorage.setItem("todos", JSON.stringify(arrayOfTasks)); //storing arrayOfTasks in localStorage and 
    // converting to string using JSON.stringify since localStorage can only store strings

    addTodoToPage(addedTask);
    
    
}

function addTodoToPage () { //this function will display todos onto webpage one at a time
    let li = document.createElement("LI"); //creating a li element 
    li.innerHTML = document.getElementById("added").value;
    document.getElementById("listTodos").appendChild(li);
    
    //document.getElementById("listTodos").innerHTML = addedTodo; //displaying todo to ul element on UI
    //let addedTodo = JSON.parse(localStorage.getItem("todos")); //getting todos from localStorage & converting strings back to array
}

function addLocalStorageTodosToPage () {
    for (let i = 0; i < localStorage.length; i++) {
        addTodoToPage(JSON.parse(localStorage.getItem("todos")));
    }
}


