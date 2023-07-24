/**
 * @format
 */

import 'react-native';
import React from 'react';
import MovieList from '../src/screens/movieList';
import store from '../src/redux/store';
import {Provider} from 'react-redux';

// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(
    <Provider store={store}>
      <MovieList />
    </Provider>,
  );
});
