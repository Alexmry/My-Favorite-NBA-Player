const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.players');
const items = JSON.parse(localStorage.getItem('items')) || [];


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

    // local storage for storing my favorite players. We use stringify because items needs to be a string
    localStorage.setItem('items', JSON.stringify(items));
    
    this.reset();
};

// Grabing all user inputs (players aka items in our case) and putting them in the list (playerList aka itemsList in our case)
function populateList (players = [], playersList) {
    playersList.innerHTML = players.map((player, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${player.done ? 'checked' : ''} />
                <label for="item${i}">${player.text}</label>
            </li>
        `;
    }).join('');
};

// for storing flagged MVPs
function toggleDone(e) {
    // console.log(e.target);
    // when we console log the even.target, we get back the input tag and the label tag
    
    // does the target matches what we are looking for => so we can isolate the inputs and get ride of the labels
    if (!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    // console.log(el.dataset.index); => give use the index of the corresponding item in the array
    const index = el.dataset.index;
    // to do the toogle, is items[index].done = true, we set it to the opposite so it become false
    items[index].done = !items[index].done;
    // Once the toggle is done, we save it again in our local storage
    localStorage.setItem('items', JSON.stringify(items));
    // And we run again the function populateList to update the list with the new value (that has just been toggled)
    populateList(items, itemsList);
}


addItems.addEventListener('submit', addItem);

itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
