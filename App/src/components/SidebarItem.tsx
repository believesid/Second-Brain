
import type {ReactElement} from "react";  
// What is ReactElement? --> React Element represents JSX element

export function SidebarItem({text, icon}: {
   text: string;
   icon: ReactElement;
}){

   return <div className="margin-4 text-gray-700 py-2 flex p-4 top-4 cursor-pointer
   hover:bg-gray-200 rounded max-w-48 pl-4 transition-all duration-150 items-center ">
      <div className="pr-2 ">
         {icon}
      </div>

      <div>
         {text}
      </div>
   </div>
    
}