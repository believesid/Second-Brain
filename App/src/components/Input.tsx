
//Defining the inputProps interface to specify the type of the props
interface InputProps{
    placeholder: string;
    reference?: any  // optional reference to the input field
}

//Input component
export function Input({placeholder, reference}: InputProps){
    return <div className="flex-1 border-neutral-500 focus:ring-2 focus:ring-sky-300 focus:outline-none">
        <input
         type="text"
         placeholder= {placeholder}
         ref= {reference}
         className="flex-1 px-4 py-2 border rounded m-2  border-neutral-500 focus:ring-1 focus:ring-sky-300 focus:outline-none transition duration-200"  // Tailwind Css styling used
           />
    </div>
} 