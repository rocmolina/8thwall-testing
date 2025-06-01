'use client';
import { useRouter } from 'next/navigation';

const MenuButton = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/'); // Navigate to the home page or menu page
  };

  return (
    <button
      onClick={handleClick}
      style={{
        position: 'fixed',
        bottom: '20px', /* space from bottom */
        transform: 'translateX(-50%)',
        zindex: '1000',
        left: '50%',
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
      Back to Menu
    </button>
  );
};

export default MenuButton;