import { useRef } from "react";
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Logo } from "../icons/Logo";


export function Signin(){
    const usernameRef = useRef<HTMLInputElement>(null); 
     const passwordRef = useRef<HTMLInputElement>(null);
     const navigate = useNavigate();
    


     async function signin(){
          const username = usernameRef.current?.value;
          const password = passwordRef.current?.value;
          const response = await axios.post(BACKEND_URL + "/api/v1/signin" , {
            username,
            password,
        })
        
        
        const jwt = response.data.token;
        localStorage.setItem("token", jwt);
        navigate("/dashboard");
     }
    
    return <div className="bg-white-100 mt-4 ml-6 mr-4 fixed " >
        {<Logo/>}
        <div className="h-screen w-screen  flex  justify-center items-center">
            
        <div className="bg-white rounded-xl border min-w-48 p-8 ">
            <h2 className="flex font-medium text-2xl text-center justify-center mb-3">Log in</h2>
            <Input reference={usernameRef}  placeholder="username"/>
            <Input reference={passwordRef} placeholder="Password"/>

        <div className="justify-center items-center flex pt-2">
            <Button onClick={signin} variant="primary" text= "Signin" fullWidth={true} loading={false}/>
        </div>
        <div className="text-center mt-2">
            <p className="text-sm">Not registered? <a href="/signup" className="text-blue-700">Sign Up</a></p>
        </div>
        </div>
       
    </div>
    </div>

}