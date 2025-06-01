import * as tf from '@tensorflow/tfjs';

export const loadModel = async () => {
  return await tf.loadGraphModel('https://your-host.com/models/sign-gesture-model.json');
};
