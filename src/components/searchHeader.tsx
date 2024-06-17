import { MagnifyingGlass } from "@phosphor-icons/react";
import { FormEvent } from "react";

export default function SearchHeader() {
    return (
        <form
            onSubmit={(e: FormEvent) => {
                e.preventDefault()
            }}
            className="relative group"
        >
            <input
                required
                className="bg-blue-canoro rounded-full pr-2 pl-8 py-2 focus-within:outline-none focus:bg-white w-10 group focus:w-56 transition-all text-black valid:w-56 valid:bg-white"
            />
            <button
                className="pointer-events-none absolute center-element group-valid:text-blue-canoro group-valid:left-4 group-focus-within:text-blue-canoro group-focus-within:left-4"
            >
                <MagnifyingGlass
                    size={18}
                    weight="bold"
                />
            </button>
        </form>
    )
}