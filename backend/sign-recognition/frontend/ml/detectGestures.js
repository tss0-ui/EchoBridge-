import * as fp from 'fingerpose';
import { GESTURE_MAP } from './gestures';
import { loadHandposeModel } from './loadModel';

const gestureEstimator = new fp.GestureEstimator(Object.values(GESTURE_MAP));

export const detectSignGesture = async (video) => {
  const model = await loadHandposeModel();
  const predictions = await model.estimateHands(video);

  if (predictions.length > 0) {
    const gesture = await gestureEstimator.estimate(predictions[0].landmarks, 8.5);
    if (gesture.gestures.length > 0) {
      const confidenceSorted = gesture.gestures.sort((a, b) => b.score - a.score);
      return confidenceSorted[0].name;
    }
  }

  return null;
};
