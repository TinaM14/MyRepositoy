let button = document.querySelector('button');
const input = document.querySelector('input');
const body = document.querySelector('body');
function clickButton () {
    if (input.value.length === 0){
        alert("Input field can't be empty");
    }
    else {
        let para = document.createElement('p');
        para.textContent=input.value;
        body.appendChild(para);
        
        let buttonX = document.createElement('button');
        let atribute = document.createAttribute('class');
        atribute.value = 'x';
        buttonX.setAttributeNode(atribute);

        let node = document.createTextNode('X');
        buttonX.appendChild(node);
        para.appendChild(buttonX);

        function alert_message () {
            if (confirm('Are you sure?')) {
                body.removeChild(para);
            }
        }

        buttonX.addEventListener('click', alert_message);

       
    }
}

button.addEventListener('click', clickButton);

