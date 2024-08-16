interface Props {
    name: string,
    desc: string,
}
export default function Task({ name, desc }: Props) {
    return (
        <div className="flex flex-row w-full max-w-2xl px-5 py-2 pl-10 rounded-md max-h-40 bg-custom-secondary">
            <div className="flex flex-col w-1/2 space-y-2">
                <div className="text-2xl">
                    <p className="underline underline-offset-4">{name}</p>
                </div>
                <div className="text-xl">
                    <p>{desc}</p>
                </div>
            </div>
            <div className="w-1/2">
                <p>Hier kommt die Time hin die gebraucht wurde</p>
            </div>
            <div className="flex flex-row items-center justify-between w-1/4 space-x-3">
                <div className="flex items-center justify-center w-1/2 h-full">
                    <svg className="transition duration-300 ease-in-out text-custom-text hover:scale-125 hover:-rotate-45 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="24px" fill="currentColor"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg>
                </div>
                {/*  */}
                <div className="flex items-center justify-center w-1/2 h-full">
                    <svg className="transition duration-300 ease-in-out -rotate-45 text-custom-text hover:rotate-45 hover:scale-125 hover:cursor-pointer" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
                        <path fillRule="evenodd" d="M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"></path>
                    </svg>
                </div>
            </div>
        </div >
    )
}