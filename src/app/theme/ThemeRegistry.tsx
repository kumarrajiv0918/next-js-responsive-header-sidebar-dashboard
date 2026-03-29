"use client";
import React, { useState, createContext, useMemo, useContext } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { deepmerge } from "@mui/utils";

const ThemeModeContext = createContext({
    mode: "light",
    toggleMode: () => { },
});

export const useThemeMode = () => useContext(ThemeModeContext);

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<"light" | "dark">("light");

    const toggleMode = () => setMode((prev) => (prev === "light" ? "dark" : "light"));

    const theme = useMemo(() => {
        return createTheme(
            deepmerge(
                {
                    palette: {
                        mode,
                        ...(mode === "light"
                            ? {
                                primary: {
                                    main: "#3f51b5",
                                },
                                background: {
                                    default: "#f4f6f8",
                                    paper: "#fff",
                                },
                            }
                            : {
                                primary: {
                                    main: "#90caf9",
                                },
                                background: {
                                    default: "#121212",
                                    paper: "#1e1e1e",
                                },
                            }),
                    },
                    shape: {
                        borderRadius: 12,
                    },
                    components: {
                        MuiCard: {
                            styleOverrides: {
                                root: {
                                    boxShadow: "0px 3px 12px rgba(0,0,0,0.1)",
                                    transition: "all 0.3s ease-in-out",
                                },
                            },
                        },
                    },
                },
                {}
            )
        );
    }, [mode]);

    return (
        <ThemeModeContext.Provider value={{ mode, toggleMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
}
