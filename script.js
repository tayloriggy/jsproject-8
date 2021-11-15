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
let tasks = ["Wash the dishes", "Do laundry", "Go to the grocery store", "Cook food", "Vacuum", "Mow the lawn"];
document.getElementById("add").innerHTML = 

localStorage.setItem("task", "Wash the dishes");
localStorage.setItem("task", "Do laundry");
localStorage.setItem("task", "Go to the grocery store");
localStorage.setItem("task", "Cook food");
localStorage.setItem("task", "Vacuum");
localStorage.setItem("task", "Mow the lawn");


console.log(tasks);

}

