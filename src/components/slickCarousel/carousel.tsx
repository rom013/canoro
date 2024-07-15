import Slider from "react-slick";
import { ReactNode, useRef } from "react";
import { CaretCircleDown, CaretCircleUp, CaretLeft, CaretRight } from "@phosphor-icons/react";

interface CarouselLocationProps {
    settings: any;
    isNavigation?: boolean;
    indexSlide?: number;
    children: ReactNode
}

export function CarouselCardsLocations({ settings, isNavigation, indexSlide, children }: CarouselLocationProps) {
    const slider = useRef<any>(null)

    return (
        <>
            <Slider
                {...settings}
                ref={slider}
                className={!isNavigation && "flex w-full lg:max-w-3xl text-white"}
            >
                {children}
            </Slider>
            {
                isNavigation && indexSlide !== undefined && (
                    indexSlide >= 0 && (
                        <>
                            <button
                                onClick={() => slider?.current?.slickPrev()}
                                className="absolute hidden disabled:opacity-25 disabled:active:translate-y-0 disabled:hover:bg-blue-canoro sm:block top-1/3 -left-6 text-white p-2 bg-blue-canoro rounded hover:bg-blue-canoro-secundary active:translate-y-1 transition-all duration-150"
                                disabled={indexSlide == 0}
                            >
                                <CaretLeft />
                            </button>
                            <button
                                className="absolute hidden disabled:opacity-25 disabled:active:translate-y-0 disabled:hover:bg-blue-canoro sm:block top-1/3 -right-6 text-white p-2 bg-blue-canoro rounded hover:bg-blue-canoro-secundary active:translate-y-1 transition-all duration-150"
                                onClick={() => slider?.current?.slickNext()}
                            // disabled={indexSlide + 1 == lengthLocations - 2}
                            >
                                <CaretRight />
                            </button>
                        </>
                    )
                )
            }
        </>
    )
}




interface requestCountrys {
    nameFlag: string
    name: string
    id_country: string
}

interface carouselCountryProps {
    countrys: Array<requestCountrys>
    countrySelected: (id_country: string) => void
}

export function CarouselCountrys({ countrys, countrySelected }: carouselCountryProps) {
    const settings = {
        centerMode: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        infinite: true,
        focusOnSelect: true,
        centerPadding: "10px",
        nextArrow: <></>,
        prevArrow: <></>,
        afterChange: function (index: number) {
            countrySelected(countrys[index].id_country);
        }
    }

    const slider = useRef<any>(null)

    return (
        <>
            <Slider
                {...settings}
                className="flex flex-col h-full"
                ref={slider}
            >
                {
                    countrys.map((country) => {
                        return (
                            <div
                                key={country.id_country}
                                className="min-w-8 my-8 cursor-pointer text-center transition-all -translate-y-20"
                                onClick={() => {
                                    countrySelected(country.id_country)
                                }}
                            >
                                <div>
                                    <span
                                        className={`fi ${country.nameFlag} rounded`}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <div
                className="flex flex-col gap-3 absolute -right-10 top-1/2 -translate-y-6 z-50"
            >
                <button
                    onClick={() => slider?.current?.slickPrev()}
                    className=""
                >
                    <CaretCircleUp
                        size={32}
                        className="text-white hover:-translate-y-1 transition-all hover:text-blue-canoro-secundary"
                    />
                </button>
                <button
                    className=""
                    onClick={() => slider?.current?.slickNext()}
                >
                    <CaretCircleDown
                        size={32}
                        className="text-white hover:translate-y-1 transition-all hover:text-blue-canoro-secundary"
                    />
                </button>

            </div>
        </>
    )
}