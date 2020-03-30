import React from 'react';
import {FlatList} from 'react-native';
import {Comment} from '../../domain/comments/types';
import CommentListItem from '../atoms/CommentListItem';

export default function CommentList({comments}: {comments: Comment[]}) {
  const Item = ({item}) => {
    return <CommentListItem comment={item} />;
  };
  return (
    <FlatList
      data={comments}
      renderItem={Item}
      keyExtractor={(item: Comment) => item.id}
    />
  );
}
