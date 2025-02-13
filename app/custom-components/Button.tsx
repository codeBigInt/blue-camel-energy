import { cn } from '@/lib/utils'
import React from 'react'

interface ButtonProps {
    variant: "main" | "bordered" | "borderless",
    className: string,
    children: React.ReactNode,
    icon?: React.ReactNode,
    alignIcon?: "left" | "right"
}

const Button = ({ variant, className, children, icon, alignIcon }: ButtonProps) => {

    const clsx = cn("px-6 py-3 md:w-max hover:opacity-70", {
        "bg-transparent border-[2px]": variant === "bordered",
        "bg-transparent": variant === "borderless"
    }, className)
    return (
        <button className={clsx}>
            {
                icon ?
                    (<div className={`flex items-center gap-3 justify-center ${alignIcon === "right" ? "flex-row-reverse" : ""}`}>
                        {icon}
                        {children}
                    </div>) : (
                        <div>
                            {children}
                        </div>
                    )
            }
        </button>
    )
}

export default Button
