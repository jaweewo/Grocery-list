let groceryList = document.querySelector('#grocery_list');
const addToListButton = document.querySelector('#add_to_list');
const groceryListInput = document.querySelector("#grocery_list_input");
let listName = document.querySelector('#list_name');
let listNameInput = document.querySelector('#list_name_input');
const editListName = document.querySelector('#edit_list_name');

editListName.addEventListener('click', () => {
	if(listNameInput.style.visibility = 'hidden') {
		listNameInput.style.visibility = 'visible';
		console.log("show");
	} else {
		listNameInput.style.visibility = 'hidden';
		console.log("hide");

	}
})

let addToList = () => {
	if (groceryListInput.value !== '') {
		let li = document.createElement('li');
		li.textContent = groceryListInput.value;
		groceryList.appendChild(li);
		groceryListInput.value = '';
	}
}

addToListButton.addEventListener('click', ()=>{
	addToList();
})

groceryListInput.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key === 13) { // 13 es un enter
      	addToList();
    }
});