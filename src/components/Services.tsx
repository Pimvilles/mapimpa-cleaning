import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Sofa, Sparkles, Bug, Building, ShieldCheck, Factory, Briefcase } from "lucide-react";
const Services = () => {
  const services = [{
    icon: Home,
    title: "Carpet & Upholstery Cleaning",
    description: "Deep cleaning for carpets and furniture using professional-grade equipment and eco-friendly solutions."
  }, {
    icon: Sparkles,
    title: "Tiles & Hard Floor Polishing",
    description: "Restore the shine to your tiles and hard floors with our specialized polishing techniques."
  }, {
    icon: Sofa,
    title: "Couches & Mattress Cleaning",
    description: "Thorough sanitization and cleaning of upholstered furniture and mattresses for a healthier home."
  }, {
    icon: Bug,
    title: "Pest Control & Fumigation",
    description: "Complete pest elimination services with safe, effective treatments for homes and businesses."
  }, {
    icon: ShieldCheck,
    title: "Deep Cleaning",
    description: "Comprehensive deep cleaning services that reach every corner for a spotless environment."
  }, {
    icon: Building,
    title: "Scene Clean-up",
    description: "Professional biohazard and trauma scene cleaning with discretion and thorough sanitization."
  }, {
    icon: Factory,
    title: "Industrial Warehouse",
    description: "Large-scale cleaning solutions for warehouses, factories, and industrial facilities."
  }, {
    icon: Briefcase,
    title: "Corporate & Commercial",
    description: "Regular maintenance cleaning for offices, retail spaces, and commercial buildings."
  }];
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="services" className="bg-muted/30 py-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Cleaning Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From residential homes to large commercial spaces, we provide comprehensive 
            cleaning solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
          const IconComponent = service.icon;
          return <Card key={index} className="service-hover border-border hover:border-primary/20">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>;
        })}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary/90 text-lg px-8 py-4">
            Request Service Quote
          </Button>
        </div>
      </div>
    </section>;
};
export default Services;