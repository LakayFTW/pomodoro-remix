interface Props {
    labelText: string,
    dataTarget: string
}

export default function CustomInput({ labelText, dataTarget }: Props) {
    return (
        <div className="flex flex-col">
            <label className="pl-1 text-xl" htmlFor="taskInput">{labelText}</label>
            <input id="taskInput" type="text" data-task-target={dataTarget} />
        </div>
    )
}