import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import PostsScreen from './PostsScreen';
import CommentsScreen from './CommentsScreen';

const Stack = createStackNavigator();

export default function NavigatorApp() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Posts"
          component={PostsScreen}
          options={{title: 'Posts'}}
        />
        <Stack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{title: 'Comments'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
