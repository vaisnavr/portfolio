import { Linkedin, Github, Mail, Heart, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <p className="font-display text-xl font-bold mb-1">Vaisnav Roy</p>
              <p className="text-primary-foreground/70 text-sm">
                Business Analytics Professional
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a href="tel:+12136819522" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Phone">
                <Phone size={18} />
              </a>
              <a href="https://linkedin.com/in/vaisnavroy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/vaisnavr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="mailto:vaisnav.roy@gmail.com" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors" aria-label="Email">
                <Mail size={18} />
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-primary-foreground/70 text-sm">
                © {currentYear} Vaisnav Roy. All rights reserved.
              </p>
              <p className="text-primary-foreground/50 text-xs mt-1 flex items-center justify-center md:justify-end gap-1">
                Built with <Heart size={12} className="text-accent" /> and data
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
