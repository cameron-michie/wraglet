'use client';

import { PostInterface } from '@/app/interfaces';
import * as Ably from 'ably';
import { AblyProvider } from 'ably/react';
import dynamic from 'next/dynamic';

const FeedBody = dynamic(() => import('..'), {
  ssr: false
});

const client = new Ably.Realtime.Promise({
  authUrl: '/api/token',
  authMethod: 'POST'
});

type Props = {
  initialPosts: PostInterface[];
};

const FeedAblyProvider = ({ initialPosts }: Props) => {
  return (
    <AblyProvider client={client}>
      <FeedBody initialPosts={initialPosts} />
    </AblyProvider>
  );
};

export default FeedAblyProvider;