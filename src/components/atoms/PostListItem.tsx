import React from 'react';

import {Post} from '../../domain/posts/types';
import {View, Text} from 'react-native';

export default function PostListItem({post}: {post: Post}) {
  return (
    <View>
      <Text>{post.id}</Text>
      <Text>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  );
}
