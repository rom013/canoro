
interface propsCardAbout {
    img: string,
    title: string,
    description: string,
}

export function CardAbout({ img, title, description }: propsCardAbout) {
    return (
        <div
            className="flex flex-col gap-6 items-center max-w-64"
        >
            <img
                src={img}
                alt={title}
                draggable={false}
            />

            <div
                className="flex flex-col gap-4 items-center"
            >
                <strong
                    className="text-2xl font-sora font-normal"
                >
                    {title}
                </strong>
                <p
                    className="text-zinc-500 text-sm font-lato leading-relaxed text-center"
                >
                    {description}
                </p>
            </div>
        </div>
    )
}