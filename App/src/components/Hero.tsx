
export function Hero(){
    return <div>
        <div className="px-4 py-2 flex items-center flex-col w-full my-20">
            <button className="absolute border px-4 py-1 rounded-full  border-gray-300
            hover:bg-gray-200 transition cursor-pointer duration-200  text-gray600 -mt-45 bg-linear-to-r from-transparent
            via-sky-300 to-transparent  ">
                Store all your brain content here
               
            </button>
        </div>
         <div className="flex flex-col">
             <h1 className="font-medium text-6xl text-black tracking-tighter text-center -mt-50 ">
            Magically simplify <br className=""/> your brain
        </h1>
        <p className="max-w-2xl text-center mt-6 mx-auto text-lg text-neutral-700">
            Ai-powered real-time insights, automated journaling,<br /> effortless productivity.
        </p>
        
        
       </div>
    </div>
}