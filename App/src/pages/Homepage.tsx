

import { Hero } from "../components/Hero";
import Navbar from "../components/Navbar";

export function Homepage(){
    return  <div className="bg-blue-50 h-screen">
        {<Navbar/>}

      <div className="flex flex-col justify-center text-center w-full min-h-screen">
          {<Hero/>}
      </div>

        </div>
            
       
}

       