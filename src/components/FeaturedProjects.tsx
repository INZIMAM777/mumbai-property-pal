import PropertyCard from "./PropertyCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";

// Mock data for featured properties
const featuredProperties = [
  {
    id: "1",
    title: "Luxurious 3 BHK Apartment in Bandra West",
    location: "Bandra West, Mumbai",
    price: "₹2.8 Cr",
    originalPrice: "₹3.2 Cr",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop",
    beds: 3,
    baths: 3,
    sqft: 1250,
    type: "Apartment",
    status: "Ready to Move" as const,
    rating: 4.5,
    reviews: 128,
    developer: "Godrej Properties",
    verified: true,
    featured: true,
  },
  {
    id: "2",
    title: "Modern 2 BHK with Sea View in Worli",
    location: "Worli, Mumbai",
    price: "₹4.2 Cr",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=300&fit=crop",
    beds: 2,
    baths: 2,
    sqft: 950,
    type: "Apartment",
    status: "New Launch" as const,
    rating: 4.8,
    reviews: 89,
    developer: "Lodha Group",
    possession: "Dec 2025",
    verified: true,
  },
  {
    id: "3",
    title: "Spacious 4 BHK Penthouse in Juhu",
    location: "Juhu, Mumbai",
    price: "₹6.5 Cr",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400&h=300&fit=crop",
    beds: 4,
    baths: 4,
    sqft: 2100,
    type: "Penthouse",
    status: "Under Construction" as const,
    rating: 4.6,
    reviews: 67,
    developer: "Oberoi Realty",
    possession: "Mar 2026",
    featured: true,
  },
  {
    id: "4",
    title: "Contemporary 1 BHK Studio in Andheri",
    location: "Andheri East, Mumbai",
    price: "₹95 L",
    originalPrice: "₹1.1 Cr",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop",
    beds: 1,
    baths: 1,
    sqft: 580,
    type: "Studio",
    status: "Ready to Move" as const,
    rating: 4.2,
    reviews: 45,
    developer: "K Raheja Corp",
    verified: true,
  },
  {
    id: "5",
    title: "Premium 3 BHK Villa in Powai",
    location: "Powai, Mumbai",
    price: "₹3.8 Cr",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop",
    beds: 3,
    baths: 3,
    sqft: 1800,
    type: "Villa",
    status: "New Launch" as const,
    rating: 4.7,
    reviews: 156,
    developer: "Hiranandani Group",
    possession: "Jun 2025",
    featured: true,
  },
  {
    id: "6",
    title: "Elegant 2 BHK Flat in Malad West",
    location: "Malad West, Mumbai",
    price: "₹1.4 Cr",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=300&fit=crop",
    beds: 2,
    baths: 2,
    sqft: 850,
    type: "Apartment",
    status: "Ready to Move" as const,
    rating: 4.3,
    reviews: 92,
    developer: "Runwal Group",
    verified: true,
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-primary">TRENDING NOW</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
              Featured Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Discover the most sought-after properties in Mumbai with verified listings 
              and exclusive deals from top developers.
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            <span>View All</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProperties.map((property) => (
            <PropertyCard 
              key={property.id} 
              property={property}
              className="hover:scale-[1.02] transition-transform duration-300"
            />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center md:hidden">
          <Button variant="outline" size="lg">
            <span>View All Properties</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* Stats Section */}
        <div className="mt-16 p-8 bg-gradient-hero rounded-2xl text-primary-foreground">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">50K+</div>
              <div className="text-primary-foreground/80 text-sm">Properties</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">1500+</div>
              <div className="text-primary-foreground/80 text-sm">Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">25+</div>
              <div className="text-primary-foreground/80 text-sm">Cities</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">15K+</div>
              <div className="text-primary-foreground/80 text-sm">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;