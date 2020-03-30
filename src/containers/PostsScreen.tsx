import React from 'react';

import {Post} from '../domain/posts/types';
import PostsList from '../components/molecules/PostList';

export default function PostsScreen({posts}: {posts: Post[]}) {
  return <PostsList posts={[]} />;
}
