import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';

export default function Videos() {
  const { keyword } = useParams();
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: async () =>
      fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
        .then((res) => res.json())
        .then((data) => data.items),
  });

  return (
    <>
      <div>Videos {keyword || `🔥`}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😬</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
