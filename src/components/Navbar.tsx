import { useEffect, useState } from "react";
import { Sun, Moon, Github, Twitter } from "lucide-react";

import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme !== null) {
      return savedTheme === "dark";
    }
    
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoLoaded, setLogoLoaded] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }

    const darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (localStorage.getItem("theme") === null) {
        setIsDark(e.matches);
      }
    };
    
    darkModeQuery.addEventListener("change", handleSystemThemeChange);
    return () => darkModeQuery.removeEventListener("change", handleSystemThemeChange);
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/50 backdrop-blur-sm",
      isScrolled ? "py-2" : "py-4"
    )}>
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative w-32 h-14">
            {!logoLoaded && (
              <div className="absolute inset-0 bg-muted animate-pulse rounded-full" />
            )}
            <img 
              src={isDark 
                ? "/images/logo-dark.jpg"
                : "/images/logo-light.jpg"
              }
              alt="Daniel Hearn"
              className={cn(
                "w-32 h-14 rounded-full object-cover transition-opacity duration-300",
                !logoLoaded && "opacity-0"
              )}
              onLoad={() => setLogoLoaded(true)}
            />
          </div>
        </Link>
        
        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/dhearn93" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://x.com/ConsciEffort" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
            <Twitter className="w-5 h-5" />
          </a>
          <button onClick={toggleTheme} className="p-2 hover:bg-secondary rounded-full transition-colors">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;