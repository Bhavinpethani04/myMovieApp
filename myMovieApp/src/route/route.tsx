// import * as React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import MovieList from '../screens/movieList';
// import MovieDetails from '../screens/movieDetails';

// const Stack = createNativeStackNavigator();

// function Route(): JSX.Element {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="MovieList" component={MovieList} />
//         <Stack.Screen name="MovieDetails" component={MovieDetails} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default Route;

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieList from '../screens/movieList';
import MovieDetails from '../screens/movieDetails';
import {AppStackParamList} from '../route/types';

const Stack = createNativeStackNavigator<AppStackParamList>();

function Route(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MovieList" component={MovieList} />
        <Stack.Screen name="MovieDetails" component={MovieDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
