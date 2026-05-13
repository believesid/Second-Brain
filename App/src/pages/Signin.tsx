
import { Button } from "../components/Button"
import { Input } from "../components/Input"


export function Signin(){
    return <div className="h-screen w-screen bg-gray-200 flex  justify-center items-center">
        <div className="bg-white rounded-xl border min-w-48 p-8 ">
            <Input placeholder="username"/>
            <Input placeholder="Password"/>

        <div className="justify-center items-center flex pt-2">
            <Button variant="primary" text= "Signin" fullWidth={true} loading={false}/>
        </div>
        </div>
       
    </div>

}