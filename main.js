let expenses = [];
let totalAmount = 0;
let localExpenseItems = JSON.parse(localStorage.getItem("list"))

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expenses-table-body');
const totalAmountCell = document.getElementById('total-amount');


if (localExpenseItems){
    expenses = localExpenseItems
    render(expenses)
}

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    if (category === '') {
        alert('Please select a category');
        return;
    }
    if (isNaN(amount) || amount <=0 ) {
        alert('Please enter a valid amoun')
        return;
    }
    if(date === '') {
        alert('Please select a date')
        return;
    } else {
        
    }

    expenses.push({category, amount, date})
    localStorage.setItem("list", JSON.stringify(expenses))
    render(expenses)
})

function render(expense){
    let expenseItems = ""
    for (let i=0; i<expense.length; i++){
        expenseItems += `<tr id="${[i]}"><td>${expense[i].category}</td><td>${expense[i].amount}</td><td>${expense[i].date}</td><td><button id="delete-btn" onclick="remove(${[i]})">Delete</button></td><tr>`
    }
    expensesTableBody.innerHTML = expenseItems
}

function remove(item) {
    expenses.splice(item, 1)
    localStorage.setItem("list", JSON.stringify(expenses))
    render(expenses)
}
