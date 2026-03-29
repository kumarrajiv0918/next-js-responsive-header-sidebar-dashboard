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

const RegisterPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        // Save user to localStorage
        if (!formData.email || !formData.password) {
            setError("Email and password are required");
            return;
        }

        localStorage.setItem("user", JSON.stringify(formData));
        router.push("/");
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Card sx={{ width: 400, padding: 3 }}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Register
                    </Typography>

                    {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                    )}

                    <form onSubmit={handleRegister}>
                        <TextField
                            name="name"
                            label="Name"
                            fullWidth
                            margin="normal"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            name="mobile"
                            label="Mobile"
                            fullWidth
                            margin="normal"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            name="email"
                            label="Email"
                            fullWidth
                            margin="normal"
                            type="email"
                            onChange={handleChange}
                            required
                        />
                        <TextField
                            name="password"
                            label="Password"
                            fullWidth
                            margin="normal"
                            type="password"
                            onChange={handleChange}
                            required
                        />
                        <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
                            Register
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </Box>
    );
};

export default RegisterPage;
