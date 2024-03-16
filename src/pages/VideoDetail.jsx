import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function VideoDetail() {
  const { videoId } = useParams();
  const { youtube } = useYoutubeApi();

  const {
    data: detail,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['watch', videoId],
    queryFn: async () => youtube.detail(videoId),
  });

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😬</p>}
      {detail && <div>{detail.id}</div>}
    </>
  );
}
