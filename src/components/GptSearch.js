import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constant'

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
            <img
            src={BG_URL}
            alt="bg"
            />
        </div>
        <GptSearchBar/>
        <GptMovieSuggestion/>
      <form>

      </form>
    </div>
  )
}

export default GptSearch
