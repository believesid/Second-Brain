
const variantClasses = {
    "primary": "bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer border-none",
        
    "secondary": "bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer border-none"
        
}


interface ButtonProps{
    variant: "primary" | "secondary",
    size?: "sm" | "lg",
    text: String,
    startIcon?: React.ReactElement;
    endIcon?: React.ReactElement;
    onClick?: () => void;
    className?: () => void;
    fullWidth?: boolean; // "?" question mark shows that fullwidth will be optional to select when we button component anywhere
    loading?: boolean;

} 

// Default CSS classes for all buttons
const defaultStyles = "px-4 py-2 rounded-md font-light flex justify-center ";


export function Button ({variant, text, startIcon, onClick, className, fullWidth, loading}:ButtonProps){
    return(
    // A button element with dynamic class names and properties
     <button onClick={onClick} className={className} className={variantClasses[variant] + " " + defaultStyles + `${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "opacity-45" : ""}` } disabled={loading} >
        {/*Container for optional start icon */}
        <div className="pr-2">
             {startIcon}
        </div>
       
        {/*Button text*/}
        {text}
    </button>
    );
}