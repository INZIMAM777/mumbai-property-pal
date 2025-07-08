import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";

interface SearchFiltersProps {
  onFilterChange: (filters: any) => void;
}

const SearchFilters = ({ onFilterChange }: SearchFiltersProps) => {
  const [filters, setFilters] = useState({
    priceRange: [0, 10000000],
    propertyType: 'all',
    bedrooms: 'all',
    bathrooms: 'all',
    status: 'all',
    amenities: [] as string[],
    area: [0, 5000],
    isRERA: false,
    verified: false
  });

  const handleFilterUpdate = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    const newAmenities = checked 
      ? [...filters.amenities, amenity]
      : filters.amenities.filter(a => a !== amenity);
    handleFilterUpdate('amenities', newAmenities);
  };

  const clearFilters = () => {
    const defaultFilters = {
      priceRange: [0, 10000000],
      propertyType: 'all',
      bedrooms: 'all',
      bathrooms: 'all',
      status: 'all',
      amenities: [],
      area: [0, 5000],
      isRERA: false,
      verified: false
    };
    setFilters(defaultFilters);
    onFilterChange(defaultFilters);
  };

  return (
    <TooltipProvider>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">Filters</CardTitle>
            <Button variant="ghost" size="sm" onClick={clearFilters}>
              Clear All
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
        {/* Price Range */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-medium">Price Range</h3>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Set your budget range to filter properties</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="space-y-3">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => handleFilterUpdate('priceRange', value)}
              max={10000000}
              step={100000}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>₹{(filters.priceRange[0] / 100000).toFixed(0)}L</span>
              <span>₹{(filters.priceRange[1] / 100000).toFixed(0)}L</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Property Type */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-medium">Property Type</h3>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Choose the type of property you're looking for</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Select value={filters.propertyType} onValueChange={(value) => handleFilterUpdate('propertyType', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Apartment">Apartment/Flat</SelectItem>
              <SelectItem value="Villa">Villa</SelectItem>
              <SelectItem value="Builder Floor">Builder Floors</SelectItem>
              <SelectItem value="Independent House">Independent House</SelectItem>
              <SelectItem value="Plot">Plots/Land</SelectItem>
              <SelectItem value="Studio Apartment">Studio Apartments/1 RK</SelectItem>
              <SelectItem value="Serviced Apartment">Serviced Apartments</SelectItem>
              <SelectItem value="Farm House">Farm Houses</SelectItem>
              <SelectItem value="Commercial">Commercial Property</SelectItem>
              <SelectItem value="Office Space">Office Space</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Bedrooms */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-medium">Bedrooms</h3>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Filter by number of bedrooms (BHK)</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Select value={filters.bedrooms} onValueChange={(value) => handleFilterUpdate('bedrooms', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any</SelectItem>
              <SelectItem value="1">1 BHK</SelectItem>
              <SelectItem value="2">2 BHK</SelectItem>
              <SelectItem value="3">3 BHK</SelectItem>
              <SelectItem value="4">4 BHK</SelectItem>
              <SelectItem value="5">5 BHK</SelectItem>
              <SelectItem value="6">6 BHK</SelectItem>
              <SelectItem value="7">7 BHK</SelectItem>
              <SelectItem value="8">8 BHK</SelectItem>
              <SelectItem value="9">9 BHK</SelectItem>
              <SelectItem value="10">10+ BHK</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Bathrooms */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-medium">Bathrooms</h3>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Number of bathrooms/washrooms in the property</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Select value={filters.bathrooms} onValueChange={(value) => handleFilterUpdate('bathrooms', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Any</SelectItem>
              <SelectItem value="1">1 Bathroom</SelectItem>
              <SelectItem value="2">2 Bathrooms</SelectItem>
              <SelectItem value="3">3 Bathrooms</SelectItem>
              <SelectItem value="4">4 Bathrooms</SelectItem>
              <SelectItem value="5">5 Bathrooms</SelectItem>
              <SelectItem value="6">6 Bathrooms</SelectItem>
              <SelectItem value="7">7 Bathrooms</SelectItem>
              <SelectItem value="8">8 Bathrooms</SelectItem>
              <SelectItem value="9">9 Bathrooms</SelectItem>
              <SelectItem value="10">10+ Bathrooms</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Property Status */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-medium">Status</h3>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Construction status and possession timeline</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <Select value={filters.status} onValueChange={(value) => handleFilterUpdate('status', value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="Ready to Move">Ready to Move</SelectItem>
              <SelectItem value="Under Construction">Under Construction</SelectItem>
              <SelectItem value="New Launch">New Launch</SelectItem>
              <SelectItem value="Resale">Resale</SelectItem>
              <SelectItem value="Pre Launch">Pre Launch</SelectItem>
              <SelectItem value="Possession Soon">Possession Soon</SelectItem>
              <SelectItem value="Rent">For Rent</SelectItem>
              <SelectItem value="PG">PG/Co-living</SelectItem>
              <SelectItem value="Lease">For Lease</SelectItem>
              <SelectItem value="Investment">Investment</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Separator />

        {/* Area Range */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-medium">Area (sq ft)</h3>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Set the carpet area range for your property</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="space-y-3">
            <Slider
              value={filters.area}
              onValueChange={(value) => handleFilterUpdate('area', value)}
              max={5000}
              step={100}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{filters.area[0]} sq ft</span>
              <span>{filters.area[1]} sq ft</span>
            </div>
          </div>
        </div>

        <Separator />

        {/* Special Features */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-medium">Special Features</h3>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Filter by RERA compliance and verification status</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="rera"
                checked={filters.isRERA}
                onCheckedChange={(checked) => handleFilterUpdate('isRERA', checked)}
              />
              <label htmlFor="rera" className="text-sm">RERA Approved</label>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="verified"
                checked={filters.verified}
                onCheckedChange={(checked) => handleFilterUpdate('verified', checked)}
              />
              <label htmlFor="verified" className="text-sm">Verified Properties</label>
            </div>
          </div>
        </div>

        <Separator />

        {/* Amenities */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="font-medium">Amenities</h3>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p>Select amenities you want in your property</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="space-y-2">
            {[
              'Swimming Pool',
              'Gym/Fitness Center',
              'Parking Space',
              '24x7 Security',
              'Club House',
              'Garden/Landscaping',
              'Elevator/Lift',
              'Power Backup',
              'Water Supply',
              'Internet/Wi-Fi',
              'CCTV Surveillance',
              'Children\'s Play Area',
              'Jogging Track',
              'Multi-purpose Hall'
            ].map((amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox
                  id={amenity}
                  checked={filters.amenities.includes(amenity)}
                  onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
                />
                <label htmlFor={amenity} className="text-sm">{amenity}</label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
    </TooltipProvider>
  );
};

export default SearchFilters;