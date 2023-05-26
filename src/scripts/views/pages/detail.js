import TheMovieDbSource from '../../data/themoviedb-source';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
        <h1>Detail Page</h1>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    console.log(movie);
  },
};

export default Detail;
