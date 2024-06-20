import { List, X } from "@phosphor-icons/react"
import { useWindowWidth } from "../hook/useWindow"
import { routes } from "../interfaces/routes.interface"
import SearchHeader from "./searchHeader"
import { useState } from "react"

interface propsNavigationMenu {
    routes: readonly routes[]
}

export default function NavigationMenu({ routes }: propsNavigationMenu) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            {
                useWindowWidth() < 640
                    ? <>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {
                                isOpen
                                    ? <X color={"black"} size={32} />
                                    : <List color={"white"} size={32} />
                            }

                        </button>

                        {
                            isOpen && <nav
                                className="absolute w-full bg-white left-0 -z-10 pt-16 pb-8 px-8 -top-10 flex flex-col items-center gap-4 shadow-md"
                            >
                                {
                                    routes.map((route, index) => {
                                        return (
                                            <a
                                                href={route.path}
                                                className="text-lg"
                                                key={index}
                                            >
                                                {route.name}
                                            </a>
                                        )
                                    })
                                }
                            </nav>
                        }
                    </>
                    : <nav
                        className="text-white flex gap-8 items-center"
                    >
                        {
                            routes.map((route, index) => {
                                return (
                                    <a
                                        href={route.path}
                                        className="text-lg"
                                        key={index}
                                    >
                                        {route.name}
                                    </a>
                                )
                            })
                        }

                        <SearchHeader />
                    </nav>
            }

        </>
    )
}