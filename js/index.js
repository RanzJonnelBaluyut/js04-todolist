// Create Variable for Lists
var form, todoList, button;

form = document.querySelector('form'); //Form DOM
todoList =  document.querySelector('ul');//To-Do-Lists
button = document.getElementById('clear');//Button

//Create input form element using DOM
var input = document.getElementById('user-todo');
//Adding Event Listener to the form field
form.addEventListener('submit', function(event){
    event.preventDefault();

    //Adding Function todoMaker: Carry out Inputted Value
    todoMaker(input.value);
    input.value = ''; //empty
});

//Create functions under 'list'
var todoMaker = function(text){
    //Creation of a new list inside ul
    var todo = document.createElement('li');
    //Inputted value inside the list 'li'
    todo.textContent = text;
    //Append to add a simple inputted list
    todoList.appendChild(todo);
    //Removing bulleted format
    todo.style.listStyleType = 'none';
    todo.id = 'mylist';

};

//Clear Button | Event Listener
button.addEventListener('click', function(){  
    while(todoList.firstChild){
        todoList.removeChild(todoList.firstChild);             
    };
});

// let input = document.querySelector(".input");
// let button = document.querySelector(".clear");

button.disabled = true;

input.addEventListener("change", stateHandle);

function stateHandle(){
    if(document.querySelector(".input").value === ""){
    button.disabled = true;
} else{
    button.disabled = false;
    }
};