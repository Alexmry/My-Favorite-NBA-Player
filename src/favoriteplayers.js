const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.players');
const items = [];
// const items = JSON.parse(localStorage.getItem('items')) || [];

// plates => players

function addItem(e) {
    e.preventDefault();
    console.log('hello');
}

addItems.addEventListener('submit', addItem);