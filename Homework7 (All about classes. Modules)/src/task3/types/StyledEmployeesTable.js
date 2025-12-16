import { EmployeesTable } from './EmployeesTable.js'

export class StyledEmployeesTable extends EmployeesTable {
    constructor(...args) {
        super(...args)
    }

    getStyles(styles) {
        if (styles) return styles

        return `table {
                    width: 100%;
                    border-collapse: collapse;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }

                thead th {
                    background-color: #007bff;
                    color: white;
                    text-align: left;
                    padding: 12px 15px;
                    font-size: 1em;
                    text-transform: capitalize;
                    border-bottom: 3px solid #0056b3;
                }

                td {
                    padding: 12px 15px;
                    border-bottom: 1px solid #eee;
                }

                tbody tr:nth-child(even) {
                    background-color: #f9f9f9;
                }

                tbody tr:hover {
                    background-color: #e2f0ff;
                    cursor: pointer;
                }
            `
    }

    getHtml() {
        return `<style>${this.getStyles()}</style>${super.getHtml()}`
    }
}
