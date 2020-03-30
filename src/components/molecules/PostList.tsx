import React from 'react';
import {FlatList, TouchableHighlight} from 'react-native';
import {Post} from '../../domain/posts/types';
import PostListItem from '../atoms/PostListItem';

export default function PostList({
  posts,
  onItemPress,
}: {
  posts: Post[];
  onItemPress: (item: any) => any;
}) {
  const Item = ({item}) => {
    return (
      <TouchableHighlight onPress={() => onItemPress(item)}>
        <PostListItem post={item} />
      </TouchableHighlight>
    );
  };
  return (
    <FlatList
      data={posts}
      renderItem={Item}
      keyExtractor={(item: Post) => item.id}
    />
  );
}
