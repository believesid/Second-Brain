// Navbar.tsx
import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useNavigate} from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  
  useEffect(() => {
    
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 h-[60px] transition-all duration-200 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-black/10 shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a href="/" className="flex items-center gap-2 font-semibold text-[17px] text-gray-900 no-underline">
        <div className="w-[22px] h-[22px] bg-blue-500 rounded-md flex items-center justify-center">
          <span className="text-white text-[11px] font-bold">S</span>
        </div>
        Second Brain
      </a>

      {/* Nav Links */}
      <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
        {["Features", "Guide", "Docs", "Pricing"].map((link) => (
          <li key={link}>
            
             <a  href={`/${link.toLowerCase()}`}
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors no-underline"
            >
                
              {link}
           
             </a>
          </li>
        ))}
      </ul>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        
       <a href="/signin"
          className="text-sm text-gray-600 hover:text-gray-900 transition-colors no-underline"
        >
        
         
          Sign In
          
       </a>
      
      
        <button onClick={() => navigate("/signup")}
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-pointer border-none"
        >
          Get started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;