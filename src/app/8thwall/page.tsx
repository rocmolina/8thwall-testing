'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    XRIFrame: {
      registerXRIFrame: (id: string) => void;
    };
  }
}

const IFRAME_ID = 'my-iframe';
const CONTROLS_ID = 'iframeControls';
const LOGO_ID = 'poweredByLogo';
const INNER_FRAME_URL = 'https://bactrivia.8thwall.app/bactrivia/';

const WebARViewer = () => {
  useEffect(() => {
    // Load 8th Wall iframe helper script
    const script = document.createElement('script');
    script.src = 'https://cdn.8thwall.com/web/iframe/iframe.js';
    script.async = true;

    script.onload = () => {
      if (window.XRIFrame) {
        window.XRIFrame.registerXRIFrame(IFRAME_ID);
      }

      const controls = document.getElementById(CONTROLS_ID);
      const poweredByLogo = document.getElementById(LOGO_ID);

      window.addEventListener('message', (event) => {
        if (event.data !== 'acceptedCamera') return;

        if (controls) {
          controls.style.opacity = '0';

          const styleCleanup = setTimeout(() => {
            if (poweredByLogo) poweredByLogo.style.display = 'none';
            controls.style.display = 'block';
          }, 300);

          const uiFadeIn = setTimeout(() => {
            controls.classList.add('fade-in');
          }, 800);

          setTimeout(() => {
            clearTimeout(styleCleanup);
            clearTimeout(uiFadeIn);
          }, 900);
        }
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="relative">
      <div
        id={LOGO_ID}
        className="absolute top-4 left-4 z-10 text-white bg-black bg-opacity-50 px-2 py-1 rounded"
      >
        Powered by 8th Wall
      </div>

      <div
        id={CONTROLS_ID}
        className="absolute bottom-4 right-4 z-10 text-white bg-black bg-opacity-50 px-3 py-2 rounded hidden"
        style={{ display: 'none' }}
      >
        Controles AR
      </div>

      <iframe
        id={IFRAME_ID}
        title="8th Wall AR"
        src={INNER_FRAME_URL} // ✅ src is now set directly
        allow="camera;gyroscope;accelerometer;magnetometer;xr-spatial-tracking;microphone;"
        allowFullScreen
        style={{
          border: 'none',
          width: '100%',
          height: '100vh',
          margin: 0,
          padding: 0,
          display: 'block',
        }}
      />
    </div>
  );
};

export default WebARViewer;