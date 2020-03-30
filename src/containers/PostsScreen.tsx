import React, {useEffect, useState} from 'react';

import {View, ActivityIndicator} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import PostList from '../components/molecules/PostList';
import PostService from '../services/posts';

export default function PostsScreen({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const [posts, setPosts] = useState([]);
  const [busy, setBusy] = useState(true);

  useEffect(() => {
    setBusy(true);
    PostService.fetchPosts().then(({data}) => {
      data && setPosts(data);
      setBusy(false);
    });
  }, []);

  return (
    <View style={{flex: 1}}>
      <ActivityIndicator animating={busy} />
      <PostList
        posts={posts}
        onItemPress={item => navigation.navigate('Comments', {postId: item.id})}
      />
    </View>
  );
}
