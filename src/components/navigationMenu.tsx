import { List, X } from "@phosphor-icons/react"
import { useWindowScrollY, useWindowWidth } from "../hook/useWindow"
import { routes } from "../interfaces/routes.interface"
import SearchHeader from "./searchHeader"
import { useState } from "react"

interface propsNavigationMenu {
    routes: readonly routes[]
}

export default function NavigationMenu({ routes }: propsNavigationMenu) {

    const [isOpen, setIsOpen] = useState(false)

    const windowWidth = useWindowWidth()
    const windowScrollY = useWindowScrollY()

    const isScreenMobile = windowWidth <= 885
    const isScrolled = windowScrollY > 700

    return (
        <>
            {
                isScreenMobile
                    ? <>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {
                                isOpen
                                    ? <X
                                        color={"#0D7CE9"}
                                        size={32}
                                    />
                                    : <List
                                        color={isScrolled ? "#0D7CE9" : "white"}
                                        size={32}
                                    />
                            }

                        </button>

                        {
                            isOpen && <nav
                                className={`absolute w-full bg-white left-0 -z-10 pb-8 pt-20 px-8 flex flex-col items-center gap-4 shadow-md scale-up-ver-top ${isScrolled ? "top-0" : "-top-10"}`}
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
                        className={`${isScrolled ? "text-black" : "text-white"} flex gap-8 items-center`}
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