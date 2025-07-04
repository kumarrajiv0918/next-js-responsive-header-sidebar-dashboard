"use client";

import DashboardContent from "@/app/components/dashboard/DashboardContent";
import PieChartPage from "@/app/components/dashboard/pieChart";
import RootLayout from "@/app/components/layout/rootLayout";
import { Grid } from "@mui/material";

export default function DashboardPage() {
    return (
        <RootLayout>
            <Grid sx={{ ml: 2, fontSize: 24, my: 5 }}>
                Dashboard page
            </Grid>
            <DashboardContent />
            <PieChartPage />
        </RootLayout>
    );
}
