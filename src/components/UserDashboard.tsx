import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Heart, 
  Eye, 
  Building, 
  TrendingUp,
  Bell,
  Calendar,
  MessageSquare,
  Phone,
  Settings,
  LogIn,
  UserPlus
} from "lucide-react";

const UserDashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock user data
  const userData = {
    name: "Guest User",
    recentActivity: [],
    savedProperties: 0,
    viewedProperties: 0,
  };

  if (!isLoggedIn) {
    return (
      <div className="space-y-6">
        {/* Login/Register Card */}
        <Card className="bg-gradient-card border border-primary/20">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="h-16 w-16 bg-gradient-hero rounded-full flex items-center justify-center">
                <User className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
            <CardTitle className="text-xl">Welcome to EstateHub</CardTitle>
            <p className="text-muted-foreground text-sm">
              Sign in to save properties, get personalized recommendations, and track your real estate journey.
            </p>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full"
              onClick={() => setIsLoggedIn(true)}
            >
              <LogIn className="h-4 w-4 mr-2" />
              Login / Register
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              By continuing, you agree to our Terms & Privacy Policy
            </p>
          </CardContent>
        </Card>

        {/* Guest Features */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Start Your Property Journey</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Heart className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-sm">Save Favorites</div>
                  <div className="text-xs text-muted-foreground">
                    Save properties you love and access them anytime
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <Bell className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-sm">Get Alerts</div>
                  <div className="text-xs text-muted-foreground">
                    Receive notifications for new properties matching your criteria
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <TrendingUp className="h-5 w-5 text-primary" />
                <div>
                  <div className="font-medium text-sm">Track Market Trends</div>
                  <div className="text-xs text-muted-foreground">
                    Stay updated with price trends and market insights
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Investment Info */}
        <Card className="bg-gradient-hero text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center">
                <Building className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">Invest in Real Estate</h3>
                <p className="text-sm text-primary-foreground/80 mb-3">
                  Start your investment journey with expert guidance and verified properties.
                </p>
                <Button variant="secondary" size="sm">
                  Learn More
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  // Logged in user dashboard
  return (
    <div className="space-y-6">
      {/* User Profile Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 bg-gradient-hero rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <CardTitle className="text-lg">Welcome back!</CardTitle>
              <p className="text-muted-foreground">{userData.name}</p>
            </div>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4 text-center">
            <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">{userData.savedProperties}</div>
            <div className="text-sm text-muted-foreground">Saved Properties</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <Eye className="h-8 w-8 text-primary mx-auto mb-2" />
            <div className="text-2xl font-bold">{userData.viewedProperties}</div>
            <div className="text-sm text-muted-foreground">Recently Viewed</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8">
            <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              No recent activity yet. Start browsing properties to track your journey here.
            </p>
            <Button variant="outline">Browse Properties</Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <Button variant="outline" className="w-full justify-start">
            <Heart className="h-4 w-4 mr-2" />
            View Saved Properties
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Bell className="h-4 w-4 mr-2" />
            Manage Alerts
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <MessageSquare className="h-4 w-4 mr-2" />
            My Conversations
          </Button>
          <Button variant="hero" className="w-full justify-start">
            <Building className="h-4 w-4 mr-2" />
            Post Your Property
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDashboard;