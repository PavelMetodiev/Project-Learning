const SELECTORS = {
    email: '[name=email]',
    rows: '#customers tbody tr',
    emailCell: '.email-cell'
}

const getEmail = () => document.querySelector(SELECTORS.email).value

const getRows = () => document.querySelectorAll(SELECTORS.rows)

const getRowToDelete = (rows, email) => 
    // const row = rows.find(row => {
    //     const cell = row.querySelector(SELECTORS.emailCell)
    //     return cell.innerHTML == email
    // }) is equal to:

    [...rows].find(row =>
        email == row.querySelector(SELECTORS.emailCell).innerHTML)

const deleteRow = (row) => row.remove()

const clearEmail = () => document.querySelector(SELECTORS.email).value = ''

const deleteByEmail = () => {
    const email = getEmail()
    const rows = getRows()
    const rowToDelete = getRowToDelete(rows, email)
    if (rowToDelete) {
        deleteRow(rowToDelete)
    }
    clearEmail()
} 