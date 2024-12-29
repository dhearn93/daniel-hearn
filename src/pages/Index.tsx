import Navbar from "@/components/Navbar";
import Contact from '../components/Contact';
import { useState, useCallback } from 'react';
import { cn } from "@/lib/utils";

const Index = () => {
  const [mainImageLoaded, setMainImageLoaded] = useState(false);

  const scrollToSection = useCallback((elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center pt-28 sm:pt-24 px-4">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in">
          <div className="md:hidden mb-8 relative mt-8 sm:mt-0">
            {!mainImageLoaded && <div className="absolute inset-0 bg-muted animate-pulse rounded-2xl" />}
            <img 
              src="/images/dh-main.jpg"
              alt="Daniel Hearn"
              className={cn(
                "rounded-2xl shadow-xl w-full max-w-sm mx-auto transition-opacity duration-300",
                !mainImageLoaded && "opacity-0"
              )}
              onLoad={() => setMainImageLoaded(true)}
            />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
              Hello
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8">
              I'm Daniel.
              <br />
              I'm a father, husband, start-up founder, computer whisperer, philosopher, accelerationist, and professional daydreamer.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button 
                onClick={() => scrollToSection('contact-section')}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Contact Me
              </button>
              <button 
                onClick={() => scrollToSection('about-section')}
                className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="hidden md:block relative">
            {!mainImageLoaded && <div className="absolute inset-0 bg-muted animate-pulse rounded-2xl" />}
            <img 
              src="/images/dh-main.jpg"
              alt="Daniel Hearn"
              className={cn(
                "rounded-2xl shadow-xl w-full max-w-lg mx-auto transition-opacity duration-300",
                !mainImageLoaded && "opacity-0"
              )}
              onLoad={() => setMainImageLoaded(true)}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about-section" className="py-20 px-4 mt-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
          <div className="relative">
            <div className="w-full max-w-4xl mx-auto">
              <img 
                src="/images/the-stars.png"
                alt="Daniel Hearn Working"
                className="w-full aspect-[16/9] object-cover rounded-2xl shadow-xl"
              />
            </div>
            <div className="glass p-6 sm:p-8 rounded-2xl shadow-lg bg-opacity-80 
                          relative sm:absolute sm:bottom-[-8rem] sm:right-[30px] 
                          mt-8 sm:mt-0 mx-4 sm:mx-0 
                          max-w-full sm:max-w-xl">
              <p className="text-base sm:text-lg leading-relaxed">
                I'm a math hobbyist with a profound passion for technology. I've been programming since I was 12 years old and I've been obsessed with AI since I read Robert Heinlein's "The Moon is a Harsh Mistress" at age 15. I love building things, and I've been working on the Conscious Effort project for the past two years. I have dedicated my life to machine consciousness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="mt-16">
        <section id="contact-section">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Index;