import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from '../utils/constant'
import { addTopMovies } from '../utils/movieSlice'
import { useEffect } from "react";

const useTopratedMovies = () =>{
    const dispatch = useDispatch();
    const topMovies = useSelector((store) => store.movies.addTopMovies);

    const getTopMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
    const json = await data.json();
    // console.log(json)
    dispatch(addTopMovies(json.results))
    }

    useEffect(() =>{
       !topMovies && getTopMovies();
    }, [])
}

export default useTopratedMovies