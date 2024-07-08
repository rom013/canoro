import Slider from "react-slick";
import { LocalCard } from "../cards/localCard";
import { useRef } from "react";
import { CaretCircleDown, CaretCircleUp, CaretLeft, CaretRight } from "@phosphor-icons/react";

interface requestLocation {
    img: string
    local: string
    country: string
    price: number
    average: number
    tag?: string
    id: string
}
interface requestCountrys {
    nameFlag: string
    country: string
    id: string
}

interface carouselLocationProps {
    locations: Array<requestLocation>
    settings: any
    isPrimary: boolean
    indexSlide?: number | any
}
interface carouselCountryProps {
    countrys: Array<requestCountrys>
    countrySelected: (id_country: string) => void
}

export function CarouselCardsLocations({ locations, settings, isPrimary, indexSlide }: carouselLocationProps) {
    const slider = useRef<any>(null)
    const lengthLocations = locations.length

    return (
        <>
            <Slider
                {...settings}
                ref={slider}
                className={!isPrimary && "flex w-full lg:max-w-3xl text-white"}
            >
                {
                    locations.map((local) => {
                        return (
                            <LocalCard
                                key={local.id}
                                img={local.img}
                                local={local.local}
                                country={local.country}
                                className="h-44 lg:h-auto"
                            >
                                <LocalCard.LocalEvaluationAndPrices
                                    average={local.average}
                                    price={local.price}
                                />
                                {
                                    local.tag && <LocalCard.LocalTag
                                        description={local.tag}
                                    />
                                }

                            </LocalCard>
                        )
                    })
                }
            </Slider>
            {
                isPrimary && indexSlide >= 0 && (
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
                            disabled={indexSlide + 1 == lengthLocations - 2}
                        >
                            <CaretRight />
                        </button>
                    </>
                )
            }
        </>
    )
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
            countrySelected(countrys[index].id);
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
                                key={country.id}
                                className="min-w-8 my-8 cursor-pointer text-center transition-all -translate-y-20"
                                onClick={() => {
                                    countrySelected(country.id)
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