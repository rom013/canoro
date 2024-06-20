import { SvgLogoFull } from "./imageLogo";
import Network from "./network";

export default function Footer() {
    return (
        <footer
            className="flex flex-col justify-between  mt-16 bg-amazon bg-no-repeat bg-cover py-10 px-20 min-h-96"
        >
            <div
                className="flex justify-between"
            >
                <section
                    className="flex flex-col gap-8 w-60 items-center text-white"
                >
                    <SvgLogoFull />

                    <Network />
                </section>

                <div
                    className="flex gap-5"
                >
                    <section
                        className="max-w-96 text-white font-lato space-y-8"
                    >
                        <div className="space-y-4">
                            <h3
                                className="text-2xl font-semibold"
                            >
                                Newsletter
                            </h3>

                            <p
                                className="text-sm leading-relaxed"
                            >
                                Estamos sempre procurando oferecer novos produtos mais interessantes, então fique atento a todas as mudanças que estamos trazendo.
                            </p>
                        </div>

                        <form
                            className="flex gap-6"
                            onSubmit={e => e.preventDefault()}
                        >
                            <input
                                type="email"
                                required
                                className="border-b-2 border-white px-3 py-1 bg-transparent placeholder:text-white w-full focus-within:outline-none focus:border-b-blue-canoro valid:border-b-blue-canoro transition-all"
                                placeholder="Email"
                            />
                            <button
                                className="bg-gradient-to-br from-blue-canoro to-blue-canoro-secundary px-4 py-1 rounded-lg"
                            >
                                Inscrever
                            </button>
                        </form>
                    </section>
                    <section
                        className="max-w-96 text-white font-lato space-y-4"
                    >
                        <h3
                            className="text-2xl font-semibold"
                        >
                            Contatos
                        </h3>

                        <ul
                            className="space-y-3"
                        >
                            <li>canaro@company.com</li>
                            <li>Av. Paulista, 907 - Bela Vista, São Paulo - SP</li>
                            <li>+55 11 4032-3444</li>
                        </ul>
                    </section>
                </div>

            </div>

            <aside
                className="relative flex justify-between pt-2"
            >
                <div className="w-full h-px bg-gradient-to-l from-white via-transparent to-white absolute top-0" />

                <span className="text-white text-xs">© Canoro inc. Todos os direitos reservados</span>
                <span className="text-white text-xs">Created by: <a href="https://portifolio-rom013.vercel.app/" className="underline">Rom013</a></span>
            </aside>
        </footer>
    )
}