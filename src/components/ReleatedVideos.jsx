import React from 'react';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { useQuery } from '@tanstack/react-query';

export default function ReleatedVideos({ id }) {
  const { youtube } = useYoutubeApi();
  const {
    data: related,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['related', id],
    queryFn: async () => youtube.related(id),
  });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong 😬</p>}
      {related && (
        <ul>
          {related.map((item) => (
            <li key={item.id}>{item.id}</li>
          ))}
        </ul>
      )}
    </>
  );
}
