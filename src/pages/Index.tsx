import Navbar from "@/components/Navbar";
import Contact from '../components/Contact';
import { useState } from 'react';
import { cn } from "@/lib/utils";

const Index = () => {
  const [mainImageLoaded, setMainImageLoaded] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in">
          <div className="md:hidden mb-8 relative">
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
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hello
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              I'm Daniel. I'm a father, husband, start-up founder, computer whisperer, philosopher, accelerationist, and professional daydreamer.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <a href="#contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Contact Me
              </a>
              <a href="#about" className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                Learn More
              </a>
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
      <section id="about" className="py-20">
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
            <div className="glass p-8 rounded-2xl shadow-lg bg-opacity-80 absolute bottom-[-8rem] right-[30px] max-w-xl">
              <p className="text-lg leading-relaxed">
                I'm a math hobbyist with a deep passion for technology. I've been programming since I was 12 years old and I've been obsessed with AI since I read Robert Heinlein's "The Moon is a Harsh Mistress" at age 15. I love building things, and I've been working on the Conscious Effort project for the past two years. I have dedicated my life to making machines conscious.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="mt-16">
        <Contact />
      </div>
    </div>
  );
};

export default Index;