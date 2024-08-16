import React from "react";

interface Props {
    children: React.ReactNode;
    className?: string;
}

export default function BareButton({ children, className }: Props) {
    return (
        <div className={`p-1 px-3 font-semibold border-2 rounded-md border-custom-text text-custom-text flex justify-center items-center hover:cursor-pointer hover:transition-colors hover:bg-custom-text hover:text-custom-background ease-in-out duration-700 ${className}`}>
            {children}
        </div>
    );
}
