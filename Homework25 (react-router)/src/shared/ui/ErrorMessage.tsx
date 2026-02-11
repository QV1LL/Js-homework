interface Props {
    message?: string
}

export const ErrorMessage = ({ message = 'Something went wrong' }: Props) => (
    <div className="p-4 my-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
        <p className="font-medium">{message}</p>
    </div>
)
