import axios from 'axios';

export default class FakeYoutubeClient {
  async search({ params }) {
    return params.channelId
      ? axios.get('/videos/related.json')
      : axios.get('/videos/search.json');
  }

  async videos() {
    return axios.get('/videos/popular.json');
  }

  async detail() {
    return axios.get('/videos/detail.json');
  }

  async channel() {
    return axios.get('/videos/channel.json');
  }
}
