import { FacebookLogo, InstagramLogo, SpotifyLogo, TelegramLogo, ThreadsLogo, TiktokLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react"

const NETWORKS = [
    {
        name: "facebook",
        link: "#",
        icon: <FacebookLogo />,
    },
    {
        name: "instagram",
        link: "#",
        icon: <InstagramLogo />,
    },
    {
        name: "X",
        link: "#",
        icon: <XLogo />,
    },
    {
        name: "tiktok",
        link: "#",
        icon: <TiktokLogo />,
    },
    {
        name: "threads",
        link: "#",
        icon: <ThreadsLogo />,
    },
    {
        name: "youtube",
        link: "#",
        icon: <YoutubeLogo />,
    },
    {
        name: "telegram",
        link: "#",
        icon: <TelegramLogo />,
    },
    {
        name: "spotify",
        link: "#",
        icon: <SpotifyLogo />,
    },
]


export default function Network() {
    return (
        <ul
            className="flex flex-wrap w-full gap-2 items-center justify-center px-5 text-2xl"
        >
            {
                NETWORKS.map(network => {
                    return (
                        <li
                            className="hover:-translate-y-2 transition-all p-1"
                        >
                            <a
                                href={network.link}
                                title={network.name}
                            >
                                {network.icon}
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}