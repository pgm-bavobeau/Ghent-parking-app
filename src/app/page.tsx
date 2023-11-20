"use client";
import GarageList from '@/components/GarageList';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (!userData) {
      router.push('/profile');
    }
  }, [router]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <GarageList />
    </main>
  )
}
