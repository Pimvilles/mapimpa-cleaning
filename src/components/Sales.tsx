import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRef } from "react";

const Sales = () => {
  const products = [
    {
      image: "/lovable-uploads/495128ee-8d96-45c7-b29a-d913b36f619b.png",
      title: "Carpet Extractor Machine",
      description: "Professional-grade carpet extraction machine for deep cleaning carpets and upholstery. Features dual tanks for clean and dirty water separation with powerful suction capability."
    },
    {
      image: "/lovable-uploads/7d1ae40f-e896-4a35-96a7-90e3960c5bdf.png",
      title: "Floor Polishing Machine",
      description: "High-speed floor polishing and buffing machine ideal for restoring shine to hard floors, tiles, and commercial surfaces. Perfect for maintaining professional appearance."
    },
    {
      image: "/lovable-uploads/3dcff537-97e9-42a2-bff6-ede600116573.png",
      title: "Wet & Dry Vacuum",
      description: "Versatile commercial vacuum cleaner suitable for both wet and dry applications. Essential for thorough cleaning of various surfaces and spill cleanup."
    },
    {
      image: "/lovable-uploads/95566ced-745e-41dc-ad89-05e0adff8a10.png",
      title: "Window Cleaning Kit",
      description: "Complete professional window cleaning set including squeegees, scrapers, buckets, and extension poles. Everything needed for streak-free window cleaning."
    },
    {
      image: "/lovable-uploads/d15eb5af-c239-43a2-95a6-f5ac480cde3a.png",
      title: "Basic Cleaning Kit",
      description: "Essential cleaning supplies including bucket, mop, sponges, and cleaning tools. Perfect starter kit for basic maintenance cleaning tasks."
    },
    {
      image: "/lovable-uploads/332fd594-40a6-4118-93a5-f5facf6214b4.png",
      title: "Solar Panel Cleaning Equipment",
      description: "Specialized equipment for safe and effective solar panel cleaning. Includes water-fed pole system and soft brushes to maintain solar panel efficiency."
    },
    {
      image: "/lovable-uploads/04646d47-efe1-437e-a2c6-eb94f084d183.png",
      title: "Industrial Floor Scrubber",
      description: "Heavy-duty floor scrubbing machine for large commercial and industrial spaces. Features rotating brushes and water recovery system for efficient cleaning."
    },
    {
      image: "/lovable-uploads/170cb9a4-63e8-4018-967d-e6860d5e964b.png",
      title: "Air Mover/Dryer",
      description: "High-velocity air mover for quick drying of carpets, floors, and surfaces after cleaning. Essential for preventing mold and reducing drying time."
    },
    {
      image: "/lovable-uploads/7f7b0757-856e-432c-a80a-66b7f477d5d2.png",
      title: "Professional Cleaning Cart",
      description: "Mobile cleaning station with multiple compartments, storage bins, and tool holders. Increases efficiency and organization for professional cleaning services."
    }
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="sales" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cleaning Equipment Sales
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional-grade cleaning equipment for sale. From carpet extractors to 
            industrial floor machines, we have everything you need for your cleaning business.
          </p>
        </div>

        <div className="relative">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={scrollLeft}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
            onClick={scrollRight}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          <div 
            ref={scrollRef}
            className="flex space-x-6 pb-4 overflow-x-auto scrollbar-hide px-12"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product, index) => (
              <Card key={index} className="flex-shrink-0 w-80 border-border hover:border-primary/20 transition-colors">
                <CardHeader className="text-center pb-4">
                  <div className="w-full h-48 bg-muted rounded-lg overflow-hidden mb-4">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <CardTitle className="text-lg font-semibold text-foreground">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-center">
                    {product.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="bg-muted/50 rounded-lg p-6 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Need Equipment Consultation?
            </h3>
            <p className="text-muted-foreground mb-4">
              Our experts can help you choose the right equipment for your specific cleaning needs.
            </p>
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90"
            >
              <Phone className="w-5 h-5 mr-2" />
              Contact Our Sales Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sales;