/* eslint-disable quotes */
import TheMovieDbSource from "../../data/themoviedb-source";

const NowPlaying = {
  async render() {
    return `
    <h1>Now Playing</h1>
  `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    console.log(movies);
  },
};

export default NowPlaying;
