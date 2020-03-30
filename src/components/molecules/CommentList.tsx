import React from 'react';
import {FlatList} from 'react-native';
import {Comment} from '../../domain/comments/types';

export default function CommentList({comments}: {comments: Comment[]}) {
  return <FlatList />;
}
