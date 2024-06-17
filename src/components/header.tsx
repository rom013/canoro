import Logo from "../assets/image/logo_canoro_full.svg"
import SearchHeader from "./searchHeader"

export default function Header() {

    const routes = [
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
                    className="text-white text-4xl"
                    draggable={false}
                />


                <nav
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
            </div>
        </header>
    )
}