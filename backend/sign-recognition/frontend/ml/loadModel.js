import * as handpose from '@tensorflow-models/handpose';
import '@tensorflow/tfjs-backend-webgl';

let model = null;

export const loadHandposeModel = async () => {
  if (!model) {
    await tf.setBackend('webgl');
    model = await handpose.load();
  }
  return model;
};
