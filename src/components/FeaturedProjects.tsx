import PropertyCard from "./PropertyCard";
import { ArrowRight } from "lucide-react";
import { allProperties } from "@/data/properties";

// Use imported property data
const recommendedProjects = allProperties.slice(0, 50); // Show first 50 properties

const apartmentTypes = [
  {
    title: "Flats in Western Mumbai",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300&h=200&fit=crop",
  },
  {
    title: "Builder Floors in Western Mumbai",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=300&h=200&fit=crop",
  },
  {
    title: "Independent House in Western Mumbai",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=200&fit=crop",
  },
  {
    title: "Plots in Western Mumbai",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=300&h=200&fit=crop",
  },
];

const FeaturedProjects = () => {
  return (
    <div className="space-y-12">
      {/* Recommended Projects */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Recommended Projects
          </h2>
          <p className="text-muted-foreground">
            The most searched projects across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {recommendedProjects.map((property, index) => (
            <PropertyCard 
              key={property.id} 
              property={property}
              className="hover:shadow-lg transition-shadow duration-300"
            />
          ))}
        </div>

        <div className="text-center">
          <button className="flex items-center gap-2 mx-auto text-primary hover:text-primary/80 font-medium">
            <span>View More Projects</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>

      {/* Apartments, Villas and more */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Apartments, Villas and more
          </h2>
          <p className="text-muted-foreground">
            in Western Mumbai
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {apartmentTypes.map((type, index) => (
            <div 
              key={index}
              className="relative group cursor-pointer rounded-lg overflow-hidden"
            >
              <img 
                src={type.image} 
                alt={type.title}
                className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 right-3">
                <h3 className="text-white text-sm font-medium leading-tight">
                  {type.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FeaturedProjects;