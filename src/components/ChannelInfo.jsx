import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function ChannelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();
  const { data: url } = useQuery({
    queryKey: ['channel', id],
    queryFn: async () => youtube.channelImgUrl(id),
  });
  return (
    <div className='flex'>
      {url && <img src={url} alt={name} />}
      <p>{name}</p>
    </div>
  );
}
