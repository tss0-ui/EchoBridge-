import * as tf from '@tensorflow/tfjs';

export const loadModel = async () => {
  return await tf.loadGraphModel('/models/sign-gesture-model.json');
};
