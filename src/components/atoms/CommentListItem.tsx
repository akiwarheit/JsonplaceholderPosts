import React from 'react';

import {Comment} from '../../domain/comments/types';
import {View, Text} from 'react-native';

export default function CommentListItem({comment}: {comment: Comment}) {
  return (
    <View style={{padding: 10, paddingBottom: 0}}>
      <Text style={{color: 'black', fontSize: 14}}>{comment.body}</Text>
      <Text style={{color: 'grey', fontSize: 8, marginTop: 4}}>
        {comment.email}
      </Text>
      <Text style={{color: 'grey', fontSize: 8}}>{comment.name}</Text>
    </View>
  );
}
