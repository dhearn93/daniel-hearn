import { Github, Mail, Twitter, X } from "lucide-react";
const Contact = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground mb-8">
            I'm always interested in hearing about new projects and opportunities.
            Feel free to reach out through any of these platforms.
          </p>
          
          <div className="flex justify-center gap-6">
            <a
              href="mailto:daniel@danielhearn.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            
            <a
              href="https://github.com/dhearn93"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            
            <a
              href="https://x.com/ConsciEffort"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span>X</span>
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground mt-16">
            © 2024 Daniel Hearn. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact; 