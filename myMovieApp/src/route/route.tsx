import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieList from '../screens/movieList';
import MovieDetails from '../screens/movieDetails';
import {AppStackParamList} from './routeTypes';
import {colour} from '../utils/theam';
import {headerTitle} from '../utils/theam';

const Stack = createNativeStackNavigator<AppStackParamList>();
//route function for navigation
function Route(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MovieList"
          component={MovieList}
          options={{
            headerTitle: headerTitle.movieListScreen,
            headerTintColor: colour.primary,
          }}
        />
        <Stack.Screen
          name="MovieDetails"
          component={MovieDetails}
          options={{
            headerTitle: headerTitle.movieDetailScreen,
            headerTintColor: colour.primary,
            headerBackTitle: headerTitle.backButtonTitle,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
