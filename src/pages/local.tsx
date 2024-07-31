import { useLocation } from "react-router-dom";
import Header from "../components/header/header";
import { useEffect, useState } from "react";
import InfoCountry from "../components/infoCountry";
import Footer from "../components/footer";
import useTopToScreen from "../hook/useTopToScreen";

interface CityProps {
    backgroundBanner: string
    name: string,
    about: string,
    population: string,
    weather: string,
    UF: {
        name: string
    },
    country: {
        name: string
    }
}

export default function Local() {
    useTopToScreen()

    const { state } = useLocation()
    const [local, setLocal] = useState<CityProps>()

    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL_SERVER}/city/${state.id}`)
            .then(e => e.json())
            .then(e => {
                setLocal(e.city)
            })
    }, [])

    return (
        <>
            <Header />
            <main
                className={`min-h-svh flex bg-[length:100%_100%]`}
                style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.7)), url(${local?.backgroundBanner})` }}
            >
                <section
                    className="flex-1 flex flex-col justify-center md:gap-20 gap-6 lg:pl-20 pl-14"
                >
                    <div className="after:w-16 after:h-2 after:bg-white after:block after:absolute after:-top-6 relative">
                        <span className="text-white uppercase">
                            {
                                `${local?.UF.name} - ${local?.country.name}`
                            }
                        </span>
                        <h2
                            className={`text-white font-sora font-extrabold uppercase text-5xl md:text-7xl`}
                        >
                            {
                                local?.name
                            }
                        </h2>
                    </div>
                    <div className="text-zinc-200 flex flex-col gap-4">
                        {
                            local && (
                                <>
                                    <InfoCountry
                                        dataInfo={local.population}
                                        icon="User"
                                    />
                                    <InfoCountry
                                        dataInfo={local.weather}
                                        icon="Thermometer"
                                    />
                                </>
                            )
                        }
                    </div>
                </section>
            </main>
            <main
                className="max-w-6xl mx-auto px-6 py-16 "
            >
                <aside
                    className="max-w-3xl w-full space-y-8"
                >
                    <h2
                        className="text-2xl font-lato font-semibold text-zinc-800"
                    >
                        Sobre <strong className="text-5xl uppercase text-zinc-950">{local?.name}</strong>
                    </h2>

                    <section>
                        <p className="text-zinc-600 font-lato text-base leading-relaxed">
                            {local?.about}
                        </p>
                    </section>
                </aside>
            </main>

            <Footer />
        </>
    )
}