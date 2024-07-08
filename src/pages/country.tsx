import Header from "../components/header/header";
import { useEffect, useState } from "react";
import { CarouselCardsLocationsCountry, CarouselCountrys } from "../components/slickCarousel/carousel";
import { Money, Thermometer, User } from "@phosphor-icons/react";

interface country {
    nameFlag: string
    country: string
    id: string
    background?: string
    money: string
    population: string
    climate: string
    destiny: Array<any>
}

export default function Country() {
    const [countrys, setCountrys] = useState<country[]>([])
    const [countrySelectedId, setCountrySelectedId] = useState("1")
    const [countrySelected, setCountrySelected] = useState<country>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)
        fetch(`${import.meta.env.VITE_URL_SERVER}/country`)
            .then(res => res.json())
            .then(res => {
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
                return a.id === countrySelectedId
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
                className={`h-svh ${countrySelected?.background ?? "bg-zinc-500"} flex bg-cover bg-fixed`}
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
                                            countrySelected?.country
                                        }
                                    </h2>
                                    <div className="text-zinc-200 flex flex-col gap-4">
                                        <InfoCountry
                                            dataInfo={countrySelected.population}
                                            icon="User"
                                        />
                                        <InfoCountry
                                            dataInfo={countrySelected.climate}
                                            icon="Thermometer"
                                        />
                                        <InfoCountry
                                            dataInfo={countrySelected.money}
                                            icon="Money"
                                        />
                                    </div>
                                </div>

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
                                        <CarouselCardsLocationsCountry
                                            locations={countrySelected.destiny}
                                        />
                                    </div>
                                </div>

                            </section>
                        )
                }
            </main>
        </>
    )
}

interface InfoCountryProps {
    icon: string
    dataInfo: string
}

const iconsInfo: any = {
    User,
    Money,
    Thermometer
}

function InfoCountry({ icon, dataInfo }: InfoCountryProps) {

    const Icon = iconsInfo[icon]

    return (
        <div
            className="flex md:gap-6 gap-2 items-center capitalize text-xl md:text-3xl"
        >
            {
                <Icon />
            }
            <span className="text-sm md:text-2xl">
                {dataInfo}
            </span>
        </div>
    )
}