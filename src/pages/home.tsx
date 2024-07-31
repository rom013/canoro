import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import StatsNumber from "../components/cards/statsNumber";
import { CarouselCardsLocations } from "../components/slickCarousel/carousel";
import Header from "../components/header/header";
import Footer from "../components/footer";
import VideoPlayer from "../components/videoPlay";
import Logo from "../assets/image/logo_canoro.svg"
import Video from "../assets/video/video_background.mp4"
import { CardAbout } from "../components/cards/about";

import megaphone from "../assets/image/megaphone.png"
import target from "../assets/image/target.png"
import gear from "../assets/image/gear.png"
import eye from "../assets/image/eye.png"

import { infoAbout } from "../interfaces/infoAbout.interface";
import { City, responseLocation } from "../interfaces/responseLocal.interface";
import { LocalCard } from "../components/cards/localCard";
import { settings } from "../settings/carouselPrimary.settings";
import useTopToScreen from "../hook/useTopToScreen";

export default function Home() {

    useTopToScreen()

    const indexSlide = 0

    const [locationsPopular, setLocations] = useState<Array<City>>([])
    const [packageTravel, setPackageTravel] = useState<Array<responseLocation>>([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_URL_SERVER}/top-cities`)
            .then(res => res.json())
            .then(res => setLocations(res))

        fetch(`${import.meta.env.VITE_URL_SERVER}/travel-pack/`)
            .then(res => res.json())
            .then(res => {
                setPackageTravel(res)
            })
    }, [])

    const infosAbout: readonly infoAbout[] = [
        {
            image: megaphone,
            title: "Sobre nós",
            description: "Desde 2010, a Canoro tem sido uma empresa dedicada a criar experiências de viagem inesquecíveis para nossos clientes."
        },
        {
            image: target,
            title: "Nossa Missão",
            description: "Nossa missão é facilitar jornadas de descoberta e conexão, oferecendo guias turísticos detalhados e recomendações personalizadas."
        },
        {
            image: gear,
            title: "Standart",
            description: "Mantemos um padrão de excelência e inovação contínua, garantindo a qualidade e satisfação dos nossos clientes em todas as etapas da viagem."
        },
        {
            image: eye,
            title: "Nossa Visão",
            description: "A Canoro busca ser o parceiro confiável em todas as suas aventuras, sempre expandindo serviços e integrando novas tecnologias para enriquecer a experiência de viagem."
        },
    ]

    return (
        <>
            <Header />
            <main>
                <section
                    className="clip bg-video w-full h-screen overflow-hidden relative"
                >
                    <VideoPlayer src={Video} />

                    <div
                        className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center px-10"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center flex-col gap-2"
                        >
                            <img
                                alt="Canoro"
                                src={Logo}
                                className="text-white text-4xl"
                                draggable={false}
                            />
                            <p className="text-white text-2xl font-lato font-[300] text-center">Descubra um lugar lindo conosco</p>
                        </motion.div>
                    </div>
                </section>

                <motion.section
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .7 }}
                    className="container"
                >
                    {
                        infosAbout.map((info, index) => {
                            return (
                                <CardAbout
                                    key={index}
                                    img={info.image}
                                    title={info.title}
                                    description={info.description}
                                />
                            )
                        })
                    }
                </motion.section>

                <section className="container">
                    <div className="space-y-6 max-w-96">
                        <h3 className="font-lato font-semibold text-2xl bar-title">Construindo bons momentos</h3>
                        <p className="font-lato text-sm leading-relaxed text-zinc-500">Tudo que você precisa para a viagem perfeita. Há mais de 10 anos no mercado de turismo, a Canoro já alcançou resultados notáveis, proporcionando experiências inesquecíveis para viajantes ao redor do mundo.</p>
                    </div>

                    <div className="flex flex-wrap max-w-xl gap-5 justify-center">
                        <StatsNumber
                            numberStats="1.2M+"
                            description="Clientes atendidos"
                        />
                        <StatsNumber
                            numberStats="500+"
                            description="Destinos cobertos"
                        />
                        <StatsNumber
                            numberStats="10k"
                            description="Parcerias"
                        />
                        <StatsNumber
                            numberStats="2.5M+"
                            description="Reservas realizadas"
                        />
                    </div>
                </section>

                <section className="container !px-0 sm:!px-10">
                    <div
                        className="w-full px-10 sm:px-0 flex md:flex-row flex-col justify-between md:items-center gap-3"
                    >
                        <h3
                            className="font-lato font-semibold text-2xl bar-title"
                        >
                            Explore destinos mais populares
                        </h3>
                        <button
                            className="w-fit rounded-full border-blue-canoro border-2 hover:md:bg-blue-canoro active:bg-blue-canoro active:text-white hover:md:text-white transition-all duration-300 flex justify-center items-center px-4 py-2 font-lato text-sm"
                        >
                            Ver mais
                        </button>
                    </div>

                    <div
                        className="w-full relative overflow-hidden md:overflow-visible"
                    >
                        <CarouselCardsLocations
                            isNavigation
                            settings={settings}
                            indexSlide={indexSlide}
                        >
                            {
                                locationsPopular.map((popular, i) => {
                                    return (
                                        <LocalCard
                                            key={i}
                                            img={popular.background}
                                            title={popular.name}
                                            subtitle={popular.country.name}
                                            className="h-44 lg:h-auto"
                                            id={popular.id_city}
                                        />
                                    )
                                })
                            }
                        </CarouselCardsLocations>
                    </div>

                </section>

                <section className="container !px-0 sm:!px-10">
                    <div
                        className="w-full flex px-10 sm:px-0 md:flex-row flex-col justify-between md:items-center gap-3"
                    >
                        <h3
                            className="font-lato font-semibold text-2xl bar-title"
                        >
                            Pacotes de viagem
                        </h3>
                        <button
                            className="w-fit rounded-full border-blue-canoro border-2 hover:bg-blue-canoro hover:text-white transition-all duration-300 flex justify-center items-center px-4 py-2 font-lato text-sm"
                        >
                            Ver mais
                        </button>
                    </div>

                    <div
                        className="w-full relative overflow-hidden md:overflow-visible"
                    >
                        <CarouselCardsLocations
                            isNavigation
                            settings={settings}
                            indexSlide={indexSlide}
                        >
                            {
                                packageTravel.map((local) => {
                                    return (
                                        local.city.map((city, i) => {
                                            return (
                                                <LocalCard
                                                    key={i}
                                                    img={city.background}
                                                    title={city.name}
                                                    subtitle={city.country}
                                                    className="h-44 lg:h-auto"
                                                    id={city.id_city}
                                                >
                                                    <LocalCard.LocalEvaluationAndPrices
                                                        average={local.averageEvaluation}
                                                        price={parseFloat(local.price)}
                                                    />

                                                    {/* {
                                                            local.tag && <LocalCard.LocalTag
                                                                description={local.tag}
                                                            />
                                                    }  */}
                                                </LocalCard>
                                            )
                                        })
                                    )
                                })
                            }
                        </CarouselCardsLocations>
                    </div>

                </section>

            </main>


            <Footer />
        </>
    )
}