import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  MapPin, 
  Mic,
  ChevronDown,
  LocateFixed
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const HeroSection = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState("Buy");
  const [searchQuery, setSearchQuery] = useState("");
  const [isListening, setIsListening] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}&location=Western Mumbai`);
    }
  };

  const handleLocationSearch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          toast({
            title: "Location Found",
            description: `Searching properties near your location (${latitude.toFixed(2)}, ${longitude.toFixed(2)})`,
          });
          navigate(`/search?lat=${latitude}&lng=${longitude}&location=Near Me`);
        },
        (error) => {
          toast({
            title: "Location Error",
            description: "Unable to get your location. Please search manually.",
            variant: "destructive",
          });
        }
      );
    } else {
      toast({
        title: "Location Not Supported",
        description: "Geolocation is not supported by this browser.",
        variant: "destructive",
      });
    }
  };

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = false;
      recognition.interimResults = false;
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setIsListening(true);
        toast({
          title: "Voice Search Active",
          description: "Speak now to search for properties...",
        });
      };

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        setIsListening(false);
        toast({
          title: "Voice Search Complete",
          description: `Searching for: ${transcript}`,
        });
      };

      recognition.onerror = () => {
        setIsListening(false);
        toast({
          title: "Voice Search Error",
          description: "Could not hear your voice. Please try again.",
          variant: "destructive",
        });
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      toast({
        title: "Voice Search Not Supported",
        description: "Voice search is not supported in this browser.",
        variant: "destructive",
      });
    }
  };

  const tabs = [
    { name: "Buy" },
    { name: "Rent" },
    { name: "New Launch", isNew: true },
    { name: "PG / Co-living" },
    { name: "Commercial" },
    { name: "Plots/Land" },
    { name: "Projects" },
  ];

  return (
    <section className="bg-gradient-hero min-h-[500px] relative">
      {/* Banner Ad */}
      <div className="relative h-32 md:h-40 bg-gradient-to-r from-orange-50 to-orange-100 border-b">
        <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
          <div className="flex-1">
            <div className="text-lg md:text-xl font-semibold text-orange-900 mb-1">
              A NEW STANDARD
            </div>
            <div className="text-lg md:text-xl font-semibold text-orange-900 mb-2">
              OF LIVING
            </div>
            <div className="text-sm text-orange-700">
              #Don'tMissDLFMumbai
            </div>
          </div>
          <div className="hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=200&h=120&fit=crop" 
              alt="DLF Project" 
              className="rounded-lg"
            />
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-primary mb-1">DLF TRIDENT</div>
            <div className="text-sm text-muted-foreground mb-1">3 & 4 BEDROOM RESIDENCES COMING SOON</div>
            <div className="text-sm text-muted-foreground">OFF LINK ROAD - ANDHERI WEST, MUMBAI</div>
            <div className="mt-2">
              <img 
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==" 
                alt="QR Code" 
                className="w-12 h-12 bg-muted rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Continue browsing section */}
        <div className="mb-6">
          <p className="text-sm text-muted-foreground mb-3">Continue browsing where you left off...</p>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-primary font-medium">Buy in Western Mumbai</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Explore real estate in...</span>
          </div>
        </div>

        {/* Search Card */}
        <div className="bg-card rounded-lg shadow-lg p-6 max-w-4xl">
          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.name;
              return (
                <button
                  key={tab.name}
                  onClick={() => setActiveTab(tab.name)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors relative ${
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.name}
                  {tab.isNew && (
                    <sup className="text-xs text-red-500 font-bold">★</sup>
                  )}
                </button>
              );
            })}
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
            {/* Property Type */}
            <div className="md:col-span-3">
              <Select defaultValue="all-residential">
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="All Residential" />
                  <ChevronDown className="h-4 w-4" />
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
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search '3 BHK for sale in Mumbai'"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-20 h-12 text-base"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8"
                    onClick={handleLocationSearch}
                    title="Search by current location"
                  >
                    <LocateFixed className="h-4 w-4 text-primary" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className={`h-8 w-8 ${isListening ? 'bg-red-100 text-red-600' : ''}`}
                    onClick={handleVoiceSearch}
                    title="Voice search"
                  >
                    <Mic className={`h-4 w-4 ${isListening ? 'text-red-600' : 'text-primary'}`} />
                  </Button>
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="md:col-span-3">
              <Button 
                variant="search" 
                size="lg" 
                className="w-full h-12 bg-secondary text-secondary-foreground hover:bg-secondary/90"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Free Text Search Info */}
        <div className="mt-4 bg-slate-800 text-white p-3 rounded-md max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">💡 Introducing Free Text Search</span>
          </div>
          <p className="text-sm text-slate-300 mt-1">
            Now search for Cities, Locality, Landmark or Text Phrases
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;