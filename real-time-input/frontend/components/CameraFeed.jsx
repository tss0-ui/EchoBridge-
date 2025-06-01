import React, { useRef, useEffect } from 'react';

const CameraFeed = ({ onFrame }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const setupCamera = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
      });
      videoRef.current.srcObject = stream;
      videoRef.current.play();

      const trackFrame = () => {
        if (videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
          onFrame(videoRef.current);
        }
        requestAnimationFrame(trackFrame);
      };
      trackFrame();
    };

    setupCamera();
  }, [onFrame]);

  return <video ref={videoRef} className="rounded-xl w-full shadow-lg" />;
};

export default CameraFeed;
