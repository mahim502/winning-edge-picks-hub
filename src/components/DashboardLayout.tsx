
import { useState, ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Home, 
  History, 
  User, 
  LogOut, 
  BookOpen, 
  Menu, 
  X, 
  BarChart, 
  Grid, 
  Trophy
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroupLabel,
  SidebarGroup,
  SidebarGroupContent,
  SidebarFooter
} from "@/components/ui/sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '/dashboard', icon: Home },
    { name: 'History', href: '/history', icon: History },
    { name: 'Betting Info', href: '/betting-info', icon: BookOpen },
    { name: 'Statistics', href: '/statistics', icon: BarChart },
    { name: 'My Plans', href: '/plans', icon: Grid },
    { name: 'My Account', href: '/account', icon: User },
  ];

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Sidebar for desktop */}
        <Sidebar>
          <SidebarHeader className="flex items-center p-4">
            <Link to="/" className="flex items-center space-x-2">
              <Trophy className="h-8 w-8 text-brand-gold" />
              <span className="font-bold text-xl">BetPicks Pro</span>
            </Link>
          </SidebarHeader>
          
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => {
                    const isActive = location.pathname === item.href;
                    
                    return (
                      <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                          isActive={isActive}
                          asChild
                          tooltip={item.name}
                        >
                          <Link to={item.href}>
                            <item.icon className="h-5 w-5" />
                            <span>{item.name}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          
          <SidebarFooter>
            <Button
              variant="outline"
              className="w-full justify-start text-destructive hover:text-destructive"
              onClick={() => {
                // This would typically handle logout functionality
                console.log("Logging out...");
              }}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </SidebarFooter>
        </Sidebar>

        {/* Mobile menu button */}
        <div className="md:hidden absolute top-4 left-4 z-50">
          <SidebarTrigger />
        </div>

        {/* Main content */}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
