import { Card, CardContent } from "@/components/ui/card";
import { Award, Clock, Users, ThumbsUp } from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
    },
    {
      icon: Clock,
      number: "5+",
      label: "Years Experience",
    },
    {
      icon: Award,
      number: "24/7",
      label: "Service Available",
    },
    {
      icon: ThumbsUp,
      number: "100%",
      label: "Satisfaction Rate",
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Mapimpa 
              <span className="text-primary block">Cleaning Division</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                With over 5 years of experience in the cleaning industry, Mapimpa Cleaning Division 
                has built a reputation for delivering exceptional cleaning services across residential, 
                commercial, and industrial sectors.
              </p>
              
              <p>
                Our commitment to quality and customer satisfaction drives everything we do. We use 
                state-of-the-art equipment, eco-friendly products, and proven techniques to ensure 
                your spaces are not just clean, but truly spotless.
              </p>
              
              <p>
                From routine maintenance cleaning to specialized services like pest control and 
                biohazard cleanup, our trained professionals handle every job with precision, 
                reliability, and attention to detail.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-foreground mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Licensed and insured professionals</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Eco-friendly cleaning products</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Flexible scheduling and competitive pricing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">100% satisfaction guarantee</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <Card key={index} className="text-center p-6 border-border">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {stat.number}
                      </div>
                      <div className="text-muted-foreground font-medium">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;