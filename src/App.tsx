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
            className="absolute inset-0 bg-black/40 flex flex-col gap-2 items-center justify-center"
          >
            <img
              alt="Canoro"
              src={Logo}
              className="text-white text-4xl"
              draggable={false}
            />
            <p className="text-white text-2xl font-lato font-[300]">Descubra um lugar lindo conosco</p>
          </div>
        </section>

        <section
          className="py-16 px-10 max-w-screen-xl mx-auto flex gap-5 justify-between"
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
        </section>
      </main>
    </>
  )
}