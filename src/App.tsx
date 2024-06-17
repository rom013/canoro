import Header from "./components/header";
import VideoPlayer from "./components/videoPlay";
import Logo from "./assets/image/logo_canoro.svg"
import Video from "./assets/video/video_background.mp4"

export default function App() {
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
            />
            <p className="text-white text-2xl font-[300]">Descubra um lugar lindo conosco</p>
          </div>
        </section>
      </main>
    </>
  )
}