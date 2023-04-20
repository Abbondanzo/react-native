import * as React from 'react';
import { Text } from 'react-native';

export function Timer() {
  const [currentTime, setCurrentTime] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(time => time + 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <Text>Elapsed time {currentTime}s</Text>;
}
