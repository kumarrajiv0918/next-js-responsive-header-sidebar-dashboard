"use client";
import { useRouter } from "next/navigation";
import LoginPage from "./pages/authentication/login/page";
export default function HomePage() {
  const router = useRouter();
  return (
    <div>
      <LoginPage />
    </div>
  );
}
