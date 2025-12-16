export class EmployeesTable {
    constructor(employees) {
        this.employees = employees
    }

    getHtml() {
        const employees = Array.from(this.employees)

        if (employees.length === 0) return

        const properties = []

        for (const property in employees[0]) properties.push(property)

        return `<table>
                    <thead>
                        ${properties.map((prop) => `<th>${prop}</th>`).join('')}
                    </thead>
                    <tbody>
                        ${employees
                            .map((employee) => {
                                const values = []
                                for (const value in employee) values.push(employee[value])
                                return `<tr>${values.map((prop) => `<td>${prop}</td>`).join('')}</tr>`
                            })
                            .join('')}
                    </tbody>
                </table>`
    }
}
