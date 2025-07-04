// components/constants/menuItems.ts
import { Home, Settings, Dashboard, Person, Lock } from "@mui/icons-material";
import { ReactNode } from "react";

export type MenuItemType = {
    label: string;
    icon: ReactNode;
    route: string;
};

export type RoleBasedMenu = {
    [role: number]: MenuItemType[];
};

export const menuItems: RoleBasedMenu = {
    1: [
        { label: "Dashboard", icon: <Dashboard />, route: "/pages/dashboard" },
        { label: "Settings", icon: <Settings />, route: "/settings" },
    ],
    2: [
        { label: "Dashboard", icon: <Home />, route: "/pages/Dashboard" },
        { label: "Profile", icon: <Person />, route: "/profile" },
    ],
    3: [
        { label: "Dashboard", icon: <Home />, route: "/pages/Dashboard" },
        { label: "Security", icon: <Lock />, route: "/security" },
        { label: "Settings", icon: <Settings />, route: "/settings" },
    ],
};
