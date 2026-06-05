import { Button } from "../components/Button"
import { Input } from "../components/Input"
import axios from "axios"; //importing axios for making http request
import { useRef } from "react";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";
import { Logo } from "../icons/Logo";



export function Signup(){
     const usernameRef = useRef<HTMLInputElement>(null); 
     const passwordRef = useRef<HTMLInputElement>(null);
     const navigate = useNavigate();


     async function signup(){
          const username = usernameRef.current?.value;
          const password = passwordRef.current?.value;
          await axios.post(BACKEND_URL + "/api/v1/signup" , {
            username,
            password,
        
          })
        navigate("/signin");
        alert("Signed up successfully")
     }
    
    return <div className="h-screen w-screen bg-white-100 mt-4 ml-6 mr-4 fixed ">
        {<Logo/>}
        <div className=" flex h-screen justify-center items-center -mt-20">
      
          <div className= " bg-white border-gray-300 rounded-xl border min-w-48 p-8  ">
            <h2 className="flex font-medium text-2xl text-center justify-center mb-3">Get started</h2>
            <div className="flex-1 border-neutral-500 focus:ring-2 focus:ring-sky-300 focus:outline-none">
                <Input reference={usernameRef} placeholder="username"/>
                <Input reference={passwordRef} placeholder="Password"/>
            </div>

        <div className="justify-center items-center flex pt-2 cursor-pointer">
             <Button onClick={signup} variant="primary" text= "Signup" fullWidth={true} loading={false}/>
        </div>
        <div className="mt-2 text-center">
            <p className="text-sm">
               Already have an account? <a href="/signin" className="text-blue-700 hover:underline">Sign In</a> 
            </p>
        </div>
        </div>
       
    </div>
    <div className="flex justify-center text-center text-sm -mt-50 text-gray-500">
        <p>
            By signing up, you agree to Second brain's <br /> <a href="" className="text-black">Terms of Use</a> and <a href="" className="text-black">Privacy Policy.</a>
        </p>
    </div>
    </div>
     

}