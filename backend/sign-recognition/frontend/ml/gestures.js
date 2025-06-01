import * as fp from 'fingerpose';

const createGesture = (name, fingerConfig) => {
  const gesture = new fp.GestureDescription(name);
  for (const [finger, direction] of Object.entries(fingerConfig)) {
    gesture.addCurl(fp.Finger[finger], fp.FingerCurl.NoCurl, 1.0);
    gesture.addDirection(fp.Finger[finger], fp.FingerDirection[direction], 0.75);
  }
  return gesture;
};

export const GESTURE_MAP = {
  thumbs_up: createGesture('thumbs_up', { Thumb: 'VerticalUp' }),
  peace: createGesture('peace', { Index: 'VerticalUp', Middle: 'VerticalUp' }),
  fist: createGesture('fist', {
    Thumb: 'VerticalDown',
    Index: 'VerticalDown',
    Middle: 'VerticalDown',
    Ring: 'VerticalDown',
    Pinky: 'VerticalDown'
  })
  // Add more gestures here...
};
