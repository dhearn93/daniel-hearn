import { useState } from 'react';
import { cn } from "@/lib/utils";
import Contact from '../components/Contact';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Conscious Effort",
      description: "A cognitive architecture for conscious AI",
      tech: [],
      image: "/images/ce-logo.png",
      link: "https://consciouseffort.dev"
    },
    {
      id: 2,
      title: "I Do Know",
      description: "A real-time transcription tool for meetings and interviews",
      tech: ["TypeScript", "React", "Supabase", "AssemblyAI"],
      image: "/images/idk-logo.png",
      link: "https://idoknow.info"
    },
    {
      id: 3,
      title: "vent.zone",
      description: "A place to vent",
      tech: [],
      image: "/images/ventzone.png",
      link: "https://vent.zone"
    }
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const [imageLoaded, setImageLoaded] = useState(false);
            
            return (
              <article key={project.id} className="glass rounded-xl overflow-hidden hover:scale-[1.02] transition-transform">
                <div className="relative aspect-square">
                  {!imageLoaded && (
                    <div className="absolute inset-0 bg-muted animate-pulse" />
                  )}
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className={cn(
                      "w-full h-full object-cover transition-opacity duration-300",
                      !imageLoaded && "opacity-0"
                    )}
                    onLoad={() => setImageLoaded(true)}
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                  <a href={project.link} className="text-primary hover:underline">Visit {project.title}</a>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <Contact />
      </div>
    </div>
  );
};

export default Projects;