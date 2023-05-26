/* eslint-disable quotes */
import TheMovieDbSource from "../../data/themoviedb-source";

const Upcoming = {
  async render() {
    return `
      <h1>UpComing Page</h1>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.upcomingMovies();
    console.log(movies);
  },
};

export default Upcoming;
