import { useState } from 'react'

interface Post {
    id: number
    title: string
    likes: number
}

type PostProps = { post: Post; onLikeChange: (isLiked: boolean) => void }

const Post = ({ post, onLikeChange }: PostProps) => {
    const [isLiked, setIsLiked] = useState(false)

    return (
        <div className="max-w-sm bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-wider">
                        Post #{post.id}
                    </span>
                </div>

                <h2 className="text-xl font-semibold text-slate-900 leading-tight">{post.title}</h2>

                <hr className="border-slate-100" />

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-slate-600">
                        <span className="font-bold text-slate-900">{post.likes}</span>
                        <span className="text-sm">likes</span>
                    </div>

                    <button
                        onClick={() => {
                            setIsLiked(!isLiked)
                            onLikeChange(!isLiked)
                        }}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all active:scale-95 cursor-pointer border ${
                            isLiked
                                ? 'bg-pink-50 border-pink-200 text-pink-600'
                                : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                        }`}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill={isLiked ? 'currentColor' : 'none'}
                            viewBox="0 0 24 24"
                            strokeWidth="2"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                            />
                        </svg>
                        {isLiked ? 'Liked' : 'Like'}
                    </button>
                </div>
            </div>
        </div>
    )
}

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([
        { id: 1, title: 'Hello', likes: 0 },
        { id: 2, title: 'React', likes: 5 },
    ])

    const handleLikeUpdate = (postId: number, isLiked: boolean) => {
        const currentPosts = [...posts]
        const postToUpdate = currentPosts.find((post) => post.id === postId)

        if (postToUpdate) {
            postToUpdate.likes += isLiked ? 1 : -1
            setPosts(currentPosts)
        }
    }

    return (
        <div className="bg-slate-50 p-8">
            <div className="max-w-6xl mx-auto">
                <header className="mb-10">
                    <h1 className="text-3xl font-bold text-slate-900">Community Feed</h1>
                    <p className="text-slate-500">Discover what's happening today</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            post={post}
                            onLikeChange={(isLiked) => handleLikeUpdate(post.id, isLiked)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Posts
