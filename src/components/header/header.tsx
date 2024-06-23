import { useWindowScrollY, useWindowWidth } from "../../hook/useWindow"
import { routes } from "../../interfaces/routes.interface"
import { SvgLogoFull, SvgLogoIco } from "../imageLogo"
import NavigationMenu from "./navigationMenu"

export default function Header() {

    const routes: readonly routes[] = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Viagens",
            path: "/viagem"
        },
        {
            name: "Países",
            path: "/pais"
        },
    ]

    const windowScrollY = useWindowScrollY()
    const windowWidth = useWindowWidth()

    const isScreenMobile = windowWidth < 885
    const isScrolled = windowScrollY > 700

    return (
        <header
            className={`fixed top-10 w-full z-50 transition-all ${isScrolled && "bg-white/50 backdrop-blur-sm md:bg-white !top-0 py-10 md:shadow-md shadow-blue-canoro/5"}`}
        >
            <div
                className="max-w-screen-xl w-full mx-auto flex justify-between items-center px-10"
            >
                {
                    isScreenMobile
                        ? <SvgLogoIco />
                        : <SvgLogoFull colorMain={isScrolled ? "black" : "white"} />
                }

                <NavigationMenu
                    routes={routes}
                />
            </div>
        </header>
    )
}