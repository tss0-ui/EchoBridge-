import React, { useEffect, useRef } from 'react';

const AudioVisualizer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const setupMic = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const source = audioCtx.createMediaStreamSource(stream);
      const analyser = audioCtx.createAnalyser();
      source.connect(analyser);
      analyser.fftSize = 256;

      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const draw = () => {
        requestAnimationFrame(draw);
        analyser.getByteFrequencyData(dataArray);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dataArray.forEach((value, i) => {
          const barHeight = value * 0.6;
          ctx.fillStyle = `rgb(${value + 100},50,150)`;
          ctx.fillRect(i * 3, canvas.height - barHeight, 2, barHeight);
        });
      };
      draw();
    };

    setupMic();
  }, []);

  return <canvas ref={canvasRef} className="w-full h-32" />;
};

export default AudioVisualizer;
