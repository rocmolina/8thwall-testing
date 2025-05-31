import React from 'react';
import PlayButton from '@/components/PlayButton';


export default function About() {
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

    Here goes the question and answer for the trivia game.

    <PlayButton label="Back to AR ▶️" />

    </div>
  )
    
  
  
}