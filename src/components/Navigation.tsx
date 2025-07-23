
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const sectionIds = ["hero", "about", "services", "process", "contact"];
    const handleScroll = () => {
      let currentSection = "";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            currentSection = id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsMenuOpen(false);
  };

  const handleScheduleCall = () => {
    window.open("https://calendly.com/abe-sshift/15-minute-meeting-for-assistai", "_blank");
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg backdrop-saturate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button onClick={() => window.location.href = '/'} className="text-2xl font-bold text-foreground">
              assistAI
            </button>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors ${activeSection === 'hero' ? 'border-b-2 border-primary' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors ${activeSection === 'about' ? 'border-b-2 border-primary' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors ${activeSection === 'services' ? 'border-b-2 border-primary' : ''}`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className={`text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors ${activeSection === 'process' ? 'border-b-2 border-primary' : ''}`}
              >
                Process
              </button>
              <button 
                onClick={() => navigate('/blog')}
                className={`text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors ${window.location.pathname === '/blog' ? 'border-b-2 border-primary' : ''}`}
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`text-white hover:text-gray-300 px-3 py-2 text-sm font-medium transition-colors ${activeSection === 'contact' ? 'border-b-2 border-primary' : ''}`}
              >
                Contact
              </button>
              <Button 
                onClick={handleScheduleCall}
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background px-6 py-2 rounded-sm transition-all duration-300"
              >
                Schedule a call
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <button 
                onClick={() => scrollToSection('hero')}
                className={`block text-white hover:text-gray-300 px-3 py-2 text-base font-medium w-full text-left ${activeSection === 'hero' ? 'border-b-2 border-primary' : ''}`}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className={`block text-white hover:text-gray-300 px-3 py-2 text-base font-medium w-full text-left ${activeSection === 'about' ? 'border-b-2 border-primary' : ''}`}
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`block text-white hover:text-gray-300 px-3 py-2 text-base font-medium w-full text-left ${activeSection === 'services' ? 'border-b-2 border-primary' : ''}`}
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className={`block text-white hover:text-gray-300 px-3 py-2 text-base font-medium w-full text-left ${activeSection === 'process' ? 'border-b-2 border-primary' : ''}`}
              >
                Process
              </button>
              <button 
                onClick={() => navigate('/blog')}
                className={`block text-white hover:text-gray-300 px-3 py-2 text-base font-medium w-full text-left ${window.location.pathname === '/blog' ? 'border-b-2 border-primary' : ''}`}
              >
                Blog
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`block text-white hover:text-gray-300 px-3 py-2 text-base font-medium w-full text-left ${activeSection === 'contact' ? 'border-b-2 border-primary' : ''}`}
              >
                Contact
              </button>
              <Button 
                onClick={handleScheduleCall}
                variant="outline"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background px-6 py-2 rounded-sm transition-all duration-300 w-full mt-2"
              >
                Schedule a call
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
