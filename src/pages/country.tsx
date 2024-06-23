import Slider from "react-slick";
import Header from "../components/header/header";

export default function Country() {

    const settings = {
        centerMode: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        focusOnSelect: true,
    }

    return (
        <>
            <Header />
            <main
                className="min-h-svh bg-zinc-500 flex"
            >
                <div
                    className="ml-6 max-w-16 relative"
                >
                    <div
                        className="w-px h-dvh bg-white absolute left-1/2 -translate-x-1/2"
                    />
                    <Slider
                        {...settings}
                        className="flex flex-col h-full"
                    >
                        {
                            Array(10).fill("hello").map((x, i) => {
                                return (
                                    <div
                                        key={x}
                                        className="min-w-8 my-8 cursor-pointer bg-red-500 text-center transition-all"
                                    >
                                        <div>
                                            <p className="text-white">{i}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </Slider>
                </div>
            </main>
        </>
    )
}