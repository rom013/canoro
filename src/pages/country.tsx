import Header from "../components/header/header";
import { useEffect, useState } from "react";
import { CarouselCountrys } from "../components/slickCarousel/carousel";

interface country {
    nameFlag: string
    country: string
    id_country: string
}

export default function Country() {
    const [countrys, setCountrys] = useState<country[]>([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL_SERVER}/country`)
            .then(res => res.json())
            .then(res => setCountrys(res))
    }, [])

    return (
        <>
            <Header />
            <main
                className="min-h-svh bg-zinc-500 flex"
            >
                <div
                    className="ml-6 max-w-16 h-dvh relative"
                >
                    <div
                        className="w-px h-full bg-white absolute left-1/2 -translate-x-1/2"
                    />

                    <CarouselCountrys
                        countrys={countrys}
                    />

                </div>
            </main>
        </>
    )
}