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
    populateList(items, itemsList)
    this.reset();
};

function populateList (players = [], playersList) {
    playersList.innerHTML = players.map((player, i) => {
        return `
            <li>
                
                <label for="item${i}">${player.text}</label>
            </li>
        `;
    }).join('');
};


addItems.addEventListener('submit', addItem);
