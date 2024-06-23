import Header from "../components/header/header";
import { useEffect, useState } from "react";
import { CarouselCountrys } from "../components/slickCarousel/carousel";

interface country {
    nameFlag: string
    country: string
    id: string
    background?: string
}

export default function Country() {
    const [countrys, setCountrys] = useState<country[]>([])
    const [countrySelectedId, setCountrySelectedId] = useState("")
    const [countrySelected, setCountrySelected] = useState<country>()

    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL_SERVER}/country`)
            .then(res => res.json())
            .then(res => {
                setCountrys(res)
            })
    }, [])

    useEffect(() => {
        let selected = countrys.filter((a) => {
            return a.id === countrySelectedId
        })

        setCountrySelected(selected[0])
    }, [countrySelectedId])

    return (
        <>
            <Header />
            <main
                className={`min-h-svh ${countrySelected?.background ?? "bg-zinc-500"} flex bg-[length:100%]`}
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
                    countrySelectedId
                }
            </main>
        </>
    )
}