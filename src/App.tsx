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

  const localtions = [
    {
      img: "https://images.pexels.com/photos/2067057/pexels-photo-2067057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      local: "Toquio",
      country: "Tokyo, Japão",
      price: 5023.22,
      average: 5,
    },
    {
      img: "https://images.pexels.com/photos/20771084/pexels-photo-20771084/free-photo-of-cars-on-street-near-eiffel-tower-in-paris-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      local: "Paris",
      country: "Paris, França",
      price: 4000.00,
      average: 4,
      tag: "15% de desconto"
    },
    {
      img: "https://images.pexels.com/photos/18498510/pexels-photo-18498510/free-photo-of-times-square-in-new-york.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      local: "Nova Iorque",
      country: "New York, EUA",
      price: 6000.50,
      average: 5,
    },
    {
      img: "https://images.pexels.com/photos/3629813/pexels-photo-3629813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      local: "Moscou",
      country: "Moscow, Rússia",
      price: 5200.20,
      average: 4,
      tag: "40% de desconto"
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

          <div
            className="w-full flex gap-5 justify-between"
          >
            {
              localtions.map((local, index) => {
                return (
                  <LocalCard
                    key={index}
                    img={local.img}
                    local={local.local}
                    country={local.country}
                  >
                    <LocalCard.LocalEvaluationAndPrices
                      key={index}
                      average={local.average}
                      price={local.price}
                    />
                    {
                      local.tag && <LocalCard.LocalTag
                        key={index}
                        description={local.tag}
                      />
                    }

                  </LocalCard>
                )
              })
            }
          </div>

        </section>

        <section className="container">
          <div
            className="w-full flex justify-between items-center"
          >
            <h3
              className="font-lato font-semibold text-2xl"
            >
              Pacotes de viagem
            </h3>
            <button
              className="rounded-full border-blue-canoro border-2 hover:bg-blue-canoro hover:text-white transition-all duration-300 flex justify-center items-center px-4 py-2 font-lato text-sm"
            >
              Ver mais
            </button>
          </div>

          <div
            className="w-full flex gap-5 justify-between"
          >
            {
              localtions.map((local, index) => {
                return (
                  <LocalCard
                    key={index}
                    img={local.img}
                    local={local.local}
                    country={local.country}
                  >
                    <LocalCard.LocalEvaluationAndPrices
                      key={index}
                      average={local.average}
                      price={local.price}
                    />
                    {
                      local.tag && <LocalCard.LocalTag
                        key={index}
                        description={local.tag}
                      />
                    }

                  </LocalCard>
                )
              })
            }
          </div>

        </section>

      </main>
    </>
  )
}