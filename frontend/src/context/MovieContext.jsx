// Provide global states and helper functions
// Think of it like a state manager for our favorite movies

import {createContext, useState, useContext, useEffect} from 'react'

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

// Provide state to any of the components that are wrapped around it
// 'children' is a reserved property when you write a component and children is anything that's inside of the component
// that you rendered
export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    // local storage allows us to store values directly inside our browser
    useEffect(() => {
        const storedFavs = localStorage.getItem("favorites")

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        // set local storage where (key, value)
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        // update the state by taking the previous value and add the new movie in a list that contains all the previous movies
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        // generate an array where there we filter out the movieId
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie=> movie.id === movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    // the value parameter allows the children to access everything inside the value parameter
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}