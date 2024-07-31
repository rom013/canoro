import Header from "../components/header/header";
import { useEffect, useState } from "react";
import { CarouselCardsLocations, CarouselCountrys } from "../components/slickCarousel/carousel";
import InfoCountry from "../components/infoCountry";
import { LocalCard } from "../components/cards/localCard";
import { settings } from "../settings/carouselCountry.settings";
import useTopToScreen from "../hook/useTopToScreen";

interface country {
    nameFlag: string
    name: string
    id_country: string
    background?: string
    money: string
    population: string
    weather: string
    city: Array<any>
}

export default function Country() {
    useTopToScreen()

    const [countrys, setCountrys] = useState<country[]>([])
    const [countrySelectedId, setCountrySelectedId] = useState("1")
    const [countrySelected, setCountrySelected] = useState<country>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(`${import.meta.env.VITE_URL_SERVER}/countries`)
            .then(res => res.json())
            .then(res => {
                setCountrySelectedId(res[0].id_country);
                setCountrys(res)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [])

    useEffect(() => {
        setIsLoading(true)

        new Promise((resolve, reject) => {
            let selected = []
            selected = countrys.filter((a) => {
                return a.id_country === countrySelectedId
            })

            if (selected.length === 0) {
                reject("deu ruim")
            }

            resolve(selected)
        })
            .then((w: any) => {
                setCountrySelected(w[0])
            })
            .catch(err => console.log(err))
            .finally(() => setIsLoading(false))

    }, [countrys, countrySelectedId])

    return (
        <>
            <Header />
            <main
                className={`h-svh flex bg-cover bg-fixed`}
                style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.7)), url(${countrySelected?.background})` }}
            >
                <div
                    className="ml-6 max-w-16 h-dvh relative -translate-y-10 md:translate-y-0"
                >
                    <div
                        className="w-px h-full bg-white absolute left-1/2 -translate-x-1/2"
                    />

                    <CarouselCountrys
                        countrys={countrys}
                        countrySelected={setCountrySelectedId}
                    />
                </div>

                {
                    isLoading
                        ? <p>Carregando...</p>
                        : countrySelected && (
                            <section
                                className="flex-1 flex xl:items-center gap-10 justify-between flex-col xl:flex-row"
                            >
                                <div
                                    className="flex flex-col md:gap-20 gap-6 lg:pl-20 pl-14 md:max-w-2xl md:translate-y-20 translate-y-40 pointer-events-none"
                                >
                                    <h2
                                        className={`text-white font-sora font-extrabold uppercase text-5xl md:text-7xl`}
                                    >
                                        {
                                            countrySelected?.name
                                        }
                                    </h2>
                                    <div className="text-zinc-200 flex flex-col gap-4">
                                        <InfoCountry
                                            dataInfo={countrySelected.population}
                                            icon="User"
                                        />
                                        <InfoCountry
                                            dataInfo={countrySelected.weather}
                                            icon="Thermometer"
                                        />
                                        <InfoCountry
                                            dataInfo={countrySelected.money}
                                            icon="Money"
                                        />
                                    </div>
                                </div>
                                {
                                    countrySelected.city.length > 0 && (
                                        <div
                                            className="gap-10 flex flex-col self-start lg:self-end lg:-translate-x-10 lg:mb-10 mb-0 py-10 lg:py-0 absolute lg:relative left-0 bottom-0 w-screen lg:w-auto bg-white/20 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-0"
                                        >
                                            <h3
                                                className="md:max-w-80 md:w-full border-b-2 border-white font-lato text-white text-2xl font-bold uppercase mx-8 lg:mx-0"
                                            >
                                                top destinos
                                            </h3>
                                            <div
                                                className="overflow-hidden lg:overflow-visible"
                                            >
                                                <CarouselCardsLocations
                                                    settings={settings}
                                                    isNavigation={false}
                                                >
                                                    {
                                                        countrySelected.city.map((local, i) => {
                                                            return (
                                                                <LocalCard
                                                                    key={i}
                                                                    img={local.background}
                                                                    title={local.name}
                                                                    className="h-44 lg:h-auto"
                                                                    id={local.id_city}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </CarouselCardsLocations>
                                            </div>
                                        </div>
                                    )
                                }

                            </section>
                        )
                }
            </main>
        </>
    )
}