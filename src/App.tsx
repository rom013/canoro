import Header from "./components/header";
import VideoPlayer from "./components/videoPlay";
import Logo from "./assets/image/logo_canoro.svg"
import Video from "./assets/video/video_background.mp4"
import { CardAbout } from "./components/cards/about";

import megaphone from "./assets/image/megaphone.png"
import target from "./assets/image/target.png"
import gear from "./assets/image/gear.png"
import eye from "./assets/image/eye.png"
import { infoAbout } from "./interfaces/infoAbout.interface";
import StatsNumber from "./components/cards/statsNumber";

import { motion } from "framer-motion";
import { LocalCard } from "./components/cards/localCard";

export default function App() {

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
            <h3 className="font-lato font-semibold text-2xl">Construindo bons momentos</h3>
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

        <section className="container">
          <div
            className="w-full flex justify-between items-center"
          >
            <h3
              className="font-lato font-semibold text-2xl"
            >
              Explore destinos mais populares
            </h3>
            <button
              className="rounded-full border-blue-canoro border-2 hover:bg-blue-canoro hover:text-white transition-all duration-300 flex justify-center items-center px-4 py-2 font-lato text-sm"
            >
              Ver mais
            </button>
          </div>

          <div>
            <LocalCard
              img="https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg"
              title="Test Dart Vaider"
              subtitle="star wars"
            >
              <LocalCard.LocalEvaluationAndPrices
                average={2}
                price={44.02}
              />

              <LocalCard.LocalTag
                description="20% de desconto"
              />
            </LocalCard>
          </div>

        </section>

      </main>
    </>
  )
}