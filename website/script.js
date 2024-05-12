
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
            <tr style="text-align:center">
                <td>${key}</td>
                <td>${inputItem[key]}</td>
                <td>
                 <a href="#" class="deleteBtn border-slate-400 p-1 border-sm" onclick="deleteItem('${key}')"><i class="fs-5 text-danger las la-trash"></i></a>
                </td>
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



