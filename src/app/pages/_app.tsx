// pages/_app.tsx
import type { AppProps } from "next/app";
import RootLayout from "../components/layout/rootLayout"; // ✅ adjust this path
import "@/styles/globals.css"; // if you have global styles

export default function MyApp({ Component, pageProps, router }: AppProps & { router: any }) {
    // Optional: list of routes where you don't want layout
    const noLayoutRoutes = ["/login", "/register"];
    const isNoLayout = noLayoutRoutes.includes(router.pathname);

    return isNoLayout ? (
        <Component {...pageProps} />
    ) : (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
}
