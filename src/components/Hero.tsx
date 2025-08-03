import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-cleaning.jpg";
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [heroImage, "/lovable-uploads/a4d65858-22fa-4986-97dd-04754befaf3f.png", "/lovable-uploads/f1d2ccda-155d-49d6-b8ac-28663e114f95.png", "/lovable-uploads/6435c466-9fc7-4c41-a3b6-b89886adfaab.png"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-[90vh] flex items-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => <img key={index} src={image} alt={`Professional cleaning service ${index + 1}`} className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`} />)}
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 px-0 py-[9px]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />)}
            </div>
            <span className="text-primary-foreground font-medium">Trusted by 500+ clients</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Mapimpa
            <span className="block text-secondary">Cleaning Division</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Professional cleaning solutions for your home, office, and commercial spaces. 
            Experience the difference of expert cleaning services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <Button size="lg" onClick={scrollToContact} className="bg-secondary text-secondary-foreground hover:bg-secondary/90 text-lg px-8 py-4">
              Get Free Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="secondary" onClick={scrollToServices} className="text-lg px-8 py-4">
              Our Services
            </Button>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">24/7</div>
              <div className="text-primary-foreground">Emergency Service</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">100%</div>
              <div className="text-primary-foreground">Satisfaction Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">5+</div>
              <div className="text-primary-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;