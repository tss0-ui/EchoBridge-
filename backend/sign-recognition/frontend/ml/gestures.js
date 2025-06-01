import * as fp from 'fingerpose';

const createGesture = (name, fingerConfig) => {
  const gesture = new fp.GestureDescription(name);
  for (const [finger, { curl, direction }] of Object.entries(fingerConfig)) {
    gesture.addCurl(fp.Finger[finger], fp.FingerCurl[curl], 1.0);
    gesture.addDirection(fp.Finger[finger], fp.FingerDirection[direction], 0.75);
  }
  return gesture;
};

// Helper function for frequent shapes
const allFingers = (curl, direction) =>
  ['Thumb', 'Index', 'Middle', 'Ring', 'Pinky'].reduce((acc, finger) => {
    acc[finger] = { curl, direction };
    return acc;
  }, {});

export const GESTURE_MAP = {
  // Basic gestures
  thumbs_up: createGesture('thumbs_up', { Thumb: { curl: 'NoCurl', direction: 'VerticalUp' } }),
  peace: createGesture('peace', {
    Index: { curl: 'NoCurl', direction: 'VerticalUp' },
    Middle: { curl: 'NoCurl', direction: 'VerticalUp' },
  }),
  fist: createGesture('fist', allFingers('FullCurl', 'VerticalDown')),

  // Alphabet (A–Z)
  A: createGesture('A', {
    ...allFingers('FullCurl', 'VerticalDown'),
    Thumb: { curl: 'HalfCurl', direction: 'HorizontalLeft' }
  }),
  B: createGesture('B', {
    Index: { curl: 'NoCurl', direction: 'VerticalUp' },
    Middle: { curl: 'NoCurl', direction: 'VerticalUp' },
    Ring: { curl: 'NoCurl', direction: 'VerticalUp' },
    Pinky: { curl: 'NoCurl', direction: 'VerticalUp' },
    Thumb: { curl: 'FullCurl', direction: 'HorizontalLeft' }
  }),
  C: createGesture('C', {
    Index: { curl: 'HalfCurl', direction: 'DiagonalUpLeft' },
    Middle: { curl: 'HalfCurl', direction: 'VerticalUp' },
    Ring: { curl: 'HalfCurl', direction: 'VerticalUp' },
    Pinky: { curl: 'HalfCurl', direction: 'VerticalUp' },
    Thumb: { curl: 'HalfCurl', direction: 'HorizontalRight' }
  }),
  D: createGesture('D', {
    Index: { curl: 'NoCurl', direction: 'VerticalUp' },
    ...['Middle', 'Ring', 'Pinky'].reduce((acc, finger) => {
      acc[finger] = { curl: 'FullCurl', direction: 'VerticalDown' };
      return acc;
    }, {}),
    Thumb: { curl: 'HalfCurl', direction: 'HorizontalRight' }
  }),
  E: createGesture('E', {
    ...allFingers('FullCurl', 'VerticalDown'),
    Thumb: { curl: 'FullCurl', direction: 'HorizontalLeft' }
  }),
  F: createGesture('F', {
    Index: { curl: 'NoCurl', direction: 'DiagonalUpLeft' },
    Thumb: { curl: 'NoCurl', direction: 'HorizontalRight' },
    Middle: { curl: 'NoCurl', direction: 'VerticalUp' },
    Ring: { curl: 'NoCurl', direction: 'VerticalUp' },
    Pinky: { curl: 'NoCurl', direction: 'VerticalUp' },
  }),
  G: createGesture('G', {
    Index: { curl: 'NoCurl', direction: 'HorizontalLeft' },
    Thumb: { curl: 'NoCurl', direction: 'HorizontalRight' },
  }),
  H: createGesture('H', {
    Index: { curl: 'NoCurl', direction: 'HorizontalLeft' },
    Middle: { curl: 'NoCurl', direction: 'HorizontalLeft' },
    Thumb: { curl: 'FullCurl', direction: 'DiagonalDownLeft' }
  }),
  I: createGesture('I', {
    Pinky: { curl: 'NoCurl', direction: 'VerticalUp' },
    ...['Thumb', 'Index', 'Middle', 'Ring'].reduce((acc, finger) => {
      acc[finger] = { curl: 'FullCurl', direction: 'VerticalDown' };
      return acc;
    }, {}),
  }),
  J: createGesture('J', {
    Pinky: { curl: 'NoCurl', direction: 'DiagonalDownLeft' },
  }),
  K: createGesture('K', {
    Index: { curl: 'NoCurl', direction: 'VerticalUp' },
    Middle: { curl: 'NoCurl', direction: 'DiagonalUpRight' },
    Thumb: { curl: 'NoCurl', direction: 'HorizontalLeft' }
  }),
  L: createGesture('L', {
    Index: { curl: 'NoCurl', direction: 'VerticalUp' },
    Thumb: { curl: 'NoCurl', direction: 'HorizontalRight' }
  }),
  M: createGesture('M', {
    Thumb: { curl: 'FullCurl', direction: 'HorizontalLeft' },
    Index: { curl: 'FullCurl', direction: 'VerticalDown' },
    Middle: { curl: 'FullCurl', direction: 'VerticalDown' },
    Ring: { curl: 'FullCurl', direction: 'VerticalDown' }
  }),
  N: createGesture('N', {
    Thumb: { curl: 'FullCurl', direction: 'HorizontalLeft' },
    Index: { curl: 'FullCurl', direction: 'VerticalDown' },
    Middle: { curl: 'FullCurl', direction: 'VerticalDown' },
  }),
  O: createGesture('O', allFingers('HalfCurl', 'DiagonalUpLeft')),
  P: createGesture('P', {
    Index: { curl: 'NoCurl', direction: 'DiagonalDownLeft' },
    Middle: { curl: 'NoCurl', direction: 'DiagonalDownLeft' },
    Thumb: { curl: 'NoCurl', direction: 'HorizontalRight' }
  }),
  Q: createGesture('Q', {
    Index: { curl: 'NoCurl', direction: 'DiagonalDownLeft' },
    Thumb: { curl: 'NoCurl', direction: 'DiagonalDownRight' }
  }),
  R: createGesture('R', {
    Index: { curl: 'NoCurl', direction: 'VerticalUp' },
    Middle: { curl: 'NoCurl', direction: 'VerticalUp' },
    Thumb: { curl: 'FullCurl', direction: 'HorizontalLeft' }
  }),
  S: createGesture('S', allFingers('FullCurl', 'VerticalDown')),
  T: createGesture('T', {
    Thumb: { curl: 'FullCurl', direction: 'HorizontalLeft' },
    Index: { curl: 'FullCurl', direction: 'VerticalDown' },
  }),
  U: createGesture('U', {
    Index: { curl: 'NoCurl', direction: 'VerticalUp' },
    Middle: { curl: 'NoCurl', direction: 'VerticalUp' },
  }),
  V: createGesture('V', {
    Index: { curl: 'NoCurl', direction: 'VerticalUp' },
    Middle: { curl: 'NoCurl', direction: 'VerticalUp' }
  }),
  W: createGesture('W', {
    Index: { curl: 'NoCurl', direction: 'VerticalUp' },
    Middle: { curl: 'NoCurl', direction: 'VerticalUp' },
    Ring: { curl: 'NoCurl', direction: 'VerticalUp' },
  }),
  X: createGesture('X', {
    Index: { curl: 'HalfCurl', direction: 'DiagonalUpLeft' },
  }),
  Y: createGesture('Y', {
    Thumb: { curl: 'NoCurl', direction: 'HorizontalRight' },
    Pinky: { curl: 'NoCurl', direction: 'VerticalUp' }
  }),
  Z: createGesture('Z', {
    Index: { curl: 'NoCurl', direction: 'DiagonalUpLeft' }
  }),

  // Numbers (0–9)
  0: createGesture('0', allFingers('HalfCurl', 'DiagonalUpLeft')),
  1: createGesture('1', {
    Index: { curl: 'NoCurl', direction: 'VerticalUp' }
  }),
  2: createGesture('2', {
    Index: { curl: 'NoCurl', direction: 'VerticalUp' },
    Middle: { curl: 'NoCurl', direction: 'VerticalUp' }
  }),
  3: createGesture('3', {
    Thumb: { curl: 'NoCurl', direction: 'HorizontalRight' },
    Index: { curl: 'NoCurl', direction: 'VerticalUp' },
    Middle: { curl: 'NoCurl', direction: 'VerticalUp' }
  }),
  4: createGesture('4', {
    Index: { curl: 'NoCurl', direction: 'VerticalUp' },
    Middle: { curl: 'NoCurl', direction: 'VerticalUp' },
    Ring: { curl: 'NoCurl', direction: 'VerticalUp' },
    Pinky: { curl: 'NoCurl', direction: 'VerticalUp' }
  }),
  5: createGesture('5', allFingers('NoCurl', 'VerticalUp')),
  6: createGesture('6', {
    Thumb: { curl: 'NoCurl', direction: 'HorizontalRight' },
    Pinky: { curl: 'NoCurl', direction: 'VerticalUp' }
  }),
  7: createGesture('7', {
    Thumb: { curl: 'NoCurl', direction: 'HorizontalRight' },
    Ring: { curl: 'NoCurl', direction: 'VerticalUp' }
  }),
  8: createGesture('8', {
    Thumb: { curl: 'NoCurl', direction: 'HorizontalRight' },
    Middle: { curl: 'NoCurl', direction: 'VerticalUp' }
  }),
  9: createGesture('9', {
    Thumb: { curl: 'NoCurl', direction: 'HorizontalRight' },
    Index: { curl: 'HalfCurl', direction: 'DiagonalUpLeft' }
  })
};
