export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#hotTrend();
  }

  async #searchByKeyword(keyword) {
    return this.apiClient
      .search({
        params: {
          part: 'snippet',
          maxResults: 25,
          type: 'video',
          q: keyword,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }

  async #hotTrend() {
    return this.apiClient
      .videos({
        params: {
          part: 'snippet',
          chart: 'mostPopular',
          maxResults: 25,
        },
      })
      .then((res) => res.data.items);
  }

  async detail(id) {
    return this.apiClient
      .detail({
        params: {
          id,
          part: 'snippet,contentDetails',
        },
      })
      .then((res) => res.data.items[0]);
  }

  async channelImgUrl(id) {
    return this.apiClient
      .channel({
        params: {
          id,
          part: 'snippet',
        },
      })
      .then((res) => res.data.items[0].snippet.thumbnails.default.url);
  }

  async relatedVideos(id) {
    return this.apiClient
      .related({
        params: {
          channelId: id,
          part: 'snippet',
          type: 'video',
          maxResults: 25,
        },
      })
      .then((res) =>
        res.data.items.map((item) => ({ ...item, id: item.id.videoId }))
      );
  }
}
