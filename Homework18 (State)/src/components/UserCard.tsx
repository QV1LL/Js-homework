type UserCardProps = { name: string; age: number }

function UserCard({ name, age }: UserCardProps) {
    // Помилка в аргументах
    return (
        <div>
            Name: {name}, Age: {age}
        </div>
    )
}

// function UserCard(props) {
//     // Помилка в аргументах
//     return (
//         <div>
//             Name: {props.name}, Age: {props.age}
//         </div>
//     )
// }

export default UserCard
