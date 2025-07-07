import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Home, 
  Building, 
  MapPin, 
  User, 
  Menu, 
  Search,
  Bell,
  Heart
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
              <Home className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">EstateHub</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Buy
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Rent
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              New Launch
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              PG / Co-living
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Commercial
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Projects
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* For Buyers/Owners Links */}
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                For Buyers
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                For Tenants
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                For Owners
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="hero" size="sm" className="hidden sm:inline-flex">
                Post Property
              </Button>
              
              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem>Login / Register</DropdownMenuItem>
                  <DropdownMenuItem>My Properties</DropdownMenuItem>
                  <DropdownMenuItem>Saved Properties</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu Button */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                Buy
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                Rent
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                New Launch
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                PG / Co-living
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                Commercial
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                Projects
              </a>
              <div className="pt-3 border-t">
                <Button variant="hero" size="sm" className="w-full">
                  Post Property
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;