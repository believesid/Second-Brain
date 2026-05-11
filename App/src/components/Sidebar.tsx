import { TweetIcon } from "../icons/TweetIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import { Logo } from "../icons/Logo";

export function Sidebar(){
   return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0">
    

      <div className="">
        <div className="flex gap-2">
         
    <div className="text-purple-300">
          {<Logo/>}
    </div>
    <div className="text-size-xl">
       <h1>Second Brain</h1>
    </div>
        </div>
         <div className="flex">
          <SidebarItem text = "Twitter" icon = {<TweetIcon/>}/>
         </div>
  
        <SidebarItem text = "Youtube" icon = {<YoutubeIcon/>}/>
      </div>
  </div>
}