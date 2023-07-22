/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Route from './src/route/route';
import store from './src/redux/store';
import {Provider} from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <Route />
    </Provider>
  );
}

export default App;
