import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: channel } = useQuery({
    queryKey: ['channel', id],
    queryFn: async () => youtube.channel(id),
  });
  return (
    <div className='flex'>
      {channel && (
        <img src={channel.snippet.thumbnails.default.url} alt={name} />
      )}
      <p>{name}</p>
    </div>
  );
}
