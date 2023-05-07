"use client";

import { useState, useEffect } from 'react';
import Balancer from "react-wrap-balancer";

export default function Greeting(props: { name: string }) {
  const [showGreeting, setShowGreeting] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setShowGreeting(false);
    }, 3500)
  }, [])

  if (!showGreeting) {
    return null;
  }

  return (
    <main className="flex min-h-screen w-full animate-fade-up-reverse flex-col items-center justify-center">
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h1 className="animate-fade-up bg-gradient-to-br from-black to-red-900 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]">
          <Balancer>Welcome {props.name}</Balancer>
        </h1>
      </div>
    </main>
  );
}