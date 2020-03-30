import React from 'react';

import {Post} from '../../domain/posts/types';
import {View, Text} from 'react-native';

export default function PostListItem({post}: {post: Post}) {
  return (
    <View style={{padding: 10, paddingBottom: 0}}>
      <Text style={{color: 'grey', fontSize: 8}}>{post.id}</Text>
      <Text style={{color: 'black'}}>{post.title}</Text>
      <Text style={{color: 'grey', fontSize: 8, marginTop: 4}}>
        {post.body}
      </Text>
    </View>
  );
}
