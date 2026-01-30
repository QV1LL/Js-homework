import { useRef } from 'react'

const VideoPlayer = () => {
    const videoRef = useRef<HTMLVideoElement>(null)

    const handlePlay = () => {
        videoRef.current?.play()
    }

    const handlePause = () => {
        videoRef.current?.pause()
    }

    return (
        <div>
            <video ref={videoRef} src="https://www.w3schools.com/html/mov_bbb.mp4" width="300" />

            <div className="flex gap-3 p-2">
                <button className="border rounded-xl p-1 transition hover:bg-stone-400" onClick={handlePlay}>
                    Play
                </button>
                <button className="border rounded-xl p-1 transition hover:bg-stone-400" onClick={handlePause}>
                    Pause
                </button>
            </div>
        </div>
    )
}

export default VideoPlayer
