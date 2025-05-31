'use client';
import { useRouter } from 'next/navigation';

const PlayButton = ({ label }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push('pages/8thwall');
  };

  return (
    <button
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        color: '#e4002b',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      }}
    >
      {label}
    </button>
  );
};

export default PlayButton;