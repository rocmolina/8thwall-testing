'use client';

import React from 'react';
//import { useRouter } from 'next/navigation'; // For Next.js App Router
import PlayButton from './components/PlayButton';


export default function Home() {
  return (
    <div style={{
      fontSize: '24px',
      color: '#ffffff',
      fontWeight: 'bold',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#e4002b',
      gap: '20px',
    }}>
    <h1>BAC Trivia</h1>
    <PlayButton label="Let's Play!" />
  </div>
  );
}
