"use client"

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const pathname = usePathname();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const interval = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            clearInterval(interval);
            const newUrl = `https://reports.electisec.tech${pathname}`;
            window.location.href = newUrl;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [pathname]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: 'white', 
      textAlign: 'center' 
    }}>
      <h1 style={{
        color: "black",
        fontSize: '2.5rem'
      }}>yAcademy</h1>
      <p style={{ fontSize: '1.5rem', margin: '10px 0', color: "grey" }}>is now</p>
      <Image src="/electisec-logo.png" alt="Electisec Logo" width={250} height={250} />
      <p  style={{
        color: "grey",
        marginTop: "5rem"
      }}>Redirecting in {countdown}...</p>
    </div>
  );
}

