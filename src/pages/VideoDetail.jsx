import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { useYoutubeApi } from '../context/YoutubeApiContext';
import { formatAgo } from '../util/date';
import ChannelInfo from '../components/ChannelInfo';
import ReleatedVideos from '../components/ReleatedVideos';

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
      {detail && (
        <section className='p-4 flex flex-col gap-7 lg:flex-row lg:gap-1'>
          <article>
            <iframe
              id='player'
              type='text/html'
              width='100%'
              height='640'
              className='rounded-xl'
              title={detail.snippet.title}
              src={`http://www.youtube.com/embed/${detail.id}?enablejsapi=1`}
            />
            <div className='py-4'>
              <h2 className='font-bold text-gray-800 text-2xl'>
                {detail.snippet.title}
              </h2>
              <ChannelInfo
                id={detail.snippet.channelId}
                name={detail.snippet.channelTitle}
              />
            </div>
            <div className='bg-gray-100 rounded-xl p-4'>
              <span className='text-base font-medium text-gray-500'>
                {formatAgo(detail.snippet.publishedAt, 'ko')}
              </span>
              <pre className='whitespace-pre-wrap mt-4'>
                {detail.snippet.description}
              </pre>
            </div>
          </article>
          <section>
            <ReleatedVideos id={detail.snippet.channelId} />
          </section>
        </section>
      )}
    </>
  );
}
