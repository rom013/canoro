import Logo from "../assets/image/logo_canoro_full.svg"
import LogoIco from "../assets/image/logo_ico.svg"
import { routes } from "../interfaces/routes.interface"
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


    return (
        <header
            className="fixed top-10 w-full z-50"
        >
            <div
                className="max-w-screen-xl w-full mx-auto flex justify-between items-center px-10"
            >
                <img
                    alt="Canoro"
                    src={Logo}
                    className="text-white text-4xl hidden sm:block"
                    draggable={false}
                />
                <img
                    alt="Canoro"
                    src={LogoIco}
                    className="text-white text-2xl w-8 sm:hidden block active:rotate-45 transition-all duration-300"
                    draggable={false}
                />


                <NavigationMenu
                    routes={routes}
                />
            </div>
        </header>
    )
}