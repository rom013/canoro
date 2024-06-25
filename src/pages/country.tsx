import Header from "../components/header/header";
import { useEffect, useState } from "react";
import { CarouselCountrys } from "../components/slickCarousel/carousel";
import { Money, Thermometer, User } from "@phosphor-icons/react";

interface country {
    nameFlag: string
    country: string
    id: string
    background?: string
    money: string
    population: string
    climate: string
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
                className={`min-h-svh ${countrySelected?.background ?? "bg-zinc-500"} flex bg-cover bg-fixed`}
                style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.7)), url(${countrySelected?.background})` }}
            >
                <div
                    className="ml-6 max-w-16 h-dvh relative"
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
                                className="flex-1 flex items-center"
                            >
                                <div
                                    className="flex flex-col gap-20 pl-20 max-w-2xl translate-y-20"
                                >
                                    <h2
                                        className={`text-white font-sora font-extrabold uppercase ${countrySelected.country.length > 7 ? "text-7xl" : "text-9xl"}`}
                                    >
                                        {
                                            countrySelected?.country
                                        }
                                    </h2>

                                    <div className="text-white flex flex-col gap-4">
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
            className="flex gap-6 items-center capitalize"
        >
            {
                <Icon size={32} />
            }
            <span className="text-2xl">
                {dataInfo}
            </span>
        </div>
    )
}