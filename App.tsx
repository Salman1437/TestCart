// App.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NetworkProvider } from './src/network/NetworkProvider';

const App = () => (
  <Provider store={store}>
    <SafeAreaProvider>
      <NetworkProvider>
        <AppNavigator />
      </NetworkProvider>
    </SafeAreaProvider>
  </Provider>
);

export default App;