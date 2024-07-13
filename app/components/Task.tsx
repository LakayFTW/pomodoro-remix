interface Props {
    name: string,
    desc: string,
}
export default function Task({ name, desc }: Props) {
    return (
        <div className="flex flex-row w-full max-w-2xl px-10 py-2 rounded-md max-h-40 bg-custom-secondary">
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
        </div>
    )
}