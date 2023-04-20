import * as React from 'react';
import { Button, Platform, View } from 'react-native';
import { setAccessibilityFocus } from './setAccessibilityFocus';

const isAndroid = Platform.OS === 'android';
const timeoutMs = 250;

export function CrashButton({ onPress }) {
  const viewRef = React.useRef();

  const handlePress = () => {
    setAccessibilityFocus(viewRef.current, timeoutMs);
    onPress();
  };

  return (
    <View accessible={true} ref={viewRef}>
      <Button
        disabled={!isAndroid}
        onPress={handlePress}
        title="Trigger Crash"
      />
    </View>
  );
}
