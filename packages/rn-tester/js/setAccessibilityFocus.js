import { AccessibilityInfo, findNodeHandle } from 'react-native';
import { debounce } from './debounce';

export const setAccessibilityFocus = (node, delayMs = 0) => {
  const debounced = debounce(delayMs, () => {
    console.log('executing');
    if (node) {
      const reactTag = findNodeHandle(node);
      console.log('found react tag', reactTag);
      if (reactTag) {
        AccessibilityInfo.setAccessibilityFocus(reactTag);
      }
    }
  });
  // Invoke the timeout
  debounced();
  // Return callback op so we can cancel it on unmount
  return debounced;
};
