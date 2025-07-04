"use client";
import React from "react";
import {
    Box,
    Drawer,
    IconButton,
    Typography,
    useMediaQuery,
    Tooltip,
} from "@mui/material";
import { useRouter } from "next/navigation";
import { menuItems } from "./menuItems";

const drawerWidth = 240;

type Props = {
    isOpen: boolean;
    isMobileOpen: boolean;
    onClose: () => void;
};

export default function Sidebar({ isOpen, isMobileOpen, onClose }: Props) {
    const isMobile = useMediaQuery("(max-width:768px)");
    const router = useRouter();
    const roleId = 1;
    const currentMenuItems = menuItems[roleId];

    const renderMenu = () => (
        <Box sx={{ display: "flex", flexDirection: "column", p: 1, gap: 1 }}>
            {/* ✅ Top Icon / App Logo Section */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: isOpen || isMobile ? "flex-start" : "center",
                    p: 1,
                    mb: 2,
                }}
            >
                {/* 👉 Small logo for collapsed sidebar */}
                {(!isOpen && !isMobile) && (
                    <Box
                        component="img"
                        src="/favicon.png" // ✅ must be in public/
                        alt="App Icon"
                        sx={{ height: 40, width: 40, transition: "all 0.3s" }}
                    />
                )}

                {/* 👉 Full logo for expanded sidebar or mobile view */}
                {(isOpen || isMobile) && (
                    <Box
                        component="img"
                        src="/logo/full-logo.png" // ✅ must be in public/
                        alt="App Logo"
                        sx={{ height: 50, width: "auto", transition: "all 0.3s", }}
                    />
                )}
            </Box>
            {/* ✅ Dynamic Menu Items */}
            {currentMenuItems.map((item: any) => (
                <Tooltip
                    key={item.label}
                    title={!isOpen && !isMobile ? item.label : ""}
                    placement="right"
                    arrow
                >
                    <Box
                        onClick={() => {
                            router.push(item.route);
                            if (isMobile) onClose();
                        }}
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            p: 1,
                            borderRadius: 2,
                            cursor: "pointer",
                            "&:hover": { backgroundColor: "#f5f5f5" },
                            justifyContent: isOpen || isMobile ? "flex-start" : "center",
                        }}
                    >
                        <IconButton size="small">{item.icon}</IconButton>
                        {(isOpen || isMobile) && (
                            <Typography sx={{ ml: 1 }}>{item.label}</Typography>
                        )}
                    </Box>
                </Tooltip>
            ))}
        </Box>
    );

    return isMobile ? (
        <Drawer anchor="left" open={isMobileOpen} onClose={onClose}>
            <Box sx={{ width: drawerWidth }}>{renderMenu()}</Box>
        </Drawer>
    ) : (
        <Drawer
            variant="permanent"
            open={isOpen}
            sx={{
                width: isOpen ? drawerWidth : 64,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: isOpen ? drawerWidth : 64,
                    overflowX: "hidden",
                    transition: "width 0.3s",
                    boxSizing: "border-box",
                },
            }}
        >
            {renderMenu()}
        </Drawer>
    );
}
