import { TweetIcon } from "../icons/TweetIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { HomeIcon } from "../icons/HomeIcon";
import { SidebarItem } from "./SidebarItem";
import { Logo } from "../icons/Logo";

export function Sidebar({onTypeSelect}: {onTypeSelect: (type: string | null) => void}){
  
  
   return ( 
   <div className="h-screen bg-white border-r w-72 fixed left-0 top-0">
    

      <div className="">
        <div className="flex gap-2">
         
    <div className=" flex mt-4 ml-6 mr-4 fixed mb-6">
          {<Logo/>}
    </div>
    <br /><br /> <br /> 
    <div className="text-size-xl">
       
    </div>
        </div>
         <div className="flex">
          <SidebarItem text = "Home" icon = {<HomeIcon/>} onClick={() => onTypeSelect(null)}/>
         </div>
         <div className="flex">
          <SidebarItem text = "Twitter" icon = {<TweetIcon/>} onClick={() => onTypeSelect('twitter')}/>
         </div>

        <SidebarItem text = "Youtube" icon = {<YoutubeIcon/>} onClick={() => onTypeSelect('youtube')}/>
      </div>
  </div>
   )
  }
