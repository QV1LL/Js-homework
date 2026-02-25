const onlyStrings: string[] = []

let csvLine: [string, string, boolean] = ['1', 'Olexandr', true]

csvLine = ['Olexandr', true, '1']
// Exception! Compiler says that boolean value is not assignable to string
