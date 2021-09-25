// get the elements
const textbox = document.querySelector("#comboboxInput");
const listbox = document.querySelector("#comboboxListbox");
const combobox = document.querySelector("#combobox")
const items = listbox.querySelectorAll('.result');

const KEYCODES = {
    Tab: 9,
    Enter: 13,
    Escape: 27,
    Space: 32,
    ArrowUp: 38,
    ArrowDown: 40
};

const showListbox = () => {
    listbox.classList.remove('hidden');
    combobox.setAttribute('aria-expanded', 'true');
};

const hideListbox = () => {
    listbox.classList.add('hidden');
    combobox.setAttribute('aria-expanded', 'false');

    items.forEach((item) => {
        item.classList.remove('highlighted');
    });

    //remove active descent
    textbox.setAttribute('aria-activedescendant', '');
};

const checkToHide = (event) => {
    if (event.target !== textbox && !combobox.contains(event.target)) {
        hideListbox();
    }
};

const selectItem = (item) => {
    //set the value to text field
    textbox.value = item.innerText;
    
    //hide the loistbox
    hideListbox();

};

const clickItem = (event) => {
    //if clicked on real option, call selectItem method
    if (event.target && event.target.nodeName === 'LI') {
        selectItem(event.target);
    }
};

const checkKey = (event) => {
    const key = event.which || event.keyCode;

    //prevent search on control keys (enter, escape, arrows)
    switch (key) {
        case KEYCODES.ArrowDown:
        case KEYCODES.ArrowUp:
        case KEYCODES.Escape:
        case KEYCODES.Enter:
            event.preventDefault();
        default:
            searchResults();
            // showListbox();
    }
};

const searchResults = () => {
    //get the value of text field
    const searchString = textbox.value.toLowerCase();
    const items = listbox.querySelectorAll('.result');

    //filter list items
    for (let i = 0; i < items.length; i++) {
        const item = items[i];

        //check if the item value starts with entered search string
        if (item.textContent.toLocaleLowerCase().trim().startsWith(searchString)) {
            item.classList.remove('hidden');
        }
        else {
            item.classList.add('hidden');
        }
    }
};

const checkIfListboxVisible = () => {
    if (listbox.classList.contains('hidden')) {
        showListbox();
    }
};

const handleKeyboardInput = (event) => {
    const key = event.which || event.keyCode;
    const itemsArray  = Array.from(listbox.querySelectorAll('.result:not(.hidden)'));
    const numOfresults = itemsArray.length;
    let newIndex = itemsArray.findIndex((item) => {
        return item.classList.contains('highlighted');
    });

    //if ESC or Tab, hide listbox
    //if ArrowUp, "navigate" through list
    //if Enter, set the value to input field

    switch (key) {
        case KEYCODES.Escape:
        case KEYCODES.Tab:
            hideListbox();
            return;
        case KEYCODES.ArrowDown:
            checkIfListboxVisible();
            //calculate next item
            if (newIndex === numOfresults - 1) {
                newIndex = 0;
            }
            else {
                newIndex++;
            }
            break;
        case KEYCODES.ArrowUp:
            checkIfListboxVisible();
            //calculate the previus item
            if (newIndex <= 0) {
                newIndex = numOfresults - 1;
            }
            else {
                newIndex--;
            }
            break;
        case KEYCODES.Enter:
            if (newIndex !== -1) {
            event.preventDefault();
            selectItem(itemsArray[newIndex]);
            return;
        }
        default:
            return;
    }

    //highlighting logic
    //remove "highlighted" class for all
    itemsArray.forEach((item) => {
        item.classList.remove('highlighted')
    });

    //highlight the new item
    itemsArray[newIndex].classList.add('highlighted');
    textbox.setAttribute('aria-activedescendant', itemsArray[newIndex].getAttribute('id'))
};

// bind events
textbox.addEventListener('focus', showListbox);
document.body.addEventListener("click", checkToHide);
listbox.addEventListener('click', clickItem);
textbox.addEventListener('keyup', checkKey);
textbox.addEventListener('keydown', handleKeyboardInput);