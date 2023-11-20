"use client";
import GarageList from "@/components/GarageList";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (!userData) {
      router.push('/profile');
    }
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col">
      <GarageList />
    </main>
  )
}

export default Page