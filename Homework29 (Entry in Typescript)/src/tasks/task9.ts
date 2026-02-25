interface ApiResponse<TData> {
    status: string
    data: TData
    timeStamp: Date
}

interface User {
    id: string
    name: string
}

interface Product {
    id: string
    title: string
    description: string
}

const userResponse: ApiResponse<User>
const productsResponse: ApiResponse<Product[]>
