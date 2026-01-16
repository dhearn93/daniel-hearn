import { useState } from 'react';
import { cn } from "@/lib/utils";
import Contact from '../components/Contact';

const Projects = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="container pt-28 sm:pt-24 px-4">
        <h1 className="text-4xl font-bold mb-8">The Conscious Effort Project</h1>

        <div className="max-w-4xl mx-auto">
          <article className="glass rounded-xl overflow-hidden">
            <div className="relative aspect-video">
              {!imageLoaded && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
              )}
              <img
                src="/images/ce-logo.png"
                alt="The Conscious Effort Project"
                className={cn(
                  "w-full h-full object-contain p-8 transition-opacity duration-300",
                  !imageLoaded && "opacity-0"
                )}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            <div className="p-8 text-center">
              <h2 className="text-3xl font-semibold mb-4">Conscious Effort</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Developing machine consciousness through metacognition. Not your grandpa's predictive text model—a groundbreaking approach to AI that thinks about its own thinking.
              </p>
              <a
                href="https://consciouseffort.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Visit consciouseffort.dev
              </a>
            </div>
          </article>
        </div>
      </div>
      <div className="mt-16">
        <Contact />
      </div>
    </div>
  );
};

export default Projects;