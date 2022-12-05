import { useEffect, useRef, useState } from "react";

const Bird = ({bird, image, audio, index}) => {

    const [isPlaying, setIsPlaying] = useState(null)
    const audioSrc = useRef(null)

    // const handlePlayPause = () => {
    //     setIsPlaying(!isPlaying)
    // }

    useEffect(() => {
        if(isPlaying === null) return
        isPlaying ? audioSrc.current.play() : audioSrc.current.pause()
    }, [isPlaying])

    return(
        <div className="bird-container">
        {/* <figure>
            <figcaption>Listen to the {bird.en}:</figcaption>
             <audio
            controls
            src={audio}>
                <a href={audio}>
                Download audio
                </a>
            </audio>
        </figure> */}

        {/* <img src={image}></img> */}

        </div>

    )
}

export default Bird;