import { useLocation } from "react-router-dom";
import Header from "../components/header/header";
import { useEffect, useState } from "react";

export default function Local() {

    const { state } = useLocation()
    const [local, setLocal] = useState()

    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL_SERVER}/destinationsPopupar/${state.id}`)
            .then(e => e.json())
            .then(e => setLocal(e))
    }, [])

    return (
        <>
            <Header />
            <main
                className={`h-svh flex bg-cover bg-fixed`}
                style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, .8), rgba(0, 0, 0, 0.7)), url(${local?.img})` }}
            >
            </main>
        </>
    )
}