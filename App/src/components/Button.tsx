
const variantClasses = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-white"
}


interface ButtonProps{
    variant: "primary" | "secondary",
    size: "sm" | "lg",
    text: String,
    startIcon?: React.ReactElement,
    endIcon?: React.ReactElement,
    onClick?: () => void
    className?: () => void
} 

const defaultStyles = "px-4 py-2 rounded-md font-light flex justify-center ";


export function Button ({variant, text, startIcon, onClick, className}:ButtonProps){
    return <button onClick={onClick} className={className} className={variantClasses[variant] + " " + defaultStyles}>
        <div className="pr-2"></div>
        {startIcon}
        {text}
    </button>
}