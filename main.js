let expenses = [];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select');
const amountInput = document.getElementById('amount-input');
const dateInput = document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensesTableBody = document.getElementById('expenses-table-body');
const totalAmountCell = document.getElementById('total-amount');

addBtn.addEventListener('click', function() {
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date = dateInput.value;

    // if (category === '') {
    //     alert('Please select a category');
    //     return;
    // }
    // if (isNaN(amount) || amount <=0 ) {
    //     alert('Please enter a valid amoun')
    //     return;
    // }
    // if(date === '') {
    //     alert('Please select a date')
    //     return;
    // } else {
        
    // }

    expenses.push({category, amount, date})
    render(expenses)
})

function render(expense){
    let expenseItems = ""
    for (let i=0; i<expense.length; i++){
        expenseItems += `<tr><td>${expense[i].category}</td><td>${expense[i].amount}</td><td>${expense[i].date}</td><td><button id="delete-btn">Delete</button></td><tr>`
    }
    expensesTableBody.innerHTML = expenseItems
}