var expForm = document.getElementById("expense-form")

expForm.addEventListener("submit", save)


function save(event) {
    event.preventDefault();
    // console.log(event)
    const expenseAmount = document.getElementById('expenseAmount').value;
    const description = document.getElementById('description').value;
    const category = document.getElementById('category').value;
    const obj = {
        expenseAmount,
        description,
        category
    }
    localStorage.setItem(obj.description, JSON.stringify(obj));
    showExpenseDetails(obj);
}
window.addEventListener('DOMContentLoaded', (event) => {
    Object.keys(localStorage).forEach(key => {
        const user = JSON.parse(localStorage.getItem(key))
        showExpenseDetails(user);
    })
})

function showExpenseDetails(user) {
    const parentNode = document.getElementById('listofusers');
    const childHtml = `<li id=${user.description}> ${user.expenseAmount} - ${user.description}-'${user.category}'
    <button onclick=deleteUser('${user.description}')> Delete User </button>
    <button onclick=editUserDetails('${user.description}','${user.expenseAmount}','${user.category}')>Edit User </button>
 </li>`
    parentNode.innerHTML = parentNode.innerHTML + childHtml;

}


function removeItemFromScreen(description) {
    const parentNode = document.getElementById('listOfusers');
    const elem = document.getElementById(description)
    parentNode.removeChild(elem);
}


function deleteUser(description) {
    localStorage.removeItem(description)
    removeItemFromScreen(description)
}



function editUserDetails(description, expenseAmount, category) {

    document.getElementById('description').value = description;
    document.getElementById('expenseAmount').value = expenseAmount;
    document.getElementById('category').value = category;
    deleteUser(description)
}