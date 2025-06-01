const labels = ['Hello', 'Thank you', 'Yes', 'No'];

export const getGestureLabel = (predictionTensor) => {
  const prediction = predictionTensor.dataSync();
  const maxIdx = prediction.indexOf(Math.max(...prediction));
  return labels[maxIdx];
};
