const items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];

  const container = document.querySelector('.container');
  const deleteItemButton = document.querySelector('.delete');
  const addItem = document.querySelector('.add');
  const sortName = document.querySelector('#select');
  const sortValue = document.querySelector('#selectValue');
  const search = document.querySelector('#search');


const handlebars = (items) => {
    const source = document.querySelector('#listTemplate').innerHTML;
    const template = Handlebars.compile(source);
    const output = template({items});
    
    container.innerHTML = output;
}

handlebars(items);

const deleteItem = (event) => {
    if(event.target.closest('.delete')){
        event.target.parentElement.remove();
    }
    else {
        event.preventDefault();
    }
}

const sortByName = (event) => {
    if(event.target.value === 'A-Z') {
        let sortByNamee = items.concat();
        sortByNamee.sort((a,b) => a.name.localeCompare(b.name));
        handlebars(sortByNamee);
        console.log(sortByNamee)
    }
    else if(event.target.value === 'Z-A') {
        items.sort((a, b) => b.name.localeCompare(a.name));
        handlebars(items);
        console.log(items);
    }
    else {
        event.preventDefault();
    }
}

const sortByValue = (event) => {
    if(event.target.value === 'up') {
        items.sort((a, b) => {
            if(a.value < b.value) {
                return -1;
            }
            else if (a.value > b.value) {
                return 1;
            }
            else {
                return 0;
            }
        });
        handlebars(items);
        console.log(items);
    }
    else if(event.target.value === 'down') {
        items.sort((a, b) => {
            if(a.value > b.value) {
                return -1;
            }
            else if (a.value < b.value) {
                return 1;
            }
            else {
                return 0;
            }
        });
        handlebars(items);
        console.log(items);
    }
}

const searchItems = (event) => {
    container.innerHTML = '';
    const filterItems = items.filter(item => item.name.toLowerCase().startsWith(event.target.value.toLowerCase()));
    handlebars(filterItems);
    console.log(filterItems);
}

search.addEventListener('keyup', searchItems);
sortValue.addEventListener('change', sortByValue);
sortName.addEventListener('change', sortByName);
container.addEventListener('click', deleteItem);