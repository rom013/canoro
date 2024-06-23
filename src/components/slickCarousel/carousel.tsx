import Slider from "react-slick";
import { LocalCard } from "../cards/localCard";
import { useRef, useState } from "react";
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
}
interface carouselCountryProps {
    countrys: Array<requestCountrys>
    countrySelected: (id_country: string) => void
}

export function CarouselCardsLocations({ locations }: carouselLocationProps) {
    const slider = useRef<any>(null)
    const [indexSlide, setIndexSlide] = useState(0)
    const lengthLocations = locations.length
    const slidesToShow = 4

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow,
        slidesToScroll: 3,
        variableWidth: true,
        swipeToSlide: true,
        afterChange: function (index: number) {
            setIndexSlide(index)
        },
        swipe: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                }
            }
        ]
    };

    return (
        <>
            <Slider
                {...settings}
                ref={slider}
                className="flex"
            >

                {
                    locations.map((local) => {
                        return (
                            <LocalCard
                                key={local.id}
                                img={local.img}
                                local={local.local}
                                country={local.country}
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
                disabled={indexSlide + 1 == lengthLocations - slidesToShow + 1}
            >
                <CaretRight />
            </button>
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
                                    <p
                                        className={`fi ${country.nameFlag}`}
                                    />
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
            <div
                className="flex flex-col gap-3 absolute -right-10 top-1/2 -translate-y-6"
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