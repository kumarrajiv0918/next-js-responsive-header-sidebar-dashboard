"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Box,
    Card,
    CardContent,
    TextField,
    Typography,
    Button,
    Alert,
} from "@mui/material";

const LoginPage = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
            setError("No registered user found. Please register first.");
            return;
        }

        const user = JSON.parse(storedUser);
        if (email === user.email && password === user.password) {
            localStorage.setItem("isLoggedIn", "true");
            router.push("/pages/dashboard");
        } else {
            setError("Invalid email or password");
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Card sx={{ width: 400, padding: 3 }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Login
                    </Typography>

                    {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                    )}

                    <form onSubmit={handleLogin}>
                        <TextField
                            label="Email"
                            fullWidth
                            margin="normal"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <TextField
                            label="Password"
                            fullWidth
                            margin="normal"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                            Login
                        </Button>
                    </form>

                    <Button
                        variant="text"
                        fullWidth
                        sx={{ mt: 2 }}
                        onClick={() => router.push("pages/authentication/register")}
                    >
                        Don’t have an account? Register
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
};

export default LoginPage;
