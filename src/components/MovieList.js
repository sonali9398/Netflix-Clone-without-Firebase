import React from 'react'
import MovieCard from './MovieCard'
import './MovieList.css' 

const MovieList = ({title, movies}) => {
    // console.log(movies)
  return (
    <div className='p-6 ' >
        <h1 className='text-3xl font-bold py-4 text-white'>{title}</h1>

        <div className='flex overflow-x-scroll custom-scroll'>
            <div className='flex'>
            {
                Array.isArray(movies) && movies.length > 0
                ? movies.map((movie) => (
                    <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    ))
                : <p>No movies available</p> // Optional: message if there are no movies
            }
            </div>
        </div>
    </div>
  )
}

export default MovieList
