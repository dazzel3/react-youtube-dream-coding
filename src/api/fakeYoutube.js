import axios from 'axios';

export default class FakeYoutube {
  async search(keyword) {
    return keyword ? this.#searchByKeyword() : this.#hotTrend();
  }

  async #searchByKeyword() {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })));
  }

  async #hotTrend() {
    return axios.get(`/videos/popular.json`).then((res) => res.data.items);
  }
}
