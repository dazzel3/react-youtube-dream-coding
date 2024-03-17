import React from 'react';
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom';

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/videos/watch/${video.id}`);
  };
  const isList = type === 'list';

  return (
    <li
      className={`flex ${isList ? 'flex-row mb-2 ml-5' : 'flex-col'} gap-1`}
      onClick={handleClick}
    >
      <img
        className={`${isList ? 'w-44 mr-2' : 'w-full'} rounded-lg`}
        src={thumbnails.high.url}
        alt={title}
      />
      <div>
        <p className='font-bold text-gray-800 text-sm/5 line-clamp-2 my-1'>
          {title}
        </p>
        <p className='font-medium text-gray-500 text-xs flex flex-col gap-0.5'>
          {channelTitle}
          <span>{formatAgo(publishedAt, 'ko')}</span>
        </p>
      </div>
    </li>
  );
}
