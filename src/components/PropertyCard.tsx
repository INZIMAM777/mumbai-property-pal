import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Calendar,
  Star,
  Phone,
  MessageSquare,
  Eye
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: string;
    originalPrice?: string;
    image: string;
    beds: number;
    baths: number;
    sqft: number;
    type: string;
    status: "Ready to Move" | "Under Construction" | "New Launch";
    rating?: number;
    reviews?: number;
    developer?: string;
    possession?: string;
    verified?: boolean;
    featured?: boolean;
  };
  className?: string;
}

const PropertyCard = ({ property, className }: PropertyCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Ready to Move":
        return "bg-success text-success-foreground";
      case "Under Construction":
        return "bg-warning text-warning-foreground";
      case "New Launch":
        return "bg-primary text-primary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className={cn(
      "group bg-card rounded-xl shadow-card hover:shadow-hover transition-all duration-300 overflow-hidden border border-border/50 hover:border-primary/20",
      className
    )}>
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={property.image}
          alt={property.title}
          className={cn(
            "w-full h-full object-cover transition-all duration-500 group-hover:scale-105",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Loading placeholder */}
        {!imageLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 bg-muted-foreground/20 rounded-full" />
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {property.featured && (
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
          )}
          {property.verified && (
            <Badge className="bg-success text-success-foreground">Verified</Badge>
          )}
          <Badge className={getStatusColor(property.status)}>
            {property.status}
          </Badge>
        </div>

        {/* Favorite Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-card/80 backdrop-blur-sm hover:bg-card"
          onClick={() => setIsFavorited(!isFavorited)}
        >
          <Heart 
            className={cn(
              "h-4 w-4 transition-colors",
              isFavorited ? "fill-red-500 text-red-500" : "text-muted-foreground"
            )} 
          />
        </Button>

        {/* View Count */}
        <div className="absolute bottom-3 right-3 bg-card/80 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Eye className="h-3 w-3 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">247</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        {/* Price & Title */}
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl font-bold text-primary">{property.price}</span>
            {property.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {property.originalPrice}
              </span>
            )}
          </div>
          <h3 className="font-semibold text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
            {property.title}
          </h3>
        </div>

        {/* Location */}
        <div className="flex items-center gap-1 text-muted-foreground">
          <MapPin className="h-4 w-4 flex-shrink-0" />
          <span className="text-sm truncate">{property.location}</span>
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="h-4 w-4" />
            <span>{property.sqft} sqft</span>
          </div>
        </div>

        {/* Developer & Rating */}
        {(property.developer || property.rating) && (
          <div className="flex items-center justify-between text-sm">
            {property.developer && (
              <span className="text-muted-foreground">By {property.developer}</span>
            )}
            {property.rating && (
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{property.rating}</span>
                {property.reviews && (
                  <span className="text-muted-foreground">({property.reviews})</span>
                )}
              </div>
            )}
          </div>
        )}

        {/* Possession Date */}
        {property.possession && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Possession: {property.possession}</span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Phone className="h-4 w-4 mr-1" />
            Call
          </Button>
          <Button variant="outline" size="sm" className="flex-1">
            <MessageSquare className="h-4 w-4 mr-1" />
            Chat
          </Button>
          <Button variant="default" size="sm" className="flex-1">
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;