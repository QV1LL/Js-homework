type Id = string | number

function getUserById(id: Id) {
    console.log(typeof id === 'string' ? id.toUpperCase() : 'Number ID')
}

getUserById(5)
