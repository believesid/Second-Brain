import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios"; //importing axios for making http request
import { useRef } from "react";
import { BACKEND_URL } from "../config";



export function Signup(){
     const emailRef = useRef<HTMLInputElement>(null); 
     const passwordRef = useRef<HTMLInputElement>(null);


     async function signup(){
          const email = emailRef.current?.value;
          const password = passwordRef.current?.value;
          await axios.post(BACKEND_URL + "/api/v1/signup" , {
            email,
            password,
        
          })

        alert("Signed up successfully");
     }
    
    return <div className="h-screen w-screen bg-gray-200 flex  justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8 ">
            <Input reference={emailRef} placeholder="Email"/>
            <Input reference={passwordRef} placeholder="Password"/>

        <div className="justify-center items-center flex pt-2 cursor-pointer">
             <Button onClick={signup} variant="primary" text= "Signup" fullWidth={true} loading={false}/>
        </div>
        <div className="mt-2 text-center">
            <p className="text-sm">
               Already have an account? <a href="/signin" className="text-purple-600 hover:underline">Sign In</a> 
            </p>
        </div>
        </div>
       
    </div>

}