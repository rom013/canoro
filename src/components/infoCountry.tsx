import { Money, Thermometer, User } from "@phosphor-icons/react";
import { memo } from "react";

interface InfoCountryProps {
    icon: string
    dataInfo: string
}

const iconsInfo: any = {
    User,
    Money,
    Thermometer
}

function InfoCountry({ icon, dataInfo }: InfoCountryProps) {
    const Icon = iconsInfo[icon]

    return (
        <div
            className="flex md:gap-6 gap-2 items-center capitalize text-xl md:text-3xl"
        >
            {
                <Icon />
            }
            <span className="text-sm md:text-xl">
                {dataInfo}
            </span>
        </div>
    )
}

export default memo(InfoCountry)