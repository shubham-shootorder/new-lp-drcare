"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/psoriasis/');
  }, [router]);
  return (
    <>
      <h1>Hello Next JS</h1>
    </>
  )
}

export default Home