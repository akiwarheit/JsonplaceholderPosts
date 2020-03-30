import React from 'react';

import {Comment} from '../../domain/comments/types';
import {View, Text} from 'react-native';

export default function CommentListItem({comment}: {comment: Comment}) {
  return (
    <View>
      <Text>{comment.body}</Text>
      <Text>{comment.email}</Text>
      <Text>{comment.name}</Text>
    </View>
  );
}
