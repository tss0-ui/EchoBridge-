import { useEffect, useState } from 'react';

export const useMediaDevices = () => {
  const [permissions, setPermissions] = useState({ camera: false, mic: false });

  useEffect(() => {
    const checkPermissions = async () => {
      const cam = await navigator.permissions.query({ name: 'camera' });
      const mic = await navigator.permissions.query({ name: 'microphone' });

      setPermissions({
        camera: cam.state === 'granted',
        mic: mic.state === 'granted'
      });
    };

    checkPermissions();
  }, []);

  return permissions;
};
