const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.players');
const items = [];
// const items = JSON.parse(localStorage.getItem('items')) || [];

// plates => players

function addItem(e) {
    e.preventDefault();
    // console.log('hello');
    const text = this.querySelector('[name=item]').value;
    const item = {
        text: text,
        done: false
    };
    // console.log(item);
    items.push(item);
    this.reset();
};

function populateList () {

};



addItems.addEventListener('submit', addItem);
