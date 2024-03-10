import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import VideoCard from '../components/VideoCard';
import FakeYoutube from '../api/fakeYoutube';

export default function Videos() {
  const { keyword } = useParams();
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['videos', keyword],
    queryFn: async () => {
      const youtube = new FakeYoutube();
      return youtube.search(keyword);
    },
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
