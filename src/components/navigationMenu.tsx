import { List } from "@phosphor-icons/react"
import { useWindowWidth } from "../hook/useWindowWidth"
import { routes } from "../interfaces/routes.interface"
import SearchHeader from "./searchHeader"

interface propsNavigationMenu {
    routes: readonly routes[]
}

export default function NavigationMenu({ routes }: propsNavigationMenu) {
    return (
        <>
            {
                useWindowWidth() < 640
                    ? <button>
                        <List color="white" size={32} />
                    </button>
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