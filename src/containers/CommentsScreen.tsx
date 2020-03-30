import React, {useState, useEffect} from 'react';

import {View, ActivityIndicator} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import CommentList from '../components/molecules/CommentList';
import CommentsService from '../services/comments';

export default function CommentsScreen({
  route,
  navigation,
}: {
  navigation: NavigationProp<any>;
  route: any;
}) {
  const {postId} = route.params;

  const [comments, setComments] = useState([]);
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    setBusy(true);
    CommentsService.fetchComments(postId).then(({data}) => {
      data && setComments(data);
      setBusy(false);
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <ActivityIndicator animating={busy} />
      <CommentList comments={comments} />
    </View>
  );
}
