"use client";
import UserForm from '@/components/UserForm'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem('userData');
    if (!userData) {
      router.push('/profile');
    }
  }, [router]);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Test
    </main>
  )
}
