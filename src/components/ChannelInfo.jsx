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
    <div className='flex mt-4 items-center'>
      {url && <img className='w-10 h-10 rounded-full' src={url} alt={name} />}
      <p className='text-lg font-semibold ml-2 text-gray-800'>{name}</p>
    </div>
  );
}
