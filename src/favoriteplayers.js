const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.players');
const items = [];
// const items = JSON.parse(localStorage.getItem('items')) || [];


// pushing user input (item) into and empty array (items)
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
    populateList(items, itemsList);
    this.reset();
};

// Grabing all user inputs (players aka items in our case) and putting them in the list (playerList aka itemsList in our case)
function populateList (players = [], playersList) {
    playersList.innerHTML = players.map((player, i) => {
        return `
            <li>
                
                <label>${player.text}</label>
            </li>
        `;
    }).join('');
};


addItems.addEventListener('submit', addItem);
