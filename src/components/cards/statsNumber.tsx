import { propsStatsNumber } from "../../interfaces/propsStatsNumber.interface";

export default function StatsNumber({ numberStats, description }: propsStatsNumber) {
    return (
        <div
            className="p-4 rounded-lg shadow-md flex flex-col gap-4 items-center min-w-36 h-fit"
        >
            <strong className="font-lato text-3xl font-bold text-gradient">
                {numberStats}
            </strong>
            <span className="font-lato text-sm text-zinc-500 text-center">{description}</span>
        </div>
    )
}