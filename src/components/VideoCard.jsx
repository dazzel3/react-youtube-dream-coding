import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`);
  };

  return (
    <li className='flex flex-col gap-1' onClick={handleClick}>
      <img
        className='w-full rounded-lg'
        src={thumbnails.high.url}
        alt={title}
      />
      <p className='font-bold text-gray-800 text-sm/5 line-clamp-2 my-1'>
        {title}
      </p>
      <p className='font-medium text-gray-500 text-xs flex flex-col gap-0.5'>
        {channelTitle}
        <span>{formatAgo(publishedAt, 'ko')}</span>
      </p>
    </li>
  );
}
