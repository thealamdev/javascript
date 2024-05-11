
/**
 * variables are here...
 */

const inputField = document.querySelector('#inputField'),
    tableContent = document.querySelector('#tableContent');

let inputItem = {};
let size = Object.keys(inputItem).length;



inputField.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
        inputItem[size++] = event.target.value;
        event.target.value = '';
        renderTable()
    }
});

const renderTable = () => {
    tableContent.innerHTML = '';
    for (let key in inputItem) {
        tableContent.insertAdjacentHTML('beforeend', `
            <tr>
                <td>${key}</td>
                <td>${inputItem[key]}</td>
                <td class="deleteBtn" onclick="deleteItem('${key}')"><i class="text-danger las la-trash"></i></td>
            </tr>
        `);
    }
};

/**
 * delete item from items
 */

let deleteItem = function (key) {
    if (confirm('Are you sure to delete this ???')) {
        delete inputItem[key];
        renderTable()
    }
}



