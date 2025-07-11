import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, User, Menu, Search, Globe, Home, Users, Building, Store, TrendingUp } from "lucide-react";
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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary">99acres</Link>
            <div className="ml-4 hidden md:flex items-center gap-1 text-sm">
              <span className="text-primary font-medium">Buy in Western Mumbai</span>
              <ChevronDown className="h-4 w-4 text-primary" />
            </div>
          </div>

          {/* Desktop Navigation with Breadcrumb Tooltips */}
          <TooltipProvider>
            <nav className="hidden lg:flex items-center space-x-8 text-sm">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/search?category=buy" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    For Buyers
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-xs">
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Buy Properties</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                    <p className="mt-1">Find your dream home to buy</p>
                  </div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/search?category=rent" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    For Tenants
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-xs">
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Rental Properties</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                    <p className="mt-1">Find rental properties</p>
                  </div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Link to="/post-property" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
                    <Building className="h-4 w-4" />
                    For Owners
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-xs">
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Post Property</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                    <p className="mt-1">List your property for sale/rent</p>
                  </div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" className="text-foreground hover:text-primary transition-colors flex items-center gap-1">
                    <Store className="h-4 w-4" />
                    For Dealers / Builders
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-xs">
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Business Solutions</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                    <p className="mt-1">Professional tools for real estate business</p>
                  </div>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="flex items-center gap-1 cursor-pointer">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-foreground hover:text-primary transition-colors">
                      Insights
                    </span>
                    <span className="bg-secondary text-secondary-foreground text-xs px-1.5 py-0.5 rounded font-medium">
                      NEW
                    </span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <div className="text-xs">
                    <Breadcrumb>
                      <BreadcrumbList>
                        <BreadcrumbItem>
                          <BreadcrumbLink href="/">Home</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                          <BreadcrumbPage>Market Insights</BreadcrumbPage>
                        </BreadcrumbItem>
                      </BreadcrumbList>
                    </Breadcrumb>
                    <p className="mt-1">Price trends, locality analysis & market reports</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </nav>
          </TooltipProvider>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            <Link to="/post-property">
              <Button variant="hero" size="sm" className="hidden sm:inline-flex text-sm px-4">
                Post property
                <span className="bg-success text-success-foreground text-xs px-1.5 py-0.5 rounded ml-2 font-medium">
                  FREE
                </span>
              </Button>
            </Link>
            
            {/* Language/Region */}
            <div className="hidden md:flex items-center gap-1 text-sm text-muted-foreground cursor-pointer hover:text-foreground">
              <Globe className="h-4 w-4" />
              <span>EN</span>
              <ChevronDown className="h-3 w-3" />
            </div>

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
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                For Buyers
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                For Tenants
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                For Owners
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                For Dealers / Builders
              </a>
              <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors px-2 py-1">
                Insights
              </a>
              <div className="pt-3 border-t">
                <Link to="/post-property" className="block">
                  <Button variant="hero" size="sm" className="w-full">
                    Post property FREE
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;