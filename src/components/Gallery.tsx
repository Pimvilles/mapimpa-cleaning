import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      id: 1,
      src: "/lovable-uploads/882be319-ec7d-447b-835b-d1668728b5cc.png",
      alt: "Scene Clean-up Service - Professional biohazard cleaning",
      category: "Scene Clean-up"
    },
    {
      id: 2,
      src: "/lovable-uploads/46366808-5631-475a-98f3-274e2c6a7f8f.png",
      alt: "Tiles and Hard Floor Polishing - After cleaning result",
      category: "Floor Polishing"
    },
    {
      id: 3,
      src: "/lovable-uploads/59768259-1ebc-4371-af71-a7129c9dd83f.png",
      alt: "Deep Cleaning Services - Professional floor cleaning",
      category: "Deep Cleaning"
    },
    {
      id: 4,
      src: "/lovable-uploads/063d916d-8635-4138-80b4-fcf70ccae32d.png",
      alt: "Industrial Cleaning - Solar panel cleaning equipment",
      category: "Industrial Cleaning"
    },
    {
      id: 5,
      src: "/lovable-uploads/3ba8a3a4-58e1-4676-87b1-5dfeea331275.png",
      alt: "Solar Panel Cleaning - Professional maintenance service",
      category: "Solar Panel Cleaning"
    },
    {
      id: 6,
      src: "/lovable-uploads/0253280b-3638-45a1-8858-5619a24806c8.png",
      alt: "Upholstery Cleaning - Professional furniture cleaning",
      category: "Upholstery Cleaning"
    },
    {
      id: 7,
      src: "/lovable-uploads/b1b1a4eb-b7c3-4d03-b137-b7b4d9d7a7ba.png",
      alt: "Carpet Cleaning - Professional carpet cleaning service",
      category: "Carpet Cleaning"
    },
    {
      id: 8,
      src: "/lovable-uploads/325b41e2-75bb-4501-9011-c126b7038697.png",
      alt: "Couch Cleaning - Professional furniture cleaning",
      category: "Furniture Cleaning"
    },
    {
      id: 9,
      src: "/lovable-uploads/a27354cd-d4c6-409f-9ae2-5738675a5cb8.png",
      alt: "Mattress Cleaning - Professional sanitization service",
      category: "Mattress Cleaning"
    },
    {
      id: 10,
      src: "/lovable-uploads/cb4a0c89-2bc0-45cb-b264-e7ac4cf47109.png",
      alt: "Window Cleaning - Professional window cleaning service",
      category: "Window Cleaning"
    }
  ];

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Work Gallery</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See the exceptional results of our professional cleaning services. 
            From residential homes to commercial spaces, we deliver outstanding quality every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{image.category}</h3>
                  <p className="text-white/90 text-sm mb-4">{image.alt}</p>
                </div>
                
                {/* Zoom Icon */}
                <div className="absolute top-4 right-4">
                  <div className="bg-primary/90 p-2 rounded-full">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Click area */}
              <button
                onClick={() => openModal(image.src)}
                className="absolute inset-0 w-full h-full focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
                aria-label={`View larger image of ${image.category}`}
              />
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-7xl max-h-full">
              <img
                src={selectedImage}
                alt="Gallery image enlarged view"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
              />
              <Button
                onClick={closeModal}
                variant="secondary"
                size="icon"
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white border-white/20"
              >
                <X className="w-6 h-6" />
              </Button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;