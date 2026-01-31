const Task1 = () => {
    // Removed redunant state and useEffect

    function handleSubmit(e) {
        e.preventDefault()
        const data = new FormData(e.target)
        postDataToApi(data)
    }

    return <></>
}

export default Task1
