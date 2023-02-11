jest.retryTimes(5, { logErrorsBeforeRetry: true });

it('always succeeds', () => {
  expect(true).toBe(true);
});

it('always fails', () => {
  expect(true).toBe(false);
});

it('flakes', () => {
  expect(Math.random() > 0.7).toBe(true);
});
