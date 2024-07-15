import { FacebookLogo, InstagramLogo, SpotifyLogo, TelegramLogo, ThreadsLogo, TiktokLogo, XLogo, YoutubeLogo } from "@phosphor-icons/react"
import { memo, useEffect, useState } from "react"
import { networkProps } from "../interfaces/propsNetwork.interface"

const icons: any = {
    FacebookLogo,
    InstagramLogo,
    SpotifyLogo,
    TelegramLogo,
    ThreadsLogo,
    TiktokLogo,
    XLogo,
    YoutubeLogo
}

function Network() {
    const [networks, setNetworks] = useState<networkProps[]>([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL_SERVER}/network`)
            .then(res => res.json())
            .then(res => setNetworks(res))
    }, [])

    return (
        <ul
            className="flex flex-wrap w-full gap-2 items-center justify-center px-5 text-2xl"
        >
            {
                networks.map(network => {
                    const IconComponent = icons[network.icon]
                    return (
                        <li
                            className="hover:-translate-y-2 transition-all p-1"
                        >
                            <a
                                href={network.link}
                                title={network.name}
                            >
                                {
                                    <IconComponent />
                                }
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default memo(Network)