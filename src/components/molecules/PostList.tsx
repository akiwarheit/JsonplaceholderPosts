import React from 'react';
import {FlatList} from 'react-native';
import {Post} from '../../domain/posts/types';

export default function PostList({posts}: {posts: Post[]}) {
  return <FlatList />;
}
