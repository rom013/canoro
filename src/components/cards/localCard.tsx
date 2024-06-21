import { Star } from "@phosphor-icons/react"
import { ReactNode } from "react"

interface localCardProps {
    children?: ReactNode
    img: string
    local: string
    country?: string
}

interface evaluationAndPricesProps {
    average: number
    price: number
}

interface localTagProps {
    description: string
}

function LocalCard({ children, img, local: title, country: subtitle }: localCardProps) {
    return (
        <div
            className="cursor-pointer flex flex-col gap-3 w-fit"
            style={{ width: "276px" }}
        >
            <section
                className="relative h-80 w-64 rounded-lg overflow-hidden group"
            >
                <img
                    className="size-full object-cover group-hover:scale-110 transition-all duration-300"
                    src={img}
                    alt={title}
                />
                <div className="flex flex-col -space-y-3 absolute bottom-6 left-6 text-white z-10 font-barlow">
                    <strong
                        className={`text-[2rem] ${!subtitle && "font-bold uppercase"}`}
                    >
                        {title}
                    </strong>
                    {
                        subtitle && <sub
                            className="text-lg"
                        >
                            {subtitle}
                        </sub>
                    }
                </div>
                <div
                    className="absolute inset-0 bg-gradient-to-t from-black to-transparent group-hover:from-black/80"
                />
            </section>
            <footer
                className="flex flex-col gap-3 w-64"
            >
                {children}
            </footer>
        </div>
    )
}

function LocalEvaluationAndPrices({ average, price }: evaluationAndPricesProps) {

    function starsIsFill(): Array<boolean> {
        const arrStars: boolean[] = []

        for (let i = 1; i <= 5; i++) {
            (i <= average)
                ? arrStars.push(true)
                : arrStars.push(false)
        }

        return arrStars
    }

    function priceFormated(price: number) {
        return price.toLocaleString("pt-br", { style: 'currency', currency: 'BRL' }).toString()
    }

    return (
        <div
            className="w-full flex items-center justify-between gap-5"
        >
            <div
                className="flex gap-1"
                title={`${average} ponto de classificação`}
            >
                {
                    starsIsFill().map((star, index) => (
                        <span
                            key={index}
                        >
                            {
                                star
                                    ? <Star weight="fill" color="#0D7CE9" />
                                    : <Star fill="#0D7CE9" />
                            }
                        </span>
                    ))
                }
            </div>

            <span
                className="font-lato text-base"
            >
                {
                    priceFormated(price)
                }
            </span>
        </div>
    )
}

function LocalTag({ description }: localTagProps) {

    return (
        <span
            className={`rounded-tl-xl rounded-br-xl rounded-tr rounded-bl py-2 px-4 text-sm text-white w-fit bg-blue-canoro`}
        >
            {
                description
            }
        </span>
    )


}

LocalCard.LocalEvaluationAndPrices = LocalEvaluationAndPrices
LocalCard.LocalTag = LocalTag

export { LocalCard }