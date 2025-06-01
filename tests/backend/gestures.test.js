import { classifyGesture } from '../../gesture/classifier';

test('classifies simple sign gesture correctly', async () => {
  const dummyTensor = createMockTensor('thumbs_up');
  const result = await classifyGesture(dummyTensor);
  expect(result).toBe('Thumbs Up');
});
