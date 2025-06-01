import * as tf from '@tensorflow/tfjs';
import * as jpeg from 'jpeg-js';

let model;

export async function loadModel() {
  if (!model) {
    model = await tf.loadGraphModel('https://your-model-url/model.json');
  }
}

export async function classifyGesture(base64Image) {
  await loadModel();

  const buffer = Buffer.from(base64Image, 'base64');
  const rawImageData = jpeg.decode(buffer, true);
  const imageTensor = tf.browser.fromPixels(rawImageData);

  const input = tf.image.resizeBilinear(imageTensor, [224, 224])
    .expandDims(0)
    .div(255.0);

  const predictions = await model.predict(input).data();
  const labels = ['Hello', 'Yes', 'No', 'Thank You', 'Help']; // Example labels

  const maxIdx = predictions.indexOf(Math.max(...predictions));
  return labels[maxIdx];
}
