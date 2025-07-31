import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">M</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Mapimpa Cleaning Division</h3>
                <p className="text-primary-foreground/80 text-sm">Professional Cleaning Solutions</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Your trusted partner for all cleaning needs. From residential homes to commercial 
              spaces, we deliver exceptional results with every service.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">24/7 Emergency Service</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <button 
                onClick={() => scrollToSection('home')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 mt-0.5 text-secondary" />
                <div>
                  <p className="text-primary-foreground/80 text-sm">+27 67 805 5830</p>
                  <p className="text-primary-foreground/80 text-sm">+27 83 595 0616</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-secondary" />
                <p className="text-primary-foreground/80 text-sm">info@mapimpagroup.co.za</p>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-secondary" />
                <p className="text-primary-foreground/80 text-sm">@mapimpa_cleaning</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/80 text-sm">
              © {currentYear} Mapimpa Cleaning Division. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
              <span>Licensed & Insured</span>
              <span>•</span>
              <span>Eco-Friendly Products</span>
              <span>•</span>
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;