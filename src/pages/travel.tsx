import { House } from "@phosphor-icons/react";
import Header from "../components/header/header";
import { useNavigate } from "react-router-dom";

export default function Travel() {
    const navigate = useNavigate()

    return (
        <>
            <Header />
            <main className="min-h-dvh flex justify-center items-center flex-col space-y-10">
                <strong className="text-5xl text-blue-canoro font-bold">
                    🛠 EM BREVE 🛠
                </strong>

                <button
                    className="px-4 py-2 rounded-lg bg-blue-canoro text-white flex items-center gap-2 hover:bg-blue-700 transition-all"
                    onClick={() => navigate("/")}
                >
                    <House color="#fff" weight="bold" />
                    Home
                </button>
            </main>
        </>
    )
}