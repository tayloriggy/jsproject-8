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
    if ((localStorage.getItem()) === null) { //if localStorage has no todo items and is null
        axios.get("https://jsonplaceholder.typicode.com/todos") //using GET request with axios API to get all todo from jsonplaceholder url
        .then(function(response){ //using . (which is a Javascript promise) and then to do something, using function with parameter of response
            for (let i = 0; i < 5; i ++) { //looping through first 5 todos from jsonplaceholder url
                arrayOfTasks.push(response.data[i].title); //pushing the first five todo titles into localStorage array
            }
            localStorage.setItem("todos", JSON.stringify(arrayOfTasks)); 
            
    })

    }
    else { //if localStorage is not null and has todo items
        arrayOfTasks = JSON.parse(localStorage.getItem()); //set arrayOfTasks to the array of todo items in localStorage, 
        //use JSON parse to convert it back to an array since this is necessary when retrieving items from localStorage 
       
    }

    let addedTask = document.getElementById("added").value; //getting the value of the user input and storing it in variable called addedTask
    arrayOfTasks.push(addedTask); //pushing newly added task into arrayOfTasks
    localStorage.setItem("todos", JSON.stringify(arrayOfTasks)); //storing arrayOfTasks in localStorage and 
    // converting to string using JSON.stringify since localStorage can only store strings

    addTodoToPage(addedTask, arrayOfTasks); //passing in addedTask which is what user enters & passing in arrayOfTasks which is our entire
    //array of todos in localStorage
}

function deleteTaskFromPage(index){
    let li = document.getElementById(index);
    li.remove();
}

function deleteTaskFromLocalStorage(index){
    const arrayOfTasks = JSON.parse(localStorage.getItem("todos"));
    arrayOfTasks.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(arrayOfTasks));
}
    

function deleteItem(index) {
    deleteTaskFromPage(index);
    deleteTaskFromLocalStorage(index);
}

function addTodoToPage(task, index) { //this function will display todos onto webpage one at a time
    const arrayOfTasks = JSON.parse(localStorage.getItem("todos"));
    let addedTask = document.getElementById("added").value;
    let li = document.createElement("LI"); //creating a li element 
    li.innerHTML = task; //setting list item to task parameter
    li.setAttribute("id", index); //creating id for li element and setting it equal to index parameter

    let deleteBtn = document.createElement("BUTTON"); //creating a button element
    deleteBtn.innerHTML = "Delete"; //setting button item to display "Delete" on UI
    li.appendChild(deleteBtn); //appending button to UI
    deleteBtn.style.marginLeft = "75px";
    document.getElementById("listTodos").appendChild(li); //appending list element to UI

    let clearInput = document.getElementById("added"); //grabbing id of input element
    clearInput.value = ""; //clearing out input box each time a new task is added by setting value to an empty string
    
    deleteBtn.onclick = function() { deleteItem(index) }; //using onclick event to run deleteItem function when button is clicked by user
}

function addLocalStorageTodosToPage() { //this will loop through the todos in localStorage and add them to UI for when page is refreshed
    const arrayOfTasks = JSON.parse(localStorage.getItem("todos")) || []; //declaring const arrayOfTasks and converting it to an array so we can loop through it
    for (let i = 0; i < arrayOfTasks.length; i++) { //looping through arrayOfTasks to grab each todo item
        addTodoToPage(arrayOfTasks[i], i); //calling function addTodoToPage and passing arrayOfTasks[i] through it to print each todo item to UI 
        //and also passing in i as the index
    }
}








