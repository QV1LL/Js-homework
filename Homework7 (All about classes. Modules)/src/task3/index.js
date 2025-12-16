import { Employee } from './types/Employee.js'
import { StyledEmployeesTable } from './types/StyledEmployeesTable.js'

const employees = [
    new Employee('Alice Johnson', 'Software Engineer', 120000),
    new Employee('Bob Williams', 'Project Manager', 135000),
    new Employee('Charlie Brown', 'Data Analyst', 95000),
    new Employee('Diana Smith', 'UX Designer', 110000),
    new Employee('Ethan Miller', 'HR Specialist', 85000),
]

const employeesTable = new StyledEmployeesTable(employees)

const container = document.getElementById('container')
const tableMarkup = employeesTable.getHtml()

console.log(tableMarkup)
container.innerHTML = tableMarkup
