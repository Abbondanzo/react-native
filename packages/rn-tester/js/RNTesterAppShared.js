/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

// import {RNTesterEmptyBookmarksState} from './components/RNTesterEmptyBookmarksState';
// import RNTesterModuleContainer from './components/RNTesterModuleContainer';
// import RNTesterModuleList from './components/RNTesterModuleList';
// import RNTesterNavBar, {navBarHeight} from './components/RNTesterNavbar';
// import {RNTesterThemeContext, themes} from './components/RNTesterTheme';
// import RNTTitleBar from './components/RNTTitleBar';
// import RNTesterList from './utils/RNTesterList';
// import {
//   RNTesterNavigationActionsType,
//   RNTesterNavigationReducer,
// } from './utils/RNTesterNavigationReducer';
// import {
//   Screens,
//   getExamplesListWithBookmarksAndRecentlyUsed,
//   initialNavigationState,
// } from './utils/testerStateUtils';
// import * as React from 'react';
// import {BackHandler, StyleSheet, View, useColorScheme} from 'react-native';

// RNTester App currently uses in memory storage for storing navigation state

import * as React from 'react';
import {
  Button,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CrashButton} from './CrashButton';
import {Timer} from './Timer';

const isAndroid = Platform.OS === 'android';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    marginBottom: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default function App() {
  const [showButton, setShowButton] = React.useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {isAndroid
          ? `Click the button below and a crash will occur`
          : 'Switch to Android to reproduce this crash'}
      </Text>
      <Text style={styles.paragraph}>{isAndroid ? <Timer /> : null}</Text>
      {showButton ? (
        <CrashButton onPress={() => setShowButton(false)} />
      ) : (
        <Button
          disabled={!isAndroid}
          title="Reset"
          onPress={() => setShowButton(true)}
        />
      )}
    </View>
  );
}
