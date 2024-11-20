import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className='bg-black'>
      {/* which include movie list like now playing movies, trending, favourites */}
      {/* each will have movie list */}
      <div className='-mt-60 relative z-20'> 
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
        <MovieList title={"Upcoming Movies"} movies={movies.upcomingMovies}/>
        <MovieList title={"Top Rated"} movies={movies.topMovies}/>
        <MovieList title={"Popular Movies"} movies={movies.popularMovies}/>
        <MovieList title={"All Time Hit Movies"} movies={movies.nowPlayingMovies}/>
      </div>
      

    </div>

  )
}

export default SecondaryContainer
