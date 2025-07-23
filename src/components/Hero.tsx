
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-32 pb-16 bg-background relative overflow-hidden min-h-[660px]">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assist.webm"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30 z-10" />
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transform Your
            <span className="block text-foreground">
              Business Productivity
            </span>
          </h1>
          
          <p className="text-base md:text-lg mb-8 max-w-4xl mx-auto leading-relaxed" style={{ color: '#ffffff' }}>
            Professional virtual assistant services for business professionals who need reliable support at a fraction of traditional costs
          </p>
          
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-lg rounded-[100px] transition-all duration-300 hover:shadow-[0_0_20px_4px_#3B82F6] hover:text-[#3B82F6]"
          >
            GET STARTED
          </Button>
        </div>
        
        <div className="mt-16 flex justify-center">
          <div className="flex flex-row items-center justify-center w-full max-w-3xl p-5 rounded-[100px] backdrop-blur-md bg-white/10 border border-white/20 shadow-lg backdrop-saturate-200 transition-colors gap-6 overflow-x-auto scrollbar-hide">
            <div className="flex flex-col items-center flex-1 group cursor-pointer min-w-[100px] sm:min-w-[120px]">
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 transition-colors duration-200 group-hover:text-[#265499]">70%</div>
              <div className="text-xs sm:text-base text-white transition-colors duration-200 group-hover:text-[#265499]">
                Cost <br /> Savings
              </div>
            </div>
            <div className="flex flex-col items-center flex-1 group cursor-pointer min-w-[100px] sm:min-w-[120px]">
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 transition-colors duration-200 group-hover:text-[#265499]">24/7</div>
              <div className="text-xs sm:text-base text-white transition-colors duration-200 group-hover:text-[#265499]">
                Support <br /> Available
              </div>
            </div>
            <div className="flex flex-col items-center flex-1 group cursor-pointer min-w-[100px] sm:min-w-[120px]">
              <div className="text-2xl sm:text-3xl font-bold text-foreground mb-1 transition-colors duration-200 group-hover:text-[#265499]">AI</div>
              <div className="text-xs sm:text-base text-white transition-colors duration-200 group-hover:text-[#265499]">
                Powered <br /> Technology
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
