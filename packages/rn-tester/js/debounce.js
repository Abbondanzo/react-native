export function debounce(interval, operation) {
  let lastArgs;
  let lastResult;
  let timer = null;

  function cancel() {
    clearTimeout(timer);
    timer = null;
  }

  function runner() {
    cancel();
    lastResult = operation(...lastArgs);
  }

  function debounced(...args) {
    lastArgs = args;
    cancel();
    timer = setTimeout(runner, interval);
    return lastResult;
  }

  debounced.cancel = cancel;

  return debounced;
}
