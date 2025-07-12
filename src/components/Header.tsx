import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, User, Menu, Search, Globe, Home, Users, Building, Store, TrendingUp, Phone, Mail } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      {/* Top Bar - Hide on mobile */}
      <div className="bg-slate-50 border-b hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex h-8 items-center justify-between text-xs">
            <div className="flex items-center space-x-4 text-slate-600">
              <span className="flex items-center gap-1">
                <Phone className="h-3 w-3" />
                <span className="hidden lg:inline">1800 41 99099</span>
                <span className="lg:hidden">Call Us</span>
              </span>
              <span className="flex items-center gap-1 hidden lg:flex">
                <Mail className="h-3 w-3" />
                services@99acres.com
              </span>
            </div>
            <div className="flex items-center space-x-2 lg:space-x-4">
              <Link to="#" className="text-slate-600 hover:text-primary">Help</Link>
              <Link to="#" className="text-slate-600 hover:text-primary hidden lg:inline">Sitemap</Link>
              <div className="flex items-center gap-1 text-slate-600">
                <Globe className="h-3 w-3" />
                <span>EN</span>
                <ChevronDown className="h-3 w-3" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-14 lg:h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="text-xl lg:text-2xl font-bold">
                <span className="text-orange-500">99</span>
                <span className="text-slate-700">acres</span>
              </div>
            </Link>
            <div className="ml-4 lg:ml-6 hidden md:flex items-center gap-1 text-sm">
              <span className="text-slate-600">Buy in</span>
              <span className="text-orange-500 font-medium">Western Mumbai</span>
              <ChevronDown className="h-4 w-4 text-orange-500" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <TooltipProvider>
            <nav className="hidden lg:flex items-center space-x-8 text-sm">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-slate-700 hover:text-orange-500 flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    Buy
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <DropdownMenuItem onClick={() => navigate('/search?category=apartment')}>
                    Apartments/Flats
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/search?category=villa')}>
                    Independent Houses/Villas
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/search?category=plot')}>
                    Plots/Land
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/search?category=commercial')}>
                    Commercial Properties
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-slate-700 hover:text-orange-500 flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    Rent
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <DropdownMenuItem onClick={() => navigate('/search?category=rent-apartment')}>
                    Apartments for Rent
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/search?category=rent-house')}>
                    Houses for Rent
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/search?category=pg')}>
                    PG/Co-living
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/search?category=commercial-rent')}>
                    Commercial for Rent
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-slate-700 hover:text-orange-500 flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    New Projects
                    <ChevronDown className="h-3 w-3" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64">
                  <DropdownMenuItem onClick={() => navigate('/search?category=new-launch')}>
                    New Launch Projects
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/search?category=under-construction')}>
                    Under Construction
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => navigate('/search?category=ready-to-move')}>
                    Ready to Move
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/post-property" className="text-slate-700 hover:text-orange-500 flex items-center gap-1">
                <Store className="h-4 w-4" />
                Sell/Rent
              </Link>

              <div className="flex items-center gap-1 cursor-pointer text-slate-700 hover:text-orange-500">
                <TrendingUp className="h-4 w-4" />
                <span>Insights</span>
                <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded font-medium">
                  NEW
                </span>
              </div>
            </nav>
          </TooltipProvider>

          {/* Right Section */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            <Link to="/post-property" className="hidden md:block">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-3 lg:px-4 py-2">
                <span className="hidden lg:inline">Post property</span>
                <span className="lg:hidden">Post</span>
                <span className="bg-green-500 text-white text-xs px-1.5 py-0.5 rounded ml-1 lg:ml-2 font-medium">
                  FREE
                </span>
              </Button>
            </Link>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>Login / Register</DropdownMenuItem>
                <DropdownMenuItem>My Activity</DropdownMenuItem>
                <DropdownMenuItem>Saved Properties</DropdownMenuItem>
                <DropdownMenuItem>My Requirements</DropdownMenuItem>
                <DropdownMenuItem>Recently Viewed</DropdownMenuItem>
                <DropdownMenuItem>My Searches</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden h-8 w-8"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-white">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-sm font-medium text-slate-700 hover:text-orange-500 transition-colors px-4 py-2 border-b">
                Buy Properties
              </a>
              <a href="#" className="text-sm font-medium text-slate-700 hover:text-orange-500 transition-colors px-4 py-2 border-b">
                Rent Properties
              </a>
              <a href="#" className="text-sm font-medium text-slate-700 hover:text-orange-500 transition-colors px-4 py-2 border-b">
                New Projects
              </a>
              <a href="#" className="text-sm font-medium text-slate-700 hover:text-orange-500 transition-colors px-4 py-2 border-b">
                Sell/Rent
              </a>
              <a href="#" className="text-sm font-medium text-slate-700 hover:text-orange-500 transition-colors px-4 py-2 border-b">
                Insights
              </a>
              <div className="px-4 pt-3">
                <Link to="/post-property" className="block">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Post property FREE
                  </Button>
                </Link>
              </div>
              {/* Mobile Contact */}
              <div className="px-4 pt-2 text-sm text-slate-600 border-t">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="h-4 w-4" />
                  <span>1800 41 99099</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>services@99acres.com</span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;