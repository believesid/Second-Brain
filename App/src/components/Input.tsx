
//Defining the inputProps interface to specify the type of the props
interface InputProps{
    placeholder: string;
    reference?: any  // optional reference to the input field
}

//Input component
export function Input({placeholder, reference}: InputProps){
    return <div>
        <input
         type="text"
         placeholder= {placeholder}
         ref = {reference}
         className="px-4 py-2 border rounded m-2"  // Tailwind Css styling used
           />
    </div>
}