import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  User, 
  TrendingUp,
  Building,
  ArrowRight
} from "lucide-react";

const UserDashboard = () => {
  return (
    <div className="space-y-4">
      {/* Guest User Card */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-12 w-12 bg-muted rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-muted-foreground" />
            </div>
            <div>
              <h3 className="font-medium">Guest User</h3>
              <p className="text-sm text-muted-foreground">Your Recent Activity</p>
            </div>
          </div>
          
          <div className="space-y-3 mb-4">
            <p className="text-sm text-muted-foreground">
              No activity yet! Start browsing properties and projects and track them from here.
            </p>
          </div>

          <Button variant="secondary" size="lg" className="w-full mb-2">
            LOGIN / REGISTER
          </Button>
          <p className="text-xs text-center text-muted-foreground">
            to access all the features on 99acres
          </p>
        </CardContent>
      </Card>

      {/* Investment Card */}
      <Card className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="h-12 w-12 bg-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <TrendingUp className="h-6 w-6 text-black" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold mb-1">InvestAcres</h3>
              <p className="text-sm text-slate-300 mb-1">
                Want to invest in real estate but confused? Let our experts guide you
              </p>
              <p className="text-xs text-slate-400 mb-3">
                *Conditions Apply
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-black text-xs"
              >
                Visit Now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Cities Section */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-3">View top cities</h3>
          <div className="space-y-2">
            {[
              "Mumbai (2,547 properties)",
              "Delhi (1,892 properties)", 
              "Bangalore (1,653 properties)",
              "Hyderabad (1,234 properties)",
              "Pune (1,156 properties)",
              "Chennai (987 properties)",
              "Kolkata (834 properties)",
              "Ahmedabad (756 properties)",
              "Gurgaon (1,445 properties)",
              "Noida (1,287 properties)",
              "Faridabad (654 properties)",
              "Ghaziabad (578 properties)",
              "Thane (892 properties)",
              "Navi Mumbai (743 properties)",
              "Indore (456 properties)",
              "Bhopal (378 properties)",
              "Jaipur (567 properties)",
              "Lucknow (345 properties)",
              "Kanpur (234 properties)",
              "Nagpur (298 properties)"
            ].map((city, index) => (
              <div key={index} className="flex items-center justify-between py-1">
                <span className="text-sm text-foreground hover:text-primary cursor-pointer">
                  {city}
                </span>
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* For Buyers Section */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-medium mb-3 flex items-center gap-2">
            <Building className="h-4 w-4" />
            BUY A HOME
          </h3>
          <div className="space-y-3">
            <div className="text-sm font-medium text-foreground mb-2">PROPERTIES IN CHENNAI SOUTH</div>
            {[
              "Flats in Chennai South (1,234 properties)",
              "Builder Floors in Chennai South (456 properties)",
              "Independent House in Chennai South (789 properties)",
              "Plots in Chennai South (345 properties)",
              "Serviced Apartments in Chennai South (123 properties)",
              "Studio Apartments/1 RK Flats (234 properties)",
              "Farm Houses in Chennai South (67 properties)"
            ].map((item, index) => (
              <div key={index} className="text-xs text-muted-foreground hover:text-primary cursor-pointer pl-2">
                {item}
              </div>
            ))}
            
            <div className="mt-4 pt-3 border-t">
              <div className="text-sm font-medium text-foreground mb-2">POPULAR SEARCHES</div>
              {[
                "Property in Chennai South (2,547 properties)",
                "Verified Property in Chennai South (1,892 properties)",
                "New Projects in Chennai South (567 properties)"
              ].map((item, index) => (
                <div key={index} className="text-xs text-muted-foreground hover:text-primary cursor-pointer pl-2 mb-1">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Insights Section */}
      <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20">
        <CardContent className="p-4">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="h-5 w-5 text-blue-600" />
            <h3 className="font-medium text-blue-900 dark:text-blue-100">INTRODUCING Insights</h3>
            <span className="bg-orange-500 text-white text-xs px-2 py-0.5 rounded-full">NEW</span>
          </div>
          <div className="space-y-2">
            {[
              "Understand localities",
              "Read Resident Reviews", 
              "Check Price Trends",
              "Tools, Utilities & more"
            ].map((feature, index) => (
              <div key={index} className="text-sm text-blue-700 dark:text-blue-200 hover:text-blue-900 cursor-pointer">
                • {feature}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Section */}
      <Card className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20">
        <CardContent className="p-4">
          <h3 className="font-medium mb-2 text-green-900 dark:text-green-100">Contact Us</h3>
          <div className="space-y-1 text-sm text-green-700 dark:text-green-200">
            <div>Email: services@99acres.com</div>
            <div>Call: 1800 41 99099 (IND Toll-Free)</div>
            <div className="text-xs">(9AM-11PM IST)</div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;