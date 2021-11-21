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



function addTask () {
    let arrayOfTasks = []; //defining an empty array to store todo items in
    let addedTask = document.getElementById("added").value; //getting the value of the user input and storing it in a variable
    document.getElementById("add").innerHTML = `${addedTask}`; //displaying the user input value on the webpage
    let updatedArrayOfTasks = arrayOfTasks.push(addedTask); //pushing newly added task into empty array
    updatedArrayOfTasks.toString(); //converting into array of strings
    
    localStorage.setItem(addedTask, updatedArrayOfTasks); //storing array of tasks in localStorage
    console.log(updatedArrayOfTasks); //logging the updated array of tasks to console 
    console.log(typeof updatedArrayOfTasks);
}


function removeTask () {
    let taskRemoved = 
    document.getElementById("delete")
}


