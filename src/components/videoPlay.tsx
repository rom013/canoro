type propsVideoPlayer = {
    src: string
}

export default function VideoPlayer({ src }: propsVideoPlayer) {
    return (
        <video
            autoPlay
            loop
            className="object-cover size-full"
            muted
        >
            <source src={src} type="video/mp4" />
        </video>
    );
};