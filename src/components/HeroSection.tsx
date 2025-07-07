import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Home, 
  Building2, 
  Warehouse,
  Users,
  Mic,
  SlidersHorizontal
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import heroImage from "@/assets/hero-building.jpg";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("Buy");
  const [searchQuery, setSearchQuery] = useState("");

  const tabs = [
    { name: "Buy", icon: Home },
    { name: "Rent", icon: Building2 },
    { name: "New Launch", icon: Warehouse, badge: "NEW" },
    { name: "PG / Co-living", icon: Users },
    { name: "Commercial", icon: Building2 },
    { name: "Plots/Land", icon: MapPin },
    { name: "Projects", icon: Warehouse },
  ];

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury Real Estate" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero Content */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Find Your Perfect
              <span className="block text-primary-glow">Dream Home</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Discover premium properties across Mumbai with verified listings, 
              expert guidance, and seamless buying experience.
            </p>
          </div>

          {/* Search Card */}
          <div className="bg-card/95 backdrop-blur-sm rounded-2xl shadow-hover p-6 md:p-8 border border-white/20">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.name;
                return (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                      isActive
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.name}
                    {tab.badge && (
                      <Badge variant="secondary" className="ml-1 text-xs px-1 py-0">
                        {tab.badge}
                      </Badge>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Search Form */}
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                {/* Property Type */}
                <div className="md:col-span-3">
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    Property Type
                  </label>
                  <Select defaultValue="all-residential">
                    <SelectTrigger className="h-12">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-residential">All Residential</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="plot">Plot</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location Search */}
                <div className="md:col-span-6">
                  <label className="text-sm font-medium text-card-foreground mb-2 block">
                    Location
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search for locality, project, or landmark"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-12 text-base"
                    />
                    <Button variant="ghost" size="icon" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                      <Mic className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Search Button */}
                <div className="md:col-span-3 flex gap-2">
                  <Button variant="search" size="lg" className="flex-1 h-12">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button variant="filter" size="icon" className="h-12 w-12">
                    <SlidersHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Quick Filters */}
              <div className="flex flex-wrap gap-2 pt-4 border-t">
                <span className="text-sm text-muted-foreground mr-2">Popular:</span>
                {["Ready to Move", "Under Construction", "Resale", "New Launch"].map((filter) => (
                  <Button 
                    key={filter} 
                    variant="outline" 
                    size="sm" 
                    className="text-xs h-7"
                  >
                    {filter}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 flex flex-wrap justify-center gap-8 text-primary-foreground/70">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">50K+</div>
              <div className="text-sm">Properties Listed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">15K+</div>
              <div className="text-sm">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground">25+</div>
              <div className="text-sm">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;